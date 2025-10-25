import React, { useState } from 'react';
import { MentorProvider } from './context/MentorContext';
import { ChatWindow } from './ChatWindow';
import { PersonaSelector } from './PersonaSelector';
import { PracticeSession } from './PracticeSession';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Brain,
  MessageSquare,
  Target,
  Zap,
  Clock,
  Shield,
  Users,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorBotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <MentorProvider>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <div className="container relative mx-auto px-4">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Modules
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered Tutoring</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  MentorBot: Learning That
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Never Sleeps
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Your 24/7 AI tutoring assistant that adapts to your learning style. Get instant
                  help, personalized explanations, and practice questions—without judgment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2" onClick={() => setActiveTab('chat')}>
                    <MessageSquare className="w-5 h-5" />
                    Start Learning
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" onClick={() => setActiveTab('practice')}>
                    <Target className="w-5 h-5" />
                    Practice Mode
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Always Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Students Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Feature Cards */}
              <div className="grid gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instant Responses</h3>
                      <p className="text-sm text-muted-foreground">
                        Get answers immediately, no waiting in queue
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Multiple Personas</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose a teaching style that matches your preferences
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Judgment-Free Zone</h3>
                      <p className="text-sm text-muted-foreground">
                        Ask anything without fear of embarrassment
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Main Interface Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="chat" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="practice" className="gap-2">
                    <Target className="w-4 h-4" />
                    Practice
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Sidebar - Settings */}
                <div className="lg:col-span-1">
                  <Card className="p-6 space-y-6 sticky top-6">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-2">Settings</h2>
                      <p className="text-sm text-muted-foreground">
                        Customize your learning experience
                      </p>
                    </div>
                    <PersonaSelector />
                  </Card>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2">
                  <TabsContent value="chat" className="mt-0">
                    <ChatWindow />
                  </TabsContent>

                  <TabsContent value="practice" className="mt-0">
                    <PracticeSession />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose MentorBot?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Designed to make learning accessible, effective, and enjoyable for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Available Anytime',
                  description: 'Learn at your own pace, whenever inspiration strikes',
                },
                {
                  icon: BookOpen,
                  title: 'All Subjects',
                  description: 'Math, science, languages, history, and more',
                },
                {
                  icon: Target,
                  title: 'Practice Mode',
                  description: 'Test your knowledge with interactive quizzes',
                },
                {
                  icon: Brain,
                  title: 'Adaptive Learning',
                  description: 'AI adjusts to your learning style and pace',
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Accelerate Your Learning?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of students who are learning smarter with MentorBot
              </p>
              <Button size="lg" className="gap-2" onClick={() => setActiveTab('chat')}>
                <MessageSquare className="w-5 h-5" />
                Start Your First Session
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </MentorProvider>
  );
};

export default MentorBotPage;
