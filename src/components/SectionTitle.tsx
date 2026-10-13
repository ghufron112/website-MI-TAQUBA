import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border ${
            isDark
              ? 'bg-amber-400/20 border-amber-400/30 text-amber-300'
              : 'bg-amber-50 border-amber-200/80 text-amber-900'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className={`mt-3 flex items-center gap-1.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className={`h-1 w-10 ${isDark ? 'bg-amber-400' : 'bg-[#1e293b]'} rounded-full`}></span>
        <span className="h-1 w-3 bg-amber-500 rounded-full"></span>
        <span className="h-1 w-1.5 bg-amber-400/60 rounded-full"></span>
      </div>
    </div>
  );
};
