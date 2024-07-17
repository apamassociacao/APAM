import {
  createContext,
  Dispatch,
  FC,
  HTMLAttributes,
  ReducerAction,
  ReducerState,
  useContext,
  useReducer,
} from 'react';

export const FilterOption = { cat: 'cat', dog: 'dog', all: 'all' } as const;

export type Filter = keyof typeof FilterOption;

export type UserFilter = keyof Omit<typeof FilterOption, 'all'>;

type AdocaoFilterReducer = {
  filter: ReducerState<typeof reducer>;
  setFilter: Dispatch<ReducerAction<typeof reducer>>;
};

const context = createContext({} as AdocaoFilterReducer);

const reducer = (current: Filter, action: UserFilter) =>
  current === action ? FilterOption.all : action;

export const AdocaoFilterProvider: FC<HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [filter, setFilter] = useReducer(reducer, FilterOption.all);

  return (
    <context.Provider value={{ filter, setFilter }}>
      {children}
    </context.Provider>
  );
};

export const useAdocaoFilter = () => useContext(context);
