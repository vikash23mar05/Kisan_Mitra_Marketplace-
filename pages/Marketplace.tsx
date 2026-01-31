import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { MOCK_LISTINGS } from '../services/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();
  
  // Basic filtering logic
  const filteredListings = MOCK_LISTINGS.filter(listing => 
    listing.cropName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; <span className="text-[#212121] font-medium">{t.navMarketplace}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white border border-[#D6D6D6] p-4">
            <div className="flex items-center gap-2 border-b border-[#D6D6D6] pb-3 mb-4">
              <Filter size={18} className="text-[#0A3D62]" />
              <h2 className="font-bold text-[#212121]">{t.refineSearch}</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">{t.cropType}</label>
                <select className="w-full border border-[#D6D6D6] p-2 text-sm bg-white text-[#212121] rounded-none focus:border-[#0A3D62] focus:outline-none">
                  <option>All Crops</option>
                  <option>Cereals</option>
                  <option>Pulses</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">{t.state}</label>
                <select className="w-full border border-[#D6D6D6] p-2 text-sm bg-white text-[#212121] rounded-none focus:border-[#0A3D62] focus:outline-none">
                  <option>All States</option>
                  <option>Madhya Pradesh</option>
                  <option>Punjab</option>
                  <option>Uttar Pradesh</option>
                  <option>Maharashtra</option>
                </select>
              </div>

               <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">{t.priceRange}</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 border border-[#D6D6D6] p-2 text-sm bg-white text-[#212121]" />
                  <input type="number" placeholder="Max" className="w-1/2 border border-[#D6D6D6] p-2 text-sm bg-white text-[#212121]" />
                </div>
              </div>

              <Button onClick={() => alert(t.featureComingSoon)} className="w-full">{t.applyFilters}</Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          {/* Search Bar */}
          <div className="bg-white border border-[#D6D6D6] p-4 mb-6 flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                className="w-full pl-10 pr-4 py-2 border border-[#D6D6D6] bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>{t.search}</Button>
          </div>

          {/* Listings List */}
          <div className="space-y-4">
            {filteredListings.map(listing => (
              <div key={listing.id} className="bg-white border border-[#D6D6D6] p-4 hover:border-[#0A3D62] transition-colors flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-100 border border-[#D6D6D6]">
                  <img src={listing.imageUrl} alt={listing.cropName} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A3D62]">{listing.cropName} <span className="text-base font-normal text-[#555555]">({listing.variety})</span></h3>
                      <div className="flex items-center text-[#555555] text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {listing.district}, {listing.state}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#212121]">₹ {listing.pricePerQuintal}</div>
                      <div className="text-xs text-[#555555]">per Quintal</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[#555555] my-4 bg-[#F2F2F2] p-2 border border-[#D6D6D6]">
                    <div>
                      <span className="block text-xs font-semibold text-[#212121]">{t.quantity}</span>
                      {listing.quantityQuintals} Qt
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#212121]">{t.harvestDate}</span>
                      {listing.harvestDate}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#212121]">{t.seller}</span>
                      {listing.sellerName}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-[#212121]">{t.type}</span>
                       {listing.isVerified ? t.verified : t.general}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link to={`/listing/${listing.id}`}>
                      <Button size="sm">{t.viewDetails}</Button>
                    </Link>
                    <Button onClick={() => alert("Added to shortlist")} size="sm" variant="outline">{t.saveShortlist}</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredListings.length === 0 && (
             <div className="text-center py-12 bg-white border border-[#D6D6D6]">
               <p className="text-[#555555]">{t.noListings}</p>
             </div>
          )}

        </main>
      </div>
    </div>
  );
};