import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Building2, Check } from 'lucide-react';

export const SellToGovt: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  if (step === 2) {
      return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
             <div className="bg-white border border-green-600 p-8 rounded text-center max-w-md w-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                    <Check size={32} />
                </div>
                <h2 className="text-xl font-bold text-[#212121] mb-2">Slot Booked Successfully!</h2>
                <p className="text-[#555555] mb-6">Your appointment at <strong>Sehore Mandi (Center Code: 202)</strong> is confirmed for <strong>25th Oct, 10:00 AM</strong>.</p>
                <div className="bg-[#F2F2F2] p-4 text-left text-sm mb-6 border border-[#D6D6D6]">
                    <div className="flex justify-between mb-2"><span>Token ID:</span> <span className="font-bold">MSP-2023-8821</span></div>
                    <div className="flex justify-between"><span>Est. Payout:</span> <span className="font-bold">₹ 1,06,250</span></div>
                </div>
                <Link to="/farmer-dashboard">
                    <Button className="w-full">Return to Dashboard</Button>
                </Link>
             </div>
        </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-[#555555] mb-6">
        <Link to="/" className="hover:underline text-[#0A3D62]">{t.navHome}</Link> &gt; 
        <Link to="/farmer-dashboard" className="hover:underline text-[#0A3D62] ml-1">{t.navFarmerDash}</Link> &gt; 
        <span className="text-[#212121] font-medium ml-1">{t.govtProcurement}</span>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-[#D6D6D6]">
        <div className="bg-[#138808] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">{t.govtProcurement}</h1>
            <p className="text-xs opacity-90">{t.mspDesc}</p>
          </div>
          <Building2 size={24} className="opacity-80" />
        </div>

        <form className="p-8 space-y-8" onSubmit={handleSubmit}>
          
          {/* Section 1: Crop Details */}
          <div>
             <h3 className="text-[#0A3D62] font-bold border-b border-[#D6D6D6] pb-2 mb-4 flex items-center gap-2">
                <span className="bg-[#0A3D62] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                Crop & Quantity
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#212121] mb-2">{t.cropName}</label>
                  <select className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#138808] focus:outline-none rounded-none">
                    <option value="wheat">Wheat (MSP: ₹2125/Qt)</option>
                    <option value="paddy">Paddy Common (MSP: ₹2040/Qt)</option>
                    <option value="gram">Gram (MSP: ₹5335/Qt)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#212121] mb-2">{t.quantity} (Qt)</label>
                  <input type="number" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#138808] focus:outline-none" placeholder="50" defaultValue="50" />
                </div>
             </div>
             
             {/* Calculation Box */}
             <div className="mt-4 bg-[#F2F2F2] p-4 border border-[#D6D6D6] flex justify-between items-center">
                <span className="text-sm text-[#555555]">{t.estimatedValue}</span>
                <span className="text-xl font-bold text-[#138808]">₹ 1,06,250</span>
             </div>
          </div>

          {/* Section 2: Land Records */}
          <div>
             <h3 className="text-[#0A3D62] font-bold border-b border-[#D6D6D6] pb-2 mb-4 flex items-center gap-2">
                <span className="bg-[#0A3D62] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                Land Verification
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                  <label className="block text-sm font-bold text-[#212121] mb-2">{t.landRecordId}</label>
                  <input type="text" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#138808] focus:outline-none" placeholder="MP-SEH-1029-XXXX" />
                </div>
                <button type="button" className="bg-[#F2F2F2] text-[#0A3D62] border border-[#D6D6D6] px-4 py-2 hover:bg-[#E0E0E0] font-medium flex items-center gap-2 justify-center h-[42px]">
                   <FileText size={18} /> {t.verifyRecord}
                </button>
             </div>
          </div>

          {/* Section 3: Center Selection */}
          <div>
             <h3 className="text-[#0A3D62] font-bold border-b border-[#D6D6D6] pb-2 mb-4 flex items-center gap-2">
                <span className="bg-[#0A3D62] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                Schedule
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#212121] mb-2">{t.selectCenter}</label>
                  <select className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#138808] focus:outline-none rounded-none">
                    <option>Sehore Krishi Upaj Mandi (2km)</option>
                    <option>Bhopal Karond Mandi (35km)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#212121] mb-2">{t.slotDate}</label>
                  <input type="date" className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#138808] focus:outline-none" />
                </div>
             </div>
          </div>

          <div className="pt-4 border-t border-[#D6D6D6] flex justify-end gap-4">
             <Link to="/farmer-dashboard">
               <Button variant="outline" type="button">{t.cancel}</Button>
             </Link>
             <Button type="submit" className="bg-[#138808] hover:bg-[#0f6b06] border-none">{t.confirmSale}</Button>
          </div>

        </form>
      </div>
    </div>
  );
};