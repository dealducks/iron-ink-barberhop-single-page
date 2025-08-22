'use client';

import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale() as 'en' | 'sk';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLocale: 'en' | 'sk') => {
    window.dispatchEvent(new CustomEvent('locale-change', { detail: newLocale }));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
      <div className="relative z-[100]" ref={dropdownRef}>
        {/* Trigger Button with Arrow */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[65px] h-[36px] px-2 py-1 flex items-center justify-between bg-transparent border border-amber-500/30 rounded-md text-gray-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-0"
        >
          <span>{locale.toUpperCase()}</span>
          <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
              }`}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
            <div className="absolute right-0 mt-1 w-[65px] rounded-md shadow-lg bg-black border border-amber-500/30 overflow-hidden z-[100]">
              <div className="py-1">
                <button
                    onClick={() => switchLanguage('en')}
                    className={`block w-full text-left px-3 py-2 text-sm ${
                        locale === 'en' ? 'text-amber-400' : 'text-white'
                    } hover:bg-zinc-800 hover:text-amber-400`}
                >
                  EN
                </button>
                <button
                    onClick={() => switchLanguage('sk')}
                    className={`block w-full text-left px-3 py-2 text-sm ${
                        locale === 'sk' ? 'text-amber-400' : 'text-white'
                    } hover:bg-zinc-800 hover:text-amber-400`}
                >
                  SK
                </button>
              </div>
            </div>
        )}
      </div>
  );
}
