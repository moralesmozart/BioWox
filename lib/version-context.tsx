'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Version = 'v1' | 'v2';

interface VersionContextType {
  currentVersion: Version;
  setVersion: (version: Version) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [currentVersion, setCurrentVersion] = useState<Version>('v1');

  // Load version from localStorage on mount
  useEffect(() => {
    const savedVersion = localStorage.getItem('biowox-version') as Version;
    if (savedVersion && (savedVersion === 'v1' || savedVersion === 'v2')) {
      setCurrentVersion(savedVersion);
    }
  }, []);

  // Save version to localStorage when it changes
  const setVersion = (version: Version) => {
    setCurrentVersion(version);
    localStorage.setItem('biowox-version', version);
  };

  return (
    <VersionContext.Provider value={{ currentVersion, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
}
