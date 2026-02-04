import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t, resolvedTheme } = useApp();

  return (
    <footer
      style={{
        padding: 'var(--space-2xl) 0 var(--space-lg)',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-subtle)',
      }}
    >
      <div className="container">
        {/* Main Footer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-2xl)',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src={resolvedTheme === 'dark' ? '/images/neurostell_white.png' : '/images/neurostell.png'}
                alt="NeuroStell"
                style={{ height: '28px', width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: '0.9375rem', maxWidth: '320px', lineHeight: 1.6 }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {t.footer.links.company.map((link) => (
                <li key={link} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href="#about"
                    style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link
                  to="/privacy"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t.footer.links.legal[0]}
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link
                  to="/terms"
                  style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {t.footer.links.legal[1]}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-lg)',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {t.footer.copyright}
          </span>
          <a
            href="https://neurostell.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            NeuroStell.com
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: var(--space-lg) !important; }
        }
      `}</style>
    </footer>
  );
}
