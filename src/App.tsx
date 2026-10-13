import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ProfilPage } from './pages/ProfilPage';
import { AkademikPage } from './pages/AkademikPage';
import { BeritaListPage } from './pages/BeritaListPage';
import { BeritaDetailPage } from './pages/BeritaDetailPage';
import { GaleriPage } from './pages/GaleriPage';
import { PPDBInfoPage } from './pages/PPDBInfoPage';
import { PPDBFormPage } from './pages/PPDBFormPage';
import { KontakPage } from './pages/KontakPage';
import { GTKPage } from './pages/GTKPage';
import { EkstrakurikulerPage } from './pages/EkstrakurikulerPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#1F2937]">
        {/* Header with Top Announcement Bar & Sticky Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/gtk" element={<GTKPage />} />
            <Route path="/guru" element={<Navigate to="/gtk" replace />} />
            <Route path="/akademik" element={<AkademikPage />} />
            <Route path="/ekstrakurikuler" element={<EkstrakurikulerPage />} />
            <Route path="/ekstra" element={<Navigate to="/ekstrakurikuler" replace />} />
            <Route path="/berita" element={<BeritaListPage />} />
            <Route path="/berita/:slug" element={<BeritaDetailPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/ppdb" element={<PPDBInfoPage />} />
            <Route path="/ppdb/daftar" element={<PPDBFormPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Official School Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
