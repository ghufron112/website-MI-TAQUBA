import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { TEACHERS, MADRASAH_INFO } from '../data/madrasahData';
import { 
  GraduationCap, 
  Quote, 
  Search, 
  Award, 
  BookOpen, 
  HeartHandshake, 
  ShieldCheck, 
  Phone, 
  Sparkles,
  Users,
  CheckCircle2
} from 'lucide-react';

export const GTKPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'Semua', label: 'Semua GTK' },
    { key: 'Pimpinan', label: 'Pimpinan & Manajemen' },
    { key: 'Guru Kelas', label: 'Guru Kelas & Mapel' },
    { key: 'Tahfidz', label: 'Bimbingan Tahfidz' },
    { key: 'Ekstrakurikuler', label: 'Ekstrakurikuler' },
    { key: 'Staf', label: 'Tenaga Kependidikan / TU' }
  ];

  const filteredTeachers = useMemo(() => {
    return TEACHERS.filter((teacher) => {
      const matchCategory =
        selectedCategory === 'Semua' ? true : teacher.category === selectedCategory;
      const matchSearch =
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.education.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Profil', path: '/profil' },
          { label: 'Dewan Guru & GTK' }
        ]}
        title="Dewan Guru & Tenaga Kependidikan (GTK)"
        description="Mengenal dedikasi, amanah, dan keteladanan para asatidz dan tenaga kependidikan MI Tanwirul Qulub dalam mendidik generasi Qur'ani yang berakhlak mulia di Desa Batuampar."
      />

      {/* 1. STATS BANNER */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">14+</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Ustadz & Tenaga Pendidik</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">100%</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Berkompeten & Beradab</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">S1 & Huffadz</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Kualifikasi Akademik & Sanad</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Berprestasi</p>
              <p className="text-xs font-semibold text-gray-500 mt-1">Bela Diri, Tahfidz & Pramuka</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTORY SECTION */}
      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter & Search Toolbar */}
          <div className="mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat.key
                      ? 'bg-[#1e293b] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama, jabatan, atau gelar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
          </div>

          {/* Teacher Cards Grid */}
          {filteredTeachers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="rounded-3xl bg-white shadow-xs hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-amber-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Photo with Badge */}
                    <div className="relative mb-5">
                      <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-100 group-hover:border-amber-200 transition-colors">
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#1e293b]/90 text-amber-300 backdrop-blur-sm border border-slate-700/50">
                          {teacher.category || 'Pendidik'}
                        </span>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="font-bold text-gray-900 font-heading text-base group-hover:text-amber-700 transition-colors line-clamp-1">
                      {teacher.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mt-1 line-clamp-1">
                      {teacher.role}
                    </p>

                    {/* Education */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#D4A64A]" />
                      <span className="font-mono">{teacher.education}</span>
                    </div>

                    {/* Quote */}
                    {teacher.quote && (
                      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600 italic leading-relaxed flex items-start gap-1.5">
                        <Quote className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">"{teacher.quote}"</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Aktif Mengajar
                    </span>
                    <span>MI Tanwirul Qulub</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800 font-heading">Data GTK Tidak Ditemukan</h3>
              <p className="text-sm text-gray-500 mt-1">Coba gunakan kata kunci pencarian yang lain atau pilih kategori "Semua GTK".</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. KOMITMEN & PRINSIP PENDIDIK */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-amber-50 border border-amber-200/80 text-amber-900">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Etika & Dedikasi</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Prinsip Pendidik MI Tanwirul Qulub
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Nilai-nilai luhur yang senantiasa dijunjung tinggi oleh seluruh dewan asatidz dan staf dalam mendampingi tumbuh kembang anak didik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-4 shadow-xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-heading text-base mb-2">Ikhlas & Menyayangi</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mendidik bukan semata profesi, melainkan ladang ibadah yang dijalani dengan ketulusan dan kasih sayang kepada setiap anak.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-4 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-heading text-base mb-2">Uswatun Hasanah</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Memberikan keteladanan nyata dalam ibadah harian, adab sopan santun, kejujuran, dan tutur kata yang santun.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-4 shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-heading text-base mb-2">Keluasan Ilmu & Al-Qur'an</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Menguasai ilmu agama dan sains modern dengan metode pengajaran kontekstual, menarik, dan mudah dipahami anak usia dasar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 flex items-center justify-center mb-4 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-heading text-base mb-2">Mengasah Bakat Unik</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Meyakini setiap santri istimewa dengan membimbing potensi hafalan, sains, bela diri karate, seni, dan kepramukaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA KONSULTASI WALI SANTRI */}
      <section className="py-16 bg-[#1e293b] text-white text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Silaturahmi & Konsultasi</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Ingin Berkonsultasi dengan Dewan Guru?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Pintu madrasah dan komunikasi kami senantiasa terbuka untuk wali murid dan calon wali santri yang ingin berdiskusi mengenai pendidikan anak.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=Assalamu%27alaikum,%20saya%20ingin%20berkonsultasi%20dengan%20pihak%20dewan%20guru%20MI%20Tanwirul%20Qulub`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
