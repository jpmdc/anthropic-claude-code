import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComfortPanel from './components/ComfortPanel';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
      <ComfortPanel />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <Header />
      <Privacy />
      <Footer />
      <ComfortPanel />
    </>
  );
}

function TermsPage() {
  return (
    <>
      <Header />
      <Terms />
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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
