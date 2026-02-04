import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type TranslationKeys } from '../i18n/translations';

type Theme = 'light' | 'dark' | 'system';
type FontFamily = 'system' | 'serif' | 'mono' | 'dyslexic';

interface ComfortSettings {
  theme: Theme;
  fontFamily: FontFamily;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AppContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;

  // Comfort Settings
  comfort: ComfortSettings;
  setComfort: (settings: Partial<ComfortSettings>) => void;
  resetComfort: () => void;

  // Panel State
  isPanelOpen: boolean;
  setIsPanelOpen: (open: boolean) => void;

  // Computed theme (resolves 'system' to actual theme)
  resolvedTheme: 'light' | 'dark';
}

const defaultComfort: ComfortSettings = {
  theme: 'dark',
  fontFamily: 'system',
  fontSize: 16,
  lineHeight: 1.6,
  letterSpacing: 0,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('ns-language') as Language) || 'en';
    }
    return 'en';
  });

  const [comfort, setComfortState] = useState<ComfortSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ns-comfort');
      if (saved) {
        try {
          return { ...defaultComfort, ...JSON.parse(saved) };
        } catch {
          return defaultComfort;
        }
      }
    }
    return defaultComfort;
  });

  const [isPanelOpen, setIsPanelOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ns-panel-open') === 'true';
    }
    return false;
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('dark');

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Compute resolved theme
  const resolvedTheme = comfort.theme === 'system' ? systemTheme : comfort.theme;

  // Apply theme and comfort settings to document
  useEffect(() => {
    const root = document.documentElement;

    // Theme
    root.setAttribute('data-theme', resolvedTheme);

    // Font family
    root.setAttribute('data-font', comfort.fontFamily);

    // CSS custom properties
    root.style.setProperty('--user-font-size', `${comfort.fontSize}px`);
    root.style.setProperty('--user-line-height', `${comfort.lineHeight}`);
    root.style.setProperty('--user-letter-spacing', `${comfort.letterSpacing}em`);
  }, [comfort, resolvedTheme]);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('ns-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('ns-comfort', JSON.stringify(comfort));
  }, [comfort]);

  useEffect(() => {
    localStorage.setItem('ns-panel-open', String(isPanelOpen));
  }, [isPanelOpen]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setComfort = (settings: Partial<ComfortSettings>) => {
    setComfortState(prev => ({ ...prev, ...settings }));
  };

  const resetComfort = () => {
    setComfortState(defaultComfort);
  };

  const value: AppContextType = {
    language,
    setLanguage,
    t: translations[language],
    comfort,
    setComfort,
    resetComfort,
    isPanelOpen,
    setIsPanelOpen,
    resolvedTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
