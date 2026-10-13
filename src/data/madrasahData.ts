import type { NewsItem, ProgramItem, GalleryItem, TeacherItem, ExtracurricularItem } from '../types';

export const MADRASAH_INFO = {
  name: 'MI Tanwirul Qulub',
  fullName: 'Madrasah Ibtidaiyah Tanwirul Qulub',
  nsm: '11123529XXXX (Placeholder NSM)',
  npsn: '607XXXXX (Placeholder NPSN)',
  akreditasi: 'Terakreditasi (Placeholder Resmi)',
  tagline: 'Membentuk Generasi Islami, Cerdas, Berakhlak Mulia',
  description:
    'Lembaga pendidikan dasar Islam yang mengintegrasikan nilai-nilai Al-Qur\'an, akhlak karimah, penguasaan sains, dan kecakapan hidup dalam lingkungan belajar yang ramah anak, asri, dan inspiratif di Desa Batuampar.',
  address: {
    village: 'Desa Batuampar',
    district: 'Kecamatan Guluk-Guluk',
    regency: 'Kabupaten Sumenep',
    province: 'Jawa Timur',
    postalCode: '69463',
    full: 'Desa Batuampar, Kecamatan Guluk-Guluk, Kabupaten Sumenep, Jawa Timur 69463'
  },
  contact: {
    phone: '+62 823-3800-0000', // Placeholder
    whatsapp: '6282338000000', // Placeholder nomor panitia
    email: 'mis.tanwirulqulub@gmail.com',
    operatingHours: 'Sabtu - Kamis: 07.00 - 13.30 WIB',
    socialMedia: {
      facebook: 'https://web.facebook.com/mis.tanwirulqulub',
      instagram: 'https://instagram.com/mis_tanwirulqulub01',
      youtube: 'https://www.youtube.com/@taqubachannel',
      tiktok: 'https://tiktok.com/@mis_tanwirulqulub',
    }
  },
  stats: [
    { label: 'Siswa & Siswi Aktif', value: '180+' },
    { label: 'Ustadz & Tenaga Pendidik', value: '14+' },
    { label: 'Rombongan Belajar', value: '6 Kelas' },
    { label: 'Program Unggulan', value: '5 Bidang' },
  ]
};

export const PRINCIPAL_INFO = {
  name: 'Kholilurrahman, S.Pd.',
  title: 'Kepala Madrasah & Pimpinan',
  degree: 'S.Pd.',
  photo: '/images/apel-pagi.jpg',
  greetingText: [
    'Assalamu’alaikum Warahmatullahi Wabarakatuh.',
    'Puji syukur kehadirat Allah SWT atas limpahan rahmat, taufiq, dan hidayah-Nya. Shalawat serta salam senantiasa tercurah kepada baginda Nabi Agung Muhammad SAW.',
    'Selamat datang di website resmi MI Tanwirul Qulub Batuampar, Guluk-Guluk, Sumenep. Kehadiran media informasi digital ini merupakan ikhtiar kami untuk membuka jendela silaturahmi, transparansi informasi, serta sarana komunikasi edukatif antara madrasah, wali murid, masyarakat, dan seluruh pemerhati pendidikan Islam.',
    'Di MI Tanwirul Qulub, kami mendidik anak-anak bukan sekadar cerdas secara akademik, melainkan memiliki pondasi akidah yang kokoh, adab yang luhur, cinta Al-Qur’an, dan berjiwa mandiri. Kami percaya setiap anak dilahirkan unik dengan potensi istimewa yang siap mekar dengan bimbingan penuh kasih sayang.',
    'Semoga ikhtiar bersama ini diberkahi Allah SWT dalam mencetak generasi penerus bangsa yang membanggakan agama dan orang tua. Wassalamu’alaikum Warahmatullahi Wabarakatuh.'
  ]
};

export const VISI_MISI_DATA = {
  visi: 'Mewujudkan Generasi Muslim yang Qur\'ani, Berakhlakul Karimah, Unggul dalam Prestasi, Mandiri, dan Berwawasan Kebangsaan.',
  indikatorVisi: [
    'Terwujudnya peserta didik yang gemar membaca, menghafal, dan mengamalkan ajaran Al-Qur\'an.',
    'Terbentuknya kepribadian siswa yang santun, beradab, berbakti kepada orang tua dan guru.',
    'Tercapainya penguasaan ilmu pengetahuan, literasi dasar, numerasi, dan sains tingkat dasar yang berdaya saing.',
    'Terciptanya lingkungan madrasah yang bersih, asri, religius, aman, dan ramah bagi perkembangan anak.'
  ],
  misi: [
    {
      no: '1',
      title: 'Penanaman Akidah & Akhlakul Karimah',
      desc: 'Membimbing pembiasaan ibadah harian, adab pergaulan islami, dan keteladanan akhlak mulia dalam setiap aktivitas madrasah.'
    },
    {
      no: '2',
      title: 'Pembelajaran Bermakna & Aktif',
      desc: 'Melaksanakan kegiatan belajar mengajar yang berpusat pada siswa, menyenangkan, kontekstual, dan menumbuhkan nalar kritis anak.'
    },
    {
      no: '3',
      title: 'Program Bimbingan Al-Qur\'an Intensif',
      desc: 'Menerapkan bimbingan tahsin tartil dan tahfidz Juz 30 dengan metode bertahap yang ramah anak.'
    },
    {
      no: '4',
      title: 'Pengembangan Minat & Bakat Multitalenta',
      desc: 'Menyediakan wadah ekstrakurikuler di bidang keagamaan, olahraga, seni islami, dan kepramukaan untuk mengasah potensi anak.'
    },
    {
      no: '5',
      title: 'Sinergi Harmonis Berkelanjutan',
      desc: 'Membangun kerjasama erat antara dewan guru, wali murid, tokoh masyarakat Batuampar, dan alumni dalam memajukan mutu madrasah.'
    }
  ],
  nilaiMadrasah: [
    { title: 'Taqwa', desc: 'Menjadikan iman dan takwa sebagai landasan utama setiap langkah belajar.' },
    { title: 'Amanah', desc: 'Menjaga kepercayaan orang tua dalam mendidik anak dengan penuh dedikasi.' },
    { title: 'Nalar Cerdas', desc: 'Mendorong kecintaan pada ilmu pengetahuan, literasi, dan rasa ingin tahu.' },
    { title: 'Welas Asih', desc: 'Menumbuhkan empati, saling menghargai kawan, dan kepedulian sosial.' },
    { title: 'Istimewa', desc: 'Berikhtiar optimal memberikan karya terbaik dan prestasi membanggakan.' },
    { title: 'Ramah Anak', desc: 'Menyediakan lingkungan belajar yang aman, nyaman, dan bebas kekerasan.' }
  ]
};

export const SEJARAH_DATA = {
  title: 'Sejarah Singkat & Perkembangan MI Tanwirul Qulub',
  paragraphs: [
    'Yayasan Nurul Islam dirintis oleh K. Saiedy Syarif pada tahun 1998 di Desa Batuampar, Kecamatan Guluk-Guluk, Kabupaten Sumenep. Cikal bakal pendidikan bermula dari Taman Pendidikan Al-Qur\'an (TPA) Nurul Islam di sebuah mushalla sederhana.',
    'Seiring antusiasme masyarakat, dibangunlah ruang kelas swadaya dan berdirinya Madrasah Diniyah (MD) Nurul Islam. Guna menjawab kebutuhan pendidikan dasar formal yang bermutu, terpadu, dan berakhlak Qur\'ani, para pengasuh dan sesepuh mendirikan MI Tanwirul Qulub pada tanggal 05 Mei 2009.',
    'Nama "Tanwirul Qulub" bermakna "Penerang Hati", melambangkan tekad agar setiap ilmu dan kalam Al-Qur\'an yang dipelajari mampu menyinari jiwa anak didik dengan iman, ketakwaan, budi pekerti luhur, dan kecakapan hidup modern.',
    'Kini, MI Tanwirul Qulub memadukan kurikulum Kementerian Agama dan Kemendikbudristek dengan program unggulan Tahfidz Al-Qur\'an Juz 30, sains kontekstual, kepramukaan Taquba Scout, serta bela diri Karate INKAI berprestasi.'
  ]
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'tahfidz',
    title: 'Tahfidz & Tahsin Al-Qur\'an',
    subtitle: 'Menumbuhkan Kecintaan pada Kalamullah Sejak Dini',
    description:
      'Program bimbingan tilawah tartil metode praktis, makhrajul huruf yang benar, serta hafalan Juz 30 terarah sesuai kemampuan anak.',
    iconName: 'BookOpen',
    badge: 'Unggulan Utama',
    features: [
      'Bimbingan setoran harian sebelum KBM',
      'Uji tasmi\' hafalan bertahap',
      'Target lulus hafal minimal Juz 30 & doa pilihan',
      'Sertifikat tahfidz bagi siswa wisuda'
    ],
    schedule: 'Sabtu - Kamis, 07.00 - 07.45 WIB'
  },
  {
    id: 'akhlak',
    title: 'Pembiasaan Adab & Karakter Islami',
    subtitle: 'Membentuk Karakter Berakhlak Mulia & Santun',
    description:
      'Pendidikan karakter tidak hanya teori, melainkan dipraktikkan langsung melalui Shalat Dhuha berjamaah, Shalat Dzuhur, dan tradisi 5S.',
    iconName: 'HeartHandshake',
    badge: 'Karakter',
    features: [
      'Shalat Dhuha & Dzuhur berjamaah di madrasah',
      'Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun)',
      'Kajian adab harian kepada orang tua dan guru',
      'Pemberian kartu kontrol ibadah di rumah'
    ],
    schedule: 'Setiap Hari Kegiatan Sekolah'
  },
  {
    id: 'literasi-numerasi',
    title: 'Literasi & Numerasi Kreatif',
    subtitle: 'Fondasi Berpikir Kritis & Logis yang Menyenangkan',
    description:
      'Penguatan kemampuan membaca pemahaman dan berhitung praktis dengan media peraga interaktif, dongeng islami, dan pojok baca ruang kelas.',
    iconName: 'Sparkles',
    badge: 'Akademik',
    features: [
      'Pojok baca tematik di setiap ruang kelas',
      'Pekan literasi & unjuk karya tulis siswa',
      'Matematika ceria menggunakan alat peraga',
      'Pengembangan pemecahan masalah sederhana'
    ],
    schedule: 'Terintegrasi dalam Kurikulum'
  },
  {
    id: 'sains-eksplorasi',
    title: 'Sains & Eksplorasi Lingkungan',
    subtitle: 'Mengenal Keagungan Ciptaan Allah Melalui Alam',
    description:
      'Siswa diajak mengamati alam sekitar pedesaan Batuampar, menanam tanaman toga, praktikum sains sederhana, dan memupuk rasa peduli lingkungan.',
    iconName: 'Compass',
    badge: 'Sains & Alam',
    features: [
      'Kebun toga & taman hijau mini madrasah',
      'Eksperimen sains sederhana tanpa bahan berbahaya',
      'Edukasi pengelolaan sampah dan kebersihan',
      'Outdoor learning berkala'
    ],
    schedule: 'Tematik & Akhir Pekan Berkala'
  },
  {
    id: 'bahasa-dasar',
    title: 'Bahasa Arab & Inggris Komunikatif',
    subtitle: 'Membuka Wawasan Global & Pemahaman Agama',
    description:
      'Pengenalan kosakata harian bahasa Arab (mufradat) untuk menunjang bacaan ibadah, serta percakapan bahasa Inggris dasar melalui lagu dan permainan.',
    iconName: 'Languages',
    badge: 'Bahasa',
    features: [
      'Mufradat yaumiyyah (kosakata hari ini)',
      'Lagu-lagu edukatif bahasa Arab & Inggris',
      'Dialog sederhana situasi kelas',
      'Buku saku kosakata praktis siswa'
    ],
    schedule: '2 Kali Seminggu'
  },
  {
    id: 'ekstrakurikuler',
    title: 'Bakat, Seni Islami & Olahraga',
    subtitle: 'Wadah Pengembangan Potensi Diri Siswa',
    description:
      'Beragam pilihan kegiatan ekstra untuk mengasah kepercayaan diri, kepemimpinan, dan kesehatan fisik peserta didik.',
    iconName: 'Trophy',
    badge: 'Bakat & Minat',
    features: [
      'Pramuka Madrasah (Golongan Siaga & Penggalang)',
      'Seni Hadrah & Banjari Al-Banjari',
      'Seni Kaligrafi Arab (Khath)',
      'Olahraga Bulutangkis & Futsal Ceria'
    ],
    schedule: 'Setiap Hari Sabtu, 13.30 - 15.00 WIB'
  },
  {
    id: 'karate-inkai',
    title: 'Bela Diri Karate INKAI',
    subtitle: 'Membentuk Fisik Tangguh, Disiplin, dan Mental Juara',
    description:
      'Latihan bela diri resmi Institut Karate-Do Indonesia (INKAI) dibimbing langsung oleh pelatih berlisensi Sabuk Hitam DAN 1. Menanamkan kedisiplinan tinggi, ketahanan jasmani rohani, serta mencetak atlet-atlet cilik berprestasi.',
    iconName: 'Award',
    badge: 'Prestasi & Bela Diri',
    features: [
      'Pelatih resmi Sabuk Hitam DAN 1 (Mohammad Rasyad)',
      'Fasilitas seragam karate madrasah & latihan Kata & Kumite',
      'Pembentukan karakter disiplin, percaya diri, dan sportivitas',
      'Pengiriman delegasi atlet kejuaraan karate tingkat regional'
    ],
    schedule: 'Latihan Rutin Mingguan di Halaman Madrasah'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '5',
    slug: 'prestasi-juara-kejurkab-karate-inkai-sumenep-piala-koni',
    title: 'Membanggakan! Siswa-Siswi MI Tanwirul Qulub Borong Juara di Kejurkab Karate INKAI Se-Kabupaten Sumenep',
    category: 'Prestasi',
    date: '23 Oktober 2023',
    author: 'Pelatih & Tim Ekstrakurikuler',
    image: '/images/karate-juara-putri-kata2.jpg',
    summary:
      'Kontingen karateka cilik MI Tanwirul Qulub sukses mengukir prestasi gemilang dengan meraih Juara 2 dan Juara 3 Kata Perorangan pada Kejuaraan Karate INKAI Se-Kabupaten Sumenep Piala Ketua KONI Ke-II Tahun 2023.',
    content: [
      'Sumenep – Prestasi membanggakan kembali ditorehkan oleh siswa-siswi MI Tanwirul Qulub. Pada perhelatan akbar Kejuaraan Karate INKAI Se-Kabupaten Sumenep memperebutkan Piala Ketua KONI Ke-II Tahun 2023, kontingen madrasah sukses membawa pulang sederet medali kejuaraan.',
      'Capaian medali yang sukses diraih meliputi: Juara 2 Kata Perorangan SD 4-6 Putri (Medali Perak), Juara 3 Kata Perorangan SD 4-6 Putra (Medali Perunggu), serta Juara 3 Kata Perorangan SD 4-6 Putri (Medali Perunggu dan Piagam Penghargaan).',
      'Dibimbing intensif oleh pelatih berlisensi Sabuk Hitam DAN 1 Mohammad Rasyad dan dewan asatidz madrasah, para atlet cilik tampil tangguh dan penuh percaya diri memperagakan gerakan Kata yang presisi, bertenaga, dan berjiwa ksatria.',
      'Pihak keluarga besar madrasah dan wali santri menyampaikan rasa syukur dan apresiasi setinggi-tingginya. Prestasi ini membuktikan bahwa siswa MI Tanwirul Qulub tidak hanya santun dan unggul dalam hafalan Al-Qur\'an, namun juga bermental juara dan tangguh di kancah olahraga bela diri regional.'
    ],
    tags: ['Karate INKAI', 'Kejurkab Sumenep', 'Piala Ketua KONI', 'Prestasi Siswa', 'Batuampar']
  },
  {
    id: '1',
    slug: 'haflah-nihaiyah-bangkit-membangun-masa-depan-bangsa',
    title: 'Haflah Nihaiyah: Bangkit Membangun Masa Depan Bangsa di MI Tanwirul Qulub',
    category: 'Kegiatan',
    date: 'Mei 2024',
    author: 'Humas Madrasah',
    image: '/images/haflah.jpg',
    summary:
      'Keluarga besar MI Tanwirul Qulub menggelar Haflah Nihaiyah pelepasan siswa dengan khidmat, merayakan capaian hafalan Al-Qur’an dan prestasi santri.',
    content: [
      'Desa Batuampar – Suasana khidmat dan penuh haru menyelimuti halaman MI Tanwirul Qulub saat seluruh siswa, dewan guru, dan wali murid berkumpul memperingati Haflah Nihaiyah.',
      'Acara diawali dengan lantunan merdu ayat suci Al-Qur\'an dan sholawat nabi oleh grup banjari siswa MI Tanwirul Qulub yang menuai apresiasi hangat dari seluruh hadirin.',
      'Kepala Madrasah dalam sambutannya mengingatkan pentingnya menjaga nilai-nilai keislaman, kejujuran (Shiddiq), dan budi pekerti luhur di mana pun berada.',
      'Acara ditutup dengan doa bersama untuk keberkahan madrasah, keselamatan bangsa, dan penyerahan penghargaan kepada siswa berprestasi.'
    ],
    tags: ['Haflah Nihaiyah', 'Kegiatan Madrasah', 'Pendidikan Karakter', 'Batuampar']
  },
  {
    id: '2',
    slug: 'bayan-peraih-tahfidz-tingkat-regional',
    title: 'Membanggakan! Santri MI Tanwirul Qulub Raih Juara Tahfidz Tingkat Regional',
    category: 'Prestasi',
    date: 'Maret 2024',
    author: 'Koordinator Tahfidz',
    image: '/images/bayan-juara2.jpg',
    summary:
      'Siswa MI Tanwirul Qulub sukses mengukir prestasi gemilang dengan meraih juara pada ajang Musabaqah Hifdzil Qur’an tingkat regional.',
    content: [
      'Alhamdulillah, program unggulan Tahfidz Al-Qur\'an MI Tanwirul Qulub kembali mencatatkan capaian membanggakan. Siswa binaan program tahfidz berhasil meraih piala juara pada kompetisi hifdzil Qur’an.',
      'Penilaian mencakup kelancaran hafalan, ketepatan makharijul huruf, serta kaidah tajwid tartil. Prestasi ini membuktikan dedikasi asatidz dalam membimbing para santri.',
      '"Kami sangat bersyukur atas bimbingan para ustadz dan doa dari seluruh keluarga besar madrasah," tutur perwakilan pembina.',
      'Madrasah terus berkomitmen mengawal bimbingan Al-Qur\'an agar setiap lulusan memiliki bekal hafalan yang kokoh dan berakhlak mulia.'
    ],
    tags: ['Tahfidz', 'Prestasi Siswa', 'Al-Quran', 'Batuampar']
  },
  {
    id: '3',
    slug: 'kemah-mandiri-dan-penjelajahan-pramuka-lpi-nurul-islam',
    title: 'Kemah Mandiri & Apel Pramuka LPI Nurul Islam di Alam Terbuka',
    category: 'Kegiatan',
    date: 'Mei 2024',
    author: 'Pembina Pramuka',
    image: '/images/kemah-apel.jpg',
    summary:
      'Regu Pramuka MI Tanwirul Qulub antusias mengikuti kemah mandiri dan jelajah alam, melatih jiwa kepemimpinan, kemandirian, dan cinta lingkungan.',
    content: [
      'Guluk-Guluk, Sumenep – Kegiatan kepramukaan menjadi salah satu pilar pembentukan karakter tangguh siswa-siswi MI Tanwirul Qulub.',
      'Melalui kegiatan perkemahan mandiri, siswa dilatih mendirikan tenda, baris-berbaris, pionering, serta penjelajahan alam menyusuri bentang alam asri Desa Batuampar.',
      'Metode pembelajaran berbasis ketangkasan luar ruangan ini menumbuhkan rasa persaudaraan yang erat antar siswa serta kepedulian sosial yang tinggi.',
      'Kegiatan diakhiri dengan upacara api unggun dan pentas seni kreasi santri.'
    ],
    tags: ['Pramuka', 'Kemah Mandiri', 'LPI Nurul Islam', 'Karakter']
  },
  {
    id: '4',
    slug: 'pelaksanaan-ujian-madrasah-tertib-dan-lancar',
    title: 'Pelaksanaan Ujian Madrasah Berjalan Tertib, Lancar, dan Berintegritas',
    category: 'Pengumuman',
    date: 'Juni 2024',
    author: 'Panitia Ujian',
    image: '/images/ujian-madrasah.jpg',
    summary:
      'Seluruh peserta didik kelas akhir MI Tanwirul Qulub mengikuti Ujian Madrasah dengan penuh kesungguhan dan menjunjung tinggi nilai kejujuran.',
    content: [
      'Pelaksanaan Ujian Madrasah (UM) di MI Tanwirul Qulub berlangsung dengan suasana tenang, tertib, dan kondusif.',
      'Para guru pengawas memastikan jalannya ujian berlangsung objektif serta memberikan kenyamanan bagi setiap siswa dalam mengerjakan soal-soal asesmen.',
      'Hasil ujian ini menjadi salah satu tolak ukur ketercapaian kompetensi akademik dan keagamaan santri selama menempuh pendidikan dasar.',
      'Semoga seluruh siswa memperoleh hasil yang memuaskan dan ilmu yang berkah.'
    ],
    tags: ['Ujian Madrasah', 'Akademik', 'Kelulusan', 'Batuampar']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Upacara & Penjelajahan Pramuka Taquba Scout',
    category: 'Ekstrakurikuler',
    image: '/images/pramuka-lapangan.jpg',
    date: 'Kegiatan Rutin',
    description: 'Upacara pembukaan dan latihan kepramukaan siswa-siswi Taquba Scout di lapangan madrasah.'
  },
  {
    id: 'g2',
    title: 'Safari Ramadhan Bersama Santri Tahfidz Al-Qur\'an',
    category: 'Keagamaan',
    image: '/images/safari-ramadhan.jpg',
    date: 'Bulan Ramadhan',
    description: 'Siswa-siswi tahfidz melantunkan dan memuroja\'ah Al-Qur\'an di majelis mushalla Desa Batuampar.'
  },
  {
    id: 'g3',
    title: 'Kemah Apel Mandiri Santri LPI Nurul Islam',
    category: 'Ekstrakurikuler',
    image: '/images/kemah-apel.jpg',
    date: 'Tahunan',
    description: 'Apel kehormatan dan kemah mandiri santri dalam rangka membentuk kedisiplinan dan kemandirian.'
  },
  {
    id: 'g4',
    title: 'Prestasi Tahfidz Al-Qur\'an Tingkat Regional',
    category: 'Keagamaan',
    image: '/images/bayan-juara2.jpg',
    date: 'Prestasi Siswa',
    description: 'Siswa MI Tanwirul Qulub meraih kejuaraan tahfidz Al-Qur\'an pada ajang kompetisi regional.'
  },
  {
    id: 'g5',
    title: 'Jelajah Alam Pramuka di Hutan Bambu Batuampar',
    category: 'Ekstrakurikuler',
    image: '/images/pramuka-bambu.jpg',
    date: 'Kegiatan Outdoor',
    description: 'Pendidikan karakter cinta alam dan kebersamaan di lingkungan asri Desa Batuampar.'
  },
  {
    id: 'g6',
    title: 'Haflah Nihaiyah: Bangkit Membangun Masa Depan',
    category: 'Keagamaan',
    image: '/images/haflah.jpg',
    date: 'Pelepasan Siswa',
    description: 'Momen khidmat pelepasan dan wisuda kelulusan santriwan-santriwati MI Tanwirul Qulub.'
  },
  {
    id: 'g7',
    title: 'Pelaksanaan Ujian Madrasah Tertib & Lancar',
    category: 'Pembelajaran',
    image: '/images/ujian-madrasah.jpg',
    date: 'Evaluasi Belajar',
    description: 'Suasana ujian madrasah yang tenang dan berintegritas tinggi di ruang belajar madrasah.'
  },
  {
    id: 'g8',
    title: 'Barisan Regu Pramuka di Depan Kantor Madrasah',
    category: 'Ekstrakurikuler',
    image: '/images/pramuka-kantor.jpg',
    date: 'Kegiatan Rutin',
    description: 'Kesiapan barisan regu pramuka siaga dan penggalang MI Tanwirul Qulub sebelum kegiatan.'
  },
  {
    id: 'g9',
    title: 'Latihan Ketangkasan Bela Diri Karate INKAI',
    category: 'Ekstrakurikuler',
    image: '/images/karate-lapangan.jpg',
    date: 'Latihan Rutin',
    description: 'Siswa-siswi berlatih teknik dasar pukulan, tangkisan, dan kuda-kuda karate INKAI di halaman madrasah.'
  },
  {
    id: 'g10',
    title: 'Kontingen Juara & Pelatih Sabuk Hitam Karate INKAI',
    category: 'Ekstrakurikuler',
    image: '/images/karate-guru.jpg',
    date: 'Pembinaan Prestasi',
    description: 'Atlet karate cilik bersama asatidz pendamping dan pelatih Sabuk Hitam DAN 1 Mohammad Rasyad.'
  },
  {
    id: 'g11',
    title: 'Gedung Utama & Halaman MI Tanwirul Qulub',
    category: 'Fasilitas',
    image: '/images/gedung-madrasah.jpg',
    date: 'Lingkungan Madrasah',
    description: 'Pusat kegiatan belajar mengajar MI Tanwirul Qulub di kawasan asri Desa Batuampar, Guluk-Guluk.'
  },
  {
    id: 'g12',
    title: 'Apel Pagi Pembinaan Karakter & Kedisiplinan Siswa',
    category: 'Pembelajaran',
    image: '/images/apel-pagi.jpg',
    date: 'Pembiasaan Pagi',
    description: 'Suasana apel pagi dewan asatidz bersama seluruh santriwan-santriwati sebelum memulai KBM.'
  },
  {
    id: 'g13',
    title: 'Regu Pramuka Putra Taquba Siap Beraksi',
    category: 'Ekstrakurikuler',
    image: '/images/pramuka-pa.jpg',
    date: 'Kegiatan Pramuka',
    description: 'Kompak dan bersemangat, regu putra Taquba Scout dalam atribut lengkap pramuka madrasah.'
  },
  {
    id: 'g14',
    title: 'Latihan Formasi Baris-Berbaris Pramuka',
    category: 'Ekstrakurikuler',
    image: '/images/pramuka-berbaris.jpg',
    date: 'Latihan Ketangkasan',
    description: 'Menumbuhkan kekompakan, konsentrasi, dan ketertiban regu pramuka siaga dan penggalang.'
  },
  {
    id: 'g15',
    title: 'Safari Ramadhan Santri di Masjid Jamik Desa',
    category: 'Keagamaan',
    image: '/images/safari-masjid.jpg',
    date: 'Bulan Ramadhan',
    description: 'Siswa-siswi tahfidz melantunkan ayat suci Al-Qur\'an bersama masyarakat dan jamaah masjid.'
  },
  {
    id: 'g16',
    title: 'Dokumentasi Sejarah: Gedung Awal Madrasah (Tahun 2000)',
    category: 'Fasilitas',
    image: '/images/gedung-sejarah.jpg',
    date: 'Arsip Sejarah',
    description: 'Kilas balik gedung rintisan madrasah tahun 2000 sebagai saksi perjuangan dakwah pendidikan Islam.'
  },
  {
    id: 'g17',
    title: 'Semangat Juara Atlet Karate INKAI MI Tanwirul Qulub',
    category: 'Ekstrakurikuler',
    image: '/images/karate-atlet.jpg',
    date: 'Prestasi Bela Diri',
    description: 'Para atlet karateka cilik MI Tanwirul Qulub dalam seragam kebanggaan berlatih teknik Kumite & Kata.'
  },
  {
    id: 'g18',
    title: 'Brosur & Sosialisasi Resmi PPDB MI Tanwirul Qulub',
    category: 'Pembelajaran',
    image: '/images/ppdb-banner.jpg',
    date: 'Informasi PPDB',
    description: 'Publikasi resmi penerimaan peserta didik baru MI Tanwirul Qulub Batuampar, Guluk-Guluk, Sumenep.'
  },
  {
    id: 'g19',
    title: 'Juara 2 Kata Perorangan SD 4-6 Putri - Kejurkab INKAI 2023',
    category: 'Ekstrakurikuler',
    image: '/images/karate-juara-putri-kata2.jpg',
    date: '23 Oktober 2023',
    description: 'Santriwati MI Tanwirul Qulub di podium Juara 2 (Medali Perak) Kejuaraan Karate INKAI Se-Kabupaten Sumenep Piala Ketua KONI Ke-II.'
  },
  {
    id: 'g20',
    title: 'Juara 3 Kata Perorangan SD 4-6 Putra - Kejurkab INKAI 2023',
    category: 'Ekstrakurikuler',
    image: '/images/karate-juara-putra-kata3.jpg',
    date: '23 Oktober 2023',
    description: 'Santri MI Tanwirul Qulub di podium Juara 3 (Medali Perunggu) Kata Perorangan SD 4-6 Putra Kejurkab INKAI Kabupaten Sumenep.'
  },
  {
    id: 'g21',
    title: 'Juara 3 Kata Perorangan SD 4-6 Putri - Kejurkab INKAI 2023',
    category: 'Ekstrakurikuler',
    image: '/images/karate-juara-putri-kata3.jpg',
    date: '23 Oktober 2023',
    description: 'Santriwati MI Tanwirul Qulub memegang medali dan piagam penghargaan Juara 3 Kata Perorangan Putri Kejurkab INKAI Sumenep 2023.'
  }
];

export const TEACHERS: TeacherItem[] = [
  {
    id: 't1',
    name: 'Kholilurrahman, S.Pd.',
    role: 'Kepala Madrasah & Penanggung Jawab',
    education: 'S.Pd.',
    photo: '/images/apel-pagi.jpg',
    category: 'Pimpinan',
    quote: 'Mendidik dengan hati, meneladankan akhlak karimah.',
    isPlaceholder: false
  },
  {
    id: 't2',
    name: 'Ustadzah / Waka Kurikulum',
    role: 'Waka Kurikulum & Guru Tematik',
    education: 'S.Pd',
    photo: '/images/haflah.jpg',
    category: 'Pimpinan',
    quote: 'Membimbing kecintaan membaca dan berhitung dengan ceria.',
    isPlaceholder: false
  },
  {
    id: 't3',
    name: 'Koordinator Tahfidz Al-Qur\'an',
    role: 'Guru Al-Qur\'an & Pembina Tahfidz',
    education: 'Al-Hafidz / S.Pd.I',
    photo: '/images/safari-ramadhan.jpg',
    category: 'Tahfidz',
    quote: 'Menanamkan Al-Qur\'an di dada generasi masa depan.',
    isPlaceholder: false
  },
  {
    id: 't4',
    name: 'Ustadzah / Pembina Santri Putri',
    role: 'Wali Kelas & Pembimbing Hafidzah',
    education: 'S.Pd.I',
    photo: '/images/safari-masjid.jpg',
    category: 'Guru Kelas',
    quote: 'Membina adab salaf, kesantunan, dan keanggunan akhlak santri.',
    isPlaceholder: false
  },
  {
    id: 't5',
    name: 'Mohammad Rasyad & Pembina Ekstra',
    role: 'Pelatih Karate INKAI (Sabuk Hitam DAN 1)',
    education: 'Pelatih Berlisensi INKAI',
    photo: '/images/karate-guru.jpg',
    category: 'Ekstrakurikuler',
    quote: 'Membina raga yang sehat, tangguh, dan bermental juara.',
    isPlaceholder: false
  },
  {
    id: 't6',
    name: 'Pembina Pramuka Taquba Scout',
    role: 'Guru Penjaskes & Pembina Kepramukaan',
    education: 'S.Pd / KMD Pramuka',
    photo: '/images/pramuka-kantor.jpg',
    category: 'Ekstrakurikuler',
    quote: 'Membentuk kemandirian, kekompakan, dan cinta tanah air.',
    isPlaceholder: false
  },
  {
    id: 't7',
    name: 'Ustadz / Guru PAI & Bahasa Arab',
    role: 'Guru Fiqih, SKI & Bahasa Arab',
    education: 'S.Pd.I',
    photo: '/images/kemah-apel.jpg',
    category: 'Guru Kelas',
    quote: 'Menghidupkan kecintaan pada bahasa Al-Qur’an dan syariat Islam.',
    isPlaceholder: false
  },
  {
    id: 't8',
    name: 'Tata Usaha & Operator Madrasah',
    role: 'Pengelola EMIS, Simpatika & Administrasi',
    education: 'S.Kom / A.Ma',
    photo: '/images/ujian-madrasah.jpg',
    category: 'Staf',
    quote: 'Pelayanan administrasi prima, tertib, dan transparan.',
    isPlaceholder: false
  }
];

export const PPDB_INFO = {
  academicYear: '2026/2027',
  status: 'Pendaftaran Dibuka',
  batches: [
    {
      batch: 'Gelombang 1 (Jalur Prestasi & Khusus)',
      period: '01 Januari – 31 Maret 2026',
      benefit: 'Prioritas penerimaan & subsidi seragam khusus',
      status: 'Sedang Berlangsung'
    },
    {
      batch: 'Gelombang 2 (Jalur Reguler)',
      period: '01 April – 10 Juli 2026',
      benefit: 'Penerimaan reguler selama kuota masih tersedia',
      status: 'Mendatang'
    }
  ],
  requirements: [
    'Mengisi Formulir Pendaftaran (Online / Offline di madrasah)',
    'Fotokopi Akta Kelahiran Calon Siswa (2 lembar)',
    'Fotokopi Kartu Keluarga (KK) (2 lembar)',
    'Fotokopi KTP kedua orang tua/wali (masing-masing 2 lembar)',
    'Pas foto calon siswa ukuran 3x4 berwarna (3 lembar)',
    'Surat keterangan lulus / ijazah dari RA/TK (bila ada/menyusul)',
    'Fotokopi KIP / PKH / KPS bagi pemegang bantuan sosial (jika ada)'
  ],
  steps: [
    {
      step: '1',
      title: 'Pengisian Formulir',
      desc: 'Isi formulir online di website ini atau ambil berkas langsung di kantor sekretariat MI Tanwirul Qulub Batuampar.'
    },
    {
      step: '2',
      title: 'Konfirmasi via WhatsApp',
      desc: 'Kirim bukti pendaftaran ke nomor WhatsApp resmi panitia PPDB untuk verifikasi berkas awal.'
    },
    {
      step: '3',
      title: 'Observasi Ramah Anak',
      desc: 'Pertemuan santai dan ramah bersama guru untuk pemetaan minat, bakat, serta kesiapan belajar anak (bukan tes eliminasi).'
    },
    {
      step: '4',
      title: 'Daftar Ulang & Pembagian Seragam',
      desc: 'Penyelesaian administrasi sederhana dan pengambilan perlengkapan madrasah.'
    },
    {
      step: '5',
      title: 'Masuk Masa Ta\'aruf Siswa Madrasah (MATSAMA)',
      desc: 'Pengenalan lingkungan madrasah dengan riang dan gembira bersama teman-teman baru.'
    }
  ],
  faqs: [
    {
      q: 'Berapa usia minimal untuk mendaftar kelas 1 di MI Tanwirul Qulub?',
      a: 'Usia ideal calon siswa adalah 6 tahun pada tanggal 1 Juli tahun berjalan. Untuk usia 5 tahun 8 bulan dapat dipertimbangkan dengan rekomendasi kesiapan belajar dari dewan guru atau psikolog/guru RA/TK asal.'
    },
    {
      q: 'Apakah anak yang belum bisa membaca lancar bisa diterima?',
      a: 'Tentu bisa. MI Tanwirul Qulub memiliki program bimbingan transisi literasi awal yang ramah dan sabar, membantu anak belajar membaca dan mengenal huruf secara menyenangkan.'
    },
    {
      q: 'Bagaimana jika anak belum pernah sekolah di RA/TK sebelumnya?',
      a: 'Pendaftaran tetap diterima. Tim asatidz akan melakukan pendampingan khusus agar anak merasa nyaman beradaptasi di lingkungan sekolah baru.'
    },
    {
      q: 'Apakah ada biaya pendaftaran formulir?',
      a: 'Untuk formulir pendaftaran tidak dipungut biaya (gratis). Informasi kontribusi seragam dan buku disampaikan secara transparan saat daftar ulang.'
    }
  ]
};

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    id: 'e1',
    slug: 'karate-inkai',
    name: 'Bela Diri Karate INKAI',
    category: 'Bela Diri',
    tagline: 'Membentuk Mental Tangguh, Disiplin Tinggi, dan Berprestasi di Gelanggang',
    description:
      'Ekstrakurikuler bela diri resmi berafiliasi dengan Institut Karate-Do Indonesia (INKAI). Melatih ketahanan fisik, reflek motorik, teknik dasar Kata dan Kumite, serta menanamkan sumpah karate: kejujuran, kepribadian, ketekunan, dan pengendalian diri.',
    coach: 'Mohammad Rasyad',
    coachRole: 'Pelatih Berlisensi Sabuk Hitam DAN 1 INKAI',
    schedule: 'Setiap Hari Sabtu, 14.00 - 16.30 WIB',
    location: 'Halaman Utama MI Tanwirul Qulub',
    badge: 'Unggulan Berprestasi',
    iconName: 'Award',
    achievements: [
      'Juara 2 Kata Perorangan SD 4-6 Putri - Kejurkab INKAI Sumenep Piala Ketua KONI Ke-II',
      'Juara 3 Kata Perorangan SD 4-6 Putra - Kejurkab INKAI Sumenep Piala Ketua KONI Ke-II',
      'Juara 3 Kata Perorangan SD 4-6 Putri - Kejurkab INKAI Sumenep (Medali & Piagam)',
      'Pengiriman Delegasi Atlet Kejuaraan Antar Dojo & Ranting INKAI Pelajar Madura'
    ],
    benefits: [
      'Pelatihan teknik dasar Kihon, Kata, dan Kumite standar perguruan karate nasional',
      'Membangun stamina jasmani, kelenturan tubuh, dan perlindungan diri yang positif',
      'Penanaman karakter ksatria: pantang menyerah, menghormati lawan, dan rendah hati',
      'Fasilitas seragam latihan resmi madrasah dan pembinaan kontingen kejuaraan'
    ],
    photos: [
      {
        url: '/images/karate-juara-putri-kata2.jpg',
        caption: 'Podium Juara 2 (Medali Perak) Kata Perorangan SD Putri Kejurkab INKAI Sumenep Piala Ketua KONI',
        tag: 'Juara 2 Kejurkab'
      },
      {
        url: '/images/karate-juara-putra-kata3.jpg',
        caption: 'Podium Juara 3 (Medali Perunggu) Kata Perorangan SD Putra Kejurkab INKAI Sumenep',
        tag: 'Juara 3 Kejurkab'
      },
      {
        url: '/images/karate-juara-putri-kata3.jpg',
        caption: 'Santriwati MI Tanwirul Qulub meraih Juara 3 Kata Putri dan piagam penghargaan KONI',
        tag: 'Medali & Piagam'
      },
      {
        url: '/images/karate-guru.jpg',
        caption: 'Kontingen atlet cilik bersama pelatih Sabuk Hitam DAN 1 Mohammad Rasyad dan dewan guru',
        tag: 'Kontingen & Pelatih'
      },
      {
        url: '/images/karate-lapangan.jpg',
        caption: 'Sesi latihan pemantapan teknik pukulan dan kuda-kuda di halaman madrasah',
        tag: 'Latihan Lapangan'
      },
      {
        url: '/images/karate-atlet.jpg',
        caption: 'Para karateka cilik berseragam resmi madrasah siap bertanding dengan penuh semangat',
        tag: 'Kesiapan Atlet'
      }
    ]
  },
  {
    id: 'e2',
    slug: 'pramuka-taquba-scout',
    name: 'Pramuka Taquba Scout',
    category: 'Kepramukaan',
    tagline: 'Satyaku Kudarmakan, Darmaku Kubaktikan untuk Agama dan Bangsa',
    description:
      'Gugus Depan Pramuka MI Tanwirul Qulub (Taquba Scout) mewadahi golongan Siaga dan Penggalang. Berfokus pada pembentukan kepemimpinan, kepedulian lingkungan, kemandirian, dan keterampilan luar ruangan melalui metode kepramukaan yang ceria.',
    coach: 'Ustadz Pembina KMD Pramuka',
    coachRole: 'Pembina Pramuka Siaga & Penggalang',
    schedule: 'Setiap Hari Sabtu, 08.00 - 10.30 WIB',
    location: 'Pangkalan MI Tanwirul Qulub & Alam Terbuka',
    badge: 'Karakter & Kemandirian',
    iconName: 'Compass',
    achievements: [
      'Penyelenggaraan Perkemahan Mandiri Santri LPI Nurul Islam Batuampar',
      'Regu Teladan Penjelajahan Alam dan Ketangkasan Tandu Tingkat Gugus Depan',
      'Partisipasi Aktif Apel dan Jambore Ranting Gerakan Pramuka Kecamatan Guluk-Guluk'
    ],
    benefits: [
      'Pelatihan kepemimpinan regu, kerjasama tim, dan ketahanan mental mandiri',
      'Keterampilan tali-temali, pionering, morse, semaphore, dan sandi kepramukaan',
      'Penjelajahan alam pedesaan Batuampar dan edukasi kecintaan pada lingkungan hidup',
      'Pendidikan baris-berbaris (PBB) guna mengasah kedisiplinan dan kerapian sikap'
    ],
    photos: [
      {
        url: '/images/pramuka-lapangan.jpg',
        caption: 'Apel pembukaan dan latihan formasi baris-berbaris siswa Taquba Scout di halaman madrasah',
        tag: 'Apel Lapangan'
      },
      {
        url: '/images/kemah-apel.jpg',
        caption: 'Apel kehormatan perkemahan mandiri santri LPI Nurul Islam di alam terbuka',
        tag: 'Kemah Mandiri'
      },
      {
        url: '/images/pramuka-berbaris.jpg',
        caption: 'Formasi barisan regu pramuka siaga dan penggalang berlatih kekompakan gerak',
        tag: 'Baris-Berbaris'
      },
      {
        url: '/images/pramuka-pa.jpg',
        caption: 'Regu putra Taquba Scout dalam balutan atribut seragam pramuka lengkap',
        tag: 'Regu Putra'
      },
      {
        url: '/images/pramuka-bambu.jpg',
        caption: 'Kegiatan penjelajahan alam menyusuri bentang alam pedesaan Batuampar yang asri',
        tag: 'Jelajah Alam'
      },
      {
        url: '/images/pramuka-kantor.jpg',
        caption: 'Barisan regu santri berkumpul dengan tertib di depan kantor utama madrasah',
        tag: 'Depan Kantor'
      }
    ]
  },
  {
    id: 'e3',
    slug: 'al-banjari',
    name: 'Seni Hadrah & Sholawat Al-Banjari',
    category: 'Seni Islami',
    tagline: 'Menumbuhkan Kecintaan kepada Baginda Nabi Lewat Lantunan Sholawat',
    description:
      'Wadah seni musik perkusi islami yang mendidik santri mahir memukul rebana/terbang banjari, menyelaraskan vokal sholawat nabi, serta mendalami bait-bait maulid Simthudduror dan Diba’i dalam suasana kekeluargaan islami.',
    coach: 'Ustadz Pembina Seni Islami',
    coachRole: 'Pelatih Musik Terbang Banjari & Vokal',
    schedule: 'Setiap Hari Kamis, 14.00 - 15.30 WIB',
    location: 'Aula & Mushalla MI Tanwirul Qulub',
    badge: 'Tradisi & Syiar Islami',
    iconName: 'Sparkles',
    achievements: [
      'Grup Hadrah Pengiring Utama Prosesi Wisuda Haflah Nihaiyah Santri',
      'Tim Safari Sholawat Ramadhan di Masjid & Mushalla Desa Batuampar',
      'Penampil Kreasi Seni Musik Religi pada Peringatan Hari Besar Islam (PHBI)'
    ],
    benefits: [
      'Penguasaan variasi ketukan terbang Al-Banjari (Golan, Anakan, Bass, dan Tam)',
      'Pelatihan olah vokal, nada maqam sholawat, dan harmoni suara tim paduan sholawat',
      'Menanamkan kecintaan dan mahabbah mendalam kepada Rasulullah SAW sejak dini',
      'Melatih rasa percaya diri tampil di panggung majelis umum dan acara madrasah'
    ],
    photos: [
      {
        url: '/images/haflah.jpg',
        caption: 'Penampilan grup banjari sholawat santri memeriahkan panggung wisuda Haflah Nihaiyah',
        tag: 'Haflah Nihaiyah'
      },
      {
        url: '/images/safari-ramadhan.jpg',
        caption: 'Lantunan sholawat dan muroja\'ah ayat suci pada majelis berkah Ramadhan',
        tag: 'Majelis Sholawat'
      },
      {
        url: '/images/safari-masjid.jpg',
        caption: 'Safari syiar sholawat bersama dewan guru dan jamaah Masjid Jamik Desa Batuampar',
        tag: 'Safari Syiar'
      }
    ]
  },
  {
    id: 'e4',
    slug: 'tahfidz-club',
    name: 'Club Tahfidz & Tartil Al-Qur\'an',
    category: 'Keagamaan',
    tagline: 'Memuliakan Kalamullah, Meraih Mahkota Kemuliaan di Akhirat',
    description:
      'Kelompok bimbingan intensif bagi santri yang memiliki minat tinggi dalam menghafal Al-Qur’an Juz 30 dan surat-surat pilihan, membaguskan makhraj, memperdalam kaidah tajwid tartil, serta dipersiapkan mengikuti musabaqah tilawatil Qur’an.',
    coach: 'Koordinator Tahfidz Al-Qur\'an',
    coachRole: 'Pembina Tahfidz & Sanad Al-Qur\'an',
    schedule: 'Sabtu - Kamis, 07.00 - 07.45 WIB & Sore Hari Berkala',
    location: 'Ruang Khusus Tahfidz & Mushalla Madrasah',
    badge: 'Program Mahkota',
    iconName: 'BookOpen',
    achievements: [
      'Juara Musabaqah Hifdzil Qur’an (MHQ) Tingkat Regional Madura',
      'Wisuda Tahfidz Juz 30 Bertahap Tiap Tahun Pelajaran',
      'Uji Tasmi’ Hafalan Sekali Duduk di Hadapan Dewan Asatidz dan Wali Santri'
    ],
    benefits: [
      'Bimbingan setoran talaqqi rutin langsung dengan ustadz bersanad Al-Qur’an',
      'Metode menghafal ramah anak yang menyenangkan tanpa membebani mental',
      'Pemantapan makharijul huruf, sifat huruf, kaidah mad, waqaf, dan ghunnah',
      'Penanaman adab sholih para penghafal kalamullah dalam kehidupan sehari-hari'
    ],
    photos: [
      {
        url: '/images/bayan-juara2.jpg',
        caption: 'Santri binaan tahfidz meraih piala penghargaan Juara pada ajang MHQ tingkat regional',
        tag: 'Podium Juara MHQ'
      },
      {
        url: '/images/safari-ramadhan.jpg',
        caption: 'Santriwati dan santriwan tahfidz memuroja\'ah hafalan Juz 30 secara tartil',
        tag: 'Muroja\'ah Tartil'
      },
      {
        url: '/images/safari-masjid.jpg',
        caption: 'Pembiasaan tadarus Al-Qur\'an dan bimbingan adab islami di majelis ibadah',
        tag: 'Tadarus Tartil'
      }
    ]
  }
];

