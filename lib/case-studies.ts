interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "e-commerce-redesign",
    title: "E-commerce Platform Redesign",
    excerpt: "Improving user experience and conversion rates through data-driven design",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    date: "2024-02-15",
    content: `
      <h2>Project Overview</h2>
      <p>A complete redesign of an e-commerce platform focusing on improving user experience and increasing conversion rates.</p>
      
      <h2>Challenge</h2>
      <p>The existing platform had a high cart abandonment rate and users reported difficulty in finding products.</p>
      
      <h2>Solution</h2>
      <p>Implemented a new search and filtering system, streamlined checkout process, and improved product presentation.</p>
      
      <h2>Results</h2>
      <ul>
        <li>30% increase in conversion rate</li>
        <li>25% decrease in cart abandonment</li>
        <li>45% improvement in user satisfaction scores</li>
      </ul>
    `,
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    excerpt: "Creating a secure and user-friendly mobile banking experience",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    date: "2024-01-20",
    content: `
      <h2>Project Overview</h2>
      <p>Designed a mobile banking application focusing on security and ease of use.</p>
      
      <h2>Challenge</h2>
      <p>Balance security requirements with user experience in a mobile banking context.</p>
      
      <h2>Solution</h2>
      <p>Implemented biometric authentication, simplified transaction flows, and clear financial insights.</p>
      
      <h2>Results</h2>
      <ul>
        <li>4.8/5 App Store rating</li>
        <li>200% increase in mobile transactions</li>
        <li>90% user satisfaction rate</li>
      </ul>
    `,
  },
  {
    slug: "healthcare-platform",
    title: "Healthcare Platform",
    excerpt: "Simplifying healthcare access through digital innovation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    date: "2024-01-10",
    content: `
      <h2>Project Overview</h2>
      <p>Developed a healthcare platform to connect patients with healthcare providers.</p>
      
      <h2>Challenge</h2>
      <p>Create an accessible platform that simplifies healthcare appointment booking and management.</p>
      
      <h2>Solution</h2>
      <p>Built an intuitive appointment system with telemedicine integration and health record management.</p>
      
      <h2>Results</h2>
      <ul>
        <li>50% reduction in appointment scheduling time</li>
        <li>40% increase in telemedicine adoption</li>
        <li>95% patient satisfaction rate</li>
      </ul>
    `,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}