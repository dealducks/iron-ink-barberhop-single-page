'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import enMessages from '../messages/en.json';
import skMessages from '../messages/sk.json';

const messages = {
  en: enMessages,
  sk: skMessages,
};

type Locale = 'en' | 'sk';

// Note: You can't use a Server Component to render this provider,
// as it holds state for the current locale.
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // On mount, check for a saved locale in cookies
    const savedLocale = document.cookie.split('; ').find(row => row.startsWith('NEXT_LOCALE='))?.split('=')[1];
    if (savedLocale === 'sk' || savedLocale === 'en') {
      setLocale(savedLocale);
    }
  }, []);

  // This is a bit of a hack to allow the LanguageSwitcher to change the locale
  // A proper solution would use React Context.
  useEffect(() => {
    const handleLocaleChange = (event: Event) => {
      const customEvent = event as CustomEvent<Locale>;
      setLocale(customEvent.detail);
       // Save preference to cookie
      document.cookie = `NEXT_LOCALE=${customEvent.detail};path=/;max-age=31536000`;
    };

    window.addEventListener('locale-change', handleLocaleChange);
    return () => {
      window.removeEventListener('locale-change', handleLocaleChange);
    };
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </NextIntlClientProvider>
  );
}
