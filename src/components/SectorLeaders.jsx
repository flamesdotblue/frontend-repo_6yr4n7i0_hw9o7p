import React, { useState } from 'react';

const SECTORS = [
  {
    name: 'IT',
    symbols: [
      { s: 'NSE:TCS', d: 'TCS' },
      { s: 'NSE:INFY', d: 'Infosys' },
      { s: 'NSE:HCLTECH', d: 'HCL Tech' },
      { s: 'NSE:WIPRO', d: 'Wipro' },
      { s: 'NSE:LTIM', d: 'LTIMindtree' },
      { s: 'NSE:PERSISTENT', d: 'Persistent' },
      { s: 'NSE:TECHM', d: 'Tech Mahindra' },
    ],
  },
  {
    name: 'FMCG',
    symbols: [
      { s: 'NSE:ITC', d: 'ITC' },
      { s: 'NSE:HINDUNILVR', d: 'HUL' },
      { s: 'NSE:NESTLEIND', d: 'Nestle' },
      { s: 'NSE:MARICO', d: 'Marico' },
      { s: 'NSE:DABUR', d: 'Dabur' },
      { s: 'NSE:GODREJCP', d: 'Godrej Consumer' },
      { s: 'NSE:TATACONSUM', d: 'Tata Consumer' },
      { s: 'NSE:BRITANNIA', d: 'Britannia' },
    ],
  },
  {
    name: 'Pharma',
    symbols: [
      { s: 'NSE:SUNPHARMA', d: 'Sun Pharma' },
      { s: 'NSE:DRREDDY', d: "Dr. Reddy's" },
      { s: 'NSE:CIPLA', d: 'Cipla' },
      { s: 'NSE:DIVISLAB', d: "Divi's Labs" },
      { s: 'NSE:LUPIN', d: 'Lupin' },
      { s: 'NSE:AUROPHARMA', d: 'Aurobindo' },
      { s: 'NSE:IPCALAB', d: 'IPCA Labs' },
    ],
  },
  {
    name: 'Metals',
    symbols: [
      { s: 'NSE:JSWSTEEL', d: 'JSW Steel' },
      { s: 'NSE:HINDALCO', d: 'Hindalco' },
      { s: 'NSE:TATASTEEL', d: 'Tata Steel' },
      { s: 'NSE:JINDALSTEL', d: 'Jindal Steel' },
      { s: 'NSE:COALINDIA', d: 'Coal India' },
      { s: 'NSE:VEDL', d: 'Vedanta' },
      { s: 'NSE:SAIL', d: 'SAIL' },
    ],
  },
  {
    name: 'Energy',
    symbols: [
      { s: 'NSE:RELIANCE', d: 'Reliance' },
      { s: 'NSE:ONGC', d: 'ONGC' },
      { s: 'NSE:BPCL', d: 'BPCL' },
      { s: 'NSE:IOC', d: 'IOC' },
      { s: 'NSE:GAIL', d: 'GAIL' },
      { s: 'NSE:NTPC', d: 'NTPC' },
      { s: 'NSE:POWERGRID', d: 'Power Grid' },
    ],
  },
  {
    name: 'Auto',
    symbols: [
      { s: 'NSE:TATAMOTORS', d: 'Tata Motors' },
      { s: 'NSE:MARUTI', d: 'Maruti' },
      { s: 'NSE:M_M', d: 'M&M' },
      { s: 'NSE:EICHERMOT', d: 'Eicher Motors' },
      { s: 'NSE:HEROMOTOCO', d: 'Hero MotoCorp' },
      { s: 'NSE:BAJAJ_AUTO', d: 'Bajaj Auto' },
      { s: 'NSE:TVSMOTOR', d: 'TVS Motor' },
      { s: 'NSE:ASHOKLEY', d: 'Ashok Leyland' },
    ],
  },
  {
    name: 'Financials',
    symbols: [
      { s: 'NSE:HDFCBANK', d: 'HDFC Bank' },
      { s: 'NSE:ICICIBANK', d: 'ICICI Bank' },
      { s: 'NSE:AXISBANK', d: 'Axis Bank' },
      { s: 'NSE:KOTAKBANK', d: 'Kotak Bank' },
      { s: 'NSE:SBIN', d: 'SBI' },
      { s: 'NSE:BAJFINANCE', d: 'Bajaj Finance' },
      { s: 'NSE:BAJAJFINSV', d: 'Bajaj Finserv' },
      { s: 'NSE:HDFCLIFE', d: 'HDFC Life' },
      { s: 'NSE:SBILIFE', d: 'SBI Life' },
    ],
  },
  {
    name: 'Realty',
    symbols: [
      { s: 'NSE:DLF', d: 'DLF' },
      { s: 'NSE:LODHA', d: 'Macrotech (Lodha)' },
      { s: 'NSE:GODREJPROP', d: 'Godrej Properties' },
      { s: 'NSE:OBEROIRLTY', d: 'Oberoi Realty' },
      { s: 'NSE:BRIGADE', d: 'Brigade' },
      { s: 'NSE:SOBHA', d: 'Sobha' },
      { s: 'NSE:PRESTIGE', d: 'Prestige' },
    ],
  },
];

export default function SectorLeaders({ onSelect }) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900">Sector Leaders (Click to Open Chart)</h2>
        <p className="text-xs text-gray-500">Pick a sector and tap any stock to load it in the chart above</p>
      </div>

      <div className="px-4 pt-3 flex gap-2 overflow-x-auto">
        {SECTORS.map((s, idx) => (
          <button
            key={s.name}
            onClick={() => setActive(idx)}
            className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
              active === idx ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {SECTORS[active].symbols.map((sym) => (
          <button
            key={sym.s}
            onClick={() => onSelect && onSelect(sym.s)}
            className="group w-full text-left p-3 rounded-md border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            aria-label={`Open ${sym.d} (${sym.s}) in chart`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900 group-hover:text-blue-700 text-sm">{sym.d}</span>
              <span className="text-[11px] text-gray-500">{sym.s.replace('NSE:', '')}</span>
            </div>
            <div className="mt-1 text-[11px] text-gray-500">{sym.s}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
