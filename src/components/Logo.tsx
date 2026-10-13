import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  showTagline = true, 
  className = '',
  size = 'md'
}) => {
  const isDarkBg = variant === 'dark' || variant === 'white';

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 md:w-12 md:h-12',
    lg: 'w-14 h-14 md:w-16 md:h-16'
  };

  return (
    <Link to="/" className={`flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official Transparent Emblem Logo */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]} rounded-2xl bg-white p-1 shadow-sm border border-slate-200/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="/logo.png"
          alt="Logo Resmi MI Tanwirul Qulub Batuampar"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-amber-500 font-heading flex items-center gap-1">
          Yayasan Nurul Islam
        </span>
        <span
          className={`font-extrabold tracking-tight text-base sm:text-lg md:text-xl leading-tight font-heading ${
            isDarkBg ? 'text-white' : 'text-slate-900'
          }`}
        >
          MI TANWIRUL QULUB
        </span>
        {showTagline && (
          <span className={`text-[11px] leading-tight mt-0.5 ${isDarkBg ? 'text-slate-400' : 'text-slate-500'}`}>
            Batuampar, Guluk-Guluk, Sumenep
          </span>
        )}
      </div>
    </Link>
  );
};
