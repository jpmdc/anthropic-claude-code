import { motion } from 'framer-motion';
import { Brain, CheckCircle, BarChart3, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function QuizPage() {
  const { t } = useApp();

  const features = [
    {
      icon: Brain,
      title: 'Adaptive Difficulty',
      description: 'Questions automatically adjust to each learner\'s level, providing the right challenge at every step.',
    },
    {
      icon: CheckCircle,
      title: 'Instant Feedback',
      description: 'Immediate, constructive feedback helps learners understand mistakes and reinforce correct answers.',
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Detailed insights into learning patterns, strengths, and areas that need more attention.',
    },
    {
      icon: Sparkles,
      title: 'Multi-Format Questions',
      description: 'Multiple choice, fill-in-the-blank, matching, and more to engage different learning styles.',
    },
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
              color: 'var(--accent)',
              background: 'var(--accent-glow)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}
          >
            {t.products.quiz.status}
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            {t.products.quiz.title}
          </h1>
          <p className="subtitle" style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.products.quiz.description} Our adaptive quiz system ensures optimal challenge and engagement for every learner.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">
              Try Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="quiz-features-grid"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card"
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

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-2xl)',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>See It In Action</h3>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Experience how our adaptive quiz system responds to different learning styles and abilities.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ padding: '1rem 2rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent)' }}>95%</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Engagement Rate</div>
            </div>
            <div style={{ padding: '1rem 2rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent-secondary)' }}>3x</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Better Retention</div>
            </div>
            <div style={{ padding: '1rem 2rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent-tertiary, #F59E0B)' }}>40%</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Time Saved</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quiz-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
