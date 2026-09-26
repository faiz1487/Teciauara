import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showTagline = false 
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue rounded-lg p-0.5">
      {/* TA Monogram Icon Badge */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-xl transition-transform duration-200 group-hover:scale-105 shadow-sm overflow-hidden flex-shrink-0 ${
        isLight ? 'bg-brand-primaryNavy border border-brand-electricBlue/30' : 'bg-brand-primaryNavy'
      }`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1.5">
          {/* Subtle geometric background grid */}
          <rect width="40" height="40" rx="8" fill="#0B1F44"/>
          
          {/* T shape in Electric Blue */}
          <path 
            d="M8 12H22M15 12V29" 
            stroke="#1677FF" 
            strokeWidth="3.2" 
            strokeLinecap="round"
          />
          
          {/* A shape in Cyan Accent */}
          <path 
            d="M20 29L27 12L34 29" 
            stroke="#00C8E8" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M22.5 24H31.5" 
            stroke="#00C8E8" 
            strokeWidth="2.8" 
            strokeLinecap="round"
          />
          
          {/* Glowing node accent */}
          <circle cx="27" cy="10" r="1.8" fill="#00C8E8" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span className={`font-bold font-sans tracking-tight leading-none ${textSizes[size]} ${
            isLight ? 'text-white' : 'text-brand-primaryNavy'
          }`}>
            Teciaura
          </span>
          <span className="font-semibold text-brand-electricBlue tracking-tight leading-none text-base ml-1">
            Tech
          </span>
        </div>
        {showTagline ? (
          <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-cyanAccent mt-0.5">
            Build. Deploy. Grow.
          </span>
        ) : (
          <span className={`text-[10px] tracking-wider font-medium uppercase leading-tight ${
            isLight ? 'text-slate-400' : 'text-brand-mutedText'
          }`}>
            Technologies
          </span>
        )}
      </div>
    </Link>
  );
};
