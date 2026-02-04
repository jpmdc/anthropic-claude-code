import { motion } from 'framer-motion';
import { Rocket, FlaskConical, Clock, Shield, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PilotPage() {
  const { t } = useApp();

  const benefits = [
    {
      icon: FlaskConical,
      title: 'Early Access',
      description: 'Be the first to test new AI-powered learning tools before public release.',
    },
    {
      icon: Clock,
      title: 'Shape the Future',
      description: 'Your feedback directly influences how we build our products.',
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: 'Direct line to our team for any questions or technical issues.',
    },
    {
      icon: Rocket,
      title: 'Free Access',
      description: 'Pilot participants get complimentary access during the testing phase.',
    },
  ];

  const upcoming = [
    { name: 'AI Tutor Assistant', status: 'Q2 2026' },
    { name: 'Voice-Activated Learning', status: 'Q3 2026' },
    { name: 'AR Study Companion', status: 'Q4 2026' },
    { name: 'Personalized Curriculum', status: '2027' },
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
              color: '#F59E0B',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}
          >
            {t.products.pilot.status}
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            {t.products.pilot.title}
          </h1>
          <p className="subtitle" style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.products.pilot.description} Join our exclusive pilot program and help shape the future of AI-powered inclusive education.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">
              Join Waitlist
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-3xl)',
          }}
          className="pilot-features-grid"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
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
                  background: 'var(--gradient-warm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <benefit.icon size={24} color="white" />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{benefit.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>Upcoming Features</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {upcoming.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: i === 0 ? '#F59E0B' : 'var(--border)',
                    }}
                  />
                  <span style={{ fontWeight: 500 }}>{item.name}</span>
                </div>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: i === 0 ? '#F59E0B' : 'var(--text-muted)',
                    background: i === 0 ? 'rgba(245, 158, 11, 0.1)' : 'var(--bg-muted)',
                    borderRadius: '100px',
                  }}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-2xl)',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <Rocket size={48} style={{ color: '#F59E0B', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Ready to Pioneer?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Schools, educators, and institutions are invited to join our pilot program.
          </p>
          <a href="#contact" className="btn btn-primary">
            Join Waitlist
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pilot-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
