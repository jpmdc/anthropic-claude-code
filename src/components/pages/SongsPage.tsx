import { motion } from 'framer-motion';
import { Music, Headphones, Mic2, Volume2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function SongsPage() {
  const { t } = useApp();

  const features = [
    {
      icon: Music,
      title: 'Musical Mnemonics',
      description: 'Transform complex concepts into catchy tunes that stick in memory.',
    },
    {
      icon: Headphones,
      title: 'Audio Learning',
      description: 'Perfect for auditory learners who absorb information better through sound.',
    },
    {
      icon: Mic2,
      title: 'Sing-Along Mode',
      description: 'Active participation through singing reinforces learning and boosts confidence.',
    },
    {
      icon: Volume2,
      title: 'Multi-Language',
      description: 'Songs available in multiple languages to support bilingual education.',
    },
  ];

  const subjects = [
    { name: 'Mathematics', emoji: '🔢' },
    { name: 'Science', emoji: '🔬' },
    { name: 'History', emoji: '📜' },
    { name: 'Languages', emoji: '🗣️' },
    { name: 'Geography', emoji: '🌍' },
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
              color: '#EC4899',
              background: 'rgba(236, 72, 153, 0.1)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}
          >
            {t.products.songs.status}
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            {t.products.songs.title}
          </h1>
          <p className="subtitle" style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.products.songs.description} Because what you sing, you remember.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">
              Listen Now
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>Available Subjects</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {subjects.map((subject) => (
              <div
                key={subject.name}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{subject.emoji}</span>
                {subject.name}
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
          className="songs-features-grid"
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
                  background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
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

        {/* Audio Wave Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-2xl)',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(244, 114, 182, 0.05) 100%)',
            border: '1px solid rgba(236, 72, 153, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <Music size={48} style={{ color: '#EC4899', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Coming in Beta</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Join our beta program to be among the first to experience music-powered learning.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .songs-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
