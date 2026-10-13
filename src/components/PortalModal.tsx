import React from 'react';
import { X, GraduationCap, UserCheck, Users, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const portals = [
    {
      title: 'Portal Siswa',
      badge: 'Siswa / Santri',
      icon: <GraduationCap className="w-6 h-6 text-sky-500" />,
      color: 'from-blue-50 to-teal-50 border-sky-200/80',
      desc: 'Akses materi pelajaran, tugas harian, jadwal kelas, dan capaian hafalan tahfidz.',
      buttonText: 'Masuk Siswa',
      buttonBg: 'bg-sky-600 hover:bg-sky-700'
    },
    {
      title: 'Portal Guru & GTK',
      badge: 'Dewan Asatidz',
      icon: <UserCheck className="w-6 h-6 text-sky-500" />,
      color: 'from-blue-50 to-indigo-50 border-sky-200/80',
      desc: 'Kelola administrasi KBM, presensi digital, input nilai rapor, dan agenda pembelajaran.',
      buttonText: 'Masuk Asatidz',
      buttonBg: 'bg-sky-600 hover:bg-sky-700'
    },
    {
      title: 'Portal Wali Murid',
      badge: 'Orang Tua / Wali',
      icon: <Users className="w-6 h-6 text-amber-600" />,
      color: 'from-amber-50 to-orange-50 border-amber-200',
      desc: 'Pantau perkembangan ibadah harian, mutaba\'ah hafalan Qur\'an, dan administrasi madrasah.',
      buttonText: 'Masuk Wali Murid',
      buttonBg: 'bg-amber-600 hover:bg-amber-700'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e293b] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">Portal Layanan Digital Madrasah</h3>
              <p className="text-xs text-slate-300">Pilih akses akun terpadu MI Tanwirul Qulub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portals.map((portal, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border bg-gradient-to-b ${portal.color} flex flex-col justify-between hover:shadow-md transition-all duration-300`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3">
                    {portal.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {portal.badge}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 font-heading mt-0.5 mb-2">
                    {portal.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {portal.desc}
                  </p>
                </div>

                <a
                  href="#portal-login"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Fitur integrasi ${portal.title} disiapkan untuk integrasi RDM / Simpatika Kemenag.`);
                  }}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm ${portal.buttonBg}`}
                >
                  <span>{portal.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
            <span>
              Portal terenkripsi aman. Untuk bantuan akun & sandi, silakan hubungi tim IT Madrasah atau TU.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
