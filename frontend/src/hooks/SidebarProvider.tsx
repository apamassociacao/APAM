import {
  createContext,
  useContext,
  useState,
  useCallback,
  FC,
  ReactNode,
} from 'react';

export interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarState | undefined>(undefined);

export interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
