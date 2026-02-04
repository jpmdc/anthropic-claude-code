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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPanelOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              zIndex: 200,
            }}
          />

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
              maxWidth: '320px',
              background: 'var(--bg)',
              borderLeft: '1px solid var(--border)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontWeight: 600 }}>{t.comfort.title}</span>
              <button
                onClick={() => setIsPanelOpen(false)}
                style={{
                  padding: '0.5rem',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
              {/* Theme */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                  {t.comfort.theme}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {themes.map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => setComfort({ theme: theme.value })}
                      style={{
                        padding: '0.75rem 0.5rem',
                        background: comfort.theme === theme.value ? 'var(--accent)' : 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: comfort.theme === theme.value ? 'white' : 'var(--text)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.75rem',
                      }}
                    >
                      <theme.icon size={16} />
                      {theme.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                  {t.comfort.typography}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {fonts.map((font) => (
                    <button
                      key={font.value}
                      onClick={() => setComfort({ fontFamily: font.value })}
                      style={{
                        padding: '0.75rem',
                        background: comfort.fontFamily === font.value ? 'var(--accent)' : 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: comfort.fontFamily === font.value ? 'white' : 'var(--text)',
                        cursor: 'pointer',
                        fontSize: '0.8125rem',
                        fontFamily: font.value === 'dyslexic' ? 'OpenDyslexic' :
                                   font.value === 'serif' ? 'Georgia, serif' :
                                   font.value === 'mono' ? 'monospace' : 'inherit',
                      }}
                    >
                      {font.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.comfort.fontSize}</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{comfort.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={comfort.fontSize}
                  onChange={(e) => setComfort({ fontSize: Number(e.target.value) })}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Line Height */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.comfort.lineHeight}</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{comfort.lineHeight.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.1"
                  value={comfort.lineHeight}
                  onChange={(e) => setComfort({ lineHeight: Number(e.target.value) })}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Letter Spacing */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.comfort.letterSpacing}</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{comfort.letterSpacing.toFixed(2)}em</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.01"
                  value={comfort.letterSpacing}
                  onChange={(e) => setComfort({ letterSpacing: Number(e.target.value) })}
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={resetComfort}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <RotateCcw size={14} />
                {t.comfort.reset}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
