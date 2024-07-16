import {
  HTMLAttributes,
  createContext,
  useCallback,
  useState,
  FC,
  useContext,
} from 'react';

import { EdgeButtonInstance } from '@/components/AdminPanel/EdgeButton';

interface AdminPanelSettings {
  title?: string;
  bannerText?: string;
  buttons?: {
    left?: EdgeButtonInstance;
    middle?: EdgeButtonInstance;
    right?: EdgeButtonInstance;
  };
}

interface AdminPanelAPI {
  settings: AdminPanelSettings;

  /**
   * Call this function with `useEffect` to avoid racing conditions, infinite
   * recursion and maximum `setState` calls error.
   * Calling without any argument will **restore the settings to default**.
   */
  updateSettings: (settings?: AdminPanelSettings) => void;
}

const defaults: AdminPanelSettings = {
  title: '',
  bannerText: '',
} as const;

const context = createContext<AdminPanelAPI>({
  settings: defaults,
} as AdminPanelAPI);

export const AdminPanelProvider: FC<HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [settings, setSettings] = useState({} as AdminPanelSettings);

  const updateSettings = useCallback(
    (settings?: AdminPanelSettings): void => {
      if (!settings) {
        setSettings(defaults);
        return;
      }

      const revised: AdminPanelSettings = Object.assign({}, defaults, settings);

      setSettings(revised);
    },
    [setSettings]
  );

  return (
    <context.Provider value={{ settings, updateSettings }}>
      {children}
    </context.Provider>
  );
};

export const useAdminPanel = (): AdminPanelAPI => useContext(context);
