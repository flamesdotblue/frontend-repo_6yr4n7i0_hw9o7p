import React, { useEffect, useRef } from 'react';

export default function IndiaStockScreener() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'tradingview-widget-container my-2';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 520,
      defaultColumn: 'overview',
      screener_type: 'stock',
      displayCurrency: 'INR',
      colorTheme: 'light',
      locale: 'en',
      market: 'india',
      showToolbar: true,
      defaultScreen: 'most_capitalized',
    });

    container.appendChild(widget);
    container.appendChild(script);

    if (containerRef.current) containerRef.current.appendChild(container);
  }, []);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">India Stock Screener (NSE & BSE)</h2>
          <p className="text-xs text-gray-500">Filter and sort the full Indian market in real-time</p>
        </div>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
