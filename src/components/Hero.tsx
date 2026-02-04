import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        overflow: 'hidden',
      }}
    >
      {/* Vibrant gradient background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150%',
          height: '100%',
          background: 'var(--hero-gradient, var(--gradient-subtle))',
          pointerEvents: 'none',
        }}
      />

      {/* Neural grid pattern */}
      <div
        className="neural-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '720px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--accent)',
                background: 'var(--bg-muted)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: 'pulse 2s infinite',
                }}
              />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: '1.5rem' }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.1875rem',
              lineHeight: 1.7,
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.hero.backed}
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {['Station F', 'BPI France', 'EdTech France'].map((partner) => (
                <span
                  key={partner}
                  style={{
                    fontSize: '1rem',
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

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
