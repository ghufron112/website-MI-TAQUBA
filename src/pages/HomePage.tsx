import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbox } from '../components/Lightbox';
import { 
  MADRASAH_INFO, 
  PRINCIPAL_INFO, 
  NEWS_ITEMS, 
  GALLERY_ITEMS 
} from '../data/madrasahData';
import type { GalleryItem } from '../types';
import { 
  BookOpen, 
  Sparkles, 
  Trophy, 
  ArrowRight, 
  Phone, 
  Calendar, 
  GraduationCap, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Award,
  ShieldCheck,
  Building2,
  FileCheck2,
  UserCheck,
  CheckCircle2,
  Megaphone,
  Laptop,
  Fingerprint,
  PiggyBank,
  BookMarked,
  Quote,
  Flame,
  Star,
  Camera
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slides (Educational, Friendly, High Resolution)
  const heroSlides = [
    {
      image: '/images/haflah.jpg',
      tag: 'Tahun Ajaran 2026/2027',
      title: 'Penerimaan Peserta Didik Baru Resmi Dibuka',
      desc: 'Mendidik generasi Qur\'ani yang berakhlak mulia, cerdas bernalar, dan siap menyongsong masa depan dengan nilai-nilai Islam.'
    },
    {
      image: '/images/safari-ramadhan.jpg',
      tag: 'Program Unggulan',
      title: 'Bimbingan Tahfidz Juz 30 & Adab Salafus Sholih',
      desc: 'Metode tartil ramah anak dengan setoran rutin pagi hari, membentuk kecintaan mendalam pada Al-Qur\'an sejak usia dini.'
    },
    {
      image: '/images/pramuka-lapangan.jpg',
      tag: 'Kegiatan Santri & Kepramukaan',
      title: 'Perpaduan Kurikulum Kemenag & Sains Modern',
      desc: 'Eksplorasi lingkungan asri Desa Batuampar yang memupuk kemandirian, kekompakan, dan nalar kritis siswa.'
    }
  ];

  // Auto-play Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Student Achievements for Continuous Marquee
  const achievements = [
    {
      title: 'Juara 2 Kata Perorangan SD 4-6 Putri',
      event: 'Kejurkab Karate INKAI Sumenep (Piala Ketua KONI)',
      medal: 'Perak',
      type: 'silver'
    },
    {
      title: 'Juara 3 Kata Perorangan SD 4-6 Putra',
      event: 'Kejurkab Karate INKAI Sumenep (Piala Ketua KONI)',
      medal: 'Perunggu',
      type: 'bronze'
    },
    {
      title: 'Juara 3 Kata Perorangan SD 4-6 Putri',
      event: 'Kejurkab Karate INKAI Sumenep (Piala Ketua KONI)',
      medal: 'Perunggu',
      type: 'bronze'
    },
    {
      title: 'Juara 1 Tahfidz Al-Qur\'an Juz 30',
      event: 'Porseni MI Tingkat Kecamatan 2026',
      medal: 'Emas',
      type: 'gold'
    },
    {
      title: 'Juara 1 Seni Kaligrafi Islam',
      event: 'Aksioma & Porseni Kabupaten 2025',
      medal: 'Emas',
      type: 'gold'
    },
    {
      title: 'Juara 2 Pidato Bahasa Arab Cilik',
      event: 'Pekan Olahraga & Seni Santri 2026',
      medal: 'Perak',
      type: 'silver'
    },
    {
      title: 'Juara Utama Regu Tergiat Pramuka',
      event: 'Jambore Ranting Guluk-Guluk 2025',
      medal: 'Emas',
      type: 'gold'
    },
    {
      title: 'Juara 2 Bulutangkis Tunggal Putra',
      event: 'O2SN Tingkat Kecamatan 2026',
      medal: 'Perak',
      type: 'silver'
    },
    {
      title: 'Juara 3 Cerdas Cermat Sains & PAI',
      event: 'Kompetisi Sains Madrasah 2025',
      medal: 'Perunggu',
      type: 'bronze'
    },
    {
      title: 'Juara 1 Seni Hadrah Al-Banjari',
      event: 'Festival Sholawat Santri Madura 2025',
      medal: 'Emas',
      type: 'gold'
    }
  ];

  // Digital School Services (Like SDN Gintung 1 digital features)
  const digitalServices = [
    {
      title: 'SPMB / PPDB Online',
      desc: 'Pendaftaran siswa baru secara online dari rumah — isi formulir digital, konfirmasi berkas, dan pantau status kelulusan.',
      icon: <Laptop className="w-6 h-6 text-sky-500" />,
      color: 'bg-sky-50/80 text-sky-600 border-sky-100'
    },
    {
      title: 'Absensi & Presensi Digital',
      desc: 'Kehadiran harian siswa dan guru tercatat rapi serta terintegrasi dengan mutaba\'ah sholat dhuha dan dzuhur berjamaah.',
      icon: <Fingerprint className="w-6 h-6 text-teal-600" />,
      color: 'bg-teal-50 text-teal-700 border-teal-100'
    },
    {
      title: 'Rapor Digital Madrasah (RDM)',
      desc: 'Capaian kompetensi akademik, nilai PAI, dan catatan wali kelas tersaji dalam sistem RDM Kemenag resmi.',
      icon: <GraduationCap className="w-6 h-6 text-sky-500" />,
      color: 'bg-sky-50/80 text-sky-600 border-sky-100'
    },
    {
      title: 'Tabungan Siswa Barokah',
      desc: 'Edukasi literasi finansial islami dan gemar menabung sejak kecil dengan pencatatan buku tabungan yang transparan.',
      icon: <PiggyBank className="w-6 h-6 text-amber-600" />,
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      title: 'Tahfidz Tracker Digital',
      desc: 'Monitoring mutaba\'ah setoran hafalan Juz 30 dan surat pilihan yang dapat dipantau langsung oleh wali murid.',
      icon: <BookMarked className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 text-purple-700 border-purple-100'
    },
    {
      title: 'Perpustakaan & Pojok Baca',
      desc: 'Koleksi ratusan buku cerita anak islami, ensiklopedia sains, dan modul pembelajaran tematik menarik.',
      icon: <BookOpen className="w-6 h-6 text-rose-600" />,
      color: 'bg-rose-50 text-rose-700 border-rose-100'
    }
  ];

  return (
    <div className="pt-[104px] lg:pt-[108px] overflow-hidden bg-slate-50">
      {/* 1. HERO SECTION (SDN Gintung 1 inspired Slider with Floating Glass Stats) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#1e293b] text-white overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000"
              />
              {/* Dark Cinematic Gradient Overlay for crisp typography */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/95 via-[#1e293b]/85 to-[#1e293b]/60"></div>
            </div>
          ))}
        </div>

        {/* Decorative Floating Sparkles (Micro-animations) */}
        <div className="absolute top-16 right-16 hidden lg:block animate-pulse-glow opacity-30 pointer-events-none">
          <Star className="w-8 h-8 text-amber-300 fill-amber-300" />
        </div>
        <div className="absolute bottom-24 right-1/4 hidden lg:block animate-custom-bounce opacity-25 pointer-events-none">
          <Sparkles className="w-6 h-6 text-teal-300" />
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="Slide Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="Slide Berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Pill Badges (School Credentials) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>NSM: 11123529XXXX</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Terakreditasi Resmi</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                <span>Ramah Anak</span>
              </span>
            </div>

            {/* School Main Title */}
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading mb-1">
                Website Resmi Madrasah
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                MI TANWIRUL QULUB
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Lembaga pendidikan dasar Islam terpercaya di Desa Batuampar, Guluk-Guluk, Sumenep. 
              Memadukan adab Al-Qur'an, tahfidz Juz 30, kemandirian karakter, dan literasi sains dalam lingkungan madrasah yang asri dan inspiratif.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/ppdb/daftar"
                className="theme-btn text-base !py-3.5 !px-8 shadow-lg shadow-orange-500/25 flex items-center gap-2"
              >
                <Flame className="w-5 h-5 text-amber-200" />
                <span>Daftar PPDB Online</span>
              </Link>

              <Link
                to="/profil"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <span>Profil Lengkap</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* SDN Gintung 1 Inspired 4 Glass Stats Strip */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] font-heading">
                  180+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Siswa Aktif</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#6bd8cb] font-heading">
                  14+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Asatidz & Staf</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#c084fc] font-heading">
                  6
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Rombel Kelas</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#fca5a5] font-heading">
                  Unggul
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Akreditasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANNOUNCEMENT TICKER (Marquee Ribbon like SDN Gintung 1) */}
      <div className="bg-amber-500 text-slate-900 border-y border-amber-600/20 py-2.5 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 z-10 px-4 flex items-center gap-2 font-bold text-xs uppercase tracking-wider bg-amber-500 border-r border-amber-600/30">
            <Megaphone className="w-4 h-4 text-slate-900 animate-bounce" />
            <span>Pengumuman</span>
          </div>

          <div className="overflow-hidden whitespace-nowrap flex flex-1">
            <div className="animate-marquee flex items-center gap-12 text-xs sm:text-sm font-semibold text-slate-950">
              <span className="flex items-center gap-2">
                <span>•</span> Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 MI Tanwirul Qulub Resmi Dibuka
              </span>
              <span className="flex items-center gap-2">
                <span>•</span> Tersedia Program Beasiswa Tahfidz & Keringanan Biaya Khusus Anak Yatim/Dhuafa
              </span>
              <span className="flex items-center gap-2">
                <span>•</span> Formulir Online Dapat Diisi Melalui Menu SPMB / PPDB di Website Ini
              </span>
              <span className="flex items-center gap-2">
                <span>•</span> Jam Pelayanan Kantor Madrasah: Senin – Sabtu, 07.00 – 13.30 WIB (Batuampar, Guluk-Guluk)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PROFIL SINGKAT & IDENTITAS RESMI (2-Column Grid like SDN Gintung 1) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Story */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50/80 text-sky-700 border border-sky-200/80/80 text-xs font-bold tracking-wide">
                <Building2 className="w-3.5 h-3.5 text-sky-500" />
                <span>Profil Resmi Madrasah</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 leading-snug">
                Dedikasi untuk Masa Depan <span className="text-sky-600">Generasi Qur'ani</span> & Cerdas.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Madrasah Ibtidaiyah (MI) Tanwirul Qulub berlokasi di Desa Batuampar, Kecamatan Guluk-Guluk, Kabupaten Sumenep, Jawa Timur. Berada di bawah naungan Kementerian Agama Republik Indonesia, madrasah kami berkomitmen mencetak insan kamil yang beriman teguh, berbudi pekerti luhur, dan cakap dalam ilmu pengetahuan.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nama "Tanwirul Qulub" (Penerang Hati) menjadi ruh pendidikan kami agar setiap ilmu yang diajarkan mampu menerangi kalbu siswa dengan cahaya iman, adab, dan kebijaksanaan hidup.
              </p>

              <div className="pt-2">
                <Link
                  to="/profil"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-sky-50/80 hover:text-sky-600 border border-slate-200 transition-all"
                >
                  <span>Profil Lengkap & Sejarah</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Identity Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 sdn-hover-card">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Naungan</span>
                </div>
                <div className="text-sm font-bold text-slate-800 font-heading">
                  Kementerian Agama Republik Indonesia
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 sdn-hover-card">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Legalitas & NSM</span>
                </div>
                <div className="text-sm font-bold text-slate-800 font-heading">
                  NSM: 111235290001 / Terdaftar Resmi
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 sdn-hover-card">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tahun Berdiri</span>
                </div>
                <div className="text-sm font-bold text-slate-800 font-heading">
                  Sejak 1985 (35+ Tahun Pengabdian)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 sdn-hover-card">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kepala Madrasah</span>
                </div>
                <div className="text-sm font-bold text-slate-800 font-heading">
                  Kholilurrahman, S.Pd.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN MADRASAH (6 Feature Cards with Hover Shine & Emojis) */}
      <section id="program" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200/70 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
              <Star className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
              <span>Keunggulan Kami</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900">
              Mengapa Memilih MI Tanwirul Qulub?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Kombinasi pendidikan karakter Qur'ani, pembiasaan adab salaf, dan pembelajaran aktif membina anak menjadi pribadi sholeh dan berprestasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Kurikulum Terpadu Kemenag & Merdeka
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pembelajaran terdiferensiasi sesuai potensi anak, memadukan ilmu sains, literasi dasar, serta penguatan Profil Pelajar Pancasila & Rahmatan Lil 'Alamin.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Program Tahfidz Juz 30 Terarah
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bimbingan tahsin tartil dan hafalan harian sebelum KBM dengan metode praktis, memastikan kelancaran bacaan dan makharijul huruf anak.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Pembiasaan Karakter & Adab Salaf
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Praktik sholat dhuha dan dzuhur berjamaah, doa harian, serta penerapan tradisi 5S (Senyum, Salam, Sapa, Sopan, Santun) setiap hari.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Layanan & Administrasi Digital
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pendaftaran PPDB online, rapor digital madrasah, presensi digital, serta transparansi pelaporan perkembangan anak kepada orang tua.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">👨‍🏫</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Dewan Asatidz Berdedikasi & Ikhlas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pendidik berlatar belakang sarjana pendidikan Islam dan kepesantrenan yang membimbing anak dengan kesabaran, keikhlasan, dan keteladanan.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Lingkungan Asri & Ramah Anak
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ruang belajar bersih dan nyaman di kawasan pedesaan Batuampar yang sejuk, bebas polusi, aman, dan tanpa diskriminasi maupun kekerasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PENCAPAIAN KAMI (Dark Navy Section with Glowing Stats like SDN Gintung 1) */}
      <section className="py-16 bg-[#1e293b] text-white relative overflow-hidden">
        {/* Floating Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-50/800/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-teal-300" />
              <span>Pencapaian Kami</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Capaian & Bukti Nyata Pengabdian
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-[#fbbf24] mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fbbf24] font-heading">
                35+
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">
                Tahun Pengabdian
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8 text-[#6bd8cb] mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6bd8cb] font-heading">
                6
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">
                Tingkat Kelas
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Award className="w-8 h-8 text-[#c084fc] mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c084fc] font-heading">
                A
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">
                Akreditasi
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 text-[#fca5a5] mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fca5a5] font-heading">
                100%
              </div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-2">
                Kelulusan Siswa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRESTASI SISWA INFINITE MARQUEE (SDN Gintung 1 Continuous Carousel) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-rose-600" />
                <span>Prestasi Siswa</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Kebanggaan Madrasah Kami
              </h3>
            </div>
            <Link
              to="/berita"
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              <span>Lihat Semua Prestasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Continuous Marquee Track */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-fast flex items-center gap-4 py-2">
            {[...achievements, ...achievements].map((item, idx) => (
              <div
                key={idx}
                className="w-72 sm:w-80 flex-shrink-0 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🏆</span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        item.type === 'gold'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : item.type === 'silver'
                          ? 'bg-slate-200 text-slate-800 border border-slate-300'
                          : 'bg-orange-100 text-orange-800 border border-orange-300'
                      }`}
                    >
                      {item.medal}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LAYANAN DIGITAL & FASILITAS MODERN */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50/80 text-sky-700 border border-sky-200/80 text-xs font-bold">
              <Laptop className="w-3.5 h-3.5 text-sky-500" />
              <span>Layanan Digital</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900">
              Madrasah Modern, Siap Masa Depan.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Pemanfaatan teknologi digital mempermudah administrasi, pemantauan hafalan siswa, dan komunikasi harmonis antara madrasah dan wali murid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 sdn-hover-card sdn-card-shine"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SAMBUTAN KEPALA MADRASAH & AGENDA RUTIN */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Sambutan Kepala Madrasah */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 relative">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-6 h-6 text-sky-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Sambutan Kepala Madrasah
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-4">
                Mendidik dengan Hati, Meneladankan Akhlak Karimah.
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                "{PRINCIPAL_INFO.greetingText[2]}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <img
                  src={PRINCIPAL_INFO.photo}
                  alt={PRINCIPAL_INFO.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-600 shadow-sm"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">
                    {PRINCIPAL_INFO.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {PRINCIPAL_INFO.title} • {PRINCIPAL_INFO.degree}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Agenda Sekolah */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Agenda Madrasah
                  </h3>
                </div>
                <Link
                  to="/akademik"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
                >
                  Lihat Semua
                </Link>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-bold flex flex-col items-center justify-center text-xs flex-shrink-0">
                    <span>SEN</span>
                    <span className="text-[10px] text-slate-500">Pagi</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Upacara Bendera & Pembiasaan Sholat Dhuha
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Penanaman disiplin dan cinta tanah air
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 font-bold flex flex-col items-center justify-center text-xs flex-shrink-0">
                    <span>HAP</span>
                    <span className="text-[10px] text-slate-500">Rutin</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Tasmi' dan Setoran Tahfidz Qur'an Juz 30
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Bimbingan makhraj tajwid ustadz pendamping
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 font-bold flex flex-col items-center justify-center text-xs flex-shrink-0">
                    <span>KAM</span>
                    <span className="text-[10px] text-slate-500">Bersih</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Kamis Bersih, Istighosah & Doa Bersama
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Gotong royong merawat kelas & doa sebelum libur Jum'at
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 font-bold flex flex-col items-center justify-center text-xs flex-shrink-0">
                    <span>SAB</span>
                    <span className="text-[10px] text-slate-500">Siang</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Latihan Pramuka & Ekstrakurikuler Hadrah
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Pengembangan bakat seni dan jiwa kepemimpinan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BERITA & PENGUMUMAN TERKINI */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5 text-rose-600" />
                <span>Informasi Terkini</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Berita & Kegiatan Madrasah
              </h2>
            </div>
            <Link
              to="/berita"
              className="theme-btn text-xs !py-2.5 !px-5"
            >
              <span>Semua Berita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ITEMS.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden sdn-hover-card flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-slate-500 mb-2 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold font-heading text-slate-900 line-clamp-2 hover:text-sky-600 transition-colors">
                      <Link to={`/berita/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    to={`/berita/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DOKUMENTASI GALERI KEGIATAN */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
                <Camera className="w-3.5 h-3.5 text-teal-600" />
                <span>Dokumentasi</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Galeri Aktivitas Siswa
              </h2>
            </div>
            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>Buka Galeri Foto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 12).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-slate-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="text-xs font-bold font-heading line-clamp-2 mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MODERN CTA SECTION (Like SDN Gintung 1 CTA) */}
      <section className="py-16 bg-[#1e293b] text-white relative overflow-hidden text-center">
        {/* Glow circles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-sky-50/800/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pendaftaran Siswa Baru Dibuka</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
            Siap Bergabung dengan MI Tanwirul Qulub?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Mulailah perjalanan pendidikan terbaik untuk masa depan putra-putri Anda. Informasi PPDB dan layanan madrasah tersedia secara online.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/ppdb/daftar"
              className="theme-btn text-sm !py-3.5 !px-8 shadow-xl shadow-orange-500/30 flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-amber-200" />
              <span>Daftar PPDB Online</span>
            </Link>

            <a
              href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=Assalamu%27alaikum,%20saya%20ingin%20konsultasi%20pendaftaran%20siswa%20baru%20MI%20Tanwirul%20Qulub`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <Lightbox
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onSelect={setSelectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
};
