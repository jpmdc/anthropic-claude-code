import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Trophy } from 'lucide-react';
import { useApp } from '../../context/AppContext';

// Memory Game Card type
interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Emojis for the memory game
const emojis = ['🧠', '📚', '🎯', '💡', '🔬', '🎨', '🎵', '🌟'];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function createCards(): Card[] {
  const doubled = [...emojis, ...emojis];
  const shuffled = shuffleArray(doubled);
  return shuffled.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
}

export default function GamesPage() {
  const { t } = useApp();
  const [cards, setCards] = useState<Card[]>(createCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const isGameComplete = matches === emojis.length;

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [first, second] = flippedCards;

      if (cards[first].emoji === cards[second].emoji) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) =>
            idx === first || idx === second
              ? { ...card, isMatched: true }
              : card
          ));
          setMatches(m => m + 1);
          setFlippedCards([]);
          setIsChecking(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) =>
            idx === first || idx === second
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
      setMoves(m => m + 1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched || flippedCards.length >= 2) {
      return;
    }

    setCards(prev => prev.map((card, idx) =>
      idx === index ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, index]);
  };

  const resetGame = () => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsChecking(false);
  };

  return (
    <div className="page-content">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}
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
              marginBottom: '1rem',
            }}
          >
            {t.products.games.status}
          </span>
          <h1 style={{ marginBottom: '0.5rem' }}>Memory Match</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Find all matching pairs! Click on cards to flip them and test your memory.
          </p>
        </motion.div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: 'var(--space-xl)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>{moves}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Moves</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#10B981' }}>{matches}/{emojis.length}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Matches</div>
          </div>
        </motion.div>

        {/* Game Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto var(--space-xl)',
          }}
        >
          {cards.map((card, index) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                aspectRatio: '1',
                fontSize: '2rem',
                border: 'none',
                borderRadius: '12px',
                cursor: card.isFlipped || card.isMatched ? 'default' : 'pointer',
                background: card.isMatched
                  ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
                  : card.isFlipped
                    ? 'var(--bg-elevated)'
                    : 'var(--gradient-primary)',
                boxShadow: card.isMatched
                  ? '0 4px 20px rgba(16, 185, 129, 0.3)'
                  : '0 4px 14px var(--accent-glow)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {(card.isFlipped || card.isMatched) ? (
                <span>{card.emoji}</span>
              ) : (
                <span style={{ color: 'white', fontSize: '1.5rem' }}>?</span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Win Message */}
        {isGameComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: 'center',
              padding: 'var(--space-xl)',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '16px',
              marginBottom: 'var(--space-xl)',
            }}
          >
            <Trophy size={48} style={{ color: '#10B981', marginBottom: '1rem' }} />
            <h2 style={{ color: '#10B981', marginBottom: '0.5rem' }}>Congratulations!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              You completed the game in {moves} moves!
            </p>
          </motion.div>
        )}

        {/* Reset Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={resetGame}
            className="btn btn-secondary"
            style={{ gap: '0.5rem' }}
          >
            <RotateCcw size={18} />
            New Game
          </button>
        </div>

        {/* More Games Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-xl)',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>More Games Coming Soon</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['Word Puzzles', 'Math Adventures', 'Science Quests', 'Language Lab'].map((game) => (
              <span
                key={game}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--bg-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}
              >
                {game}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
