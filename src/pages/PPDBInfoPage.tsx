import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { PPDB_INFO, MADRASAH_INFO } from '../data/madrasahData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  BookOpen
} from 'lucide-react';

export const PPDBInfoPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'PPDB Online' }]}
        title="Penerimaan Peserta Didik Baru (PPDB)"
        description={`Informasi resmi pendaftaran peserta didik baru Tahun Pelajaran ${PPDB_INFO.academicYear} MI Tanwirul Qulub Batuampar, Guluk-Guluk, Sumenep.`}
      />

      {/* 1. STATUS & JADWAL GELOMBANG */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white p-8 md:p-12 shadow-2xl border border-amber-400/30 mb-16 relative overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 border border-amber-400/40 text-amber-300 mb-3">
                  Status: {PPDB_INFO.status}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
                  Tahun Pelajaran {PPDB_INFO.academicYear}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                  Daftarkan putra-putri tercinta untuk mendapatkan pendidikan dasar Islam yang kokoh dalam akidah, unggul dalam sains, dan luhur dalam budi pekerti.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/ppdb/daftar"
                  className="px-6 py-3.5 rounded-xl font-bold text-center text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Isi Formulir Online</span>
                </Link>

                <a
                  href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=Assalamu%27alaikum,%20saya%20ingin%20bertanya%20mengenai%20jadwal%20dan%20syarat%20PPDB%20MI%20Tanwirul%20Qulub`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold text-center text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Konsultasi WA</span>
                </a>
              </div>
            </div>

            {/* Gelombang Grid */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {PPDB_INFO.batches.map((batch, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg font-heading text-amber-300">{batch.batch}</h3>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30">
                      {batch.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {batch.period}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">{batch.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. ALUR PENDAFTARAN */}
          <SectionTitle
            badge="Tata Cara"
            title="Alur Pendaftaran Peserta Didik Baru"
            subtitle="Lima langkah mudah mendaftarkan calon siswa di MI Tanwirul Qulub Batuampar."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20 text-left">
            {PPDB_INFO.steps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#FAF8F2] border border-gray-100 hover:border-amber-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-amber-400 border border-slate-700 font-bold font-heading flex items-center justify-center text-lg mb-4 group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading text-base mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. SYARAT BERKAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64A]"></span>
                <span>Dokumen Administrasi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Persyaratan Berkas Pendaftaran
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dokumen fisik diserahkan saat daftar ulang atau verifikasi langsung di kantor sekretariat panitia PPDB MI Tanwirul Qulub.
              </p>

              <div className="space-y-3 pt-2">
                {PPDB_INFO.requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F2] border border-gray-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Banner Brosur Resmi PPDB */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group bg-slate-900 text-left">
                <img
                  src="/images/ppdb-banner.jpg"
                  alt="Brosur Resmi PPDB MI Tanwirul Qulub"
                  className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 w-max mb-1 uppercase tracking-wider">
                    Brosur Resmi Madrasah
                  </span>
                  <p className="text-base font-bold font-heading">Publikasi PPDB MI Tanwirul Qulub</p>
                  <p className="text-xs text-slate-200 mt-0.5">Membina generasi berakhlak Qur'ani dan berprestasi di Desa Batuampar.</p>
                </div>
              </div>

              {/* Card Formulir */}
              <div className="p-8 rounded-3xl bg-[#FAF8F2] border-2 border-slate-200 text-left space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1e293b] text-amber-400 flex items-center justify-center shadow-sm">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-heading">Siap Mendaftar Sekarang?</h3>
                    <p className="text-xs text-gray-500">Pendaftaran cepat, praktis & gratis.</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Isi data calon siswa secara cepat melalui formulir online kami. Panitia akan segera menghubungi Anda melalui WhatsApp untuk verifikasi berkas dan jadwal ta'aruf.
                </p>

                <Link
                  to="/ppdb/daftar"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  <span>Buka Formulir Pendaftaran Online</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
              </div>
            </div>
          </div>

          {/* 4. FAQ PPDB */}
          <div className="max-w-3xl mx-auto text-left">
            <SectionTitle
              badge="Tanya Jawab"
              title="Pertanyaan yang Sering Diajukan"
              subtitle="Jawaban atas hal-hal yang sering ditanyakan oleh calon wali murid mengenai PPDB."
            />

            <div className="space-y-4">
              {PPDB_INFO.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF8F2] border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 font-heading text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {openFaqIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
