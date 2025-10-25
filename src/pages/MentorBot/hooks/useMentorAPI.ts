import { useState, useRef } from 'react';
import { Message } from '../types';

interface UseMentorAPIOptions {
  systemPrompt: string;
}

interface UseMentorAPIReturn {
  sendMessage: (messages: Message[], userMessage: string) => Promise<string>;
  isLoading: boolean;
  error: string | null;
  abort: () => void;
}

/**
 * Hook to manage AI API requests
 * Connects to backend `/api/github-ai` endpoint
 */
export const useMentorAPI = ({ systemPrompt }: UseMentorAPIOptions): UseMentorAPIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = async (messages: Message[], userMessage: string): Promise<string> => {
    setIsLoading(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/github-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortControllerRef.current.signal,
        body: JSON.stringify({
          // اینجا می‌تونی کل تاریخچه + systemPrompt رو بفرستی
          prompt: JSON.stringify({
            system: systemPrompt,
            history: messages.map(m => ({
              role: m.role,
              content: m.content,
            })),
            user: userMessage,
          }),
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.reply;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const abort = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading,
    error,
    abort,
  };
};