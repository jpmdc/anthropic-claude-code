import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Monitor, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ComfortPanel() {
  const { t, comfort, setComfort, resetComfort, isPanelOpen, setIsPanelOpen } = useApp();

  const themes = [
    { value: 'light' as const, label: t.comfort.themes.light, icon: Sun },
    { value: 'dark' as const, label: t.comfort.themes.dark, icon: Moon },
    { value: 'system' as const, label: t.comfort.themes.system, icon: Monitor },
  ];

  const fonts = [
    { value: 'system' as const, label: t.comfort.fonts.system },
    { value: 'serif' as const, label: t.comfort.fonts.serif },
    { value: 'mono' as const, label: t.comfort.fonts.mono },
    { value: 'dyslexic' as const, label: t.comfort.fonts.dyslexic },
  ];

  return (
    <AnimatePresence>
      {isPanelOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPanelOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 'var(--z-modal)',
            }}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '380px',
              background: 'var(--bg-primary)',
              borderLeft: '1px solid var(--border-primary)',
              zIndex: 'var(--z-modal)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-lg)',
                borderBottom: '1px solid var(--border-primary)',
              }}
            >
              <h3 style={{ margin: 0, fontSize: '1.125rem' }}>{t.comfort.title}</h3>
              <motion.button
                onClick={() => setIsPanelOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: 'var(--space-sm)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: 'var(--space-lg)',
              }}
            >
              {/* Theme Selection */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: 'var(--space-md)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t.comfort.theme}
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'var(--space-sm)',
                  }}
                >
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.value}
                      onClick={() => setComfort({ theme: theme.value })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: 'var(--space-md)',
                        background: comfort.theme === theme.value ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                        border: `1px solid ${comfort.theme === theme.value ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
                        borderRadius: 'var(--radius-lg)',
                        color: comfort.theme === theme.value ? 'white' : 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <theme.icon size={18} />
                      {theme.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Typography Selection */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: 'var(--space-md)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t.comfort.typography}
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-sm)',
                  }}
                >
                  {fonts.map((font) => (
                    <motion.button
                      key={font.value}
                      onClick={() => setComfort({ fontFamily: font.value })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: 'var(--space-md)',
                        background: comfort.fontFamily === font.value ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                        border: `1px solid ${comfort.fontFamily === font.value ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
                        borderRadius: 'var(--radius-lg)',
                        color: comfort.fontFamily === font.value ? 'white' : 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        fontFamily: font.value === 'dyslexic' ? 'OpenDyslexic' :
                                   font.value === 'serif' ? 'Playfair Display, serif' :
                                   font.value === 'mono' ? 'JetBrains Mono, monospace' : 'inherit',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {font.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Font Size */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.comfort.fontSize}
                  </label>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      background: 'var(--bg-tertiary)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {comfort.fontSize}px
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={comfort.fontSize}
                  onChange={(e) => setComfort({ fontSize: Number(e.target.value) })}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: 'var(--radius-full)',
                    background: `linear-gradient(to right, var(--brand-primary) ${((comfort.fontSize - 12) / 12) * 100}%, var(--bg-tertiary) ${((comfort.fontSize - 12) / 12) * 100}%)`,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Line Height */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.comfort.lineHeight}
                  </label>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      background: 'var(--bg-tertiary)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {comfort.lineHeight.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.1"
                  value={comfort.lineHeight}
                  onChange={(e) => setComfort({ lineHeight: Number(e.target.value) })}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: 'var(--radius-full)',
                    background: `linear-gradient(to right, var(--brand-primary) ${((comfort.lineHeight - 1) / 1.5) * 100}%, var(--bg-tertiary) ${((comfort.lineHeight - 1) / 1.5) * 100}%)`,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Letter Spacing */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.comfort.letterSpacing}
                  </label>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      background: 'var(--bg-tertiary)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {comfort.letterSpacing.toFixed(2)}em
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.01"
                  value={comfort.letterSpacing}
                  onChange={(e) => setComfort({ letterSpacing: Number(e.target.value) })}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: 'var(--radius-full)',
                    background: `linear-gradient(to right, var(--brand-primary) ${(comfort.letterSpacing / 0.2) * 100}%, var(--bg-tertiary) ${(comfort.letterSpacing / 0.2) * 100}%)`,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Preview */}
              <div
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  Preview
                </p>
                <p style={{ margin: 0 }}>
                  The quick brown fox jumps over the lazy dog. 0123456789
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: 'var(--space-lg)',
                borderTop: '1px solid var(--border-primary)',
              }}
            >
              <motion.button
                onClick={resetComfort}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <RotateCcw size={16} />
                {t.comfort.reset}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
