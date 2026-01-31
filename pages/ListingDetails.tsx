import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, UserCheck, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';
import { MOCK_LISTINGS, MARKET_PRICES } from '../services/mockData';
import { useLanguage } from '../context/LanguageContext';

export const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = MOCK_LISTINGS.find(l => l.id === id);
  const { t } = useLanguage();

  if (!listing) {
    return <div className="container mx-auto p-4">Listing not found.</div>;
  }

  // Find relevant market price for comparison (rough match)
  const marketPrice = MARKET_PRICES.find(p => p.cropName.includes(listing.cropName));

  const handleContact = () => alert("Contact request sent to seller.");
  const handleQuote = () => alert("Quotation request sent.");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; 
        <Link to="/marketplace" className="hover:underline text-[#0A3D62] ml-1">{t.navMarketplace}</Link> &gt; 
        <span className="text-[#212121] font-medium ml-1">Listing #{listing.id}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Detail Column */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Header Card */}
          <div className="bg-white border border-[#D6D6D6] p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img src={listing.imageUrl} alt={listing.cropName} className="w-full h-auto border border-[#D6D6D6]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h1 className="text-2xl font-bold text-[#0A3D62] mb-2">{listing.cropName}</h1>
                   <span className="bg-[#E8F5E9] text-[#138808] px-2 py-1 text-xs font-bold border border-[#138808] uppercase">{t.verifiedSeller}</span>
                </div>
                <p className="text-lg text-[#555555] mb-4">{listing.variety} Variety</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div className="flex items-center text-[#555555]">
                    <MapPin size={16} className="mr-2 text-[#0A3D62]" />
                    {listing.district}, {listing.state}
                  </div>
                  <div className="flex items-center text-[#555555]">
                    <Calendar size={16} className="mr-2 text-[#0A3D62]" />
                    {t.harvestDate}: {listing.harvestDate}
                  </div>
                </div>

                <div className="bg-[#F2F2F2] p-4 border border-[#D6D6D6]">
                   <div className="text-sm text-[#555555] mb-1">{t.askingPrice}</div>
                   <div className="text-3xl font-bold text-[#212121]">₹ {listing.pricePerQuintal} <span className="text-base font-normal text-[#555555]">/ Qt</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white border border-[#D6D6D6] p-6">
            <h2 className="text-lg font-bold text-[#212121] mb-4 border-b border-[#D6D6D6] pb-2">{t.productDetails}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
               <div>
                  <span className="block text-sm font-semibold text-[#555555]">{t.quantity}</span>
                  <span className="text-[#212121]">{listing.quantityQuintals} Qt</span>
               </div>
               <div>
                  <span className="block text-sm font-semibold text-[#555555]">{t.qualityGrade}</span>
                  <span className="text-[#212121]">Grade A (Self-declared)</span>
               </div>
               <div className="md:col-span-2">
                  <span className="block text-sm font-semibold text-[#555555]">{t.sellerDesc}</span>
                  <p className="text-[#212121] mt-1">{listing.description}</p>
               </div>
            </div>
          </div>

          {/* Government Price Comparison */}
          {marketPrice && (
            <div className="bg-white border border-[#D6D6D6] p-6">
              <h2 className="text-lg font-bold text-[#212121] mb-4 border-b border-[#D6D6D6] pb-2">{t.officialPriceRef}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#F2F2F2] text-[#212121]">
                    <tr>
                      <th className="px-4 py-2 border border-[#D6D6D6]">{t.commodity}</th>
                      <th className="px-4 py-2 border border-[#D6D6D6]">{t.minMsp}</th>
                      <th className="px-4 py-2 border border-[#D6D6D6]">{t.maxMarket}</th>
                      <th className="px-4 py-2 border border-[#D6D6D6]">{t.avgPrice}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-[#D6D6D6] font-medium">{marketPrice.cropName}</td>
                      <td className="px-4 py-2 border border-[#D6D6D6]">₹ {marketPrice.minPrice}</td>
                      <td className="px-4 py-2 border border-[#D6D6D6]">₹ {marketPrice.maxPrice}</td>
                      <td className="px-4 py-2 border border-[#D6D6D6] font-bold">₹ {marketPrice.avgPrice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-[#555555]">
                * {t.sourceApmc}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
           {/* Action Box */}
           <div className="bg-white border-t-4 border-[#0A3D62] p-6 shadow-sm border-x border-b border-[#D6D6D6]">
              <h3 className="text-lg font-bold text-[#212121] mb-4">{t.interested}</h3>
              <div className="space-y-3">
                 <Button onClick={handleContact} className="w-full">{t.contactSeller}</Button>
                 <Button onClick={handleQuote} variant="outline" className="w-full">{t.requestQuote}</Button>
              </div>
              <div className="mt-4 pt-4 border-t border-[#D6D6D6] text-xs text-[#555555] flex gap-2">
                 <ShieldCheck size={32} className="text-[#138808]" />
                 <p>This seller has completed basic KYC verification. Always follow safe trade practices.</p>
              </div>
           </div>

           {/* Seller Profile */}
           <div className="bg-white border border-[#D6D6D6] p-6">
              <h3 className="text-md font-bold text-[#212121] mb-4">{t.sellerInfo}</h3>
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-[#F2F2F2] rounded-full flex items-center justify-center text-[#0A3D62] font-bold">
                    {listing.sellerName.charAt(0)}
                 </div>
                 <div>
                    <div className="font-bold text-[#212121]">{listing.sellerName}</div>
                    <div className="text-xs text-[#555555]">Joined Jan 2023</div>
                 </div>
              </div>
              <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                    <span className="text-[#555555]">{t.totalListings}</span>
                    <span className="font-medium">12</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-[#555555]">{t.totalSold}</span>
                    <span className="font-medium">45</span>
                 </div>
              </div>
           </div>

           {/* Safety Advisory */}
           <div className="bg-[#FFF8E1] border border-[#FF9933] p-4 text-sm">
              <div className="flex items-center gap-2 mb-2 text-[#b35900] font-bold">
                 <AlertTriangle size={16} />
                 <span>{t.safetyWarning}</span>
              </div>
              <p className="text-[#212121]">
                 {t.safetyText}
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};