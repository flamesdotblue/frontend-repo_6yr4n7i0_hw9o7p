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
          title: 'NSE Indices',
          symbols: [
            { s: 'NSE:NIFTY', d: 'NIFTY 50' },
            { s: 'NSE:BANKNIFTY', d: 'BANK NIFTY' },
            { s: 'NSE:FINNIFTY', d: 'FINNIFTY' },
            { s: 'NSE:MIDCPNIFTY', d: 'MIDCAP NIFTY' },
          ],
        },
        {
          title: 'BSE Indices',
          symbols: [
            { s: 'BSE:SENSEX', d: 'SENSEX' },
            { s: 'BSE:BANKEX', d: 'BANKEX' },
            { s: 'BSE:SMEIPO', d: 'BSE SME IPO' },
          ],
        },
        {
          title: 'Sectoral (NSE)',
          symbols: [
            { s: 'NSE:NIFTYIT', d: 'NIFTY IT' },
            { s: 'NSE:NIFTYFMCG', d: 'NIFTY FMCG' },
            { s: 'NSE:NIFTYPHARM', d: 'NIFTY PHARMA' },
            { s: 'NSE:NIFTYMETAL', d: 'NIFTY METAL' },
            { s: 'NSE:NIFTYENERGY', d: 'NIFTY ENERGY' },
            { s: 'NSE:NIFTYREALTY', d: 'NIFTY REALTY' },
            { s: 'NSE:NIFTYAUTO', d: 'NIFTY AUTO' },
            { s: 'NSE:NIFTYFINSER', d: 'NIFTY FIN SERV' },
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
          <h2 className="text-base font-semibold text-gray-900">India Market Overview</h2>
          <p className="text-xs text-gray-500">Live NSE and BSE indices and sectoral performance</p>
        </div>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
