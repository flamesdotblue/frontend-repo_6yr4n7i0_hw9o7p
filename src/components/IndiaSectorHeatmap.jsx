import React, { useEffect, useRef } from 'react';

export default function IndiaSectorHeatmap() {
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
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 520,
      colorTheme: 'light',
      // TradingView Market Map: focus on India and group by sector
      dataSource: 'india',
      grouping: 'sector',
      blockColor: 'change',
      blockSize: 'market_cap',
      locale: 'en',
      legendSettings: { visible: true, position: 'bottom' },
      hasTopBar: true,
      showSymbolLogo: true,
    });

    container.appendChild(widget);
    container.appendChild(script);

    if (containerRef.current) containerRef.current.appendChild(container);
  }, []);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900">India Sector Performance (Heatmap)</h2>
        <p className="text-xs text-gray-500">Live sector performance for Indian markets. Size by market cap, color by daily change.</p>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
