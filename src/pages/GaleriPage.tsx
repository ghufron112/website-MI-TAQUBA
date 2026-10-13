import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Lightbox } from '../components/Lightbox';
import { GALLERY_ITEMS } from '../data/madrasahData';
import type { GalleryItem } from '../types';
import { Eye, Calendar } from 'lucide-react';

export const GaleriPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['Semua', 'Pembelajaran', 'Keagamaan', 'Ekstrakurikuler', 'Fasilitas'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'Semua' ? true : item.category === selectedCategory
  );

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Galeri' }]}
        title="Galeri Dokumentasi Madrasah"
        description="Dokumentasi visual kegiatan belajar mengajar, pembiasaan ibadah harian, ekstrakurikuler, dan lingkungan asri MI Tanwirul Qulub Batuampar."
      />

      <section className="py-16 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1e293b] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Eye className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#1e293b]/90 text-amber-300 backdrop-blur-sm border border-slate-700/50">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1.5">
                    <Calendar className="w-3 h-3 text-[#D4A64A]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading text-sm group-hover:text-amber-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onSelect={(item) => setActiveItem(item)}
      />
    </div>
  );
};
