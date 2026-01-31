import React from 'react';
import { Link } from 'react-router-dom';
import { MARKET_PRICES } from '../services/mockData';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MarketPrices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; <span className="text-[#212121] font-medium">{t.navPrices}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0A3D62] mb-2">{t.dailyPrices}</h1>
        <p className="text-[#555555]">
          {t.dailyPricesDesc}
        </p>
      </div>

      <div className="bg-white border border-[#D6D6D6] overflow-hidden">
        <div className="bg-[#F2F2F2] px-6 py-4 border-b border-[#D6D6D6] flex justify-between items-center flex-wrap gap-4">
           <h2 className="font-bold text-[#212121]">{t.priceBulletin}: {new Date().toLocaleDateString()}</h2>
           <div className="flex gap-2">
             <select className="border border-[#D6D6D6] text-sm p-1 rounded-sm">
               <option>All States</option>
               <option>Madhya Pradesh</option>
             </select>
             <button onClick={() => alert(t.loading)} className="bg-[#0A3D62] text-white text-sm px-3 py-1 rounded-sm">Refresh</button>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0A3D62] text-white">
                <th className="px-6 py-3 text-sm font-medium border-r border-[#1B4F72]">{t.commodity}</th>
                <th className="px-6 py-3 text-sm font-medium border-r border-[#1B4F72]">{t.minPrice} (₹/Qt)</th>
                <th className="px-6 py-3 text-sm font-medium border-r border-[#1B4F72]">{t.maxPrice} (₹/Qt)</th>
                <th className="px-6 py-3 text-sm font-medium border-r border-[#1B4F72]">{t.avgPrice} (₹/Qt)</th>
                <th className="px-6 py-3 text-sm font-medium">{t.trend}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6D6]">
              {MARKET_PRICES.map((price, index) => (
                <tr key={price.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9] hover:bg-[#F0F0F0]'}>
                  <td className="px-6 py-4 text-sm font-bold text-[#212121] border-r border-[#D6D6D6]">{price.cropName}</td>
                  <td className="px-6 py-4 text-sm text-[#555555] border-r border-[#D6D6D6]">{price.minPrice}</td>
                  <td className="px-6 py-4 text-sm text-[#555555] border-r border-[#D6D6D6]">{price.maxPrice}</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#212121] border-r border-[#D6D6D6]">{price.avgPrice}</td>
                  <td className="px-6 py-4 text-sm flex items-center gap-2">
                    {price.trend === 'up' && <span className="text-[#138808] flex items-center font-medium"><ArrowUp size={14} className="mr-1"/> {t.rising}</span>}
                    {price.trend === 'down' && <span className="text-red-600 flex items-center font-medium"><ArrowDown size={14} className="mr-1"/> {t.falling}</span>}
                    {price.trend === 'stable' && <span className="text-[#555555] flex items-center font-medium"><Minus size={14} className="mr-1"/> {t.stable}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-[#F2F2F2] border-t border-[#D6D6D6] text-xs text-[#555555] text-right">
           Showing 1-5 of 120 records
        </div>
      </div>

       <div className="mt-8 p-4 bg-[#FFF8E1] border border-[#FF9933] text-sm text-[#212121]">
        <strong>Note:</strong> Prices mentioned are indicative and collected from selected mandis. Actual prices may vary based on quality and location.
      </div>
    </div>
  );
};