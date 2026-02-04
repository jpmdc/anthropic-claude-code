import { motion } from 'framer-motion';
import {
  Brain,
  Gamepad2,
  Music,
  Box,
  Rocket,
  Accessibility,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Features() {
  const { t } = useApp();

  const features = [
    {
      icon: Brain,
      title: t.features.quiz.title,
      description: t.features.quiz.description,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    },
    {
      icon: Gamepad2,
      title: t.features.games.title,
      description: t.features.games.description,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    },
    {
      icon: Music,
      title: t.features.songs.title,
      description: t.features.songs.description,
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    },
    {
      icon: Box,
      title: t.features.rendering.title,
      description: t.features.rendering.description,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    {
      icon: Rocket,
      title: t.features.pilot.title,
      description: t.features.pilot.description,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      icon: Accessibility,
      title: t.features.accessibility.title,
      description: t.features.accessibility.description,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="features"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}
        >
          <span
            style={{
              display: 'inline-block',
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
            {t.features.tagline}
          </span>
          <h2 style={{ marginBottom: 'var(--space-md)' }}>{t.features.title}</h2>
          <p
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
            }}
          >
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                position: 'relative',
                padding: 'var(--space-xl)',
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-primary)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = feature.color;
                target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${feature.color}30`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = 'var(--border-primary)';
                target.style.boxShadow = 'none';
              }}
            >
              {/* Gradient line at top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: feature.gradient,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform var(--transition-base)',
                }}
                className={`feature-line-${index}`}
              />

              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-lg)',
                  background: `${feature.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h4
                style={{
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}
              >
                {feature.title}
                <ArrowUpRight
                  size={16}
                  style={{
                    color: 'var(--text-tertiary)',
                    transition: 'all var(--transition-fast)',
                  }}
                />
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>

              {/* Hover effect background */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-100%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, ${feature.color}08 0%, transparent 50%)`,
                  transition: 'bottom var(--transition-slow)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
