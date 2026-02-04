import { motion } from 'framer-motion';
import { Brain, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  const productLinks = ['Quiz', 'Games', 'Songs', 'Rendering', 'Pilot'];
  const companyLinks = ['About', 'Careers', 'Blog', 'Press'];
  const legalLinks = ['Privacy', 'Terms', 'Cookies', 'Licenses'];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        padding: 'var(--space-3xl) 0 var(--space-xl)',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-primary)',
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-2xl)',
          }}
          className="footer-grid"
        >
          {/* Brand Section */}
          <div>
            <motion.a
              href="#home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                textDecoration: 'none',
                marginBottom: 'var(--space-lg)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--brand-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <Brain size={24} color="white" />
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Neuro<span className="gradient-text">Stell</span>
              </span>
            </motion.a>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                maxWidth: '300px',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h6
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {t.footer.links.product}
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {productLinks.map((link) => (
                <li key={link} style={{ marginBottom: 'var(--space-sm)' }}>
                  <motion.a
                    href="#features"
                    whileHover={{ x: 3 }}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h6
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {t.footer.links.company}
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map((link) => (
                <li key={link} style={{ marginBottom: 'var(--space-sm)' }}>
                  <motion.a
                    href="#about"
                    whileHover={{ x: 3 }}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h6
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {t.footer.links.legal}
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {legalLinks.map((link) => (
                <li key={link} style={{ marginBottom: 'var(--space-sm)' }}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-xl)',
            borderTop: '1px solid var(--border-secondary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              margin: 0,
            }}
          >
            {t.footer.copyright}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--success)',
                }}
              />
              All systems operational
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
