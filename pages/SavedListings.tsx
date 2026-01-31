import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { MOCK_LISTINGS } from '../services/mockData';
import { useLanguage } from '../context/LanguageContext';

export const SavedListings: React.FC = () => {
  // Simulating a saved list using the first 2 mock items
  const savedItems = MOCK_LISTINGS.slice(0, 2);
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; <span className="text-[#212121] font-medium">{t.savedItems}</span>
      </div>

      <h1 className="text-2xl font-bold text-[#0A3D62] mb-6">{t.shortlistedCrops}</h1>

      {savedItems.length > 0 ? (
        <div className="space-y-4">
          {savedItems.map(item => (
            <div key={item.id} className="bg-white border border-[#D6D6D6] p-4 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                 <img src={item.imageUrl} alt={item.cropName} className="w-20 h-20 object-cover border border-[#D6D6D6]" />
                 <div>
                    <h3 className="text-lg font-bold text-[#0A3D62]">{item.cropName} <span className="text-sm font-normal text-[#555555]">({item.variety})</span></h3>
                    <div className="text-sm text-[#555555]">{item.district}, {item.state} | {item.quantityQuintals} Qt</div>
                    <div className="text-lg font-bold text-[#212121]">₹ {item.pricePerQuintal} <span className="text-xs font-normal">/ Qt</span></div>
                 </div>
               </div>
               
               <div className="flex gap-2 w-full md:w-auto">
                 <Link to={`/listing/${item.id}`} className="w-full md:w-auto">
                    <Button size="sm" variant="outline" className="w-full md:w-auto">{t.viewDetails}</Button>
                 </Link>
                 <Button onClick={() => alert("Removed from shortlist")} size="sm" className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200">
                    <Trash2 size={18} />
                 </Button>
               </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#D6D6D6] p-12 text-center">
           <p className="text-[#555555] mb-4">{t.noSaved}</p>
           <Link to="/marketplace">
              <Button>{t.browseMarketplace}</Button>
           </Link>
        </div>
      )}
    </div>
  );
};