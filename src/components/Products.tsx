import { motion } from 'framer-motion';
import { Brain, Gamepad2, Music, Box, Rocket } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Products() {
  const { t } = useApp();

  const products = [
    { icon: Brain, color: '#8B5CF6', ...t.products.quiz },
    { icon: Gamepad2, color: '#06B6D4', ...t.products.games },
    { icon: Music, color: '#EC4899', ...t.products.songs },
    { icon: Box, color: '#10B981', ...t.products.rendering },
    { icon: Rocket, color: '#F59E0B', ...t.products.pilot },
  ];

  return (
    <section id="products" style={{ padding: 'var(--space-3xl) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '1rem' }}>{t.products.title}</h2>
          <p style={{ fontSize: '1.0625rem', maxWidth: '600px', margin: '0 auto' }}>
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'var(--space-md)',
          }}
          className="products-grid"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: 'var(--space-lg)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = product.color;
                e.currentTarget.style.boxShadow = `0 0 30px ${product.color}20`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${product.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <product.icon size={28} style={{ color: product.color }} />
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{product.title}</h3>
              <p style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>{product.description}</p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: product.color,
                  background: `${product.color}10`,
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {product.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
