import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function About() {
  const { t } = useApp();

  return (
    <section
      id="about"
      style={{
        padding: 'var(--space-3xl) 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left - Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>{t.about.title}</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {t.about.description}
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {t.about.stats.map((stat, i) => {
              const colors = ['var(--accent)', 'var(--accent-secondary)', 'var(--accent-tertiary, #F59E0B)'];
              return (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${colors[i]}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: colors[i],
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
