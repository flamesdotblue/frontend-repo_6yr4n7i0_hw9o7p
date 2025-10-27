import React, { useState } from 'react';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import AdvancedChart from './components/AdvancedChart';
import IndiaStockScreener from './components/IndiaStockScreener';
import MutualFundsScreener from './components/MutualFundsScreener';
import Footer from './components/Footer';

export default function App() {
  const [symbol, setSymbol] = useState('NSE:NIFTY');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header onSearch={setSymbol} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 order-1">
            <AdvancedChart symbol={symbol} />
          </div>
          <div className="lg:col-span-2 order-2">
            <MarketOverview />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IndiaStockScreener />
          <MutualFundsScreener />
        </div>
      </main>

      <Footer />
    </div>
  );
}
