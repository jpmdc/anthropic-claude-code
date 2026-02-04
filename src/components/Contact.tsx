import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--space-3xl) 0',
        background: 'var(--bg-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '1rem' }}>{t.contact.title}</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              {t.contact.subtitle}
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              {t.contact.email}
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <input
              type="text"
              name="name"
              placeholder={t.contact.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input"
              style={{ minHeight: '120px', resize: 'vertical' }}
              required
            />
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              {t.contact.form.submit}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
