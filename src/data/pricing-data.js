const pricing_data = [
  {
    id:1,
    title: 'Starter Package',
    monthly: 300,
    yearly: 250,
    subtitle:
      'Ideal for startups or individuals needing a clean, functional web presence without extra complexity or overhead.',
    features: [
      'Up to 4 Pages (Home, About, Services, Contact)',
      'Clean and Modern UI Design',
      'Fully Responsive Layout',
      'Essential SEO Setup',
      'Starter CMS (WordPress/HTML only)',
    ],
    featured: false,
  },
  {
    id:2,
    title: 'Professional Package',
    monthly: 600,
    yearly: 500,
    subtitle:
      'Designed for growing teams who need a strategic, scalable solution with premium design and conversion focus.',
    features: [
      'Up to 8 Pages (Includes Portfolio & Contact Forms)',
      'Custom UI/UX with Animations',
      'Mobile-First Optimization',
      'Advanced SEO Strategy',
      'CMS Integration (WordPress/Webflow)',
    ],
    featured: true,
  },
  {
    id:3,
    title: 'Premium Package',
    monthly: 900,
    yearly: 750,
    subtitle:
      'Best suited for established brands seeking a high-performance website with full flexibility and rich features.',
    features: [
      'Up to 12 Pages + Landing Pages',
      'Bespoke UI/UX Design & Microinteractions',
      'Multi-device Optimization',
      'Complete SEO & Speed Audit',
      'Full CMS & Blog Setup',
    ],
    featured: false,
  },
];

export default pricing_data;