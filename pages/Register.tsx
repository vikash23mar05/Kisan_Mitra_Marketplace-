import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { User, ShoppingBag, CheckCircle, Shield } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export const Register: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  
  const [role, setRole] = useState<'farmer' | 'buyer'>('farmer');
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (searchParams.get('verified') === 'true') {
      setIsVerified(true);
      // Pre-fill dummy name if verified
      setFormData(prev => ({ ...prev, name: 'Amit Verma' }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
       alert("Please complete KYC verification first.");
       return;
    }
    // Simulate API call
    login(formData.name || 'User', role);
    navigate(role === 'farmer' ? '/farmer-dashboard' : '/saved');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-2xl bg-white border border-[#D6D6D6] shadow-sm">
        
        {/* Header */}
        <div className="bg-[#0A3D62] text-white p-6 text-center">
          <h1 className="text-2xl font-bold">{t.register}</h1>
          <p className="text-sm text-gray-300 mt-2">{t.portalTitle}</p>
        </div>

        {/* Role Toggles */}
        <div className="flex border-b border-[#D6D6D6]">
          <button 
            className={`flex-1 py-4 font-bold text-center flex items-center justify-center gap-2 transition-colors ${role === 'farmer' ? 'bg-white text-[#0A3D62] border-b-4 border-[#FF9933]' : 'bg-[#F2F2F2] text-[#555555] hover:bg-[#E0E0E0]'}`}
            onClick={() => setRole('farmer')}
          >
            <User size={20} />
            {t.farmer}
          </button>
          <button 
            className={`flex-1 py-4 font-bold text-center flex items-center justify-center gap-2 transition-colors ${role === 'buyer' ? 'bg-white text-[#0A3D62] border-b-4 border-[#FF9933]' : 'bg-[#F2F2F2] text-[#555555] hover:bg-[#E0E0E0]'}`}
            onClick={() => setRole('buyer')}
          >
            <ShoppingBag size={20} />
            {t.buyer}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* KYC Section */}
          <div className="bg-blue-50 border border-blue-100 p-4 rounded">
             <h3 className="text-[#0A3D62] font-bold flex items-center gap-2 mb-2">
                <Shield size={18} /> {t.kycVerification}
             </h3>
             <p className="text-sm text-[#555555] mb-4">{t.digilockerDesc}</p>
             
             {isVerified ? (
                <div>
                  <div className="flex items-center gap-2 text-[#138808] font-bold bg-white p-3 border border-green-200 rounded mb-4">
                     <CheckCircle size={20} /> {t.aadharVerified}
                  </div>
                  
                  {/* Digital Aadhar Card Visual */}
                  <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm flex items-center gap-4 max-w-sm mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-white to-green-400"></div>
                    <img src="https://picsum.photos/seed/aadhaar/100/100" className="w-16 h-16 rounded border border-gray-200" alt="Profile" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-[#212121]">Government of India</h4>
                      <p className="font-bold text-md text-[#0A3D62]">Amit Verma</p>
                      <p className="text-xs text-gray-500">DOB: 12/05/1985</p>
                      <p className="text-xs text-gray-500 mt-1">Aadhaar: XXXX XXXX 8891</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" className="h-10 opacity-20" alt="Emblem" />
                  </div>
                </div>
             ) : (
                <Link to="/digilocker-verify">
                  <button type="button" className="bg-[#3860A1] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#2A4B82] transition-colors flex items-center gap-2">
                     <span className="font-bold border border-white px-1 rounded-sm text-xs">DigiLocker</span>
                     {t.verifyWithDigilocker}
                  </button>
                </Link>
             )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-bold text-[#212121] mb-2">{t.fullName}</label>
               <input 
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 className={`w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none ${isVerified ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                 readOnly={isVerified}
                 placeholder="Name from Aadhar"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-bold text-[#212121] mb-2">{t.mobileNo}</label>
               <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#555555] bg-[#F2F2F2] border border-r-0 border-[#D6D6D6]">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    name="mobile"
                    onChange={handleChange}
                    placeholder="XXXXXXXXXX" 
                    className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none"
                    required
                  />
               </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-bold text-[#212121] mb-2">{t.password}</label>
               <input 
                 type="password" 
                 name="password"
                 onChange={handleChange}
                 className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-bold text-[#212121] mb-2">{t.confirmPassword}</label>
               <input 
                 type="password" 
                 name="confirmPassword"
                 onChange={handleChange}
                 className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] focus:border-[#0A3D62] focus:outline-none"
                 required
               />
             </div>
          </div>

          <Button type="submit" className="w-full py-3" disabled={!isVerified}>
             {t.createAccount}
          </Button>

          <div className="text-center text-sm pt-4 border-t border-[#D6D6D6]">
             <span className="text-[#555555]">{t.alreadyHaveAccount} </span>
             <Link to="/login" className="text-[#0A3D62] hover:underline font-medium">{t.loginHere}</Link>
          </div>
        </form>

      </div>
    </div>
  );
};