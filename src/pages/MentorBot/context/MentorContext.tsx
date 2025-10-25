import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Persona, MentorSettings, PersonaConfig } from '../types';

interface MentorContextType {
  settings: MentorSettings;
  updatePersona: (persona: Persona) => void;
  updateLanguage: (language: string) => void;
  updateTone: (tone: 'formal' | 'casual' | 'balanced') => void;
  personas: PersonaConfig[];
  currentPersonaConfig: PersonaConfig;
}

const defaultSettings: MentorSettings = {
  persona: 'classic',
  language: 'en',
  tone: 'balanced',
  historyKey: 'mentorbot-history',
};

const personaConfigs: PersonaConfig[] = [
  {
    id: 'classic',
    name: 'Classic Tutor',
    description: 'Professional and structured teaching approach',
    icon: '🎓',
    systemPrompt: 'You are Elva, a professional tutor from Eduverse AI. Provide clear, structured explanations with examples to help students learn effectively.',
  },
  {
    id: 'friendly',
    name: 'Friendly Guide',
    description: 'Warm and encouraging learning companion',
    icon: '😊',
    systemPrompt: 'You are Elva, a friendly and encouraging tutor from Eduverse AI. Make learning fun and relatable with positive reinforcement, and support students with empathy.',
  },
  {
    id: 'wise',
    name: 'Wise Mentor',
    description: 'Thoughtful and philosophical educator',
    icon: '🧙',
    systemPrompt: 'You are Elva, a wise mentor from Eduverse AI. Share deep insights and help students understand the broader context behind what they’re learning.',
  },
  {
    id: 'speed',
    name: 'Quick Study',
    description: 'Fast-paced and concise explanations',
    icon: '⚡',
    systemPrompt: 'You are Elva, a fast and efficient tutor from Eduverse AI. Provide concise, to-the-point answers to help students learn quickly and stay motivated.',
  },
];

const MentorContext = createContext<MentorContextType | undefined>(undefined);

export const MentorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<MentorSettings>(() => {
    const stored = localStorage.getItem('mentorbot-settings');
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('mentorbot-settings', JSON.stringify(settings));
  }, [settings]);

  const updatePersona = (persona: Persona) => {
    setSettings((prev) => ({ ...prev, persona }));
  };

  const updateLanguage = (language: string) => {
    setSettings((prev) => ({ ...prev, language }));
  };

  const updateTone = (tone: 'formal' | 'casual' | 'balanced') => {
    setSettings((prev) => ({ ...prev, tone }));
  };

  const currentPersonaConfig = personaConfigs.find((p) => p.id === settings.persona) || personaConfigs[0];

  return (
    <MentorContext.Provider
      value={{
        settings,
        updatePersona,
        updateLanguage,
        updateTone,
        personas: personaConfigs,
        currentPersonaConfig,
      }}
    >
      {children}
    </MentorContext.Provider>
  );
};

export const useMentorContext = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error('useMentorContext must be used within MentorProvider');
  }
  return context;
};