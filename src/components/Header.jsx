import React, { useState } from 'react';
import { LineChart, BarChart3, Search } from 'lucide-react';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('NASDAQ:AAPL');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim().toUpperCase());
  };

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-900">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center shadow-sm">
            <LineChart className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold leading-tight">Market Fusion</div>
            <div className="text-xs text-gray-500">Trading charts + sector insights</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. NSE:NIFTY, NASDAQ:AAPL, NYSE:TSLA"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <BarChart3 className="h-4 w-4" />
            Load
          </button>
        </form>
      </div>
    </header>
  );
}
