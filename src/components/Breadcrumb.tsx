import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title: string;
  description?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, title, description }) => {
  return (
    <div className="relative bg-[#1e293b] text-white pt-36 pb-16 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#1e293b]/95 to-[#0284c7]/30 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-50/800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation trail */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              {item.path ? (
                <Link to={item.path} className="hover:text-amber-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-amber-400 font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white max-w-4xl leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400 opacity-70"></div>
    </div>
  );
};
