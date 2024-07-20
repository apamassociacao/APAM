import { openDB, IDBPDatabase } from 'idb';
import {
  createContext,
  FC,
  HTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const { assign } = Object;

export const databaseName = 'PaginatedTableDB';

export interface PaginatedTableState {
  storeName: string;
  db: IDBPDatabase | undefined;
  headers: string[];
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  /** miliseconds */
  updateDelay: number;
  /** timestamp */
  lastUpdate: number;
}

export interface PaginatedTableMehods {
  previousPage: () => void;
  nextPage: () => void;
  toPage: (page: number) => void;
  setResultsPerPage: (amount: number) => void;
}

export type PaginatedTableAPI = PaginatedTableMehods & PaginatedTableState;

interface PaginatedTableProviderProps extends HTMLAttributes<HTMLElement> {
  storeName: string;
  headers: string[];
  /** Delay in miliseconds to wait before updating state */
  updateDelay?: number;
}

function setupStore(db: IDBPDatabase, storeName: string, headers: string[]) {
  const store = db.createObjectStore(storeName, {
    keyPath: '_id',
    autoIncrement: true,
  });
  for (const key of headers) store.createIndex(key, key);
}

const PaginatedTableContext = createContext({} as PaginatedTableAPI);

export const PaginatedTableProvider: FC<PaginatedTableProviderProps> = ({
  children,
  headers,
  updateDelay,
  storeName,
}) => {
  const delay = updateDelay || 30_000;
  const updateRoutineStarted = useRef<boolean>(false);

  const [state, setState] = useState({
    storeName,
    headers: headers || [],
    currentPage: 1,
    totalPages: 1,
    totalResults: 1,
    resultsPerPage: 10,
    updateDelay: delay,
    lastUpdate: Date.now().valueOf(),
  } as PaginatedTableState);

  const createDatabase = async () => {
    const databases = await indexedDB.databases();
    const alreadyExists = databases.some((info) => info.name === databaseName);
    if (!alreadyExists) {
      await openDB(databaseName, 0);
    }
    let database = await openDB(databaseName);
    if (!database.objectStoreNames.contains(storeName)) {
      const version = database.version;
      database = await openDB(databaseName, version + 1, {
        upgrade(db) {
          setupStore(db, storeName, state.headers);
        },
      });
    }
    setState(assign({}, state, { db: database }));
  };

  useEffect(
    () => {
      createDatabase();
    },
    // eslint-disable-next-line
    []
  );

  useMemo(() => {
    (async () => {
      if (!state.db || updateRoutineStarted.current) return;
      updateRoutineStarted.current = true;
      for (;;) {
        const count = await state.db.count(storeName);
        const redacted: Partial<PaginatedTableState> = {
          totalResults: count,
          totalPages: Math.ceil(count / state.resultsPerPage),
          lastUpdate: Date.now().valueOf(),
        };
        setState(assign({}, state, redacted));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    })();
  }, [delay, state, storeName]);

  const toPage = (page: number) => {
    const redacted: Partial<PaginatedTableState> = { currentPage: 1 };
    if (page < 1 || page > state.totalPages) {
      console.error(
        `Page ${page} doesn't exist. Must be 1 <= x <= ${state.totalPages}`
      );
      return;
    } else {
      redacted.currentPage = page;
    }
    setState(assign({}, state, redacted));
  };

  const previousPage = () => {
    if (state.currentPage === 1) {
      console.error(
        'Already on page 1. Cannot go to a page number further back.'
      );
      return;
    }
    setState(assign({}, state, { currentPage: state.currentPage - 1 }));
  };

  const nextPage = () => {
    if (state.currentPage === state.totalPages) {
      console.error(
        `Already on page ${state.totalPages}. Cannot go to a page further ahead.`
      );
      return;
    }
    setState(assign({}, state, { currentPage: state.currentPage + 1 }));
  };

  const setResultsPerPage = (amount: number) => {
    if (amount < 10) {
      console.error('Amount of results per page has to be at least 10');
      return;
    }
    setState(assign({}, state, { resultsPerPage: amount }));
  };

  return (
    <PaginatedTableContext.Provider
      value={{ ...state, toPage, previousPage, nextPage, setResultsPerPage }}
    >
      {children}
    </PaginatedTableContext.Provider>
  );
};

export const usePaginatedTable = () => useContext(PaginatedTableContext);
