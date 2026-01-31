import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const AddListing: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Listing submitted successfully (Demo)");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; 
        <Link to="/farmer-dashboard" className="hover:underline text-[#0A3D62] ml-1">{t.navFarmerDash}</Link> &gt; 
        <span className="text-[#212121] font-medium ml-1">{t.addNewListing}</span>
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-[#D6D6D6]">
        <div className="bg-[#0A3D62] text-white px-6 py-4">
          <h1 className="text-lg font-bold">{t.newListing}</h1>
          <p className="text-xs text-gray-300">{t.fillDetails}</p>
        </div>

        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#212121] mb-2">{t.cropName} <span className="text-red-600">*</span></label>
              <select className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none rounded-none">
                <option value="">Select Crop</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="maize">Maize</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#212121] mb-2">{t.variety}</label>
              <input type="text" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none" placeholder="e.g. Sharbati" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#212121] mb-2">{t.quantity} (Qt) <span className="text-red-600">*</span></label>
              <input type="number" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#212121] mb-2">{t.expectedPrice} (₹/Qt) <span className="text-red-600">*</span></label>
              <input type="number" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none" placeholder="0.00" />
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#212121] mb-2">{t.harvestDate}</label>
              <input type="date" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none" />
            </div>
            <div>
               <label className="block text-sm font-bold text-[#212121] mb-2">{t.qualityGrade}</label>
               <select className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none rounded-none">
                <option value="A">Grade A</option>
                <option value="B">Grade B</option>
                <option value="C">Grade C</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#212121] mb-2">{t.description}</label>
            <textarea rows={4} className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none" placeholder="Describe the quality, crop conditions, etc."></textarea>
          </div>

          <div>
             <label className="block text-sm font-bold text-[#212121] mb-2">{t.uploadPhotos}</label>
             <div className="border-2 border-dashed border-[#D6D6D6] p-6 text-center bg-[#F9F9F9]">
                <p className="text-sm text-[#555555] mb-2">{t.dragDrop}</p>
                <input type="file" className="text-sm text-[#555555]" />
             </div>
          </div>

          <div className="pt-4 border-t border-[#D6D6D6] flex justify-end gap-4">
             <Link to="/farmer-dashboard">
               <Button variant="outline" type="button">{t.cancel}</Button>
             </Link>
             <Button type="submit">{t.submitListing}</Button>
          </div>

        </form>
      </div>
    </div>
  );
};