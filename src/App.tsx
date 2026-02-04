import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComfortPanel from './components/ComfortPanel';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
          <About />
          <Contact />
        </main>
        <Footer />
        <ComfortPanel />
      </div>
    </AppProvider>
  );
}

export default App;
