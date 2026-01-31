import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-white border-b border-[#D6D6D6]">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-0 md:pr-12">
             <div className="bg-[#FFF8E1] border-l-4 border-[#FF9933] p-2 mb-6 inline-block text-sm text-[#555555]">
                {t.officialPortal}
             </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A3D62] mb-4 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-[#555555] mb-8 leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/marketplace">
                <Button size="lg">{t.viewMarketplace}</Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="lg">{t.registerFarmer}</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
             <div className="w-full max-w-sm bg-[#F2F2F2] border border-[#D6D6D6] p-4 rounded text-center">
               <img 
                 src="https://picsum.photos/400/300?grayscale" 
                 alt="Indian Farmer" 
                 className="w-full h-auto mb-4 border border-[#D6D6D6]"
               />
               <p className="text-sm font-bold text-[#0A3D62]">{t.empowering}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-[#0A3D62] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#1B4F72]">
            <div className="p-2">
              <Users className="mx-auto mb-2 h-8 w-8 text-[#FF9933]" />
              <div className="text-2xl font-bold">1.2 Cr+</div>
              <div className="text-sm text-gray-300">{t.statFarmers}</div>
            </div>
            <div className="p-2">
              <ShoppingBag className="mx-auto mb-2 h-8 w-8 text-[#FF9933]" />
              <div className="text-2xl font-bold">50 Lakh+</div>
              <div className="text-sm text-gray-300">{t.statListings}</div>
            </div>
            <div className="p-2">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-[#FF9933]" />
              <div className="text-2xl font-bold">28</div>
              <div className="text-sm text-gray-300">{t.statStates}</div>
            </div>
            <div className="p-2">
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-[#FF9933]" />
              <div className="text-2xl font-bold">₹ 500 Cr+</div>
              <div className="text-sm text-gray-300">{t.statTrade}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#212121] mb-8 border-b border-[#D6D6D6] pb-2">
            {t.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Service Card 1 */}
            <div className="bg-white border border-[#D6D6D6] p-6 hover:border-[#0A3D62] transition-colors">
              <div className="bg-[#F2F2F2] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-[#0A3D62]">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t.browseCrops}</h3>
              <p className="text-[#555555] mb-4 text-sm">
                {t.browseCropsDesc}
              </p>
              <Link to="/marketplace" className="text-[#0A3D62] font-bold flex items-center hover:underline text-sm">
                {t.goMarketplace} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-[#D6D6D6] p-6 hover:border-[#0A3D62] transition-colors">
              <div className="bg-[#F2F2F2] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-[#0A3D62]">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t.checkPrices}</h3>
              <p className="text-[#555555] mb-4 text-sm">
                {t.checkPricesDesc}
              </p>
              <Link to="/prices" className="text-[#0A3D62] font-bold flex items-center hover:underline text-sm">
                {t.viewTable} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-[#D6D6D6] p-6 hover:border-[#0A3D62] transition-colors">
              <div className="bg-[#F2F2F2] w-12 h-12 flex items-center justify-center rounded-full mb-4 text-[#0A3D62]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-2">{t.farmerReg}</h3>
              <p className="text-[#555555] mb-4 text-sm">
                {t.farmerRegDesc}
              </p>
              <Link to="/register" className="text-[#0A3D62] font-bold flex items-center hover:underline text-sm">
                {t.registerNow} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Banner */}
      <section className="bg-[#FFF8E1] border-y border-[#FF9933] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-[#212121]">{t.govtAdvisory}</h4>
            <p className="text-sm text-[#555555]">{t.advisoryText}</p>
          </div>
          <Button onClick={() => alert(t.featureComingSoon)} variant="outline" size="sm">{t.readGuidelines}</Button>
        </div>
      </section>
    </div>
  );
};