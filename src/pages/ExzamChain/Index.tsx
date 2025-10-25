import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ExzamChainIndex() {
  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">ExzamChain</h1>
      <p className="text-gray-600">انتخاب کن می‌خوای توی آزمون‌های آماده شرکت کنی یا آزمون جدید بسازی.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">آزمون‌های آماده</h2>
          <p>لیست آزمون‌هایی که سیستم خودش ساخته.</p>
          <Button asChild>
            <Link to="/exzamchain/system-exams">مشاهده آزمون‌ها</Link>
          </Button>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">ساخت آزمون جدید</h2>
          <p>آزمون خودت رو بساز و لینک اختصاصی بگیر.</p>
          <Button asChild>
            <Link to="/exzamchain/create">ساخت آزمون</Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}