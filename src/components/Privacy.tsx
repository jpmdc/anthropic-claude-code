import { useApp } from '../context/AppContext';

export default function Privacy() {
  const { t } = useApp();

  const sections = t.privacy.content.trim().split('\n\n## ').map((section, i) => {
    if (i === 0) {
      const [title, ...content] = section.replace('## ', '').split('\n');
      return { title, content: content.join('\n') };
    }
    const [title, ...content] = section.split('\n');
    return { title, content: content.join('\n') };
  });

  return (
    <main className="page-content">
      <div className="container">
        <h1>{t.privacy.title}</h1>
        <p className="subtitle">{t.privacy.lastUpdated}</p>
        <div className="prose">
          {sections.map((section, i) => (
            <div key={i}>
              <h2>{section.title}</h2>
              {section.content.split('\n').map((line, j) => (
                <p key={j}>{line.replace(/^- /, '• ')}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
