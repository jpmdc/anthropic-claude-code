import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComfortPanel from './components/ComfortPanel';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import QuizPage from './components/pages/QuizPage';
import GamesPage from './components/pages/GamesPage';
import SongsPage from './components/pages/SongsPage';
import RenderingPage from './components/pages/RenderingPage';
import PilotPage from './components/pages/PilotPage';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
      <ComfortPanel />
    </>
  );
}

function ProductPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ComfortPanel />
    </>
  );
}

function LegalPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ComfortPanel />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<LegalPageLayout><Privacy /></LegalPageLayout>} />
          <Route path="/terms" element={<LegalPageLayout><Terms /></LegalPageLayout>} />
          <Route path="/quiz" element={<ProductPageLayout><QuizPage /></ProductPageLayout>} />
          <Route path="/games" element={<ProductPageLayout><GamesPage /></ProductPageLayout>} />
          <Route path="/songs" element={<ProductPageLayout><SongsPage /></ProductPageLayout>} />
          <Route path="/rendering" element={<ProductPageLayout><RenderingPage /></ProductPageLayout>} />
          <Route path="/pilot" element={<ProductPageLayout><PilotPage /></ProductPageLayout>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
