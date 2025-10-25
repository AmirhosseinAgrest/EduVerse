import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, StopCircle, Loader2 } from 'lucide-react';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onStop: () => void;
  isLoading: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  onSend,
  onStop,
  isLoading,
  disabled = false,
  placeholder = 'Ask me anything...',
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter, new line on Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && value.trim()) {
        onSend();
      }
    }
  };

  const handleSend = () => {
    if (!isLoading && value.trim()) {
      onSend();
    }
  };

  return (
    <div className="flex items-end gap-2 p-4 border-t border-border bg-background/80 backdrop-blur-sm">
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        rows={1}
        className="min-h-[44px] max-h-32 resize-none flex-1"
        aria-label="Message input"
      />

      {isLoading ? (
        <Button
          onClick={onStop}
          variant="destructive"
          size="icon"
          className="flex-shrink-0"
          aria-label="Stop generation"
        >
          <StopCircle className="w-4 h-4" />
        </Button>
      ) : (
        <Button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          size="icon"
          className="flex-shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </Button>
      )}

      {isLoading && (
        <div className="absolute bottom-16 left-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Thinking...</span>
        </div>
      )}
    </div>
  );
};