import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { t, setIsPanelOpen, language, setLanguage, resolvedTheme } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: t.nav.products, href: isHome ? '#products' : '/#products' },
    { label: t.nav.about, href: isHome ? '#about' : '/#about' },
    { label: t.nav.contact, href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={resolvedTheme === 'dark' ? '/images/neurostell_white.png' : '/images/neurostell.png'}
            alt="NeuroStell"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Accessibility Toggle */}
          <button
            onClick={() => setIsPanelOpen(true)}
            style={{
              padding: '0.5rem 0.875rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent)',
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent)',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-glow)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            Aa
          </button>

          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            style={{
              padding: '0.5rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Mobile menu */}
          <button
            className="show-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--text)',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: 'var(--text)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
