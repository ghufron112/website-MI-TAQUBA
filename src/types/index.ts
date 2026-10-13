export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Kegiatan' | 'Prestasi' | 'Keagamaan' | 'Pengumuman';
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  schedule?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Pembelajaran' | 'Keagamaan' | 'Ekstrakurikuler' | 'Fasilitas';
  image: string;
  date: string;
  description: string;
}

export interface TeacherItem {
  id: string;
  name: string;
  role: string;
  education: string;
  photo: string;
  quote?: string;
  category?: 'Pimpinan' | 'Guru Kelas' | 'Tahfidz' | 'Ekstrakurikuler' | 'Staf';
  isPlaceholder?: boolean;
}

export interface PPDBSubmission {
  studentName: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  parentName: string;
  phoneWhatsapp: string;
  address: string;
  previousSchool: string;
  notes?: string;
}

export interface ExtracurricularPhoto {
  url: string;
  caption: string;
  tag?: string;
}

export interface ExtracurricularItem {
  id: string;
  slug: string;
  name: string;
  category: 'Bela Diri' | 'Kepramukaan' | 'Seni Islami' | 'Keagamaan';
  tagline: string;
  description: string;
  coach: string;
  coachRole: string;
  schedule: string;
  location: string;
  badge: string;
  iconName: string;
  achievements: string[];
  benefits: string[];
  photos: ExtracurricularPhoto[];
}

