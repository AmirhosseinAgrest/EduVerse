export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  persona?: Persona;
}

export type Persona = 'classic' | 'friendly' | 'wise' | 'speed';

export interface PersonaConfig {
  id: Persona;
  name: string;
  description: string;
  icon: string;
  systemPrompt: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  input: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface PracticeSessionState {
  questions: PracticeQuestion[];
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  isComplete: boolean;
}

export interface MentorSettings {
  persona: Persona;
  language: string;
  tone: 'formal' | 'casual' | 'balanced';
  historyKey: string;
}