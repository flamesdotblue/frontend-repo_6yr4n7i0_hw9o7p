import React, { useEffect, useRef } from 'react';

// This component uses the Market Overview widget with curated lists of top constituents
// for each major NSE sector index, so you can quickly see leaders/laggards.
export default function SectorLeaders() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const container = document.createElement('div');
    container.className = 'tradingview-widget-container my-2';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;

    // Curated NSE sector leaders lists (not exhaustive)
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      dateRange: '1M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: 540,
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      tabs: [
        {
          title: 'IT',
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
          title: 'FMCG',
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
          title: 'Pharma',
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
          title: 'Metals',
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
          title: 'Energy',
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
          title: 'Auto',
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
          title: 'Financials',
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
          title: 'Realty',
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
      ],
    });

    container.appendChild(widget);
    container.appendChild(script);

    if (containerRef.current) containerRef.current.appendChild(container);
  }, []);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Sector Leaders & Laggards (NSE)</h2>
          <p className="text-xs text-gray-500">Top Indian stocks within each sector to identify strength and weakness</p>
        </div>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
