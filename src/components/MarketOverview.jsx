import React, { useEffect, useRef } from 'react';

export default function MarketOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const container = document.createElement('div');
    container.className = 'tradingview-widget-container my-4';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: 520,
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      tabs: [
        {
          title: 'US Indices',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'NASDAQ:NDX', d: 'Nasdaq 100' },
            { s: 'OANDA:US30USD', d: 'Dow 30' },
            { s: 'CME_MINI:ES1!', d: 'S&P Futures' },
            { s: 'NASDAQ:QQQ', d: 'QQQ' },
          ],
        },
        {
          title: 'Sectors',
          symbols: [
            { s: 'AMEX:XLC', d: 'Communication' },
            { s: 'AMEX:XLY', d: 'Consumer Disc.' },
            { s: 'AMEX:XLP', d: 'Consumer Staples' },
            { s: 'AMEX:XLE', d: 'Energy' },
            { s: 'AMEX:XLF', d: 'Financials' },
            { s: 'AMEX:XLV', d: 'Healthcare' },
            { s: 'AMEX:XLI', d: 'Industrials' },
            { s: 'AMEX:XLK', d: 'Technology' },
            { s: 'AMEX:XLU', d: 'Utilities' },
            { s: 'AMEX:XLB', d: 'Materials' },
            { s: 'AMEX:XLRE', d: 'Real Estate' },
          ],
        },
        {
          title: 'India Benchmarks',
          symbols: [
            { s: 'NSE:NIFTY', d: 'NIFTY 50' },
            { s: 'NSE:BANKNIFTY', d: 'Bank NIFTY' },
            { s: 'BSE:SENSEX', d: 'SENSEX' },
          ],
        },
      ],
    });

    container.appendChild(widget);
    container.appendChild(script);

    if (containerRef.current) {
      containerRef.current.appendChild(container);
    }
  }, []);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Market Overview</h2>
          <p className="text-xs text-gray-500">Live performance across indices and sectors</p>
        </div>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
