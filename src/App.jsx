import React, { useRef, useState } from 'react';
import Header from './components/Header';
import AdvancedChart from './components/AdvancedChart';
import IndiaSectorHeatmap from './components/IndiaSectorHeatmap';
import SectorLeaders from './components/SectorLeaders';
import Footer from './components/Footer';

export default function App() {
  const [symbol, setSymbol] = useState('NSE:NIFTY');
  const chartRef = useRef(null);

  const handleSelect = (sym) => {
    setSymbol(sym);
    // Scroll chart into view when user picks a stock
    setTimeout(() => {
      chartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header onSearch={handleSelect} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div ref={chartRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 order-1">
            <AdvancedChart symbol={symbol} />
          </div>
          <div className="lg:col-span-2 order-2">
            <IndiaSectorHeatmap />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <SectorLeaders onSelect={handleSelect} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
