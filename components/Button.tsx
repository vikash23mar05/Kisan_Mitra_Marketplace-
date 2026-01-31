import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none rounded-sm";
  
  const variants = {
    primary: "bg-[#0A3D62] text-white hover:bg-[#1B4F72] focus:ring-[#0A3D62]",
    secondary: "bg-[#FF9933] text-white hover:bg-[#e68a00] focus:ring-[#FF9933]",
    outline: "border border-[#0A3D62] text-[#0A3D62] hover:bg-[#F2F2F2] focus:ring-[#0A3D62]",
    danger: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};