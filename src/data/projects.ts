import { Project } from '../types';

export const projects: Project[] = [
  // Web Development Projects
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates, team collaboration features, and progress tracking.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    description: 'Modern real estate platform with property listings, search filters, and virtual tour integration.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#'
  },

  // Graphic Design Projects
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1636633762833-5d1538aa5e0e?w=800&auto=format&fit=crop&q=60',
    tags: ['Logo Design', 'Brand Identity', 'Adobe Illustrator'],
    liveUrl: '#',
    featured: true
  },
  {
    id: 'social-media',
    title: 'Social Media Campaign',
    description: 'Series of engaging social media graphics and animations for a product launch campaign.',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60',
    tags: ['Social Media', 'Adobe Photoshop', 'Figma'],
    liveUrl: '#'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design System',
    description: 'Comprehensive design system including components, patterns, and guidelines for a SaaS platform.',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60',
    tags: ['UI/UX', 'Figma', 'Design System'],
    liveUrl: '#'
  },

  // Video Projects
  {
    id: 'product-launch',
    title: 'Product Launch Video',
    description: 'Cinematic product launch video with 3D animations and motion graphics for a tech product.',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=60',
    tags: ['After Effects', 'Premier Pro', 'Motion Graphics'],
    liveUrl: '#',
    featured: true
  },
  {
    id: 'corporate-documentary',
    title: 'Corporate Documentary',
    description: 'Short documentary showcasing company culture and behind-the-scenes footage with cinematic storytelling.',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&auto=format&fit=crop&q=60',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'Storytelling'],
    liveUrl: '#'
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics Explainer',
    description: 'Animated explainer video with custom illustrations and motion graphics for a financial service.',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60',
    tags: ['After Effects', 'Animation', 'Motion Graphics'],
    liveUrl: '#'
  }
];