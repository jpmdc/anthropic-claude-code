import { motion } from 'framer-motion';
import { Palette, Eye, Sparkles, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function RenderingPage() {
  const { t } = useApp();

  const features = [
    {
      icon: Palette,
      title: 'Personalized Display',
      description: 'Content automatically adapts its visual presentation to each learner\'s preferences and needs.',
    },
    {
      icon: Eye,
      title: 'Cognitive Optimization',
      description: 'Typography, colors, and spacing adjust based on individual cognitive profiles.',
    },
    {
      icon: Sparkles,
      title: 'Dynamic Content',
      description: 'Same content, uniquely rendered for each user to maximize comprehension.',
    },
    {
      icon: Users,
      title: 'Universal Accessibility',
      description: 'Built-in support for dyslexia, visual impairments, and other learning differences.',
    },
  ];

  const adaptations = [
    { name: 'Typography', icon: '🔤', desc: 'Font style, size, spacing' },
    { name: 'Colors', icon: '🎨', desc: 'Contrast and color schemes' },
    { name: 'Layout', icon: '📐', desc: 'Content structure and flow' },
    { name: 'Pacing', icon: '⏱️', desc: 'Reading speed and breaks' },
    { name: 'Complexity', icon: '📊', desc: 'Content depth and detail' },
  ];

  return (
    <div className="page-content">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '720px', marginBottom: 'var(--space-3xl)' }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#10B981',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}
          >
            {t.products.rendering.status}
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            Adaptive Rendering
          </h1>
          <p className="subtitle" style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.products.rendering.description} Every learner sees content rendered uniquely for their cognitive profile—same material, personalized presentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Adaptations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>What Adapts</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {adaptations.map((item) => (
              <div
                key={item.name}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="rendering-features-grid"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="card"
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <feature.icon size={24} color="white" />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-2xl)',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <Palette size={48} style={{ color: '#10B981', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Experience Adaptive Rendering</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Try the "Display" button in the header to see how content can adapt to your preferences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Request Demo
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rendering-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
