import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingBag, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState<'farmer' | 'buyer'>('farmer');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    // In a real app, validation and API calls would happen here
    const mockName = role === 'farmer' ? 'Ramesh Kumar' : 'Vikram Singh';
    login(mockName, role);
    
    if (role === 'farmer') {
      navigate('/farmer-dashboard');
    } else {
      navigate('/saved');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-md bg-white border border-[#D6D6D6] shadow-sm">
        
        {/* Header */}
        <div className="bg-[#0A3D62] text-white p-6 text-center">
          <h1 className="text-2xl font-bold">{t.login}</h1>
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
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-[#212121] mb-2">{t.mobileNo}</label>
            <div className="flex">
               <span className="inline-flex items-center px-3 text-sm text-[#555555] bg-[#F2F2F2] border border-r-0 border-[#D6D6D6]">
                 +91
               </span>
               <input 
                type="tel" 
                placeholder="XXXXXXXXXX" 
                className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] placeholder:text-gray-400 focus:border-[#0A3D62] focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#212121] mb-2">{t.password}</label>
            <input 
              type="password" 
              className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] placeholder:text-gray-400 focus:border-[#0A3D62] focus:outline-none"
              required
            />
          </div>

          {/* Captcha Placeholder */}
          <div>
             <label className="block text-sm font-bold text-[#212121] mb-2">{t.enterCaptcha}</label>
             <div className="flex gap-4 mb-2">
                <div className="bg-[#E0E0E0] text-[#555555] font-mono text-xl tracking-widest px-4 py-2 border border-[#D6D6D6] select-none line-through w-1/2 text-center">
                   8X29aB
                </div>
                <button type="button" className="text-[#0A3D62] hover:bg-[#F2F2F2] p-2 rounded">
                   <RefreshCw size={20} />
                </button>
             </div>
             <input 
               type="text" 
               className="w-full border border-[#D6D6D6] p-2 bg-white text-[#212121] placeholder:text-gray-400 focus:border-[#0A3D62] focus:outline-none"
               required
             />
          </div>

          <Button type="submit" className="w-full py-3">{t.submit}</Button>

          <div className="flex justify-between text-sm pt-4 border-t border-[#D6D6D6]">
             <button type="button" className="text-[#0A3D62] hover:underline font-medium">{t.forgotPass}</button>
             <Link to="/register" className="text-[#0A3D62] hover:underline font-medium">{t.registerHere}</Link>
          </div>
        </form>

        <div className="bg-[#FFF8E1] p-4 text-xs text-[#555555] text-center border-t border-[#D6D6D6]">
           Secure Login System • IP Logged
        </div>

      </div>
    </div>
  );
};