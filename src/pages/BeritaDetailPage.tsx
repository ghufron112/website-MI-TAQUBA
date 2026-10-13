import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { NEWS_ITEMS } from '../data/madrasahData';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  Check, 
  BookOpen
} from 'lucide-react';

export const BeritaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const news = NEWS_ITEMS.find((n) => n.slug === slug);

  if (!news) {
    return (
      <div className="pt-32 pb-20 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-3">Berita Tidak Ditemukan</h2>
        <p className="text-gray-600 text-sm mb-6">Artikel yang Anda cari mungkin telah dipindahkan atau tautan tidak valid.</p>
        <Link
          to="/berita"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-sky-600 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedNews = NEWS_ITEMS.filter((n) => n.id !== news.id).slice(0, 3);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Berita & Kegiatan', path: '/berita' },
          { label: news.title.slice(0, 30) + '...' }
        ]}
        title={news.title}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D4A64A]" />
                {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#D4A64A]" />
                {news.author}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50/80 text-sky-600">
                {news.category}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold hover:bg-gray-50 transition-colors text-gray-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-sky-500" />
                  <span className="text-sky-600">Tautan Disalin!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#D4A64A]" />
                  <span>Bagikan Berita</span>
                </>
              )}
            </button>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Summary Lead */}
          <div className="p-6 rounded-2xl bg-[#FAF8F2] border-l-4 border-sky-500 mb-8 text-left">
            <p className="text-base sm:text-lg font-heading italic text-gray-800 leading-relaxed">
              "{news.summary}"
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed text-left font-sans">
            {news.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Topik:</span>
            {news.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-xs text-sky-600 bg-sky-50/80 px-3 py-1 rounded-full font-medium"
              >
                <Tag className="w-3 h-3 text-[#D4A64A]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Navigation Back */}
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => navigate('/berita')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-[#D4A64A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Berita
            </button>

            <Link
              to="/ppdb/daftar"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D4A64A]" /> Daftar Siswa Baru
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-left">
            <h3 className="text-2xl font-bold text-sky-600 font-heading mb-6">Berita Terkait Lainnya</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <img src={rel.image} alt={rel.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <span className="text-[11px] text-[#D4A64A] font-bold">{rel.category}</span>
                    <h4 className="text-sm font-bold text-gray-900 font-heading line-clamp-2 mt-1 hover:text-sky-600">
                      <Link to={`/berita/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-2">{rel.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
