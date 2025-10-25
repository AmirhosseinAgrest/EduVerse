import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  ChevronLeft,
  Search,
  QrCode,
  Fingerprint,
  Info,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const sampleIds = [
  "edu-2025-AGREST-000123",
  "edu-2025-EDUVERSE-000987",
  "edu-2025-ACADEMY-001245",
];

export default function Home() {
  const navigate = useNavigate();
  const [credentialId, setCredentialId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validFormat = /^edu-\d{4}-[A-Z0-9-]+-\d{6}$/;

  const handleAnalyze = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const id = credentialId.trim();
    if (!id) {
      setError("لطفاً شناسه مدرک را وارد کنید.");
      return;
    }
    if (!validFormat.test(id)) {
      setError("فرمت شناسه نادرست است. نمونه: edu-2025-AGREST-000123");
      return;
    }
    setError(null);
    navigate(`/result/${encodeURIComponent(id)}`);
  };

  const fillSample = (id: string) => {
    setCredentialId(id);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/#modules"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          بازگشت به ماژول‌ها
        </Link>
      </div>

      {/* Hero / Intro */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Intro */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Shield className="h-4 w-4" />
                Public Credential Verification
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                صفحه تأیید مدرک{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  EduVerse
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                شناسه مدرک را وارد کنید تا وضعیت آن را به‌صورت لحظه‌ای بررسی کنیم: معتبر، جعلی،
                یا اشتباه تایپی. این صفحه مخصوص کارفرماها، نهادها و دانش‌آموزان است.
              </p>

              {/* Tips */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4 border-2 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <div>
                      <div className="text-sm font-semibold">تطابق نام و صادرکننده</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        اگر مدرک متعلق به شخص دیگری باشد، فوراً نمایش داده می‌شود.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-2 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <div>
                      <div className="text-sm font-semibold">هشدار دامنه جعلی</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        فقط نتایج از دامنه رسمی EduVerse معتبر هستند.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right: Verify Form */}
            <Card className="p-6 sm:p-8 border-2 hover:border-blue-500/40 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm animate-fade-in">
              <form onSubmit={handleAnalyze} className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">ورود شناسه مدرک</div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
                    Real-time Check
                  </Badge>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">شناسه مدرک</label>
                  <div className="flex gap-2">
                    <Input
                      value={credentialId}
                      onChange={(e) => setCredentialId(e.target.value)}
                      placeholder="مثال: edu-2025-AGREST-000123"
                      className="flex-1"
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-2"
                            onClick={() => setCredentialId("")}
                            aria-label="پاک کردن"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          فرمت معتبر: edu-YYYY-ORG-000000
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  {error && (
                    <div className="text-sm text-red-600 dark:text-red-400">{error}</div>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-2">
                  {sampleIds.map((id, i) => (
                    <Button
                      key={id}
                      type="button"
                      variant="secondary"
                      className="justify-start"
                      onClick={() => fillSample(id)}
                    >
                      <Fingerprint className="h-4 w-4 mr-2" />
                      نمونه {i + 1}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow w-full sm:w-auto">
                    آنالیز و تأیید
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          className="border-2 w-full sm:w-auto"
                          onClick={() => fillSample(sampleIds[0])}
                        >
                          <Search className="mr-2 h-5 w-5" />
                          پرکردن خودکار نمونه
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        سریع تست کن با شناسه نمونه معتبر
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* Helper: QR + Domain */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <Card className="p-4 border-2">
                    <div className="flex items-center gap-3">
                      <QrCode className="h-5 w-5" />
                      <div>
                        <div className="text-sm font-semibold">تأیید با QR</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          QR روی مدرک باید مستقیم به صفحه نتیجه در دامنه رسمی وصل باشد.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-2">
                    <div className="flex items-center gap-3">
                      <Info className="h-5 w-5" />
                      <div>
                        <div className="text-sm font-semibold">دامنه رسمی EduVerse</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          فقط نتیجه از <span className="font-semibold">verify.educhain.agrest.dev</span> معتبر است.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidance & FAQ-like cards */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-lg font-semibold">چطور جعلی بودن لو می‌رود؟</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                اگر شناسه وجود نداشته باشد یا نام دارنده با رکورد رسمی مطابقت نداشته باشد،
                نتیجه با وضعیت نامعتبر نمایش داده می‌شود.
              </p>
            </Card>
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="text-lg font-semibold">نمایش اطلاعات رسمی</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                در صفحه نتیجه، نام رسمی دارنده، دوره، صادرکننده و تاریخ‌ها نمایش داده می‌شوند
                تا هر گونه دستکاری فایل مشخص شود.
              </p>
            </Card>
            <Card className="p-6 border-2 bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <div className="text-lg font-semibold">شناسه و فرمت صحیح</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                فرمت معتبر: <span className="font-mono">edu-YYYY-ORG-000000</span>.
                از حروف بزرگ برای سازمان استفاده کن و ۶ رقم برای سریال.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}