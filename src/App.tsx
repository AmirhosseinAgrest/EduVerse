// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

// صفحات
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NeuroSnap from "./pages/NeuroSnap/NeuroSnap";
import MindMapAI from "./pages/MindMapAI/MindMapAI";
import TruthSnap from "./pages/TruthSnap/TruthSnap";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import CookiePolicy from "./pages/Footer/CookiePolicy";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import Team from "./pages/Footer/Team";
import Aboutus from "./pages/Footer/Aboutus";
import Pricing from "./pages/Footer/Pricing";
import TermsOfService from "./pages/Footer/TermsOfService";
import Accessibility from "./pages/Footer/Accessibility";
import Community from "./pages/Footer/Community";
import Careers from "./pages/Footer/Careers";
import Press from "./pages/Footer/Press";
import Support from "./pages/Footer/Support";
import Documentation from "./pages/Footer/Documentation";
import ApiReference from "./pages/Footer/ApiReference";
import TruthScan from "./pages/TruthSnap/TruthScan";
import Profile from "./pages/account/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import TruthSnapDashboard from "./pages/dashboard/TruthSnapDashboard";
import ExzamChainIndex from "./pages/ExzamChain/Index";
import CreateExam from "./pages/ExzamChain/CreateExam";
import TakeExam from "./pages/ExzamChain/TakeExam";
import ExamResult from "./pages/ExzamChain/ExamResult";
import ExamPublicView from "./pages/ExzamChain/ExamPublicView";
import ExamNotFound from "./pages/ExzamChain/ExamNotFound";
import AIEducationIntro from "./pages/KnowFlow/AIEducationIntro";
import KnowFlow from "./pages/KnowFlow/KnowFlow";
import KnowFlowLearn from "./pages/KnowFlow/KnowFlowLearn";
import MentorBot from "./pages/MentorBot/MentorBot";
import Home from "./pages/verify/Home";
import Result from './pages/verify/Result';
import SelfInsight from './pages/NeuroSnap/SelfInsight';
import LearningPathBuilder from './pages/MindMapAI/LearningPathBuilder';
import EduBridgeIntro from './pages/EduBridge/EduBridgeIntro';
import CryptoDonate from './pages/EduBridge/CryptoDonate';
import DeviceDonationGuide from './pages/EduBridge/DeviceDonationGuide';
import DirectDonation from './pages/EduBridge/DirectDonation';
import OfflineLearning from './pages/EduBridge/OfflineLearning';

// کلاینت ری‌اکت کوئری
const queryClient = new QueryClient();

const AppContent = () => {
  const { lang } = useLanguage();

  return (
    <div
      dir={lang === "fa" || lang === "ps" ? "rtl" : "ltr"}
      className={clsx(
        lang === "fa" ? "font-vazir" : lang === "ps" ? "font-pashto" : lang === "es" ? "font-roboto" : "font-sans"
      )}
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/neurosnap" element={<NeuroSnap />} />
            <Route path="/mindmap-ai" element={<MindMapAI />} />
            <Route path="/truthsnap" element={<TruthSnap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/support" element={<Support />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/truthscan" element={<TruthScan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/truthsnap" element={<TruthSnapDashboard />} />
            <Route path="/exzamchain" element={<ExzamChainIndex />} />
            <Route path="/exzamchain/create" element={<CreateExam />} />
            <Route path="/exam/:examId" element={<TakeExam />} />
            <Route path="/exam/:examId/result" element={<ExamResult />} />
            <Route path="/exam/:examId/public" element={<ExamPublicView />} />
            <Route path="/exam/not-found" element={<ExamNotFound />} />
            <Route path="/knowflow/ai-educationIntro" element={<AIEducationIntro />} />
            <Route path="/knowflow" element={<KnowFlow />} />
            <Route path="/knowflow/know-flow-learn" element={<KnowFlowLearn />} />
            <Route path="/mentorbot" element={<MentorBot />} />
            <Route path="/verify" element={<Home />} />
            <Route path="/result/:id" element={<Result />} />
            <Route path="/neurosnap/selfInsight" element={<SelfInsight />} />
            <Route path="/mindmapAI/learning-path-builder" element={<LearningPathBuilder />} />
            <Route path="/edubridge/edubridgeIntro" element={<EduBridgeIntro />} />
            <Route path="/edubridge/crypto-donate" element={<CryptoDonate />} />
            <Route path="/edubridge/device-donation-guide" element={<DeviceDonationGuide />} />
            <Route path="/edubridge/direct-donation" element={<DirectDonation />} />
            <Route path="/edubridge/offline-learning" element={<OfflineLearning />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;