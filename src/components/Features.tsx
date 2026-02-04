import { motion } from 'framer-motion';
import { Brain, Sparkles, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Features() {
  const { t } = useApp();

  const icons = [Brain, Sparkles, Users];

  return (
    <section id="features" style={{ padding: 'var(--space-3xl) 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--space-2xl)', maxWidth: '560px' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t.features.title}</h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
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
          {t.features.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ background: 'var(--bg)' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: '0 4px 14px var(--accent-glow)',
                  }}
                >
                  <Icon size={24} color="white" />
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
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
