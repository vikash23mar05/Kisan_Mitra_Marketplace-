import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2, Eye, Building2 } from 'lucide-react';
import { Button } from '../components/Button';
import { MOCK_LISTINGS } from '../services/mockData';
import { useLanguage } from '../context/LanguageContext';

export const FarmerDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; <span className="text-[#212121] font-medium">{t.navFarmerDash}</span>
      </div>

      <div className="flex justify-between items-center mb-8 border-b border-[#D6D6D6] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0A3D62]">{t.welcome}, Ramesh Kumar</h1>
          <p className="text-[#555555] text-sm mt-1">Farmer ID: KIS-MP-9821 | Sehore, Madhya Pradesh</p>
        </div>
        <Link to="/add-listing">
          <Button className="flex items-center gap-2">
            <PlusCircle size={18} />
            {t.addNewListing}
          </Button>
        </Link>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#E8F5E9] border border-[#138808] p-6 rounded flex items-center justify-between shadow-sm">
             <div>
                <h3 className="text-xl font-bold text-[#138808] mb-1">{t.sellToGovt}</h3>
                <p className="text-sm text-[#555555]">{t.mspDesc}</p>
             </div>
             <Link to="/sell-to-govt">
               <Button className="bg-[#138808] hover:bg-[#0f6b06] border-none">
                 <Building2 className="mr-2" size={20}/>
                 {t.submit}
               </Button>
             </Link>
          </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-[#D6D6D6] p-6 border-l-4 border-l-[#0A3D62]">
          <div className="text-[#555555] text-sm font-medium uppercase">{t.totalListings}</div>
          <div className="text-3xl font-bold text-[#212121] mt-2">12</div>
        </div>
        <div className="bg-white border border-[#D6D6D6] p-6 border-l-4 border-l-[#138808]">
          <div className="text-[#555555] text-sm font-medium uppercase">{t.totalSold}</div>
          <div className="text-3xl font-bold text-[#212121] mt-2">85 Qt</div>
        </div>
        <div className="bg-white border border-[#D6D6D6] p-6 border-l-4 border-l-[#FF9933]">
          <div className="text-[#555555] text-sm font-medium uppercase">{t.inquiries}</div>
          <div className="text-3xl font-bold text-[#212121] mt-2">24</div>
        </div>
      </div>

      {/* Listings Table */}
      <div className="bg-white border border-[#D6D6D6]">
        <div className="bg-[#F2F2F2] px-6 py-4 border-b border-[#D6D6D6]">
          <h2 className="font-bold text-[#212121]">{t.myActiveListings}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#D6D6D6] text-sm text-[#555555]">
                <th className="px-6 py-3 font-medium">{t.commodity}</th>
                <th className="px-6 py-3 font-medium">{t.quantity}</th>
                <th className="px-6 py-3 font-medium">{t.askingPrice} (₹/Qt)</th>
                <th className="px-6 py-3 font-medium">{t.status}</th>
                <th className="px-6 py-3 font-medium text-right">{t.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6D6]">
              {MOCK_LISTINGS.slice(0, 3).map(listing => (
                <tr key={listing.id} className="hover:bg-[#F9F9F9]">
                  <td className="px-6 py-4">
                    <div className="font-bold text-[#0A3D62]">{listing.cropName}</div>
                    <div className="text-xs text-[#555555]">{listing.variety}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#212121]">{listing.quantityQuintals} Qt</td>
                  <td className="px-6 py-4 text-sm text-[#212121]">₹ {listing.pricePerQuintal}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#E8F5E9] text-[#138808] px-2 py-1 text-xs rounded border border-[#138808] font-medium">
                      {t.active}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-1 hover:bg-[#F2F2F2] rounded text-[#0A3D62]" title="View" onClick={() => alert("Viewing listing")}>
                         <Eye size={18} />
                       </button>
                       <button className="p-1 hover:bg-[#F2F2F2] rounded text-[#555555]" title="Edit" onClick={() => alert("Editing listing")}>
                         <Edit size={18} />
                       </button>
                       <button className="p-1 hover:bg-[#fee2e2] rounded text-red-600" title="Delete" onClick={() => alert("Delete listing functionality")}>
                         <Trash2 size={18} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};