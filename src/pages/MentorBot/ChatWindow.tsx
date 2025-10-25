import React, { useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';
import { InputBox } from './InputBox';
import { useChat } from './hooks/useChat';
import { Button } from '@/components/ui/button';
import { Trash2, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMentorContext } from './context/MentorContext';

export const ChatWindow: React.FC = () => {
  const { messages, input, isLoading, error, setInput, sendMessage, clearMessages, stopGeneration } = useChat();
  const { currentPersonaConfig } = useMentorContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedPrompts = [
    'Explain photosynthesis',
    'Help me with algebra',
    'What is quantum physics?',
    'Teach me about World War II',
  ];

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-[600px] rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-2xl">
            {currentPersonaConfig.icon}
          </div>
          <div>
            <h3 className="font-semibold text-sm text-foreground">
              {currentPersonaConfig.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isLoading ? 'Thinking...' : 'Online'}
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={clearMessages}
          disabled={messages.length === 0}
          aria-label="Clear chat history"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Start Learning with {currentPersonaConfig.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-6 max-w-md">
                Ask any question and get personalized tutoring 24/7. No judgment, just learning.
              </p>

              {/* Suggested Prompts */}
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="text-xs"
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm border border-destructive/20">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <InputBox
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        onStop={stopGeneration}
        isLoading={isLoading}
      />
    </div>
  );
};