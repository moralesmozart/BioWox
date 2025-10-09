'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Building2 } from 'lucide-react';
import { useVersion } from '@/lib/version-context';

export default function VersionSwitcher() {
  const { currentVersion, setVersion } = useVersion();
  const [isOpen, setIsOpen] = useState(false);

  const versions = [
    {
      id: 'v1' as const,
      name: 'Version 1',
      description: 'Current stable version',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 'v2' as const,
      name: 'Version 2',
      description: 'New features & improvements',
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      id: 'v3' as const,
      name: 'Version 3',
      description: 'Occupational health focus',
      icon: Building2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
  ];

  const currentVersionData = versions.find(v => v.id === currentVersion);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white/80 backdrop-blur-sm"
      >
        {currentVersionData && (
          <>
            <currentVersionData.icon className={`w-4 h-4 ${currentVersionData.color}`} />
            <span className="text-sm font-medium text-gray-700">
              {currentVersionData.name}
            </span>
          </>
        )}
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 px-2">
                  Select Version
                </div>
                {versions.map((version) => {
                  const Icon = version.icon;
                  const isSelected = version.id === currentVersion;
                  
                  return (
                    <button
                      key={version.id}
                      onClick={() => {
                        setVersion(version.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all text-left ${
                        isSelected
                          ? `${version.bgColor} ${version.borderColor} border`
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? version.bgColor : 'bg-gray-100'}`}>
                        <Icon className={`w-4 h-4 ${version.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium ${isSelected ? version.color : 'text-gray-900'}`}>
                          {version.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {version.description}
                        </div>
                      </div>
                      {isSelected && (
                        <div className={`w-2 h-2 rounded-full ${version.bgColor.replace('bg-', 'bg-').replace('-50', '-500')}`} />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                <div className="text-xs text-gray-500">
                  Version preference is saved locally
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
