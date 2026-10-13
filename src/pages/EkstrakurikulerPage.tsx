import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { EXTRACURRICULARS, MADRASAH_INFO, PPDB_INFO } from '../data/madrasahData';
import type { ExtracurricularItem } from '../types';
import {
  Award,
  Compass,
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  UserCheck,
  CheckCircle2,
  Trophy,
  ChevronRight,
  Maximize2,
  X,
  ChevronLeft,
  Phone,
  HelpCircle,
  Shield,
  Heart
} from 'lucide-react';

interface ActivePhotoModal {
  item: ExtracurricularItem;
  photoIndex: number;
}

export const EkstrakurikulerPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModal, setActiveModal] = useState<ActivePhotoModal | null>(null);

  // Filter tabs
  const categoryTabs = [
    { key: 'Semua', label: 'Semua Program' },
    { key: 'Bela Diri', label: 'Karate INKAI' },
    { key: 'Kepramukaan', label: 'Pramuka Taquba' },
    { key: 'Seni Islami', label: 'Hadrah Al-Banjari' },
    { key: 'Keagamaan', label: 'Club Tahfidz' }
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'Semua') return EXTRACURRICULARS;
    return EXTRACURRICULARS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Modal navigation
  const handlePrevPhoto = () => {
    if (!activeModal) return;
    const total = activeModal.item.photos.length;
    const prevIndex = (activeModal.photoIndex - 1 + total) % total;
    setActiveModal({ item: activeModal.item, photoIndex: prevIndex });
  };

  const handleNextPhoto = () => {
    if (!activeModal) return;
    const total = activeModal.item.photos.length;
    const nextIndex = (activeModal.photoIndex + 1) % total;
    setActiveModal({ item: activeModal.item, photoIndex: nextIndex });
  };

  // Keyboard navigation for Lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModal) return;
      if (e.key === 'Escape') setActiveModal(null);
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-slate-800">
      {/* 1. BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: 'Akademik', path: '/akademik' },
          { label: 'Ekstrakurikuler' }
        ]}
        title="Ekstrakurikuler & Pengembangan Bakat"
        description="Wadah pembentukan karakter ksatria, kemandirian santri, kecintaan seni sholawat, dan ketajaman tilawah Al-Qur'an melalui pembinaan terarah bersama pelatih berlisensi di MI Tanwirul Qulub."
      />

      {/* 2. STATS BANNER */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">4 Juara</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Podium Kejurkab INKAI & MHQ</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <UserCheck className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Berlisensi</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Sabuk Hitam DAN 1 & Pembina KMD</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Karakter</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Disiplin, Adab & Jiwa Ksatria</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <Heart className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Gratis</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Fasilitas Ekstra Bagi Semua Santri</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE UTAMA TIAP EKSTRAKURIKULER */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Tabs */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 mb-3">
              Koleksi & Kegiatan Santri
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Pilihan Ekstrakurikuler Unggulan
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Setiap santri didorong untuk menemukan minat terbaiknya. Dari bela diri karate yang disiplin, kepanduan pramuka yang mandiri, syiar seni hadrah, hingga hafalan Al-Qur'an.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categoryTabs.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xs ${
                    selectedCategory === cat.key
                      ? 'bg-[#1e293b] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* List Kartu Ekstrakurikuler */}
          <div className="space-y-16">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  id={item.slug}
                  className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all overflow-hidden scroll-mt-28"
                >
                  {/* Top Bar Card */}
                  <div className="bg-[#1e293b] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        {getCategoryIcon(item.iconName)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#D4A64A] text-slate-900">
                            {item.category}
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-white/15 text-slate-200 border border-white/20">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                          {item.name}
                        </h3>
                        <p className="text-amber-200 text-sm sm:text-base font-medium mt-1">
                          "{item.tagline}"
                        </p>
                      </div>
                    </div>

                    {/* Badge Prestasi Ringkas */}
                    <div className="bg-white/10 backdrop-blur-xs px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shrink-0">
                      <Trophy className="w-6 h-6 text-amber-400 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-300 font-medium">Rekam Prestasi</p>
                        <p className="text-sm font-bold text-white">
                          {item.achievements.length} Capaian Resmi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Deskripsi & Ringkasan Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      {/* Deskripsi */}
                      <div className="lg:col-span-2">
                        <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-amber-600" />
                          Tentang Program
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {item.description}
                        </p>

                        {/* Pilar & Manfaat */}
                        <div className="mt-6">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                            Fokus Pembinaan & Manfaat Siswa:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {item.benefits.map((b, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-[#FAF8F2] p-2.5 rounded-xl border border-gray-100"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Detail Pelatih & Jadwal */}
                      <div className="bg-[#FAF8F2] p-6 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                            Informasi Pelaksanaan
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <UserCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">Pelatih / Pembina</p>
                                <p className="text-sm font-bold text-slate-900">{item.coach}</p>
                                <p className="text-xs text-gray-600">{item.coachRole}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <Calendar className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">Waktu & Jadwal</p>
                                <p className="text-sm font-bold text-slate-900">{item.schedule}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">Tempat Latihan</p>
                                <p className="text-sm font-bold text-slate-900">{item.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hubungi Pelatih / Konsultasi */}
                        <a
                          href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=${encodeURIComponent(
                            `Assalamu'alaikum, saya ingin bertanya tentang ekstrakurikuler ${item.name} di MI Tanwirul Qulub.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1e293b] text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                        >
                          <Phone className="w-3.5 h-3.5 text-amber-400" />
                          Konsultasi Bakat Siswa
                        </a>
                      </div>
                    </div>

                    {/* Prestasi yang Pernah Diraih */}
                    <div className="mb-10 bg-amber-50/70 p-6 rounded-2xl border border-amber-200/80">
                      <div className="flex items-center gap-2.5 mb-3">
                        <Trophy className="w-5 h-5 text-amber-600" />
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Deretan Prestasi & Rekam Jejak Juara
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.achievements.map((ach, achIdx) => (
                          <div
                            key={achIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-3 rounded-xl border border-amber-100 shadow-2xs"
                          >
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              ★
                            </span>
                            <span className="font-medium leading-snug">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* GALERI FOTO ASLI MASING-MASING EKSTRA */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-amber-600" />
                            Galeri Foto Dokumentasi {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500">
                            Foto asli dokumentasi kegiatan, latihan, dan podium juara santri ({item.photos.length} Foto)
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start sm:self-auto">
                          Klik foto untuk perbesar
                        </span>
                      </div>

                      {/* Grid Foto */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                        {item.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            onClick={() => setActiveModal({ item, photoIndex: pIdx })}
                            className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer shadow-xs hover:shadow-lg transition-all aspect-4/3"
                          >
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                            {/* Tag Badge */}
                            {photo.tag && (
                              <div className="absolute top-2.5 left-2.5">
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#1e293b]/90 text-amber-300 backdrop-blur-xs border border-white/20">
                                  {photo.tag}
                                </span>
                              </div>
                            )}

                            {/* Zoom Icon Button */}
                            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-lg">
                              <Maximize2 className="w-4 h-4" />
                            </div>

                            {/* Caption Text */}
                            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white">
                              <p className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                                {photo.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. JADWAL MINGGUAN EKSTRAKURIKULER */}
      <section className="py-14 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 mb-2">
              Agenda Pelaksanaan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Jadwal Mingguan Ekstrakurikuler
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Diselenggarakan di luar jam wajib KBM madrasah untuk mengoptimalkan potensi minat santri
            </p>
          </div>

          <div className="bg-[#FAF8F2] rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="divide-y divide-gray-200">
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Pramuka Taquba Scout</h5>
                    <p className="text-xs text-gray-500">Golongan Siaga & Penggalang (Kelas 3–6)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Sabtu, 08.00 - 10.30 WIB
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF8F2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Bela Diri Karate INKAI</h5>
                    <p className="text-xs text-gray-500">Pelatih Sabuk Hitam DAN 1 Mohammad Rasyad</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100 font-semibold text-amber-900">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    Sabtu, 14.00 - 16.30 WIB
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Seni Hadrah Al-Banjari</h5>
                    <p className="text-xs text-gray-500">Latihan Pukulan Terbang & Vokal Sholawat</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Kamis, 14.00 - 15.30 WIB
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF8F2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">Club Tahfidz & Tartil</h5>
                    <p className="text-xs text-gray-500">Bimbingan Talaqqi & Persiapan MHQ</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-700 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 font-semibold text-emerald-900">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    Sabtu - Kamis, 07.00 - 07.45 WIB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SEPUTAR EKSTRAKURIKULER */}
      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-2">
              Tanya Jawab
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Pertanyaan Seputar Ekstrakurikuler
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                Apakah siswa boleh memilih lebih dari satu ekstrakurikuler?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                Boleh, selama jadwal kegiatan tidak bertabrakan dan siswa mampu mengatur waktu istirahat serta belajar dengan baik. Pembimbing kami siap memberikan masukan bagi orang tua.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                Apakah ada pungutan biaya pendaftaran bulanan untuk ekstra?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                Seluruh pembinaan dasar ekstrakurikuler di MI Tanwirul Qulub didukung oleh madrasah dan tidak dipungut iuran bulanan reguler. Perlengkapan pribadi seperti seragam karate (dogi) atau atribut pramuka dikoordinasikan secara mandiri.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                Bagaimana proses seleksi atlet untuk kejuaraan kabupaten?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                Atlet karate dan peserta MHQ dipilih berdasarkan ketekunan latihan, disiplin kehadiran, dan kematangan teknik oleh masing-masing pelatih dan dewan asatidz dengan persetujuan orang tua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA DAFTAR / KONSULTASI */}
      <section className="py-16 bg-[#1e293b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Dukung Potensi Terbaik Buah Hati Anda di MI Tanwirul Qulub
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Segera daftarkan ananda dalam Penerimaan Peserta Didik Baru (PPDB) {PPDB_INFO.academicYear} dan jadilah bagian dari generasi santri berprestasi, berkarakter, dan berakhlak mulia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/ppdb"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4A64A] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-all shadow-md flex items-center justify-center gap-2"
            >
              Daftar PPDB Sekarang
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=${encodeURIComponent(
                `Assalamu'alaikum, saya ingin bertanya tentang kegiatan ekstrakurikuler di MI Tanwirul Qulub.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Chat Panitia PPDB & Ekstra
            </a>
          </div>
        </div>
      </section>

      {/* 7. LIGHTBOX MODAL FOTO ASLI EKSTRA */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
          {/* Close button */}
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block focus:outline-none"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10 max-h-[70vh]">
              <img
                src={activeModal.item.photos[activeModal.photoIndex].url}
                alt={activeModal.item.photos[activeModal.photoIndex].caption}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>

            {/* Caption & Info */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A64A]/20 text-[#D4A64A] mb-2 border border-[#D4A64A]/30">
                <span>{activeModal.item.name}</span>
                <span>•</span>
                <span>
                  {activeModal.item.photos[activeModal.photoIndex].tag ||
                    `Foto ${activeModal.photoIndex + 1} dari ${activeModal.item.photos.length}`}
                </span>
              </div>
              <h4 className="text-white text-base sm:text-lg font-bold">
                {activeModal.item.photos[activeModal.photoIndex].caption}
              </h4>
              <p className="text-gray-400 text-xs mt-1">
                Pelatih: {activeModal.item.coach} • {activeModal.item.schedule}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block focus:outline-none"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
};
