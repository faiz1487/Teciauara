import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  showTagline = false,
  iconOnly = false,
  className = '',
}) => {
  // 'light' variant is optimized for dark backgrounds (crisp white text + vibrant cyan/blue logo)
  // 'dark' variant is optimized for light backgrounds (original dark navy text + vibrant cyan/blue logo)
  const isDarkBg = variant === 'light';
  const logoSrc = isDarkBg ? '/teciaura-logo-white.png' : '/teciaura-logo.png';

  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16 lg:h-20',
    lg: 'h-20 sm:h-24',
    xl: 'h-24 sm:h-28',
  };

  const iconSizes = {
    sm: 'w-10 h-10 sm:w-12 sm:h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  if (iconOnly) {
    return (
      <Link 
        to="/" 
        className={`inline-flex items-center transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue rounded-lg ${className}`}
        aria-label="Teciaura Technologies Home"
      >
        <img 
          src="/teciaura-icon.png" 
          alt="Teciaura Technologies Monogram" 
          width={512} 
          height={512} 
          className={`${iconSizes[size]} object-contain drop-shadow-sm`}
          loading="eager"
        />
      </Link>
    );
  }

  return (
    <Link 
      to="/" 
      className={`inline-flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue rounded-lg p-0.5 ${className}`}
      aria-label="Teciaura Technologies Home"
    >
      <div className="flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
        <img 
          src={logoSrc} 
          alt="Teciaura Technologies - Build. Deploy. Grow." 
          width={662} 
          height={147} 
          className={`${sizeClasses[size]} w-auto object-contain drop-shadow-[0_2px_16px_rgba(22,119,255,0.3)]`}
          loading="eager"
        />
      </div>
      {showTagline && (
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold text-brand-cyanAccent pl-10 sm:pl-11 mt-0.5 hidden xs:block">
          Build. Deploy. Grow.
        </span>
      )}
    </Link>
  );
};
