import React from 'react';
import { useMentorContext } from './context/MentorContext';
import { Persona } from './types';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const PersonaSelector: React.FC = () => {
  const { settings, personas, updatePersona } = useMentorContext();

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">Choose Your Tutor Style</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {personas.map((persona) => {
          const isSelected = settings.persona === persona.id;
          
          return (
            <button
              key={persona.id}
              onClick={() => updatePersona(persona.id as Persona)}
              className={`
                relative p-3 rounded-lg border-2 transition-all text-left
                ${
                  isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50 bg-card'
                }
              `}
              aria-pressed={isSelected}
              aria-label={`Select ${persona.name} persona`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              )}
              
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {persona.icon}
                </span>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground">
                    {persona.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {persona.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};