import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function Features() {
  const { t } = useApp();

  return (
    <section id="features" style={{ padding: 'var(--space-3xl) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--space-2xl)' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t.features.title}</h2>
          <p style={{ maxWidth: '560px', fontSize: '1.125rem' }}>
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="features-grid"
        >
          {t.features.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: 'var(--space-lg)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--accent)',
                  opacity: 0.1,
                  marginBottom: '1rem',
                }}
              />
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
