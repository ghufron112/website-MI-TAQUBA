import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { PROGRAMS } from '../data/madrasahData';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  Languages, 
  Trophy,
  Palette,
  Music,
  ArrowRight,
  Camera
} from 'lucide-react';

export const AkademikPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#D4A64A]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#D4A64A]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4A64A]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#D4A64A]" />;
      case 'Languages': return <Languages className="w-6 h-6 text-[#D4A64A]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#D4A64A]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#D4A64A]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D4A64A]" />;
    }
  };

  const dailyRoutines = [
    { time: '06.45 - 07.00', title: 'Penyambutan Budaya 5S', desc: 'Siswa disambut hangat oleh dewan asatidz dengan senyum, sapa, dan salam.' },
    { time: '07.00 - 07.30', title: 'Tadarus Pagi & Shalat Dhuha', desc: 'Melantunkan ayat suci Al-Qur\'an dan shalat sunnah Dhuha berjamaah di musholla.' },
    { time: '07.30 - 09.30', title: 'Sesi Pembelajaran I', desc: 'Kegiatan Belajar Mengajar materi inti tematik & pendidikan agama Islam.' },
    { time: '09.30 - 10.00', title: 'Istirahat & Snack Sehat', desc: 'Waktu kudapan sehat, bermain santai di halaman asri, dan membaca di pojok baca.' },
    { time: '10.00 - 12.00', title: 'Sesi Pembelajaran II', desc: 'KBM lanjutan, eksperimen literasi, sains kontekstual, atau muatan lokal.' },
    { time: '12.00 - 12.45', title: 'Shalat Dzuhur Berjamaah', desc: 'Praktik shalat fardhu berjamaah, kultum singkat adab harian, dan doa bersama.' },
    { time: '12.45 - 13.30', title: 'Setoran Tahfidz & Evaluasi', desc: 'Bimbingan hafalan Juz 30 intensif sebelum pulang ke rumah.' },
  ];

  const extracurriculars = [
    { title: 'Bela Diri Karate INKAI (Prestasi & Juara)', desc: 'Dibimbing langsung pelatih Sabuk Hitam DAN 1, membentuk mental juara, disiplin, dan fisik tangguh.', icon: <Award className="w-5 h-5 text-amber-600" /> },
    { title: 'Pramuka Madrasah (Siaga & Penggalang)', desc: 'Melatih jiwa disiplin, kepemimpinan, kepedulian sosial, dan kecintaan pada alam.', icon: <Compass className="w-5 h-5 text-amber-600" /> },
    { title: 'Seni Hadrah & Banjari Al-Banjari', desc: 'Mengasah musikalitas islami dan kecintaan melantunkan sholawat kepada Rasulullah SAW.', icon: <Music className="w-5 h-5 text-amber-600" /> },
    { title: 'Seni Kaligrafi Arab (Khath)', desc: 'Menumbuhkan ketelitian, kesabaran, dan cita rasa seni menuliskan ayat-ayat suci Al-Qur\'an.', icon: <Palette className="w-5 h-5 text-amber-600" /> },
    { title: 'Klub Olahraga (Futsal & Bulutangkis)', desc: 'Membangun kebugaran jasmani, sportivitas, dan kekompakan tim antar siswa.', icon: <Trophy className="w-5 h-5 text-amber-600" /> },
    { title: 'Dokter Kecil & UKS', desc: 'Edukasi pola hidup bersih sehat (PHBS) serta pertolongan pertama sederhana.', icon: <HeartHandshake className="w-5 h-5 text-amber-600" /> },
    { title: 'Sains Ceria & Matematika Kreatif', desc: 'Eksperimen sains sederhana dan teka-teki logika yang mengasah daya nalar anak.', icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
  ];

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Akademik' }]}
        title="Akademik & Program Unggulan"
        description="Pendidikan dasar berorientasi mutu yang memadukan Kurikulum Standar Kementerian Agama dengan keunggulan tahfidz Al-Qur'an dan karakter Islami."
      />

      {/* 1. STRUKTUR KURIKULUM */}
      <section id="kurikulum" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Pendekatan Terpadu"
            title="Kurikulum Terpadu & Berkarakter"
            subtitle="Memadukan muatan kurikulum nasional dengan nilai-nilai kepesantrenan lokal demi membentuk generasi yang siap bersaing di masa depan."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#FAF8F2] p-8 border border-gray-100 hover:border-amber-300 transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-6 shadow-xs border border-slate-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">1. Kurikulum Kemenag & Nasional</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Mengacu pada standar Kementerian Agama Republik Indonesia yang mencakup mata pelajaran PAI (Al-Qur'an Hadits, Akidah Akhlak, Fiqih, SKI), Bahasa Arab, serta muatan umum Tematik / Kurikulum Merdeka.
              </p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Pendidikan Agama Islam Lengkap</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Literasi, Numerasi & Sains</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Pendidikan Pancasila & PKn</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#FAF8F2] p-8 border border-gray-100 hover:border-amber-300 transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-6 shadow-xs border border-slate-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">2. Kurikulum Muatan Lokal</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Memperkuat kearifan lokal masyarakat Madura serta tradisi keislaman Ahlussunnah wal Jama'ah yang menjunjung tinggi toleransi, sopan santun, dan tawadhu kepada guru.
              </p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Kitab Adab & Akhlak Santun</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Pegon & Arab Melayu Dasar</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Kearifan Budaya Lokal Batuampar</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#FAF8F2] p-8 border border-gray-100 hover:border-amber-300 transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-6 shadow-xs border border-slate-700">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">3. Bimbingan Tahfidz Al-Qur'an</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Setiap siswa mendapatkan bimbingan hafalan harian metode tartil bersanad bertahap, dengan target hafal Juz 30 dan surat-surat pilihan saat lulus madrasah.
              </p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Metode Tilawati / Yanbu'a Praktis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Munaqasyah & Uji Tasmi' Terbuka</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Wisuda Tahfidz Berkala</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM UNGGULAN DETAIL */}
      <section id="program" className="py-20 bg-[#FAF8F2] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Fokus Unggulan"
            title="Daftar Program Unggulan Madrasah"
            subtitle="Enam pilar program yang menjadi ciri khas keunggulan MI Tanwirul Qulub Batuampar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col justify-between text-left group hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center">
                      {getIcon(prog.iconName)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 font-heading group-hover:text-amber-700 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4A64A] mt-0.5">{prog.subtitle}</p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{prog.description}</p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Pilar Program:</p>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {prog.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4A64A]" />
                  <span>Jadwal: {prog.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PEMBIASAAN HARIAN SISWA & KALENDER */}
      <section id="jadwal" className="py-20 bg-white scroll-mt-24">
        <div id="kalender" className="scroll-mt-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Rutinitas Positif"
            title="Jadwal Pembiasaan Harian Siswa"
            subtitle="Rutinitas teratur dari pagi hingga siang hari yang menumbuhkan kedisiplinan dan rasa nyaman belajar."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {dailyRoutines.map((routine, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 transition-all text-left gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-amber-300 text-xs font-mono font-bold whitespace-nowrap border border-slate-700">
                    {routine.time}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-heading text-base">{routine.title}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">{routine.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EKSTRAKURIKULER */}
      <section id="ekstrakurikuler" className="py-20 bg-[#FAF8F2] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Bakat & Minat"
            title="Kegiatan Ekstrakurikuler"
            subtitle="Menyalurkan energi positif dan minat bakat anak melalui kegiatan non-akademik yang menyenangkan dan berprestasi."
          />

          {/* Banner Menuju Halaman Khusus Ekstrakurikuler */}
          <div className="mb-10 bg-linear-to-r from-[#1e293b] to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Halaman Khusus Ekstrakurikuler
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mt-1">
                  Galeri Foto & Showcase Karate INKAI, Pramuka & Al-Banjari
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Lihat foto podium juara, sesi latihan lapangan, profil pelatih Sabuk Hitam DAN 1, jadwal mingguan, dan dokumentasi kemah mandiri santri.
                </p>
              </div>
            </div>
            <Link
              to="/ekstrakurikuler"
              className="px-6 py-3 rounded-xl bg-[#D4A64A] text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-400 transition-all shrink-0 flex items-center gap-2 shadow-md"
            >
              <span>Buka Halaman Ekstrakurikuler</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((ekskul, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white shadow-xs border border-gray-100 text-left hover:border-[#D4A64A] transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  {ekskul.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-heading text-base">{ekskul.title}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{ekskul.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POTRET DOKUMENTASI KEGIATAN, PERPUSTAKAAN & PRESTASI SISWA */}
      <section id="perpustakaan" className="py-20 bg-white border-t border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div className="text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
                <Camera className="w-3.5 h-3.5 text-teal-600" />
                <span>Dokumentasi Nyata</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-2">
                Aktivitas & Prestasi Nyata Siswa
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Keseruan proses belajar, bimbingan tahfidz, kepramukaan, hingga pencapaian medali bela diri Karate INKAI.
              </p>
            </div>
            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-sky-700 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 transition-colors"
            >
              <span>Buka Galeri Foto Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Karate Juara Kejurkab */}
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/karate-juara-putri-kata2.jpg"
                  alt="Juara Kejurkab Karate INKAI Sumenep Piala Ketua KONI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-[10px] font-bold">
                  Podium Juara Karate INKAI
                </span>
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-sm font-heading text-slate-900 line-clamp-1">
                  Kejurkab INKAI Piala Ketua KONI
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Santriwati & santri MI Tanwirul Qulub memborong Juara 2 & Juara 3 Kata Perorangan SD 4-6 Se-Kabupaten Sumenep.
                </p>
              </div>
            </div>

            {/* Pramuka Lapangan */}
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/pramuka-lapangan.jpg"
                  alt="Apel Kepramukaan Taquba Scout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-teal-600 text-white text-[10px] font-bold">
                  Taquba Scout
                </span>
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-sm font-heading text-slate-900 line-clamp-1">
                  Apel & Baris-Berbaris Pramuka
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Penanaman jiwa kepemimpinan, gotong royong, dan cinta alam di halaman madrasah.
                </p>
              </div>
            </div>

            {/* Tahfidz & Quran */}
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/bayan-juara2.jpg"
                  alt="Juara Tahfidz Quran MI Tanwirul Qulub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-rose-600 text-white text-[10px] font-bold">
                  Prestasi Tahfidz
                </span>
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-sm font-heading text-slate-900 line-clamp-1">
                  Kejuaraan MHQ Regional
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Santri berhasil meraih piala juara tahfidz Al-Qur'an mengharumkan nama madrasah.
                </p>
              </div>
            </div>

            {/* Haflah & Apel */}
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/haflah.jpg"
                  alt="Haflah Akhirussanah MI Tanwirul Qulub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-sky-600 text-white text-[10px] font-bold">
                  Haflah Nihaiyah
                </span>
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-sm font-heading text-slate-900 line-clamp-1">
                  Pelepasan & Wisuda Siswa
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Perayaan capaian hafalan dan kelulusan siswa dengan khidmat bersama wali santri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
