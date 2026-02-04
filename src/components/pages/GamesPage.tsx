import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Users, Zap, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function GamesPage() {
  const { t } = useApp();

  const features = [
    {
      icon: Gamepad2,
      title: 'Educational Gameplay',
      description: 'Learning disguised as play. Our games make education irresistible and memorable.',
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Badges, points, and rewards that motivate learners to reach new milestones.',
    },
    {
      icon: Users,
      title: 'Multiplayer Modes',
      description: 'Collaborative and competitive modes that make learning a social experience.',
    },
    {
      icon: Zap,
      title: 'Instant Engagement',
      description: 'Jump right in with games designed for quick sessions or extended play.',
    },
  ];

  const gameTypes = [
    { name: 'Memory Match', color: '#8B5CF6' },
    { name: 'Word Puzzles', color: '#06B6D4' },
    { name: 'Math Adventures', color: '#10B981' },
    { name: 'Science Quests', color: '#F59E0B' },
    { name: 'Language Lab', color: '#EC4899' },
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
              color: '#06B6D4',
              background: 'rgba(6, 182, 212, 0.1)',
              borderRadius: '100px',
              marginBottom: '1.5rem',
            }}
          >
            {t.products.games.status}
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            {t.products.games.title}
          </h1>
          <p className="subtitle" style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.products.games.description} Transform education into engaging adventures that students love.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">
              Play Now
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Game Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>Game Categories</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {gameTypes.map((game) => (
              <div
                key={game.name}
                style={{
                  padding: '1rem 1.5rem',
                  background: `${game.color}10`,
                  border: `1px solid ${game.color}30`,
                  borderRadius: '8px',
                  color: game.color,
                  fontWeight: 500,
                }}
              >
                {game.name}
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
          className="games-features-grid"
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
                  background: 'var(--gradient-secondary)',
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .games-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
