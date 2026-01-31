import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

export const DigiLockerVerify: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<'credentials' | 'otp' | 'success'>('credentials');
  const [loading, setLoading] = useState(false);

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verifying OTP
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      setTimeout(() => {
        navigate('/register?verified=true');
      }, 2000);
    }, 1500);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-4">
         <div className="bg-white p-8 rounded shadow text-center max-w-sm w-full border border-green-200">
            <CheckCircle className="w-16 h-16 text-[#138808] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#212121] mb-2">{t.verificationSuccess}</h2>
            <p className="text-[#555555]">{t.redirecting}</p>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        
        {/* DigiLocker Header */}
        <div className="bg-[#3860A1] p-6 flex items-center gap-4">
           {/* Simulate DigiLocker Logo */}
           <div className="bg-white p-2 rounded">
              <span className="text-[#3860A1] font-bold text-xl tracking-tighter">DigiLocker</span>
           </div>
           <div className="text-white">
              <div className="text-sm opacity-90">Meri Pehchan</div>
              <div className="text-xs opacity-75">National Single Sign-On</div>
           </div>
        </div>

        <div className="p-8">
           <h1 className="text-2xl font-light text-[#212121] mb-1">{t.digilockerTitle}</h1>
           <p className="text-sm text-[#555555] mb-6">{t.digilockerSubtitle}</p>

           {step === 'credentials' ? (
             <form onSubmit={handleCredentialsSubmit} className="space-y-5">
                <div>
                   <label className="block text-xs font-bold text-[#555555] uppercase mb-1">{t.aadharNumber}</label>
                   <input 
                    type="text" 
                    className="w-full border border-gray-300 p-3 rounded focus:border-[#3860A1] focus:ring-1 focus:ring-[#3860A1] outline-none transition-colors bg-white text-[#212121]" 
                    placeholder="XXXX XXXX XXXX"
                    required
                   />
                </div>

                <div>
                   <label className="block text-xs font-bold text-[#555555] uppercase mb-1">{t.securityPin}</label>
                   <input 
                    type="password" 
                    className="w-full border border-gray-300 p-3 rounded focus:border-[#3860A1] focus:ring-1 focus:ring-[#3860A1] outline-none transition-colors bg-white text-[#212121]" 
                    placeholder="******"
                    required
                   />
                </div>

                <div className="flex items-start gap-2 py-2">
                   <input type="checkbox" id="consent" className="mt-1" required />
                   <label htmlFor="consent" className="text-xs text-[#555555] cursor-pointer">
                      {t.digilockerConsent}
                   </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#3860A1] hover:bg-[#2A4B82] text-white py-3 rounded font-medium transition-colors disabled:opacity-70"
                >
                  {loading ? t.loading : t.signIn}
                </button>
             </form>
           ) : (
             <form onSubmit={handleOtpSubmit} className="space-y-5">
                <div className="bg-blue-50 p-3 rounded text-sm text-[#3860A1] mb-4">
                  OTP sent to mobile linked with Aadhar ending in **89.
                </div>
                <div>
                   <label className="block text-xs font-bold text-[#555555] uppercase mb-1">Enter OTP</label>
                   <input 
                    type="text" 
                    className="w-full border border-gray-300 p-3 rounded focus:border-[#3860A1] focus:ring-1 focus:ring-[#3860A1] outline-none transition-colors bg-white text-[#212121] tracking-widest text-center" 
                    placeholder="XXXXXX"
                    maxLength={6}
                    required
                   />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#3860A1] hover:bg-[#2A4B82] text-white py-3 rounded font-medium transition-colors disabled:opacity-70"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
                <button type="button" onClick={() => setStep('credentials')} className="w-full text-sm text-[#555555] hover:underline">
                  Go Back
                </button>
             </form>
           )}

           <div className="mt-6 text-center">
              <div className="text-xs text-gray-400">
                 Secured by National Informatics Centre (NIC)
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};