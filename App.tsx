import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { ListingDetails } from './pages/ListingDetails';
import { MarketPrices } from './pages/MarketPrices';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { AddListing } from './pages/AddListing';
import { SavedListings } from './pages/SavedListings';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { DigiLockerVerify } from './pages/DigiLockerVerify';
import { SellToGovt } from './pages/SellToGovt';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MemoryRouter>
          <div className="flex flex-col min-h-screen font-sans text-[#212121] bg-[#F2F2F2]">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/digilocker-verify" element={<DigiLockerVerify />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/listing/:id" element={<ListingDetails />} />
                <Route path="/prices" element={<MarketPrices />} />
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/add-listing" element={<AddListing />} />
                <Route path="/saved" element={<SavedListings />} />
                <Route path="/sell-to-govt" element={<SellToGovt />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </MemoryRouter>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;