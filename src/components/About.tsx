import { motion } from 'framer-motion';
import { Lightbulb, Globe, Shield, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function About() {
  const { t } = useApp();

  const values = [
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      color: '#f59e0b',
    },
    {
      icon: Globe,
      title: t.about.values.accessibility.title,
      description: t.about.values.accessibility.description,
      color: '#06b6d4',
    },
    {
      icon: Shield,
      title: t.about.values.privacy.title,
      description: t.about.values.privacy.description,
      color: '#10b981',
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid var(--border-secondary)',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          border: '1px solid var(--border-secondary)',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-xs) var(--space-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              <Sparkles size={14} />
              {t.about.tagline}
            </span>

            <h2 style={{ marginBottom: 'var(--space-lg)' }}>
              {t.about.title}
            </h2>

            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-lg)',
                lineHeight: 1.8,
              }}
            >
              {t.about.description}
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.8,
                paddingLeft: 'var(--space-lg)',
                borderLeft: '3px solid var(--brand-primary)',
              }}
            >
              {t.about.vision}
            </p>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)',
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-primary)',
                  transition: 'all var(--transition-base)',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: `${value.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <value.icon size={24} style={{ color: value.color }} />
                </div>
                <div>
                  <h5 style={{ marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>
                    {value.title}
                  </h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Tech Stack Badges */}
            <div style={{ marginTop: 'var(--space-md)' }}>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Powered by
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                {['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision', 'Edge AI'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: 'var(--space-xs) var(--space-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
}
