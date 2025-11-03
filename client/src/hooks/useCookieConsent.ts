import { useState, useEffect } from 'react';

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored) {
      const data = JSON.parse(stored);
      setHasConsent(true);
      setPreferences(data);
    } else {
      setHasConsent(false);
    }
  }, []);

  const acceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsent(true);
  };

  const acceptNecessary = () => {
    const prefs = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsent(true);
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsent(true);
  };

  return { hasConsent, preferences, acceptAll, acceptNecessary, savePreferences };
}

