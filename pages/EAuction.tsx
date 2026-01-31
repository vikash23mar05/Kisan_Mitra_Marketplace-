import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { Gavel, Clock, TrendingUp } from 'lucide-react';

interface AuctionItem {
    id: string;
    commodity: string;
    variety: string;
    qty: number;
    location: string;
    basePrice: number;
    currentBid: number;
    endTime: number; // timestamp
}

const MOCK_AUCTIONS: AuctionItem[] = [
    { id: 'LOT-101', commodity: 'Soybean', variety: 'Yellow', qty: 100, location: 'Dewas, MP', basePrice: 4200, currentBid: 4350, endTime: Date.now() + 3600000 },
    { id: 'LOT-102', commodity: 'Wheat', variety: 'Lokwan', qty: 500, location: 'Ujjain, MP', basePrice: 2200, currentBid: 2240, endTime: Date.now() + 7200000 },
    { id: 'LOT-103', commodity: 'Chana', variety: 'Desi', qty: 50, location: 'Vidisha, MP', basePrice: 5100, currentBid: 5100, endTime: Date.now() + 1800000 },
];

export const EAuction: React.FC = () => {
  const { t } = useLanguage();
  const [auctions, setAuctions] = useState(MOCK_AUCTIONS);
  const [selectedAuction, setSelectedAuction] = useState<AuctionItem | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');

  const formatTime = (ms: number) => {
      const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(ms / (1000 * 60 * 60));
      return `${hours}h ${minutes}m`;
  };

  const handleBidClick = (auction: AuctionItem) => {
      setSelectedAuction(auction);
      setBidAmount((auction.currentBid + 10).toString());
  };

  const submitBid = () => {
      if (!selectedAuction) return;
      const newAmount = parseInt(bidAmount);
      if (newAmount <= selectedAuction.currentBid) {
          alert("Bid must be higher than current bid");
          return;
      }

      setAuctions(prev => prev.map(a => a.id === selectedAuction.id ? { ...a, currentBid: newAmount } : a));
      alert(t.bidSuccess);
      setSelectedAuction(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; 
        <span className="text-[#212121] font-medium ml-1">{t.navEAuction}</span>
      </div>

      <div className="bg-[#0A3D62] text-white p-6 rounded-t-lg flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2"><Gavel /> {t.liveAuctions}</h1>
            <p className="text-sm text-gray-300 mt-1">{t.liveAuctionsDesc}</p>
          </div>
          <div className="hidden md:block">
             <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded text-xs font-bold animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span> LIVE
             </div>
          </div>
      </div>

      <div className="bg-white border border-[#D6D6D6] border-t-0 rounded-b-lg overflow-hidden">
         <div className="overflow-x-auto">
             <table className="w-full text-left">
                 <thead className="bg-[#F2F2F2] text-[#555555] text-sm">
                     <tr>
                         <th className="px-6 py-4 font-bold">{t.lotId}</th>
                         <th className="px-6 py-4 font-bold">{t.commodity}</th>
                         <th className="px-6 py-4 font-bold">{t.quantity} (Qt)</th>
                         <th className="px-6 py-4 font-bold">{t.basePrice}</th>
                         <th className="px-6 py-4 font-bold text-[#0A3D62]">{t.currentBid}</th>
                         <th className="px-6 py-4 font-bold text-center">{t.timeLeft}</th>
                         <th className="px-6 py-4 font-bold text-right">{t.actions}</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-[#D6D6D6]">
                     {auctions.map(auction => (
                         <tr key={auction.id} className="hover:bg-[#F9F9F9]">
                             <td className="px-6 py-4 font-mono text-sm">{auction.id}</td>
                             <td className="px-6 py-4">
                                 <div className="font-bold text-[#212121]">{auction.commodity}</div>
                                 <div className="text-xs text-[#555555]">{auction.variety} | {auction.location}</div>
                             </td>
                             <td className="px-6 py-4 text-[#212121]">{auction.qty}</td>
                             <td className="px-6 py-4 text-[#555555]">₹ {auction.basePrice}</td>
                             <td className="px-6 py-4 text-xl font-bold text-[#0A3D62]">₹ {auction.currentBid}</td>
                             <td className="px-6 py-4 text-center">
                                 <div className="inline-flex items-center gap-1 bg-[#FFF8E1] text-[#b35900] px-2 py-1 rounded text-xs font-bold border border-[#FF9933]">
                                     <Clock size={12} /> {formatTime(auction.endTime - Date.now())}
                                 </div>
                             </td>
                             <td className="px-6 py-4 text-right">
                                 <Button size="sm" onClick={() => handleBidClick(auction)}>{t.bidNow}</Button>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
      </div>
      
      {/* Bid Modal */}
      {selectedAuction && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
                  <h3 className="text-lg font-bold text-[#0A3D62] mb-4 border-b border-[#D6D6D6] pb-2">{t.placeBid}: {selectedAuction.id}</h3>
                  <div className="mb-4">
                      <p className="text-sm text-[#555555] mb-1">{t.currentBid}: <span className="font-bold text-[#212121]">₹ {selectedAuction.currentBid}</span></p>
                      <p className="text-sm text-[#555555]">{t.commodity}: {selectedAuction.commodity} ({selectedAuction.qty} Qt)</p>
                  </div>
                  
                  <div className="mb-6">
                      <label className="block text-sm font-bold text-[#212121] mb-2">{t.yourBid} (per Qt)</label>
                      <div className="flex items-center">
                          <span className="bg-[#F2F2F2] border border-[#D6D6D6] border-r-0 px-3 py-2 text-[#555555]">₹</span>
                          <input 
                            type="number" 
                            className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                          />
                      </div>
                  </div>

                  <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedAuction(null)}>{t.cancel}</Button>
                      <Button className="flex-1" onClick={submitBid}>{t.confirmBid}</Button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};