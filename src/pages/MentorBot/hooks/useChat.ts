import { useState, useEffect, useCallback } from 'react';
import { Message, ChatState } from '../types';
import { generateId, saveChatHistory, loadChatHistory } from '../lib/mentor-utils';
import { useMentorAPI } from './useMentorAPI';
import { useMentorContext } from '../context/MentorContext';

export const useChat = () => {
  const { settings, currentPersonaConfig } = useMentorContext();
  const { sendMessage, isLoading, error: apiError, abort } = useMentorAPI({
    systemPrompt: currentPersonaConfig.systemPrompt,
  });

  const [chatState, setChatState] = useState<ChatState>(() => ({
    messages: loadChatHistory(settings.historyKey),
    isLoading: false,
    error: null,
    input: '',
  }));

  // Save messages to localStorage whenever they change
  useEffect(() => {
    saveChatHistory(settings.historyKey, chatState.messages);
  }, [chatState.messages, settings.historyKey]);

  // Update loading state from API hook
  useEffect(() => {
    setChatState((prev) => ({ ...prev, isLoading }));
  }, [isLoading]);

  // Update error state from API hook
  useEffect(() => {
    setChatState((prev) => ({ ...prev, error: apiError }));
  }, [apiError]);

  const setInput = useCallback((input: string) => {
    setChatState((prev) => ({ ...prev, input }));
  }, []);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: generateId(),
      timestamp: new Date(),
    };
    
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    return newMessage;
  }, []);

  const handleSendMessage = useCallback(async () => {
    const userInput = chatState.input.trim();
    if (!userInput || isLoading) return;

    // Clear input immediately
    setInput('');

    // Add user message
    addMessage({
      role: 'user',
      content: userInput,
      persona: settings.persona,
    });

    try {
      // Get AI response
      const response = await sendMessage(chatState.messages, userInput);
      
      // Add assistant message
      addMessage({
        role: 'assistant',
        content: response,
        persona: settings.persona,
      });
    } catch (err) {
      console.error('Failed to send message:', err);
      if (err instanceof Error && err.message !== 'Request aborted') {
        setChatState((prev) => ({
          ...prev,
          error: 'Failed to get response. Please try again.',
        }));
      }
    }
  }, [chatState.input, chatState.messages, isLoading, settings.persona, addMessage, sendMessage, setInput]);

  const clearMessages = useCallback(() => {
    setChatState((prev) => ({
      ...prev,
      messages: [],
      error: null,
    }));
  }, []);

  const stopGeneration = useCallback(() => {
    abort();
  }, [abort]);

  return {
    messages: chatState.messages,
    input: chatState.input,
    isLoading: chatState.isLoading,
    error: chatState.error,
    setInput,
    sendMessage: handleSendMessage,
    clearMessages,
    stopGeneration,
  };
};