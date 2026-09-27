import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'cyan' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  target,
  rel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B17] disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 gap-2 font-medium',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary: 'bg-brand-electricBlue hover:bg-brand-electricHover text-white shadow-glow-blue hover:shadow-card-hover hover:scale-[1.02] border border-blue-400/30',
    secondary: 'bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-brand-electricBlue/60 shadow-subtle hover:text-brand-cyanAccent backdrop-blur-sm',
    outline: 'bg-transparent border border-brand-electricBlue/70 text-brand-cyanAccent hover:bg-brand-electricBlue/15 hover:border-brand-cyanAccent',
    dark: 'bg-[#0B1528] hover:bg-[#10203D] text-white border border-slate-800 hover:border-brand-electricBlue/40 shadow-card',
    cyan: 'bg-brand-cyanAccent hover:bg-brand-cyanHover text-brand-primaryNavy font-bold shadow-glow-cyan hover:scale-[1.02]',
    ghost: 'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={`group ${combinedClasses}`} 
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};
