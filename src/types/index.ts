export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'graphic' | 'video';
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category?: string;
}