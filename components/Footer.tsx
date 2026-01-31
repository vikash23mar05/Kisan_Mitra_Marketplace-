import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = (e: React.MouseEvent, section: string) => {
    alert(`${section}: ${t.featureComingSoon}`);
  };

  return (
    <footer className="bg-[#0A3D62] text-white mt-auto">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-[#1B4F72] pb-2 inline-block">{t.aboutPortal}</h3>
          <ul className="space-y-2">
            <li><button onClick={(e) => handleClick(e, 'About Us')} className="hover:underline text-gray-300 text-left">About Us</button></li>
            <li><button onClick={(e) => handleClick(e, 'Vision')} className="hover:underline text-gray-300 text-left">Vision & Mission</button></li>
            <li><button onClick={(e) => handleClick(e, 'Contact')} className="hover:underline text-gray-300 text-left">Contact Us</button></li>
            <li><button onClick={(e) => handleClick(e, 'Sitemap')} className="hover:underline text-gray-300 text-left">Site Map</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-[#1B4F72] pb-2 inline-block">{t.policies}</h3>
          <ul className="space-y-2">
            <li><button onClick={(e) => handleClick(e, 'Copyright')} className="hover:underline text-gray-300 text-left">Copyright Policy</button></li>
            <li><button onClick={(e) => handleClick(e, 'Privacy')} className="hover:underline text-gray-300 text-left">Privacy Policy</button></li>
            <li><button onClick={(e) => handleClick(e, 'Terms')} className="hover:underline text-gray-300 text-left">Terms & Conditions</button></li>
            <li><button onClick={(e) => handleClick(e, 'Hyperlink')} className="hover:underline text-gray-300 text-left">Hyperlinking Policy</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-[#1B4F72] pb-2 inline-block">{t.navHelp}</h3>
          <ul className="space-y-2">
            <li><button onClick={(e) => handleClick(e, 'Help')} className="hover:underline text-gray-300 text-left">Help</button></li>
            <li><button onClick={(e) => handleClick(e, 'Feedback')} className="hover:underline text-gray-300 text-left">Feedback</button></li>
            <li><button onClick={(e) => handleClick(e, 'FAQ')} className="hover:underline text-gray-300 text-left">FAQ</button></li>
            <li><button onClick={(e) => handleClick(e, 'Manual')} className="hover:underline text-gray-300 text-left">User Manual</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 border-b border-[#1B4F72] pb-2 inline-block">{t.contact}</h3>
          <p className="text-gray-300 mb-2">
            Ministry of Agriculture & Farmers Welfare,<br/>
            Krishi Bhawan, Dr. Rajendra Prasad Road,<br/>
            New Delhi - 110001
          </p>
          <p className="text-gray-300">Helpline: 1800-180-1551</p>
        </div>
      </div>
      <div className="bg-[#1B4F72] py-4 text-center text-xs text-gray-300">
        <p>{t.managedBy}</p>
        <p className="mt-1">{t.designedBy}</p>
      </div>
    </footer>
  );
};