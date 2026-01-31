import React from 'react';

export interface Listing {
  id: string;
  cropName: string;
  variety: string;
  pricePerQuintal: number;
  quantityQuintals: number;
  state: string;
  district: string;
  harvestDate: string;
  sellerName: string;
  description: string;
  imageUrl: string;
  isVerified: boolean;
}

export interface MarketPrice {
  id: string;
  cropName: string;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}