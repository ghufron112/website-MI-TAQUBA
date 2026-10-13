import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { MADRASAH_INFO } from '../data/madrasahData';
import type { PPDBSubmission } from '../types';
import { 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  ArrowLeft, 
  Phone, 
  Info,
  User
} from 'lucide-react';

export const PPDBFormPage: React.FC = () => {
  const [formData, setFormData] = useState<PPDBSubmission>({
    studentName: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    parentName: '',
    phoneWhatsapp: '',
    address: '',
    previousSchool: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PPDBSubmission, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof PPDBSubmission, string>> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Nama lengkap calon siswa wajib diisi';
    }
    if (!formData.birthPlace.trim()) {
      newErrors.birthPlace = 'Tempat lahir wajib diisi';
    }
    if (!formData.birthDate) {
      newErrors.birthDate = 'Tanggal lahir wajib diisi';
    }
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Nama orang tua/wali wajib diisi';
    }
    if (!formData.phoneWhatsapp.trim()) {
      newErrors.phoneWhatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+ -]{9,16}$/.test(formData.phoneWhatsapp.trim())) {
      newErrors.phoneWhatsapp = 'Format nomor WhatsApp tidak valid';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Alamat domisili wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Generate preformatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const text = `*FORMULIR PPDB ONLINE MI TANWIRUL QULUB*
----------------------------------------
*Nama Calon Siswa:* ${formData.studentName}
*Tempat/Tgl Lahir:* ${formData.birthPlace}, ${formData.birthDate}
*Jenis Kelamin:* ${formData.gender}
*Nama Orang Tua/Wali:* ${formData.parentName}
*No. WhatsApp:* ${formData.phoneWhatsapp}
*Alamat Lengkap:* ${formData.address}
*Asal RA/TK:* ${formData.previousSchool || '-'}
*Catatan:* ${formData.notes || '-'}
----------------------------------------
Mohon konfirmasi petunjuk kelanjutan verifikasi berkas PPDB MI Tanwirul Qulub. Terima kasih.`;

    return encodeURIComponent(text);
  };

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'PPDB', path: '/ppdb' },
          { label: 'Formulir Pendaftaran Online' }
        ]}
        title="Formulir PPDB Online"
        description="Silakan lengkapi formulir pendaftaran awal calon peserta didik baru MI Tanwirul Qulub Batuampar."
      />

      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Note: Demo mode with WhatsApp Direct Sender */}
          <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Informasi Sistem Pendaftaran Digital (Mode Demo & WhatsApp):</p>
              <p className="mt-0.5 text-amber-800">
                Formulir ini memvalidasi data calon siswa secara lokal dan menyediakan fitur pengiriman ringkasan data langsung ke panitia via WhatsApp resmi. Verifikasi dokumen fisik asli tetap dilakukan saat daftar ulang di sekretariat madrasah.
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. DATA CALON SISWA */}
                <div>
                  <h3 className="text-lg font-bold text-sky-600 font-heading mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#D4A64A]" />
                    <span>A. Data Calon Siswa</span>
                  </h3>

                  <div className="space-y-4">
                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="studentName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nama Lengkap Calon Siswa <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Contoh: Muhammad Faiz Al-Farizi"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.studentName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-[#0284c7]'
                        }`}
                      />
                      {errors.studentName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.studentName}
                        </p>
                      )}
                    </div>

                    {/* TTL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="birthPlace" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Tempat Lahir <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="birthPlace"
                          value={formData.birthPlace}
                          onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                          placeholder="Contoh: Sumenep"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                            errors.birthPlace
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-gray-200 focus:ring-[#0284c7]'
                          }`}
                        />
                        {errors.birthPlace && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.birthPlace}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="birthDate" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Tanggal Lahir <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="birthDate"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                            errors.birthDate
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-gray-200 focus:ring-[#0284c7]'
                          }`}
                        />
                        {errors.birthDate && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.birthDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                      <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Jenis Kelamin <span className="text-red-500">*</span>
                      </span>
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                          <input
                            type="radio"
                            name="gender"
                            checked={formData.gender === 'Laki-laki'}
                            onChange={() => setFormData({ ...formData, gender: 'Laki-laki' })}
                            className="text-sky-600 focus:ring-[#0284c7]"
                          />
                          <span>Laki-laki</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                          <input
                            type="radio"
                            name="gender"
                            checked={formData.gender === 'Perempuan'}
                            onChange={() => setFormData({ ...formData, gender: 'Perempuan' })}
                            className="text-sky-600 focus:ring-[#0284c7]"
                          />
                          <span>Perempuan</span>
                        </label>
                      </div>
                    </div>

                    {/* Asal TK/RA */}
                    <div>
                      <label htmlFor="previousSchool" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Asal RA / TK / PAUD (Bila Ada)
                      </label>
                      <input
                        type="text"
                        id="previousSchool"
                        value={formData.previousSchool}
                        onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                        placeholder="Contoh: RA Al-Hidayah Batuampar (Kosongkan bila tidak ada)"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. DATA ORANG TUA / WALI */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-sky-600 font-heading mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#D4A64A]" />
                    <span>B. Data Orang Tua / Wali</span>
                  </h3>

                  <div className="space-y-4">
                    {/* Nama Ortu */}
                    <div>
                      <label htmlFor="parentName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nama Ayah / Ibu / Wali <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Contoh: Ahmad Baihaki"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.parentName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-[#0284c7]'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.parentName}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="phoneWhatsapp" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneWhatsapp"
                        value={formData.phoneWhatsapp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                        placeholder="Contoh: 081234567890"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.phoneWhatsapp
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-[#0284c7]'
                        }`}
                      />
                      {errors.phoneWhatsapp && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phoneWhatsapp}
                        </p>
                      )}
                    </div>

                    {/* Alamat */}
                    <div>
                      <label htmlFor="address" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Alamat Tempat Tinggal Lengkap <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Contoh: Dusun Timur, RT 02 / RW 01, Desa Batuampar, Guluk-Guluk, Sumenep"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.address
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-[#0284c7]'
                        }`}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                        </p>
                      )}
                    </div>

                    {/* Catatan Tambahan */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Catatan Khusus (Opsional)
                      </label>
                      <input
                        type="text"
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Misal: Punya minat tahfidz, atau riwayat kesehatan tertentu"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    to="/ppdb"
                    className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Informasi PPDB
                  </Link>

                  <button
                    type="submit"
                    id="submit-ppdb-button"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-[#38bdf8] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Lanjutkan & Tinjau Data</span>
                    <Send className="w-4 h-4 text-[#D4A64A]" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation & WhatsApp Generator Screen */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border-2 border-blue-500/20 text-left space-y-6 animate-in fade-in duration-300">
              <div className="text-center pb-6 border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-sky-50/80 text-sky-500 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-sky-600 font-heading">Data Berhasil Ditinjau!</h3>
                <p className="text-gray-600 text-sm mt-1 max-w-md mx-auto">
                  Berikut ringkasan data formulir pendaftaran. Silakan kirimkan data ini ke WhatsApp Panitia PPDB untuk verifikasi awal.
                </p>
              </div>

              {/* Data Summary Card */}
              <div className="rounded-2xl bg-[#FAF8F2] p-5 border border-gray-200 divide-y divide-gray-200 text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Nama Calon Siswa:</span>
                  <span className="font-bold text-gray-900">{formData.studentName}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Tempat, Tanggal Lahir:</span>
                  <span className="font-medium text-gray-900">{formData.birthPlace}, {formData.birthDate}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Jenis Kelamin:</span>
                  <span className="font-medium text-gray-900">{formData.gender}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Nama Orang Tua/Wali:</span>
                  <span className="font-bold text-gray-900">{formData.parentName}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Nomor WhatsApp:</span>
                  <span className="font-medium text-gray-900">{formData.phoneWhatsapp}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-gray-500">Alamat:</span>
                  <span className="font-medium text-gray-900 text-right max-w-xs">{formData.address}</span>
                </div>
                {formData.previousSchool && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-500">Asal RA/TK:</span>
                    <span className="font-medium text-gray-900">{formData.previousSchool}</span>
                  </div>
                )}
              </div>

              {/* Primary Action: Direct WhatsApp message */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="wa-send-ppdb-button"
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#38bdf8] hover:bg-sky-600 transition-all shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-5 h-5 text-[#D4A64A]" />
                  <span>Kirim Data ke WhatsApp Panitia PPDB</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Edit Kembali Data
                </button>
              </div>

              <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-100">
                <p>Sekretariat: {MADRASAH_INFO.address.full}</p>
                <p className="mt-0.5">Jam Layanan: {MADRASAH_INFO.contact.operatingHours}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
