import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { t, setIsPanelOpen, language, setLanguage, resolvedTheme } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.quiz, href: '#features' },
    { label: t.nav.games, href: '#features' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-fixed)',
        padding: 'var(--space-md) 0',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all var(--transition-base)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            textDecoration: 'none',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={resolvedTheme === 'dark' ? '/images/neurostell_white.png' : '/images/neurostell.png'}
            alt="NeuroStell"
            style={{
              height: '40px',
              width: 'auto',
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-lg)',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
              }}
              whileHover={{ color: 'var(--brand-primary)' }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {/* Language Toggle */}
          <motion.button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            style={{
              padding: 'var(--space-sm) var(--space-md)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
            whileHover={{ borderColor: 'var(--brand-primary)' }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </motion.button>

          {/* Comfort Panel Toggle */}
          <motion.button
            onClick={() => setIsPanelOpen(true)}
            style={{
              padding: 'var(--space-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{ borderColor: 'var(--brand-primary)', background: 'var(--bg-elevated)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open comfort settings"
          >
            <Settings size={18} />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              padding: 'var(--space-sm)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
            whileHover={{ borderColor: 'var(--brand-primary)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--glass-border)',
              overflow: 'hidden',
            }}
            className="mobile-menu"
          >
            <div className="container" style={{ padding: 'var(--space-lg)' }}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'block',
                    padding: 'var(--space-md) 0',
                    color: 'var(--text-primary)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-secondary)',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
