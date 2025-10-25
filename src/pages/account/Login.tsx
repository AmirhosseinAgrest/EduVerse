// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthFormWrapper } from "@/components/Auth/AuthFormWrapper";
import { SocialLoginButtons } from "@/components/Auth/SocialLoginButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // ذخیره اطلاعات غیرحساس در localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Network error. Please try again.");
  }
};

  return (
    <AuthFormWrapper
      title="Welcome back"
      subtitle="Sign in to continue to EduVerse"
    >
      <div className="space-y-6">
        <SocialLoginButtons label="Continue with" />

        <div className="relative">
          <div className="flex items-center gap-2 my-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or sign in with email</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form className="space-y-4" onSubmit={handleEmailLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-glow">
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="text-sm text-muted-foreground mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </AuthFormWrapper>
  );
}
