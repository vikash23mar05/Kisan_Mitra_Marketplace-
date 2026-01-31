import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleFontSize = (action: 'increase' | 'decrease' | 'reset') => {
    const html = document.documentElement;
    const currentSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
    
    if (action === 'increase') html.style.fontSize = (currentSize + 1) + 'px';
    if (action === 'decrease') html.style.fontSize = (currentSize - 1) + 'px';
    if (action === 'reset') html.style.fontSize = '16px';
  };

  const genericClick = () => {
    alert(t.featureComingSoon);
  };

  return (
    <header className="bg-white border-b-4 border-[#FF9933]">
      {/* Top Strip */}
      <div className="bg-[#F2F2F2] border-b border-[#D6D6D6] py-1 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center text-[#555555]">
          <span>{t.govtIndia}</span>
          <div className="flex space-x-4">
            <button onClick={() => window.scrollTo(0, 0)} className="hover:underline">{t.skipToMain}</button>
            <span>|</span>
            <button onClick={genericClick} className="hover:underline">{t.screenReader}</button>
            <span>|</span>
            <button onClick={() => handleFontSize('increase')} className="font-bold">A+</button>
            <button onClick={() => handleFontSize('reset')}>A</button>
            <button onClick={() => handleFontSize('decrease')} className="text-xs">A-</button>
            <span>|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-[#D6D6D6] text-[#212121] font-bold' : 'hover:bg-[#D6D6D6]'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 rounded ${language === 'hi' ? 'bg-[#D6D6D6] text-[#212121] font-bold' : 'hover:bg-[#D6D6D6]'}`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-4 self-start md:self-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem of India" 
            className="h-16 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-[#212121]">{t.portalTitle}</h1>
            <p className="text-sm md:text-base text-[#555555]">{t.ministry}</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-3 self-end md:self-center">
           <Link to="/saved" className="hidden md:flex items-center gap-1 text-[#0A3D62] font-medium hover:underline">
            {t.savedItems}
           </Link>
           <span className="hidden md:inline text-[#D6D6D6]">|</span>
           
           {isAuthenticated ? (
             <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-[#0A3D62]">
                  <User size={20} />
                  <span className="font-bold text-sm">{user?.name}</span>
               </div>
               <button onClick={handleLogout} className="flex items-center gap-1 text-red-700 hover:underline text-sm font-medium">
                  <LogOut size={16} /> {t.logout}
               </button>
             </div>
           ) : (
             <Link to="/login" className="flex items-center gap-2 text-[#0A3D62] hover:text-[#1B4F72]">
               <User size={20} />
               <span className="font-medium">{t.loginRegister}</span>
             </Link>
           )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#0A3D62] text-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center md:block">
             {/* Mobile Menu Button */}
             <button 
                className="md:hidden py-3 flex items-center gap-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
                <Menu size={24} />
                <span className="font-bold">{t.menu}</span>
             </button>

             {/* Desktop Nav */}
             <ul className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 ${isMenuOpen ? 'block' : 'hidden'} pb-4 md:pb-0`}>
                <li><Link to="/" className="block py-3 px-4 hover:bg-[#1B4F72] transition-colors font-medium border-l-4 border-transparent hover:border-[#FF9933]">{t.navHome}</Link></li>
                <li><Link to="/marketplace" className="block py-3 px-4 hover:bg-[#1B4F72] transition-colors font-medium border-l-4 border-transparent hover:border-[#FF9933]">{t.navMarketplace}</Link></li>
                <li><Link to="/prices" className="block py-3 px-4 hover:bg-[#1B4F72] transition-colors font-medium border-l-4 border-transparent hover:border-[#FF9933]">{t.navPrices}</Link></li>
                <li><Link to="/farmer-dashboard" className="block py-3 px-4 hover:bg-[#1B4F72] transition-colors font-medium border-l-4 border-transparent hover:border-[#FF9933]">{t.navFarmerDash}</Link></li>
                <li><Link to="/saved" className="block py-3 px-4 hover:bg-[#1B4F72] transition-colors font-medium border-l-4 border-transparent hover:border-[#FF9933]">{t.navBuyerDash}</Link></li>
             </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};