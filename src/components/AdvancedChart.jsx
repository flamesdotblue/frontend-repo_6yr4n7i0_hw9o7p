import React, { useEffect, useRef } from 'react';

function loadTVScript() {
  return new Promise((resolve) => {
    if (window.TradingView) return resolve();
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function AdvancedChart({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let destroyed = false;

    async function render() {
      await loadTVScript();
      if (destroyed) return;

      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        const chartDiv = document.createElement('div');
        chartDiv.id = 'tv-advanced-chart';
        chartDiv.style.height = '560px';
        chartDiv.style.width = '100%';
        containerRef.current.appendChild(chartDiv);

        // eslint-disable-next-line no-new
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol || 'NSE:NIFTY',
          interval: '60',
          timezone: 'Asia/Kolkata',
          theme: 'light',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: ['MASimple@tv-basicstudies'],
          container_id: 'tv-advanced-chart',
          withdateranges: true,
          range: '12M',
        });
      }
    }

    render();

    return () => {
      destroyed = true;
    };
  }, [symbol]);

  return (
    <section className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900">Advanced Chart (India)</h2>
        <p className="text-xs text-gray-500">Interactive chart for NSE/BSE symbols and indices</p>
      </div>
      <div ref={containerRef} className="p-2" />
    </section>
  );
}
