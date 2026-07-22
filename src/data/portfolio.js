/**
 * Portfolio content — edit this file to update the site.
 * Replace demo values with your real info when ready.
 */

export const site = {
  name: 'Michael Owusu',
  title: 'Frontend Developer',
  location: 'Ghana · Open to remote',
  email: 'owusumichael0573@gmail.com',
  github: 'https://github.com/BankyGod',
  linkedin: 'https://linkedin.com/in/michael-owusu-41b162296',
  resumeUrl: '/Michael-Owusu-Resume.pdf',
  tagline:
    'I build clean, responsive interfaces and ship production-ready mobile and web experiences.',
  socials: {
    linkedin: 'https://linkedin.com/in/michael-owusu-41b162296',
    github: 'https://github.com/BankyGod',
    instagram: 'https://www.instagram.com/mr.michael.owusu/',
    x: 'https://x.com/bankygodjasper',
    facebook: 'https://web.facebook.com/profile.php?id=61588829441136',
    whatsapp: 'https://wa.me/233506574617',
  },
}

export const about = {
  intro:
    'Final-year IT student at Ghana Communication Technology University, software developer, and co-founder of Amikalex Technology. I specialize in practical AI automation and scalable web applications built for real users.',
  paragraphs: [
    'What sets me apart is a shipping mindset: combining modern web stacks with AI-driven development workflows to move from problem to deployed product — fast, without cutting corners on architecture.',
    'I am based in Ghana and open to remote software engineering roles, high-value freelance work, and collaborations with early-stage founders who need someone who can own the stack end to end.',
  ],
  highlights: [
    'End-to-end product execution',
    'AI-accelerated workflows',
    'African market solutions',
    'Production deployment',
  ],
}

export const projects = [
  {
    id: 'autobus',
    name: 'Autobus',
    year: '2024–2025',
    role: 'Frontend Developer · Mobile app',
    pitch:
      'AI-powered business automation for African enterprises — order management and social media integration in one platform.',
    stack: ['Flutter', 'Dart', 'Mobile UI', 'API integration'],
    outcomes: [
      { label: 'Platform', value: 'Google Play' },
      { label: 'Focus', value: 'Order automation' },
      { label: 'Market', value: 'African SMEs' },
    ],
    overview:
      'Autobus helps African businesses automate everyday operations — from order management to social media-connected workflows — in a single mobile experience. The product is live on the Google Play Store.',
    challenge:
      'Business owners needed a clear, fast mobile interface for managing orders and connected workflows without friction. The frontend had to feel reliable on real devices, stay readable under everyday use, and connect cleanly to existing backend services.',
    contribution: [
      'Owned the Flutter mobile app frontend — screens, navigation, and interaction patterns',
      'Built UI flows for order management and day-to-day business operations',
      'Implemented responsive layouts and polished visual states across key user journeys',
      'Connected frontend screens to backend APIs for live data and actions',
      'Collaborated with the team to ship a production release on Google Play',
    ],
    results: [
      'Shipped a production-ready mobile frontend used in a live Play Store product',
      'Delivered a coherent UI for core order and operations workflows',
      'Supported African SME users with a practical, mobile-first experience',
    ],
    gallery: [
      {
        src: '/projects/autobus/screen-1.jpg',
        alt: 'Autobus welcome screen with AI branding',
        caption: 'Welcome · AI in your pocket',
      },
      {
        src: '/projects/autobus/screen-2.jpg',
        alt: 'Autobus user type selection screen',
        caption: 'User type selection',
      },
      {
        src: '/projects/autobus/screen-3.jpg',
        alt: 'Autobus operate business with AI screen',
        caption: 'Operate business with AI',
      },
      {
        src: '/projects/autobus/screen-4.jpg',
        alt: 'Autobus payment successful screen',
        caption: 'Payment success',
      },
      {
        src: '/projects/autobus/screen-5.jpg',
        alt: 'Autobus digital marketing content selection',
        caption: 'Digital marketing',
      },
    ],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.autobus.app' },
    ],
  },
  {
    id: 'nexus',
    name: 'Nexus Asset Management',
    year: '2026',
    role: 'Frontend Developer · Mobile app',
    pitch:
      'Mobile app for managing company assets in the field — scan barcodes, check assets in and out, log maintenance, run inventory, and stay on top of approvals.',
    stack: ['Flutter', 'Dart', 'Mobile UI', 'API integration'],
    outcomes: [
      { label: 'Platform', value: 'Google Play' },
      { label: 'Focus', value: 'Asset management' },
      { label: 'Users', value: 'Field teams' },
    ],
    overview:
      'Nexus is the mobile companion for the Nexus Asset Management platform. It helps asset managers, custodians, auditors, and approvers view portfolios, scan QR/barcodes, check assets in and out, schedule maintenance, run inventory counts, and handle requests — from a phone, not just a desk. Live on the Google Play Store.',
    challenge:
      'Asset workflows are often desk-bound and slow in the field. The mobile frontend needed clear dashboards, reliable detail views, and fast actions for scanning, transfers, maintenance, and approvals — without burying users in clutter.',
    contribution: [
      'Built the Flutter mobile frontend for core Nexus asset workflows',
      'Designed and implemented screens for sign-in, dashboard overview, asset detail, and module navigation',
      'Created clear UI patterns for asset identification, status, and field actions',
      'Connected frontend views to backend APIs for live asset data and operations',
      'Shipped a production-ready experience on Google Play with the Greenbrain team',
    ],
    results: [
      'Delivered a field-ready mobile UI for enterprise asset operations',
      'Supported key flows: dashboard summary, asset detail, tracking, and module access',
      'Published as a live Play Store product under Greenbrain Tech',
    ],
    gallery: [
      {
        src: '/projects/nexus/screen-1.jpg',
        alt: 'Nexus sign-in screen',
        caption: 'Sign in',
      },
      {
        src: '/projects/nexus/screen-4.jpg',
        alt: 'Nexus dashboard overview with asset metrics',
        caption: 'Dashboard overview',
      },
      {
        src: '/projects/nexus/screen-3.jpg',
        alt: 'Nexus asset detail screen',
        caption: 'Asset detail',
      },
      {
        src: '/projects/nexus/screen-2.jpg',
        alt: 'Nexus more menu with asset modules',
        caption: 'Modules · More',
      },
    ],
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.nexus.assetapp',
      },
    ],
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'Flutter', 'Dart', 'HTML', 'CSS'],
  },
  {
    group: 'Backend & data',
    items: ['Node.js', 'REST APIs', 'Database architecture', 'PostgreSQL', 'Auth flows'],
  },
  {
    group: 'AI & tooling',
    items: [
      'AI API integration',
      'Workflow automation',
      'Rapid prototyping',
      'Developer productivity tooling',
    ],
  },
  {
    group: 'Delivery',
    items: ['Product architecture', 'Play Store deployment', 'Vercel / Netlify', 'Git & collaboration'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    org: 'Greenbrain Technology',
    period: 'June 2026 — Present',
    detail:
      'Building and shipping frontend interfaces for production web and mobile experiences, including Autobus and Nexus.',
  },
  {
    role: 'IT Intern · Server Room',
    org: 'St. Francis Xavier Hospital',
    period: 'Feb 2025 — Mar 2025',
    detail:
      'One-month internship supporting hospital IT operations in the server room, gaining practical exposure to infrastructure and systems support.',
  },
]
