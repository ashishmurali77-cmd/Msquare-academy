
"use client";

import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Loader2 } from 'lucide-react';

interface StockData {
  symbol: string;
  price: string;
  change: string;
  percentChange: string;
  up: boolean;
}

const SYMBOLS = [
  { id: '^NSEI', name: 'NIFTY 50' },
  { id: '^BSESN', name: 'SENSEX' },
  { id: 'RELIANCE.NS', name: 'RELIANCE' },
  { id: 'TCS.NS', name: 'TCS' },
  { id: 'HDFCBANK.NS', name: 'HDFC BANK' },
  { id: 'INFY.NS', name: 'INFY' },
  { id: 'ICICIBANK.NS', name: 'ICICI BANK' },
  { id: 'SBIN.NS', name: 'SBIN' },
];

export function MarketTicker() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const symbolList = SYMBOLS.map(s => s.id).join(',');
        // Note: Public APIs like Yahoo Finance may have CORS restrictions in client-side fetches.
        // We catch errors silently to fulfill the requirement: "hide the ticker if live data is unavailable".
        const response = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbolList}`);
        
        if (!response.ok) throw new Error('Failed to fetch market data');

        const result = await response.json();
        const quotes = result?.quoteResponse?.result;

        if (!quotes || quotes.length === 0) {
          setIsVisible(false);
          return;
        }

        const formattedData: StockData[] = quotes.map((quote: any) => {
          const configSymbol = SYMBOLS.find(s => s.id === quote.symbol);
          const change = quote.regularMarketChange || 0;
          return {
            symbol: configSymbol?.name || quote.symbol,
            price: quote.regularMarketPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2 }) || '0.00',
            change: (change > 0 ? '+' : '') + change.toFixed(2),
            percentChange: (quote.regularMarketChangePercent || 0).toFixed(2) + '%',
            up: change >= 0,
          };
        });

        setStocks(formattedData);
        setIsVisible(true);
      } catch (error) {
        // Silently hide the ticker if fetch fails (e.g. CORS block or network error)
        // This prevents the error from breaking the UI while adhering to the "hide if unavailable" rule.
        setIsVisible(false);
      } finally {
        setLoading(false);
      }
    }

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible && !loading) return null;

  return (
    <div className="bg-card border-y border-border overflow-hidden whitespace-nowrap h-10 flex items-center">
      {loading ? (
        <div className="flex items-center px-6 gap-2 text-xs text-muted-foreground animate-pulse">
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>Syncing Live NSE Data...</span>
        </div>
      ) : (
        <div className="flex animate-ticker items-center">
          {[...stocks, ...stocks].map((stock, i) => (
            <div key={i} className="inline-flex items-center px-6 gap-3">
              <span className="font-bold text-sm tracking-tight">{stock.symbol}</span>
              <span className="text-sm font-mono font-medium">₹{stock.price}</span>
              <span className={`text-xs flex items-center gap-1 font-bold ${stock.up ? 'text-green-500' : 'text-red-500'}`}>
                {stock.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stock.change} ({stock.percentChange})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
