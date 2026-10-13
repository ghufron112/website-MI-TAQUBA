import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { PortalModal } from './PortalModal';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from './SocialIcons';
import { MADRASAH_INFO } from '../data/madrasahData';
import { 
  Menu, 
  X, 
  Calendar, 
  ChevronDown, 
  LogIn, 
  Sparkles, 
  School, 
  BookOpen, 
  Target, 
  Users, 
  GraduationCap, 
  CalendarDays, 
  Clock, 
  Library, 
  Award, 
  Camera, 
  Trophy,
  Phone,
  Flame
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const location = useLocation();

  // Dynamic Indonesian Date Clock
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      const datePart = now.toLocaleDateString('id-ID', options);
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentDateStr(`${datePart} | ${hours}:${minutes} WIB`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleNavClick = (hashId?: string) => {
    setOpenDropdown(null);
    setIsOpen(false);
    if (hashId) {
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* 1. TOPBAR (SDN Gintung 1 inspired Dark Navy Topbar) */}
        <div className="bg-[#1e293b] text-slate-300 text-xs border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            {/* Live Date / Time */}
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium tracking-wide">
                {currentDateStr || 'Senin, 12 Oktober 2026 | 19:15 WIB'}
              </span>
            </div>

            {/* Quick Links & Social Media Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 text-slate-300">
                <a
                  href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=Assalamu%27alaikum,%20saya%20ingin%20bertanya%20mengenai%20MI%20Tanwirul%20Qulub`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-sky-400" />
                  <span>CS: {MADRASAH_INFO.contact.phone}</span>
                </a>
                <span className="text-slate-600">|</span>
                <Link
                  to="/ppdb"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>PPDB 2026/2027 Dibuka</span>
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-1.5">
                <a
                  href={MADRASAH_INFO.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={MADRASAH_INFO.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={MADRASAH_INFO.contact.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={MADRASAH_INFO.contact.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-6 h-6 rounded-md bg-slate-800/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <TiktokIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVBAR */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-md py-2.5 border-b border-slate-200/80'
              : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-200/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-medium text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-sky-600 font-bold bg-sky-50/80/80'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/70'
                  }`
                }
              >
                Beranda
              </NavLink>

              {/* Profil Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('profil')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'profil' ? null : 'profil')}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-100/70 flex items-center gap-1 transition-all"
                >
                  <span>Profil</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'profil' ? 'rotate-180 text-sky-600' : ''}`} />
                </button>

                {openDropdown === 'profil' && (
                  <div className="absolute top-full left-0 pt-1.5 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-1.5 space-y-0.5">
                      <Link
                        to="/profil"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <School className="w-4 h-4 text-amber-500" />
                        <span>Profil Madrasah</span>
                      </Link>
                      <Link
                        to="/profil#visi-misi"
                        onClick={() => handleNavClick('visi-misi')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Target className="w-4 h-4 text-amber-500" />
                        <span>Visi & Misi</span>
                      </Link>
                      <Link
                        to="/gtk"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Users className="w-4 h-4 text-amber-600" />
                        <span>Dewan Guru & GTK</span>
                      </Link>
                      <Link
                        to="/profil#sejarah"
                        onClick={() => handleNavClick('sejarah')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-purple-600" />
                        <span>Sejarah Singkat</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Akademik Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('akademik')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'akademik' ? null : 'akademik')}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:text-amber-700 hover:bg-slate-100/70 flex items-center gap-1 transition-all"
                >
                  <span>Akademik</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'akademik' ? 'rotate-180 text-amber-600' : ''}`} />
                </button>

                {openDropdown === 'akademik' && (
                  <div className="absolute top-full left-0 pt-1.5 w-60 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-1.5 space-y-0.5">
                      <Link
                        to="/akademik"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-500" />
                        <span>Ringkasan Akademik</span>
                      </Link>
                      <Link
                        to="/ekstrakurikuler"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Ekstrakurikuler Unggulan</span>
                      </Link>
                      <Link
                        to="/akademik#kurikulum"
                        onClick={() => handleNavClick('kurikulum')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-amber-500" />
                        <span>Kurikulum Terpadu</span>
                      </Link>
                      <Link
                        to="/akademik#kalender"
                        onClick={() => handleNavClick('kalender')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <CalendarDays className="w-4 h-4 text-amber-500" />
                        <span>Kalender Pendidikan</span>
                      </Link>
                      <Link
                        to="/akademik#jadwal"
                        onClick={() => handleNavClick('jadwal')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Clock className="w-4 h-4 text-teal-600" />
                        <span>Jadwal Pembelajaran</span>
                      </Link>
                      <Link
                        to="/akademik#perpustakaan"
                        onClick={() => handleNavClick('perpustakaan')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Library className="w-4 h-4 text-indigo-600" />
                        <span>Perpustakaan Madrasah</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Kegiatan Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('kegiatan')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'kegiatan' ? null : 'kegiatan')}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:text-amber-700 hover:bg-slate-100/70 flex items-center gap-1 transition-all"
                >
                  <span>Kegiatan</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'kegiatan' ? 'rotate-180 text-amber-600' : ''}`} />
                </button>

                {openDropdown === 'kegiatan' && (
                  <div className="absolute top-full left-0 pt-1.5 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-1.5 space-y-0.5">
                      <Link
                        to="/ekstrakurikuler"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Ekstrakurikuler (Inkai, dll)</span>
                      </Link>
                      <Link
                        to="/#program"
                        onClick={() => handleNavClick('program')}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>Program Unggulan</span>
                      </Link>
                      <Link
                        to="/galeri"
                        onClick={() => handleNavClick()}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-colors"
                      >
                        <Camera className="w-4 h-4 text-rose-500" />
                        <span>Galeri Foto Kegiatan</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/ppdb"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all relative font-bold ${
                    isActive
                      ? 'text-amber-700 bg-amber-50'
                      : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50/70'
                  }`
                }
              >
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>PPDB Online</span>
                </span>
              </NavLink>

              <NavLink
                to="/berita"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-sky-600 font-bold bg-sky-50/80/80'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/70'
                  }`
                }
              >
                Berita
              </NavLink>

              <NavLink
                to="/kontak"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'text-sky-600 font-bold bg-sky-50/80/80'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/70'
                  }`
                }
              >
                Kontak
              </NavLink>
            </div>

            {/* CTA Buttons & Mobile Trigger */}
            <div className="flex items-center space-x-2.5">
              {/* Masuk Portal Button (SDN Gintung 1 inspired login modal) */}
              <button
                type="button"
                onClick={() => setIsPortalOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#1e293b] border border-slate-200 transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-500" />
                <span>Masuk</span>
              </button>

              {/* Daftar PPDB Theme Button */}
              <Link
                to="/ppdb/daftar"
                id="nav-cta-register"
                className="theme-btn text-xs !py-2.5 !px-5 hidden sm:inline-flex shadow-sm"
              >
                <span>Daftar PPDB</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                id="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl lg:hidden text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6 text-sky-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity">
            <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <Logo showTagline={false} />
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col space-y-1 text-sm font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-sky-50/80 text-sky-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Beranda
                  </NavLink>
                  <NavLink
                    to="/profil"
                    onClick={() => handleNavClick()}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Profil Madrasah
                  </NavLink>
                  {/* Quick Sub-links Mobile */}
                  <div className="pl-6 pb-1 flex flex-col space-y-1">
                    <Link
                      to="/profil#visi-misi"
                      onClick={() => handleNavClick('visi-misi')}
                      className="text-xs font-semibold text-slate-600 hover:text-amber-700 py-1 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Visi & Misi</span>
                    </Link>
                    <Link
                      to="/profil#sejarah"
                      onClick={() => handleNavClick('sejarah')}
                      className="text-xs font-semibold text-slate-600 hover:text-amber-700 py-1 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Sejarah Singkat</span>
                    </Link>
                  </div>

                  <NavLink
                    to="/gtk"
                    onClick={() => handleNavClick()}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Dewan Guru & GTK
                  </NavLink>

                  <NavLink
                    to="/akademik"
                    onClick={() => handleNavClick()}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Akademik & Kurikulum
                  </NavLink>
                  <div className="pl-6 pb-1 flex flex-col space-y-1">
                    <Link
                      to="/akademik#kurikulum"
                      onClick={() => handleNavClick('kurikulum')}
                      className="text-xs font-semibold text-slate-600 hover:text-amber-700 py-1 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Kurikulum Terpadu</span>
                    </Link>
                    <Link
                      to="/akademik#jadwal"
                      onClick={() => handleNavClick('jadwal')}
                      className="text-xs font-semibold text-slate-600 hover:text-amber-700 py-1 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>Jadwal Pembelajaran</span>
                    </Link>
                  </div>
                  <NavLink
                    to="/ekstrakurikuler"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Ekstrakurikuler Unggulan
                  </NavLink>
                  <NavLink
                    to="/galeri"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-sky-50/80 text-sky-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Galeri Kegiatan
                  </NavLink>
                  <NavLink
                    to="/berita"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-sky-50/80 text-sky-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Berita & Pengumuman
                  </NavLink>
                  <NavLink
                    to="/ppdb"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-50 text-amber-800 font-bold' : 'text-amber-700 hover:bg-amber-50'
                      }`
                    }
                  >
                    SPMB / PPDB Online
                  </NavLink>
                  <NavLink
                    to="/kontak"
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-sky-50/80 text-sky-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    Kontak Kami
                  </NavLink>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsPortalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4 text-sky-500" />
                  <span>Masuk Portal Siswa / Guru</span>
                </button>

                <Link
                  to="/ppdb/daftar"
                  className="w-full theme-btn text-xs py-3 text-center flex items-center justify-center"
                >
                  <span>Daftar PPDB Online</span>
                </Link>

                <div className="pt-2 flex items-center justify-center gap-2">
                  <a
                    href={MADRASAH_INFO.contact.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel Taquba"
                    title="YouTube @taqubachannel"
                    className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={MADRASAH_INFO.contact.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={MADRASAH_INFO.contact.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={MADRASAH_INFO.contact.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    title="TikTok"
                    className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                  >
                    <TiktokIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-center text-[11px] text-slate-400 pt-1">
                  <p className="font-semibold text-slate-600">MI Tanwirul Qulub Batuampar</p>
                  <p>Sumenep, Madura, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Portal Modal Dialog */}
      <PortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
};
