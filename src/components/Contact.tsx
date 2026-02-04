import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Top decorative line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--brand-secondary), transparent)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                color: 'var(--brand-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {t.contact.tagline}
            </span>

            <h2 style={{ marginBottom: 'var(--space-md)' }}>
              {t.contact.title}
            </h2>

            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2xl)',
              }}
            >
              {t.contact.subtitle}
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={20} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0 }}>Email</p>
                  <p style={{ color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>
                    {t.contact.info.email}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0 }}>Location</p>
                  <p style={{ color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>
                    {t.contact.info.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-xl)',
                background: 'var(--brand-gradient)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <h5 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>
                Join our newsletter
              </h5>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: 'var(--space-md)' }}>
                Get the latest updates on AI in education
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: 'var(--space-md)',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '0.875rem',
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: 'var(--space-md)',
                    background: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRight size={18} style={{ color: 'var(--brand-primary)' }} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 'var(--space-2xl)',
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid var(--border-primary)',
              }}
            >
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                {t.contact.form.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
}
