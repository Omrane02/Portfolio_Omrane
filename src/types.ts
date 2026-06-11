export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'infra';
  tags: string[];
  image: string;
  github: string;
  liveDemo: string;
  details: string;
  feats: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}
