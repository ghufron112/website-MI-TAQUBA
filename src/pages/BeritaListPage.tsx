import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { NEWS_ITEMS } from '../data/madrasahData';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  Tag, 
  Sparkles 
} from 'lucide-react';

export const BeritaListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Kegiatan', 'Prestasi', 'Keagamaan', 'Pengumuman'];

  const filteredNews = NEWS_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Berita & Kegiatan' }]}
        title="Berita & Informasi Madrasah"
        description="Ikuti perkembangan terkini seputar kegiatan pembelajaran, prestasi siswa, dan pengumuman resmi MI Tanwirul Qulub Batuampar."
      />

      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Search & Category Filter */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1e293b] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari berita atau kegiatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <article
                  key={news.id}
                  className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1e293b]/90 text-amber-300 backdrop-blur-sm shadow-sm border border-slate-700/50">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#D4A64A]" />
                          {news.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#D4A64A]" />
                          {news.author}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-amber-700 font-heading transition-colors line-clamp-2 leading-snug">
                        <Link to={`/berita/${news.slug}`}>{news.title}</Link>
                      </h2>

                      <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                        {news.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {news.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded"
                          >
                            <Tag className="w-2.5 h-2.5 text-[#D4A64A]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      to={`/berita/${news.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
              <Sparkles className="w-12 h-12 text-[#D4A64A] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-gray-900 font-heading">Tidak Ada Berita yang Cocok</h3>
              <p className="text-gray-500 text-sm mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori lain.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-50/80 text-sky-600"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
