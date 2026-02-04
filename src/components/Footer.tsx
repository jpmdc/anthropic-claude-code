import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t, resolvedTheme } = useApp();

  return (
    <footer
      style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img
            src={resolvedTheme === 'dark' ? '/images/neurostell_white.png' : '/images/neurostell.png'}
            alt="NeuroStell"
            style={{ height: '24px', width: 'auto' }}
          />
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {t.footer.copyright}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {t.footer.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
