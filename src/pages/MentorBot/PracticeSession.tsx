import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PracticeSessionState } from './types';
import { getSampleQuestions, shuffleArray } from './lib/mentor-utils';
import { Check, X, RotateCcw, Trophy, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const PracticeSession: React.FC = () => {
  const [sessionState, setSessionState] = useState<PracticeSessionState>(() => ({
    questions: shuffleArray(getSampleQuestions()),
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    showExplanation: false,
    isComplete: false,
  }));

  const currentQuestion = sessionState.questions[sessionState.currentQuestionIndex];
  const progress = ((sessionState.currentQuestionIndex + 1) / sessionState.questions.length) * 100;

  const handleSelectAnswer = (index: number) => {
    if (sessionState.showExplanation) return;
    setSessionState((prev) => ({ ...prev, selectedAnswer: index }));
  };

  const handleSubmitAnswer = () => {
    const isCorrect = sessionState.selectedAnswer === currentQuestion.correctAnswer;
    
    setSessionState((prev) => ({
      ...prev,
      showExplanation: true,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNextQuestion = () => {
    const isLastQuestion = sessionState.currentQuestionIndex === sessionState.questions.length - 1;
    
    if (isLastQuestion) {
      setSessionState((prev) => ({ ...prev, isComplete: true }));
    } else {
      setSessionState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showExplanation: false,
      }));
    }
  };

  const handleRestart = () => {
    setSessionState({
      questions: shuffleArray(getSampleQuestions()),
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      showExplanation: false,
      isComplete: false,
    });
  };

  if (sessionState.isComplete) {
    const percentage = Math.round((sessionState.score / sessionState.questions.length) * 100);
    
    return (
      <Card className="p-8 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Practice Complete!</h2>
          <p className="text-muted-foreground">Great job on completing the session</p>
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold text-primary">
            {sessionState.score}/{sessionState.questions.length}
          </div>
          <div className="text-lg text-muted-foreground">{percentage}% Correct</div>
        </div>

        <Button onClick={handleRestart} size="lg" className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Question {sessionState.currentQuestionIndex + 1} of {sessionState.questions.length}
          </span>
          <span className="font-semibold text-foreground">
            Score: {sessionState.score}/{sessionState.questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="p-6 space-y-6">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          {currentQuestion.category}
        </div>

        {/* Question */}
        <h3 className="text-xl font-semibold text-foreground">{currentQuestion.question}</h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = sessionState.selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showResult = sessionState.showExplanation;

            let buttonClass = 'border-2 hover:border-primary/50';
            if (showResult) {
              if (isCorrect) {
                buttonClass = 'border-2 border-green-500 bg-green-500/10';
              } else if (isSelected) {
                buttonClass = 'border-2 border-destructive bg-destructive/10';
              }
            } else if (isSelected) {
              buttonClass = 'border-2 border-primary bg-primary/10';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={sessionState.showExplanation}
                className={`w-full p-4 rounded-lg text-left transition-all ${buttonClass} flex items-center justify-between`}
                aria-pressed={isSelected}
              >
                <span className="text-sm font-medium">{option}</span>
                {showResult && isCorrect && <Check className="w-5 h-5 text-green-500" />}
                {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-destructive" />}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {sessionState.showExplanation && (
          <div className="p-4 rounded-lg bg-muted border border-border animate-fade-in">
            <h4 className="font-semibold text-foreground mb-2">Explanation</h4>
            <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {!sessionState.showExplanation ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={sessionState.selectedAnswer === null}
              className="flex-1"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="flex-1 gap-2">
              {sessionState.currentQuestionIndex === sessionState.questions.length - 1
                ? 'Finish'
                : 'Next Question'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};