import { Message, PracticeQuestion } from '../types';

/**
 * Generate a unique ID for messages
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Format timestamp to readable time
 */
export const formatTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

/**
 * Save chat history to localStorage
 */
export const saveChatHistory = (key: string, messages: Message[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat history:', error);
  }
};

/**
 * Load chat history from localStorage
 */
export const loadChatHistory = (key: string): Message[] => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return parsed.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));
  } catch (error) {
    console.error('Failed to load chat history:', error);
    return [];
  }
};

/**
 * Clear chat history from localStorage
 */
export const clearChatHistory = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to clear chat history:', error);
  }
};

/**
 * Sample practice questions
 */
export const getSampleQuestions = (): PracticeQuestion[] => {
  return [
    {
      id: '1',
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
      explanation: 'Paris is the capital and largest city of France, known for landmarks like the Eiffel Tower.',
      category: 'Geography',
    },
    {
      id: '2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      explanation: 'Mars appears red due to iron oxide (rust) on its surface, earning it the nickname "Red Planet".',
      category: 'Science',
    },
    {
      id: '3',
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1,
      explanation: 'William Shakespeare wrote this tragic play about two young star-crossed lovers in the late 16th century.',
      category: 'Literature',
    },
    {
      id: '4',
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 3,
      explanation: 'The Pacific Ocean is the largest and deepest ocean, covering about 46% of the water surface.',
      category: 'Geography',
    },
    {
      id: '5',
      question: 'What is the speed of light in vacuum?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '200,000 km/s'],
      correctAnswer: 0,
      explanation: 'Light travels at approximately 299,792 km/s (about 300,000 km/s) in vacuum, a fundamental constant.',
      category: 'Physics',
    },
  ];
};

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};