import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { 
  MADRASAH_INFO, 
  SEJARAH_DATA, 
  VISI_MISI_DATA, 
  TEACHERS 
} from '../data/madrasahData';
import { 
  CheckCircle2, 
  Sparkles,
  Users,
  ArrowRight
} from 'lucide-react';

export const ProfilPage: React.FC = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Profil Madrasah' }]}
        title="Profil MI Tanwirul Qulub"
        description="Mengenal lebih dekat sejarah, visi dan misi, nilai-nilai luhur, serta dedikasi dewan asatidz dalam mendidik generasi Qur'ani di Desa Batuampar."
      />

      {/* 1. SEJARAH MADRASAH */}
      <section id="sejarah" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]"></span>
                <span>Kilasan Sejarah</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                {SEJARAH_DATA.title}
              </h2>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                {SEJARAH_DATA.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100">
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-gray-100">
                  <span className="text-xs text-gray-500">Kecamatan</span>
                  <p className="font-bold text-slate-900 text-sm">Guluk-Guluk</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-gray-100">
                  <span className="text-xs text-gray-500">Kabupaten</span>
                  <p className="font-bold text-slate-900 text-sm">Sumenep</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-gray-100 col-span-2 sm:col-span-1">
                  <span className="text-xs text-gray-500">Provinsi</span>
                  <p className="font-bold text-slate-900 text-sm">Jawa Timur</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {/* Gedung Masa Kini */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src="/images/gedung-madrasah.jpg"
                  alt="Gedung Utama MI Tanwirul Qulub Masa Kini"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-5 text-white text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold w-max mb-1">
                    Masa Kini
                  </span>
                  <p className="text-base font-bold font-heading">Gedung Utama & Halaman MI Tanwirul Qulub</p>
                  <p className="text-xs text-slate-200">Kawasan belajar yang asri, nyaman, dan ramah anak di Desa Batuampar.</p>
                </div>
              </div>

              {/* Arsip Sejarah Tahun 2000 & Santri */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white group">
                  <img
                    src="/images/gedung-sejarah.jpg"
                    alt="Gedung Rintisan Awal Tahun 2000"
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-3 text-white text-left">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-slate-900 w-max mb-0.5">
                      Tahun 2000
                    </span>
                    <p className="text-[11px] font-bold leading-tight">Gedung Awal Rintisan</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white group">
                  <img
                    src="/images/pramuka-kantor.jpg"
                    alt="Barisan Santri di Depan Kantor Madrasah"
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-3 text-white text-left">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-600 text-white w-max mb-0.5">
                      Aktivitas Santri
                    </span>
                    <p className="text-[11px] font-bold leading-tight">Depan Kantor Madrasah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISI, MISI & INDIKATOR */}
      <section id="visi-misi" className="py-20 bg-[#FAF8F2] relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Arah & Landasan"
            title="Visi, Misi, & Tujuan Pendidikan"
            subtitle="Pedoman strategis madrasah dalam menyelenggarakan pendidikan Islam yang bermutu dan berdaya saing."
          />

          {/* Visi Card */}
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white p-8 md:p-12 shadow-2xl border border-amber-400/30 text-left relative overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#d4a64a_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400/20 border border-amber-400/40 text-amber-300 mb-5 backdrop-blur-sm shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Visi Madrasah</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-snug text-white">
                "{VISI_MISI_DATA.visi}"
              </h3>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Indikator Ketercapaian Visi:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  {VISI_MISI_DATA.indikatorVisi.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Misi Grid */}
          <div className="text-left mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A64A]"></span>
              Misi MI Tanwirul Qulub
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VISI_MISI_DATA.misi.map((m) => (
                <div
                  key={m.no}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:border-amber-300 transition-all text-left flex flex-col justify-between group hover:shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 font-heading font-extrabold flex items-center justify-center text-lg mb-4 group-hover:scale-105 transition-transform">
                      {m.no}
                    </div>
                    <h4 className="font-bold text-gray-900 font-heading text-base mb-2">
                      {m.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nilai-Nilai Madrasah */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A64A]"></span>
              Nilai-Nilai Luhur Karakter Madrasah
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {VISI_MISI_DATA.nilaiMadrasah.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 text-center hover:border-[#D4A64A] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#D4A64A]/10 text-[#D4A64A] font-bold text-sm mx-auto flex items-center justify-center mb-2">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 font-heading text-base">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-1.5 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. IDENTITAS & LEGALITAS MADRASAH */}
      <section id="identitas" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Informasi Kelembagaan"
            title="Identitas & Legalitas Madrasah"
            subtitle="Data kelembagaan resmi MI Tanwirul Qulub yang siap diverifikasi."
          />

          <div className="max-w-4xl mx-auto rounded-2xl bg-[#FAF8F2] border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#1e293b] text-white px-6 py-4 flex items-center justify-between border-b border-slate-700">
              <span className="font-bold font-heading text-sm sm:text-base">Data Pokok Madrasah Ibtidaiyah</span>
              <span className="text-xs bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded-full">
                Kemenag RI
              </span>
            </div>

            <div className="divide-y divide-gray-200 text-sm">
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Nama Madrasah</span>
                <span className="sm:col-span-2 font-bold text-gray-900">{MADRASAH_INFO.fullName}</span>
              </div>
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Nomor Statistik Madrasah (NSM)</span>
                <span className="sm:col-span-2 text-gray-800 font-mono">{MADRASAH_INFO.nsm}</span>
              </div>
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Nomor Pokok Sekolah Nasional (NPSN)</span>
                <span className="sm:col-span-2 text-gray-800 font-mono">{MADRASAH_INFO.npsn}</span>
              </div>
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Status Akreditasi</span>
                <span className="sm:col-span-2 text-gray-800">{MADRASAH_INFO.akreditasi}</span>
              </div>
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Jenjang Pendidikan</span>
                <span className="sm:col-span-2 text-gray-800">Madrasah Ibtidaiyah (Setara SD)</span>
              </div>
              <div className="p-4 sm:grid sm:grid-cols-3 flex flex-col gap-1">
                <span className="font-semibold text-gray-600">Alamat Lengkap</span>
                <span className="sm:col-span-2 text-gray-800">{MADRASAH_INFO.address.full}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEWAN ASATIDZ & TENAGA PENDIDIK (PREVIEW & LINK TO /gtk) */}
      <section className="py-20 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Pendidik Berdedikasi"
            title="Dewan Guru & Tenaga Kependidikan"
            subtitle="Para pendidik yang berkomitmen membimbing anak dengan ketulusan hati dan keteladanan budi pekerti."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEACHERS.slice(0, 3).map((teacher) => (
              <div
                key={teacher.id}
                className="rounded-3xl bg-white shadow-xs hover:shadow-xl transition-all p-6 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-amber-100 group-hover:border-[#D4A64A] transition-colors mb-4">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-bold text-gray-900 font-heading text-lg group-hover:text-amber-600 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mt-0.5">{teacher.role}</p>
                <span className="text-[11px] text-gray-500 font-mono mt-1">{teacher.education}</span>

                {teacher.quote && (
                  <p className="text-xs text-gray-600 italic mt-3 pt-3 border-t border-gray-100">
                    "{teacher.quote}"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Dedicated Page Button */}
          <div className="mt-12 text-center">
            <Link
              to="/gtk"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md group"
            >
              <Users className="w-4 h-4 text-slate-950" />
              <span>Lihat Seluruh Dewan Guru & Tenaga Kependidikan (GTK)</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
