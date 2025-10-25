// src/components/Auth/SocialLoginButtons.tsx
import { Button } from "@/components/ui/button";
import { Github, Chrome } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SocialLoginButtonsProps = {
  label?: string;
};

export function SocialLoginButtons({ label = "Continue with" }: SocialLoginButtonsProps) {
  const navigate = useNavigate();

  // Mock handlers: simulate success and redirect to home page
  const handleMock = (provider: "google" | "github") => {
    // Optionally show a toast here using your toast system
    // e.g., toast({ title: `Mock ${provider} login`, description: "Redirecting..." })
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Button
        variant="outline"
        className="border-2 w-full"
        onClick={() => handleMock("google")}
      >
        <Chrome className="mr-2 h-4 w-4" />
        {label} Google
      </Button>
      <Button
        variant="outline"
        className="border-2 w-full"
        onClick={() => handleMock("github")}
      >
        <Github className="mr-2 h-4 w-4" />
        {label} GitHub
      </Button>
    </div>
  );
}
