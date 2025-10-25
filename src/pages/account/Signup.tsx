import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthFormWrapper } from "@/components/Auth/AuthFormWrapper";
import { SocialLoginButtons } from "@/components/Auth/SocialLoginButtons";
import { RoleSelect } from "@/components/Auth/RoleSelect";
import { CountrySelect } from "@/components/Auth/CountrySelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { ChangeEvent } from "react";
import type { SingleValue } from "react-select";
import { ArrowRight } from "lucide-react";

type CountryOption = { value: string; label: string };

export default function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<CountryOption | null>(null);
  const [underserved, setUnderserved] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_name) {
          setCountry({ value: data.country_name, label: data.country_name });
        }
      })
      .catch((err) => {
        console.error("IP geolocation failed", err);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    fullName,
    role,
    country: country?.value,
    underserved,
    email,
    password,
  };

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      // ذخیره اطلاعات غیرحساس در localStorage
      localStorage.setItem("user", JSON.stringify({
        fullName,
        email,
        role,
        country: country?.value,
        underserved
      }));

      navigate("/"); // یا برو به صفحه خوش‌آمدگویی
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert("Network error. Please try again.");
  }
};

  return (
    <AuthFormWrapper
      title="Create your account"
      subtitle="Join EduVerse and secure your academic journey"
    >
      <div className="space-y-6">
        <SocialLoginButtons label="Sign up with" />

        <div className="flex items-center gap-2 my-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or sign up with email</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              placeholder="e.g., Amir Hossein Agrest"
              value={fullName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
              required
            />
          </div>

          <RoleSelect value={role} onChange={setRole} />

          <CountrySelect
            value={country}
            onChange={(option: SingleValue<CountryOption>) => setCountry(option ?? null)}
          />

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="underserved"
              checked={underserved}
              onCheckedChange={(checked) => setUnderserved(Boolean(checked))}
            />
            <Label htmlFor="underserved">Are you from an underserved region?</Label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-glow">
            Create account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="text-xs text-muted-foreground text-center mt-4">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-blue-600 dark:text-blue-400 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600 dark:text-blue-400 underline">
              Privacy Policy
            </Link>.
          </div>

          <div className="text-sm text-muted-foreground mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </AuthFormWrapper>
  );
}