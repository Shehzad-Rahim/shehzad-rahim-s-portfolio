
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
