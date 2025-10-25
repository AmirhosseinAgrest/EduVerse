import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  Shield,
  User,
  BookOpen,
  Award,
  Calendar,
  Hash,
} from "lucide-react";

interface CredentialRecord {
  credentialId: string;
  fullName: string;
  courseName: string;
  credentialType: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  verificationStatus: string;
  message?: string;
}

export default function Result() {
  const { id } = useParams();
  const [data, setData] = useState<CredentialRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentialId: id }),
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setData({
          credentialId: id || "",
          fullName: "",
          courseName: "",
          credentialType: "",
          issuer: "",
          issueDate: "",
          verificationStatus: "❌ Invalid",
          message: "خطا در اتصال به سرور.",
        });
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-24 pb-6">
        <Link
          to="/verify"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          بازگشت به صفحه تأیید
        </Link>
      </div>

      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6">
          {loading && (
            <div className="text-center text-lg text-muted-foreground">
              در حال بررسی مدرک...
            </div>
          )}

          {!loading && data && (
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Status */}
              <Card className="p-8 text-center border-2 shadow-glow">
                {data.verificationStatus === "✅ Verified" ? (
                  <>
                    <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
                    <h2 className="text-2xl font-bold text-green-600 mb-2">
                      مدرک معتبر است
                    </h2>
                    <Badge className="bg-green-600 text-white border-0">
                      Verified
                    </Badge>
                  </>
                ) : (
                  <>
                    <XCircle className="mx-auto h-16 w-16 text-red-600 mb-4" />
                    <h2 className="text-2xl font-bold text-red-600 mb-2">
                      مدرک نامعتبر یا جعلی است
                    </h2>
                    <Badge className="bg-red-600 text-white border-0">
                      Invalid
                    </Badge>
                    {data.message && (
                      <p className="text-muted-foreground mt-3">{data.message}</p>
                    )}
                  </>
                )}
              </Card>

              {/* Details */}
              {data.verificationStatus === "✅ Verified" && (
                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="p-6 border-2">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">نام دارنده</div>
                    </div>
                    <p className="text-muted-foreground">{data.fullName}</p>
                  </Card>

                  <Card className="p-6 border-2">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">دوره / مدرک</div>
                    </div>
                    <p className="text-muted-foreground">{data.courseName}</p>
                  </Card>

                  <Card className="p-6 border-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">نوع مدرک</div>
                    </div>
                    <p className="text-muted-foreground">{data.credentialType}</p>
                  </Card>

                  <Card className="p-6 border-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">صادرکننده</div>
                    </div>
                    <p className="text-muted-foreground">{data.issuer}</p>
                  </Card>

                  <Card className="p-6 border-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">تاریخ صدور</div>
                    </div>
                    <p className="text-muted-foreground">{data.issueDate}</p>
                  </Card>

                  {data.expirationDate && (
                    <Card className="p-6 border-2">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <div className="font-semibold">تاریخ انقضا</div>
                      </div>
                      <p className="text-muted-foreground">{data.expirationDate}</p>
                    </Card>
                  )}

                  <Card className="p-6 border-2 sm:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Hash className="h-5 w-5 text-blue-600" />
                      <div className="font-semibold">شناسه مدرک</div>
                    </div>
                    <p className="text-muted-foreground">{data.credentialId}</p>
                  </Card>
                </div>
              )}

              {/* Back button */}
              <div className="text-center pt-6">
                <Button asChild variant="outline" className="border-2">
                  <Link to="/verify">برگشت به جستجو</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}