import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionTitle } from '../components/SectionTitle';
import { MADRASAH_INFO } from '../data/madrasahData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink 
} from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon, TiktokIcon } from '../components/SocialIcons';

export const KontakPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Mohon lengkapi nama, nomor telepon, dan pesan Anda.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const getWaUrl = () => {
    const text = `*PESAN DARI WEBSITE MI TANWIRUL QULUB*
------------------------------------
*Nama:* ${formData.name}
*No. Telp:* ${formData.phone}
*Subjek:* ${formData.subject || 'Pertanyaan Umum'}
*Pesan:* ${formData.message}`;

    return `https://wa.me/${MADRASAH_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Kontak & Lokasi' }]}
        title="Hubungi MI Tanwirul Qulub"
        description="Silaturahmi dan konsultasi pendidikan terbuka hangat bagi seluruh orang tua dan masyarakat Desa Batuampar dan sekitarnya."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info cards */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold text-[#D4A64A] uppercase tracking-wider">
                  Informasi Kontak
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
                  Sekretariat Madrasah
                </h2>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Kami siap melayani pertanyaan seputar PPDB, kurikulum, kegiatan madrasah, dan informasi umum.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Alamat */}
                <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading text-sm">Alamat Lengkap</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {MADRASAH_INFO.address.full}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Desa+Batuampar,+Guluk-Guluk,+Sumenep"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 mt-2 transition-colors"
                    >
                      <span>Buka Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading text-sm">WhatsApp / Telepon Resmi</h3>
                    <p className="text-xs text-gray-600 mt-1">{MADRASAH_INFO.contact.phone}</p>
                    <a
                      href={`https://wa.me/${MADRASAH_INFO.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 mt-2 transition-colors"
                    >
                      <span>Chat WhatsApp Sekarang</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading text-sm">Surat Elektronik (Email)</h3>
                    <p className="text-xs text-gray-600 mt-1">{MADRASAH_INFO.contact.email}</p>
                    <span className="text-[11px] text-gray-400">Placeholder resmi surat menyurat</span>
                  </div>
                </div>

                {/* Jam Layanan */}
                <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading text-sm">Jam Layanan Kantor</h3>
                    <p className="text-xs text-gray-600 mt-1">{MADRASAH_INFO.contact.operatingHours}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Jum'at / Hari Libur Nasional tutup</p>
                  </div>
                </div>

                {/* Media Sosial Resmi (YouTube @taqubachannel) */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <h3 className="font-bold text-gray-900 font-heading text-sm mb-1">
                    Saluran Media Sosial Resmi
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Ikuti dokumentasi kegiatan, video apel, sholawat, dan pengumuman terbaru madrasah.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={MADRASAH_INFO.contact.socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200/80 flex items-center gap-2 transition-all font-semibold text-xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                        <YoutubeIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate font-bold">Taquba Channel</p>
                        <p className="text-[10px] text-red-600 truncate">@taqubachannel</p>
                      </div>
                    </a>

                    <a
                      href={MADRASAH_INFO.contact.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200/80 flex items-center gap-2 transition-all font-semibold text-xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate font-bold">Instagram</p>
                        <p className="text-[10px] text-pink-600 truncate">@mis_tanwirulqulub01</p>
                      </div>
                    </a>

                    <a
                      href={MADRASAH_INFO.contact.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 flex items-center gap-2 transition-all font-semibold text-xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                        <FacebookIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate font-bold">Facebook</p>
                        <p className="text-[10px] text-blue-600 truncate">mis.tanwirulqulub</p>
                      </div>
                    </a>

                    <a
                      href={MADRASAH_INFO.contact.socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 flex items-center gap-2 transition-all font-semibold text-xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                        <TiktokIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate font-bold">TikTok</p>
                        <p className="text-[10px] text-slate-600 truncate">@mis_tanwirulqulub</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#FAF8F2] p-8 sm:p-10 rounded-3xl border border-gray-200 text-left">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                Kirim Pesan atau Pertanyaan
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-6">
                Silakan isi pesan Anda. Anda dapat langsung mengirimkan salinan pesan ini ke WhatsApp resmi madrasah.
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
                </div>
              )}

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Nomor WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contoh: 081234567890"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Perihal / Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Misal: Tanya info PPDB / Bimbingan Tahfidz"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Pesan Anda <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              ) : (
                <div className="bg-white p-6 rounded-2xl border border-amber-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">Pesan Siap Terkirim</h4>
                  <p className="text-xs text-gray-600">
                    Terima kasih telah menghubungi kami. Anda dapat langsung meneruskan pesan ini ke WhatsApp Panitia untuk respon lebih cepat.
                  </p>
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-white bg-[#1e293b] hover:bg-slate-900 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Lanjutkan via WhatsApp Resmi</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="text-xs text-gray-500 underline block text-center w-full mt-2"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <SectionTitle
              badge="Peta Lokasi"
              title="Akses Menuju MI Tanwirul Qulub"
              subtitle="Desa Batuampar, Kecamatan Guluk-Guluk, Kabupaten Sumenep, Jawa Timur."
            />

            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative min-h-[420px] bg-gray-100">
              <iframe
                title="Peta Lokasi Lengkap MI Tanwirul Qulub"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.07765103445!2d113.68!3d-7.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77f9815414d0f%3A0x28f99e31ffbdf07!2sBatuampar%2C%20Kec.%20Guluk-Guluk%2C%20Kabupaten%20Sumenep%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
