export interface Project {
  id: string;
  title: string;
  type: 'publishing' | 'character' | 'brand';
  overview: string;
  clientNeeds: string;
  delivered: string[];
  quote?: string;
  author?: string;
  role?: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  isNew?: boolean;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  defaultImage: string;
}

export interface LabItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  details?: string;
  date?: string;
  steps?: ProcessStep[];
  gallery?: {
    id: string;
    title: string;
    image: string;
    tag: string;
    prompt: string;
  }[];
}

export interface ChecklistItem {
  id: string;
  section: 'before' | 'selar' | 'amazon' | 'final' | 'mistakes';
  text: string;
}
