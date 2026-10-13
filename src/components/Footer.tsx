import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from './SocialIcons';
import { MADRASAH_INFO } from '../data/madrasahData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e293b] text-slate-300 relative overflow-hidden border-t border-slate-700/60">
      {/* Decorative subtle background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Madrasah Info & Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-4">
              {MADRASAH_INFO.description}
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={MADRASAH_INFO.contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 hover:bg-[#1877F2] hover:border-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={MADRASAH_INFO.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={MADRASAH_INFO.contact.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 hover:bg-[#FF0000] hover:border-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={MADRASAH_INFO.contact.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 hover:bg-black hover:border-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                NSM: {MADRASAH_INFO.nsm}
              </span>
              <span className="inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Akreditasi: {MADRASAH_INFO.akreditasi}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Profil & Visi Misi
                </Link>
              </li>
              <li>
                <Link to="/gtk" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Dewan Guru & GTK
                </Link>
              </li>
              <li>
                <Link to="/akademik" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Kurikulum & Pembelajaran
                </Link>
              </li>
              <li>
                <Link to="/ekstrakurikuler" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Ekstrakurikuler Unggulan
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Galeri Foto Kegiatan
                </Link>
              </li>
              <li>
                <Link to="/ppdb" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Informasi PPDB Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Program Unggulan (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Ekstrakurikuler
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/ekstrakurikuler#karate-inkai" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Karate INKAI (Juara)
                </Link>
              </li>
              <li>
                <Link to="/ekstrakurikuler#pramuka-taquba-scout" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Pramuka Taquba Scout
                </Link>
              </li>
              <li>
                <Link to="/ekstrakurikuler#al-banjari" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Hadrah Al-Banjari
                </Link>
              </li>
              <li>
                <Link to="/ekstrakurikuler#tahfidz-club" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Club Tahfidz Qur'an
                </Link>
              </li>
              <li>
                <Link to="/akademik" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Kurikulum Terpadu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Kontak & Lokasi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{MADRASAH_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {MADRASAH_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${MADRASAH_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {MADRASAH_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{MADRASAH_INFO.contact.operatingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <span>Lihat Peta Lokasi</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {MADRASAH_INFO.fullName}. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">Desa Batuampar, Guluk-Guluk, Sumenep</span>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-900 text-white transition-all shadow-md group cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
