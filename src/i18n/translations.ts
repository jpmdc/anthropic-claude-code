export const translations = {
  en: {
    nav: {
      about: 'About',
      features: 'Solution',
      contact: 'Contact',
    },
    hero: {
      badge: 'EdTech for Inclusive Learning',
      title: 'Making education accessible to every learner',
      subtitle: 'NeuroStell builds AI-powered tools that adapt to individual learning needs, helping students with dyslexia, ADHD, and other learning differences thrive.',
      cta: 'Get in touch',
      secondary: 'Learn more',
      backed: 'Backed by',
    },
    features: {
      title: 'How it works',
      subtitle: 'Our platform combines cognitive science with modern AI to create personalized learning experiences.',
      items: [
        {
          title: 'Adaptive Assessment',
          description: 'AI-driven diagnostics identify each student\'s unique learning profile and needs.',
        },
        {
          title: 'Personalized Content',
          description: 'Content automatically adjusts format, pacing, and presentation based on learner preferences.',
        },
        {
          title: 'Accessibility First',
          description: 'Built-in support for dyslexia, visual impairments, and cognitive differences.',
        },
      ],
    },
    about: {
      title: 'Our mission',
      description: 'We believe every student deserves tools designed for how they learn best. NeuroStell was founded to bridge the gap between traditional education and individual learning needs.',
      stats: [
        { value: '15%', label: 'of students have learning differences' },
        { value: '€2.3B', label: 'European EdTech market by 2025' },
        { value: '3x', label: 'better retention with adaptive learning' },
      ],
    },
    contact: {
      title: 'Let\'s talk',
      subtitle: 'Interested in partnering or learning more about NeuroStell?',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
      },
      email: 'hello@neurostell.com',
    },
    footer: {
      copyright: '© 2024 NeuroStell',
      links: ['Privacy', 'Terms'],
    },
    comfort: {
      title: 'Display Settings',
      theme: 'Theme',
      themes: { light: 'Light', dark: 'Dark', system: 'System' },
      typography: 'Font',
      fonts: { system: 'Default', serif: 'Serif', mono: 'Mono', dyslexic: 'Dyslexic' },
      fontSize: 'Size',
      lineHeight: 'Spacing',
      letterSpacing: 'Letter Gap',
      reset: 'Reset',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      features: 'Solution',
      contact: 'Contact',
    },
    hero: {
      badge: 'EdTech pour l\'apprentissage inclusif',
      title: 'Rendre l\'éducation accessible à chaque apprenant',
      subtitle: 'NeuroStell développe des outils IA qui s\'adaptent aux besoins individuels, aidant les étudiants dyslexiques, TDAH et autres à réussir.',
      cta: 'Nous contacter',
      secondary: 'En savoir plus',
      backed: 'Soutenus par',
    },
    features: {
      title: 'Comment ça marche',
      subtitle: 'Notre plateforme combine sciences cognitives et IA moderne pour créer des expériences d\'apprentissage personnalisées.',
      items: [
        {
          title: 'Évaluation Adaptative',
          description: 'Des diagnostics IA identifient le profil d\'apprentissage unique de chaque étudiant.',
        },
        {
          title: 'Contenu Personnalisé',
          description: 'Le contenu s\'ajuste automatiquement selon les préférences de l\'apprenant.',
        },
        {
          title: 'Accessibilité d\'abord',
          description: 'Support intégré pour la dyslexie, les déficiences visuelles et les différences cognitives.',
        },
      ],
    },
    about: {
      title: 'Notre mission',
      description: 'Nous croyons que chaque étudiant mérite des outils conçus pour sa façon d\'apprendre. NeuroStell a été fondée pour combler le fossé entre l\'éducation traditionnelle et les besoins individuels.',
      stats: [
        { value: '15%', label: 'des étudiants ont des troubles d\'apprentissage' },
        { value: '2,3 Md€', label: 'marché EdTech européen d\'ici 2025' },
        { value: '3x', label: 'meilleure rétention avec l\'apprentissage adaptatif' },
      ],
    },
    contact: {
      title: 'Parlons-en',
      subtitle: 'Intéressé par un partenariat ou en savoir plus sur NeuroStell?',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer',
      },
      email: 'hello@neurostell.com',
    },
    footer: {
      copyright: '© 2024 NeuroStell',
      links: ['Confidentialité', 'Conditions'],
    },
    comfort: {
      title: 'Affichage',
      theme: 'Thème',
      themes: { light: 'Clair', dark: 'Sombre', system: 'Système' },
      typography: 'Police',
      fonts: { system: 'Défaut', serif: 'Sérif', mono: 'Mono', dyslexic: 'Dyslexique' },
      fontSize: 'Taille',
      lineHeight: 'Interligne',
      letterSpacing: 'Espacement',
      reset: 'Réinitialiser',
    },
  },
};

export type Language = 'en' | 'fr';
export type TranslationKeys = typeof translations.en;
