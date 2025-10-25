// File: ArtificialIntelligenceLearn.tsx
// Description: Single-page, step-based AI learning flow with intro sections, lessons, mid-quiz, final quiz, and certificate display.
// Notes:
// - Consistent with your UI style: gradients, shadcn/ui Card & Button, lucide-react icons, animated sections.
// - Single file: manages steps, lessons, quizzes, scoring, and certificate in one React component.
// - No routing changes; everything happens in-page via state and transitions.
// - Content-heavy and explicit; can be further expanded by adding more lessons/quizzes in the data arrays.

// Imports
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Code,
  Layers,
  LineChart,
  Network,
  Cpu,
  Shield,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Info,
  Target,
  BarChart3,
  Users,
  Sparkles,
  FileText,
  Trophy,
  TrendingUp,
  ListChecks,
  ClipboardCheck,
  Timer,
  Lock,
  ScanLine,
  Database,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";
import certificateSample from "@/assets/hero-education.jpg";

// Types
type Lesson = {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  summary: string;
  content: string[];
  objectives: string[];
  readingTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  tags?: string[];
};

type Quiz = {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passThreshold: number; // percentage required to pass this quiz
};

// Intro Sections (3-step onboarding before learning)
const introSections = [
  {
    id: "intro-1",
    title: "What is Artificial Intelligence?",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    summary:
      "AI is the field of building systems that can perceive, reason, learn, and act. It spans from machine learning to neural networks and beyond.",
    points: [
      "From rule-based systems to data-driven models",
      "AI learns patterns to make predictions or decisions",
      "Modern AI thrives on data and compute",
    ],
  },
  {
    id: "intro-2",
    title: "Why AI Matters Today",
    icon: LineChart,
    color: "from-indigo-600 to-blue-600",
    summary:
      "AI powers search, recommendations, vision, speech, medical diagnosis, fraud detection, and more. It’s reshaping industries and daily life.",
    points: [
      "Real-world impact: health, finance, education, and security",
      "Scales insights: from data to actionable decisions",
      "Creates new jobs and requires new ethics frameworks",
    ],
  },
  {
    id: "intro-3",
    title: "What You Will Learn Here",
    icon: Target,
    color: "from-emerald-600 to-teal-600",
    summary:
      "Master the core building blocks of AI: machine learning, neural networks, and practical projects that bridge theory to impact.",
    points: [
      "Core ML workflow: data, features, training, evaluation",
      "Neural networks: layers, activations, backpropagation",
      "Project-based learning: build, test, deploy, iterate",
    ],
  },
];

// Lessons (single page flow)
const lessons: Lesson[] = [
  {
    id: "lesson-1",
    title: "Foundations of Machine Learning",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    summary:
      "Understand the ML lifecycle, types of learning, and how data drives model performance.",
    content: [
      "Machine learning (ML) teaches computers to find patterns in data to make predictions.",
      "Core types: supervised (labeled data), unsupervised (pattern discovery), and reinforcement learning (trial-and-error).",
      "Pipeline: data collection, cleaning, feature engineering, model selection, training, validation, and deployment.",
      "Metrics matter: accuracy, precision, recall, F1-score, ROC-AUC—each reveals different aspects of performance.",
    ],
    objectives: [
      "Differentiate supervised vs. unsupervised learning",
      "Explain the ML pipeline stages",
      "Describe common evaluation metrics",
    ],
    readingTime: "8 min",
    difficulty: "Beginner",
  },
  {
    id: "lesson-2",
    title: "Neural Network Basics",
    icon: Network,
    color: "from-indigo-500 to-blue-500",
    summary:
      "Dive into layers, weights, biases, activation functions, and how networks learn via backpropagation.",
    content: [
      "A neural network is a function approximator built from layers of simple units (neurons).",
      "Weights and biases are parameters learned to map inputs to desired outputs.",
      "Activation functions (ReLU, sigmoid, tanh) introduce non-linearity so networks can model complex relationships.",
      "Training uses gradient descent and backpropagation to adjust parameters and minimize loss.",
    ],
    objectives: [
      "Name key components of a neural network",
      "Explain the role of activation functions",
      "Understand backpropagation at a conceptual level",
    ],
    readingTime: "10 min",
    difficulty: "Beginner",
  },
  {
    id: "lesson-3",
    title: "Practical ML Workflow",
    icon: Settings,
    color: "from-emerald-500 to-teal-500",
    summary:
      "Learn the pragmatic steps from data ingestion to model monitoring in production.",
    content: [
      "Start with a clear problem definition and success metrics.",
      "Collect representative data; watch for sampling bias and data leakage.",
      "Split data: train/validation/test to ensure generalization.",
      "Iterate: feature engineering, hyperparameter tuning, cross-validation.",
      "Deploy responsibly: monitor drift, retrain as needed, respect privacy.",
    ],
    objectives: [
      "Outline a robust ML workflow",
      "Identify common pitfalls (bias, leakage, overfitting)",
      "Understand deployment and monitoring basics",
    ],
    readingTime: "9 min",
    difficulty: "Intermediate",
  },
  {
    id: "lesson-4",
    title: "Computer Vision Overview",
    icon: ScanLine,
    color: "from-orange-500 to-red-500",
    summary:
      "From convolutional networks to image recognition, learn how AI sees.",
    content: [
      "Convolutional Neural Networks (CNNs) extract hierarchical features from images.",
      "Tasks: classification, detection, segmentation, tracking.",
      "Data augmentation improves robustness (flip, rotate, crop).",
      "Evaluation includes accuracy and IoU depending on task.",
    ],
    objectives: [
      "Describe CNNs and their use in vision",
      "List key vision tasks and metrics",
      "Recognize the role of augmentation",
    ],
    readingTime: "7 min",
    difficulty: "Intermediate",
  },
  {
    id: "lesson-5",
    title: "NLP and Language Models",
    icon: BookOpen,
    color: "from-fuchsia-500 to-purple-600",
    summary:
      "How AI reads, writes, and understands text with embeddings and transformers.",
    content: [
      "Word embeddings (Word2Vec, GloVe) map words to vectors capturing semantic meaning.",
      "Transformers (attention mechanisms) enable scalable language understanding.",
      "Fine-tuning and prompt engineering adapt models to specific tasks.",
      "Ethics: bias, misinformation, privacy—critical considerations in NLP.",
    ],
    objectives: [
      "Explain embeddings and transformers conceptually",
      "Understand fine-tuning vs. prompting",
      "Identify key ethical concerns in NLP",
    ],
    readingTime: "11 min",
    difficulty: "Intermediate",
  },
];

// Mid-course quiz (after lesson 1-3)
const midQuiz: Quiz = {
  id: "quiz-mid",
  title: "Mid-Course Checkpoint",
  description:
    "Evaluate your understanding of core ML concepts and workflows before diving deeper.",
  passThreshold: 60,
  questions: [
    {
      id: "q1",
      prompt:
        "Which learning type uses labeled data to map inputs to outputs?",
      options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Self-Supervised Learning"],
      answerIndex: 1,
      explanation:
        "Supervised learning uses labeled data to train models to predict outputs from inputs.",
      tags: ["ML Basics", "Supervised"],
    },
    {
      id: "q2",
      prompt:
        "Which metric is best for highly imbalanced binary classification?",
      options: ["Accuracy", "Recall", "ROC-AUC", "Mean Squared Error"],
      answerIndex: 2,
      explanation:
        "ROC-AUC often provides a robust measure across thresholds for imbalanced datasets.",
      tags: ["Metrics"],
    },
    {
      id: "q3",
      prompt:
        "What is the primary purpose of a validation set?",
      options: ["Final unbiased evaluation", "Hyperparameter tuning and model selection", "Model training", "Data cleaning"],
      answerIndex: 1,
      explanation:
        "The validation set guides tuning and selection without leaking test performance.",
      tags: ["Workflow"],
    },
    {
      id: "q4",
      prompt:
        "Which activation function is commonly used for hidden layers due to its simplicity?",
      options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
      answerIndex: 2,
      explanation:
        "ReLU is widely used for hidden layers due to ease of optimization and sparsity.",
      tags: ["NN Basics"],
    },
  ],
};

// Certificate text (shown on pass)
const certificateText = {
  title: "Official Certificate of Achievement",
  line1: "This is to certify that",
  line2:
    "has successfully completed the Artificial Intelligence Learning Path on Eduverse, demonstrating outstanding commitment and achievement.",
  line3:
    "This certificate is issued as an official recognition of knowledge and skills acquired.",
  blockchainId: "EDU-CHAIN-2025-000123",
  serialNumber: "Serial No: 000123-AI-EDU",
  signatureName: "Dr. Amir Hossein Agrest – Director of Eduverse",
};

export default function ArtificialIntelligenceLearn() {
  // State management
  const [mode, setMode] = React.useState<
    "intro" | "learning" | "mid-quiz" | "post-mid" | "final-quiz" | "certificate"
  >("intro");

  const [introIndex, setIntroIndex] = React.useState<number>(0);

  const [lessonIndex, setLessonIndex] = React.useState<number>(0);

  const [answersMid, setAnswersMid] = React.useState<Record<string, number>>({});
  const [answersFinal, setAnswersFinal] = React.useState<Record<string, number>>({});

  const [midScore, setMidScore] = React.useState<number | null>(null);
  const [finalScore, setFinalScore] = React.useState<number | null>(null);

  const [recipientName, setRecipientName] = React.useState<string>("Learner");

  // Helpers
  function handleIntroNext() {
    if (introIndex < introSections.length - 1) {
      setIntroIndex(introIndex + 1);
    } else {
      setMode("learning");
    }
  }

  function handleIntroPrev() {
    if (introIndex > 0) {
      setIntroIndex(introIndex - 1);
    }
  }

  function gotoNextLesson() {
    if (lessonIndex < lessons.length - 1) {
      const nextIndex = lessonIndex + 1;
      setLessonIndex(nextIndex);
      // Mid-quiz trigger after lesson 3
      if (nextIndex === 3) {
        setMode("mid-quiz");
      }
    } else {
      // Completed lessons -> final quiz
      setMode("final-quiz");
    }
  }

  function gotoPrevLesson() {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
    }
  }

  function submitMidQuiz() {
    const total = midQuiz.questions.length;
    let correct = 0;
    midQuiz.questions.forEach((q) => {
      const selected = answersMid[q.id];
      if (selected === q.answerIndex) correct += 1;
    });
    const score = Math.round((correct / total) * 100);
    setMidScore(score);
    setMode("post-mid");
  }


  function resetAll() {
    setMode("intro");
    setIntroIndex(0);
    setLessonIndex(0);
    setAnswersMid({});
    setAnswersFinal({});
    setMidScore(null);
    setFinalScore(null);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/knowflow"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to KnowFlow Overview
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">
                <Cpu className="h-4 w-4" />
                Artificial Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Learn{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI with Confidence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Understand machine learning, neural networks, and practical AI use cases.
                Build projects that connect theory with real-world impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:opacity-90 shadow-glow"
                  onClick={() => setMode("intro")}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Intro
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img src={heroImage} alt="AI Learning" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode Switcher Sections */}
      {mode === "intro" && (
        <IntroStepper
          introIndex={introIndex}
          setIntroIndex={setIntroIndex}
          onPrev={handleIntroPrev}
          onNext={handleIntroNext}
        />
      )}

      {mode === "learning" && (
        <LessonSection
          lesson={lessons[lessonIndex]}
          lessonIndex={lessonIndex}
          totalLessons={lessons.length}
          onPrev={gotoPrevLesson}
          onNext={gotoNextLesson}
        />
      )}

      {mode === "mid-quiz" && (
        <QuizSection
          quiz={midQuiz}
          answers={answersMid}
          setAnswers={setAnswersMid}
          onSubmit={submitMidQuiz}
          onBack={() => setMode("learning")}
          titleBadge="Checkpoint"
          accentColor="from-indigo-500 to-blue-500"
        />
      )}

      {mode === "post-mid" && (
        <MidQuizResult
          score={midScore ?? 0}
          threshold={midQuiz.passThreshold}
          onRetry={() => {
            setAnswersMid({});
            setMidScore(null);
            setMode("mid-quiz");
          }}
          onContinue={() => setMode("learning")}
        />
      )}

      {mode === "certificate" && (
        <CertificateSection
          name={recipientName}
          setName={setRecipientName}
          score={finalScore ?? 0}
          cert={certificateText}
          onReset={resetAll}
        />
      )}

      <Footer />
    </div>
  );
}

// Intro Stepper Component (3 sections)
function IntroStepper({
  introIndex,
  setIntroIndex,
  onPrev,
  onNext,
}: {
  introIndex: number;
  setIntroIndex: (n: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const section = introSections[introIndex];
  const Icon = section.icon;
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-glow`}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{section.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{section.summary}</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {section.points.map((p, i) => (
                <div key={i} className="p-4 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <div className="font-semibold">Key Point</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{p}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                className="border-2"
                onClick={onPrev}
                disabled={introIndex === 0}
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Previous
              </Button>
              <div className="text-sm text-muted-foreground">
                Section {introIndex + 1} of {introSections.length}
              </div>
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow" onClick={onNext}>
                {introIndex === introSections.length - 1 ? (
                  <>
                    Enter Learning Flow
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Lesson Section Component
function LessonSection({
  lesson,
  lessonIndex,
  totalLessons,
  onPrev,
  onNext,
}: {
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const Icon = lesson.icon;
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Lesson {lessonIndex + 1}:{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {lesson.title}
              </span>
            </h2>
            <div className="text-sm text-muted-foreground">
              {lesson.readingTime} • {lesson.difficulty}
            </div>
          </div>
          <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lesson.color} flex items-center justify-center text-white shadow-glow`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-semibold">Summary</div>
                <div className="text-sm text-muted-foreground">{lesson.summary}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-purple-600" />
                  <div className="font-semibold">Lesson Content</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {lesson.content.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="h-5 w-5 text-pink-600" />
                  <div className="font-semibold">Objectives</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {lesson.objectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <StatItem icon={BarChart3} label="Progress" value={`${Math.round(((lessonIndex + 1) / totalLessons) * 100)}%`} color="from-purple-600 to-pink-600" />
              <StatItem icon={Timer} label="Reading time" value={lesson.readingTime} color="from-indigo-600 to-blue-600" />
              <StatItem icon={Shield} label="Difficulty" value={lesson.difficulty} color="from-emerald-600 to-teal-600" />
            </div>

            <div className="flex items-center justify-between">
              <Button variant="outline" className="border-2" onClick={onPrev} disabled={lessonIndex === 0}>
                <ChevronLeft className="mr-2 h-5 w-5" />
                Previous Lesson
              </Button>
              <div className="text-sm text-muted-foreground">
                Lesson {lessonIndex + 1} of {totalLessons}
              </div>
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow" onClick={onNext}>

                {lessonIndex === totalLessons - 1 ? (
                  <Link to="/exam/final-ai-quiz">
                    <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                      Final Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                ) : lessonIndex === 2 ? (
                  
                    <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                      Proceed to Mid Quiz
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                ) : (
                  <Button
                    className="bg-gradient-hero hover:opacity-90 shadow-glow"
                    onClick={onNext}
                  >
                    Next Lesson
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Stat item
function StatItem({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="text-center p-6 rounded-xl border bg-background">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white shadow-glow mb-3`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}

// Quiz Section (reusable)
function QuizSection({
  quiz,
  answers,
  setAnswers,
  onSubmit,
  onBack,
  titleBadge,
  accentColor,
}: {
  quiz: Quiz;
  answers: Record<string, number>;
  setAnswers: (a: Record<string, number>) => void;
  onSubmit: () => void;
  onBack: () => void;
  titleBadge: string;
  accentColor: string;
}) {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400`}>
              <ClipboardCheck className="h-4 w-4" />
              {titleBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {quiz.title}
            </h2>
            <p className="text-lg text-muted-foreground">{quiz.description}</p>
          </div>

          <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in">
            <div className="space-y-8">
              {quiz.questions.map((q, idx) => (
                <div key={q.id} className="p-6 rounded-lg border bg-background">
                  <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="h-5 w-5 text-purple-600" />
                    <div className="font-semibold">Question {idx + 1}</div>
                  </div>
                  <div className="mb-4">{q.prompt}</div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt, i) => {
                      const isSelected = answers[q.id] === i;
                      return (
                        <button
                          key={i}
                          className={`text-left p-3 rounded-lg border transition-all ${isSelected
                              ? "border-purple-600 bg-purple-600/10"
                              : "border-border hover:border-purple-500/50 hover:bg-purple-500/5"
                            }`}
                          onClick={() =>
                            setAnswers({
                              ...answers,
                              [q.id]: i,
                            })
                          }
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {answers[q.id] !== undefined && (
                    <div className="mt-3 text-xs text-muted-foreground">
                      Tip: {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <Button variant="outline" className="border-2" onClick={onBack}>
                <ChevronLeft className="mr-2 h-5 w-5" />
                Back
              </Button>
              <div className="text-sm text-muted-foreground">
                Pass threshold: {quiz.passThreshold}%
              </div>
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow" onClick={onSubmit}>
                Submit Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Mid Quiz Result
function MidQuizResult({
  score,
  threshold,
  onRetry,
  onContinue,
}: {
  score: number;
  threshold: number;
  onRetry: () => void;
  onContinue: () => void;
}) {
  const passed = score >= threshold;
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-blue-500/5 to-transparent" />
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              <BarChart3 className="h-4 w-4" />
              Mid-Course Result
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Your Score:{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {score}%
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {passed
                ? "Great job! You’ve demonstrated core understanding. Continue to the remaining lessons."
                : "You’re close. Consider revisiting earlier lessons to strengthen your foundations."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!passed && (
                <Button variant="outline" className="border-2" onClick={onRetry}>
                  Retry Quiz
                </Button>
              )}
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow" onClick={onContinue}>
                Continue Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Final Quiz Section (reuses QuizSection but shows callout)
function FinalQuizSection({
  quiz,
  answers,
  setAnswers,
  onSubmit,
  onBack,
  titleBadge,
  accentColor,
}: {
  quiz: Quiz;
  answers: Record<string, number>;
  setAnswers: (a: Record<string, number>) => void;
  onSubmit: () => void;
  onBack: () => void;
  titleBadge: string;
  accentColor: string;
}) {
  return (
    <>
      <section className="py-12 relative">
        <div className="container px-4 sm:px-6">
          <Card className="p-6 border-2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-purple-600" />
              <div className="font-semibold">Final Check</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Passing this assessment with a score of {quiz.passThreshold}% or higher
              will unlock your official Eduverse certificate.
            </p>
          </Card>
        </div>
      </section>

      <QuizSection
        quiz={quiz}
        answers={answers}
        setAnswers={setAnswers}
        onSubmit={onSubmit}
        onBack={onBack}
        titleBadge={titleBadge}
        accentColor={accentColor}
      />
    </>
  );
}

// Certificate Section
function CertificateSection({
  name,
  setName,
  score,
  cert,
  onReset,
}: {
  name: string;
  setName: (s: string) => void;
  score: number;
  cert: typeof certificateText;
  onReset: () => void;
}) {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-transparent" />
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Congratulations!{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                You Passed
              </span>
            </h2>
            <div className="text-sm text-muted-foreground">
              Final Score: {score}%
            </div>
          </div>

          <Card className="p-8 sm:p-12 border-2 bg-card/50 backdrop-blur-sm animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
                  <Award className="h-4 w-4" />
                  {cert.title}
                </div>
                <div className="space-y-2 mb-6">
                  <div className="text-muted-foreground">{cert.line1}</div>
                  <input
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-lg font-semibold"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name for certificate"
                  />
                  <div className="text-muted-foreground">{cert.line2}</div>
                  <div className="text-muted-foreground">{cert.line3}</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg border bg-background">
                    <div className="text-xs text-muted-foreground">Blockchain ID</div>
                    <div className="font-semibold">{cert.blockchainId}</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-background">
                    <div className="text-xs text-muted-foreground">Serial Number</div>
                    <div className="font-semibold">{cert.serialNumber}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-glow flex items-center justify-center">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Verified by Eduverse • {cert.signatureName}
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={certificateSample}
                  alt="Certificate Preview"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-gradient-hero hover:opacity-90 shadow-glow">
                Download Certificate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2" onClick={onReset}>
                Restart Course
              </Button>
            </div>
          </Card>

          {/* Trust & Verification */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 border">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <div className="font-semibold">Anti-Forgery</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Blockchain ID, serial number, microtext watermark, and QR verification ensure authenticity and prevent forgery.
              </div>
            </Card>

            <Card className="p-6 border">
              <div className="flex items-center gap-2 mb-2">
                <ScanLine className="h-5 w-5 text-pink-600" />
                <div className="font-semibold">QR Verification</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Scan the QR code on your certificate to verify its issuance and ownership on Eduverse.
              </div>
            </Card>

            <Card className="p-6 border">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-emerald-600" />
                <div className="font-semibold">Secure Records</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Certificates are recorded immutably with transparent audit trails for long-term trust.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// React import for TSX (ensure TS server sees React in scope)
import * as React from "react";