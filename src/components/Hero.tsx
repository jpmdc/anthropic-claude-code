import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--accent)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                marginBottom: '1.5rem',
              }}
            >
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '1.5rem', color: 'var(--text)' }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
            }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary">
              {t.hero.cta}
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn btn-secondary">
              {t.hero.secondary}
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {t.hero.backed}
            </p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {['Station F', 'BPI France', 'EdTech France'].map((partner) => (
                <span
                  key={partner}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
