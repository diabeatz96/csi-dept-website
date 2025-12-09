'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  Command,
  Users,
  BookOpen,
  GraduationCap,
  Microscope,
  Newspaper,
  User,
  UserCheck,
  Award,
  FileText,
  FlaskConical,
  Star,
  SearchX,
  Briefcase,
  Code2,
  Laptop,
  Building2,
  Info,
  Rocket,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { cn } from '@/lib/utils';
import { useSearch } from './search-context';
import {
  buildSearchIndex,
  fuseOptions,
  categoryConfig,
  type SearchableItem,
  type SearchCategory,
} from './search-index';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Users,
  BookOpen,
  GraduationCap,
  Microscope,
  Newspaper,
  User,
  UserCheck,
  Award,
  FileText,
  FlaskConical,
  Star,
  Briefcase,
  Code2,
  Laptop,
  Building2,
  Info,
  Rocket,
  Search,
};

// Get icon component by name
function getIcon(iconName: string): React.ElementType {
  return iconMap[iconName] || FileText;
}

interface SearchResultItemProps {
  item: SearchableItem;
  isSelected: boolean;
  onClick: () => void;
}

function SearchResultItem({ item, isSelected, onClick }: SearchResultItemProps) {
  const IconComponent = getIcon(item.iconName);

  return (
    <button
      onClick={onClick}
      role="option"
      aria-selected={isSelected}
      className={cn(
        'w-full px-4 py-3 flex items-center gap-3 text-left transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600',
        isSelected
          ? 'bg-blue-50 border-l-2 border-[#8AC2EB]'
          : 'hover:bg-slate-50 border-l-2 border-transparent'
      )}
    >
      <div className={cn(
        'shrink-0 w-9 h-9 rounded-lg flex items-center justify-center',
        isSelected ? 'bg-[#8AC2EB] text-white' : 'bg-slate-100 text-slate-500'
      )}>
        <IconComponent size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn(
          'font-medium truncate',
          isSelected ? 'text-slate-900' : 'text-slate-700'
        )}>
          {item.title}
        </p>
        {item.subtitle && (
          <p className="text-sm text-slate-500 truncate">{item.subtitle}</p>
        )}
      </div>
      <ArrowRight
        size={16}
        className={cn(
          'shrink-0 transition-opacity',
          isSelected ? 'opacity-100 text-[#8AC2EB]' : 'opacity-0'
        )}
      />
    </button>
  );
}

interface CategoryHeaderProps {
  category: SearchCategory;
  count: number;
}

function CategoryHeader({ category, count }: CategoryHeaderProps) {
  const config = categoryConfig[category];
  const IconComponent = getIcon(config.iconName);

  return (
    <div className="sticky top-0 px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
      <IconComponent size={14} className="text-slate-400" />
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {config.label}
      </span>
      <span className="text-xs text-slate-400">({count})</span>
    </div>
  );
}

export function SearchCommand() {
  const { isOpen, openSearch, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // Build and memoize search index
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const fuse = useMemo(() => new Fuse(searchIndex, fuseOptions), [searchIndex]);

  // Perform search
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 25).map(r => r.item);
  }, [fuse, query]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Partial<Record<SearchCategory, SearchableItem[]>> = {};
    const categoryOrder: SearchCategory[] = ['people', 'courses', 'programs', 'research', 'news', 'resources'];

    results.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category]!.push(item);
    });

    // Return in order
    return categoryOrder
      .filter(cat => groups[cat] && groups[cat]!.length > 0)
      .map(cat => ({ category: cat, items: groups[cat]! }));
  }, [results]);

  // Flatten results for keyboard navigation
  const flatResults = useMemo(() => {
    return groupedResults.flatMap(g => g.items);
  }, [groupedResults]);

  // Navigate to result
  const navigateToResult = useCallback((item: SearchableItem) => {
    closeSearch();
    setQuery('');
    setSelectedIndex(0);
    router.push(item.href);
  }, [closeSearch, router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd/Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          openSearch();
        } else {
          closeSearch();
        }
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeSearch();
          setQuery('');
          setSelectedIndex(0);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev =>
            prev < flatResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (flatResults[selectedIndex]) {
            navigateToResult(flatResults[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openSearch, closeSearch, flatResults, selectedIndex, navigateToResult]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && flatResults.length > 0) {
      const selectedElement = resultsRef.current.querySelector('[aria-selected="true"]');
      selectedElement?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex, flatResults.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998]"
            onClick={closeSearch}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            {...animationProps}
            className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-xl mx-4 z-[9999]"
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-200 overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
                <Search size={20} className="text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search courses, faculty, programs..."
                  className="flex-1 text-base text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
                  aria-label="Search"
                  aria-describedby="search-hint"
                />
                <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400" id="search-hint">
                  <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-mono">esc</kbd>
                  <span>to close</span>
                </div>
                <button
                  onClick={closeSearch}
                  className="sm:hidden p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close search"
                >
                  <X size={18} className="text-slate-500" />
                </button>
              </div>

              {/* Results */}
              <div
                ref={resultsRef}
                role="listbox"
                aria-label="Search results"
                className="max-h-[60vh] overflow-y-auto"
              >
                {query.trim() === '' ? (
                  // Empty state - hint
                  <div className="px-4 py-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                      <Search size={24} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-500">
                      Search for courses, faculty, programs, and more
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                      <kbd className="px-2 py-1 bg-slate-100 rounded font-mono">
                        <Command size={12} className="inline" /> K
                      </kbd>
                      <span>to open search anytime</span>
                    </div>
                  </div>
                ) : flatResults.length === 0 ? (
                  // No results
                  <div className="px-4 py-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                      <SearchX size={24} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      No results found for &ldquo;{query}&rdquo;
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try searching for a course code, professor name, or topic
                    </p>
                  </div>
                ) : (
                  // Results grouped by category
                  <>
                    {/* Screen reader announcement */}
                    <div className="sr-only" aria-live="polite" aria-atomic="true">
                      {flatResults.length} results found
                    </div>

                    {groupedResults.map(({ category, items }) => (
                      <div key={category}>
                        <CategoryHeader category={category} count={items.length} />
                        {items.map(item => {
                          const globalIndex = flatResults.indexOf(item);
                          return (
                            <SearchResultItem
                              key={item.id}
                              item={item}
                              isSelected={globalIndex === selectedIndex}
                              onClick={() => navigateToResult(item)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Footer */}
              {flatResults.length > 0 && (
                <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">↑</kbd>
                      <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">↓</kbd>
                      <span>to navigate</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono">↵</kbd>
                      <span>to select</span>
                    </span>
                  </div>
                  <span>{flatResults.length} results</span>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
