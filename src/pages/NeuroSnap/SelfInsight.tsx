import React, { useState } from 'react';

type AnswerSet = {
  loneliness: string;
  valueChoice: string;
  criticismReaction: string;
  selfAnimal: string;
};

type Insight = {
  personality: string;
  emotionalState: string;
  recommendation: string;
};

const SelfInsight: React.FC = () => {
  const [answers, setAnswers] = useState<AnswerSet>({
    loneliness: '',
    valueChoice: '',
    criticismReaction: '',
    selfAnimal: '',
  });

  const [insight, setInsight] = useState<Insight | null>(null);

  const handleChange = (field: keyof AnswerSet, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Simulated AI analysis logic
    const { loneliness, valueChoice, criticismReaction, selfAnimal } = answers;

    let personality = '';
    let emotionalState = '';
    let recommendation = '';

    if (loneliness === 'happy') emotionalState = 'مستقل و آرام';
    else if (loneliness === 'sad') emotionalState = 'احتمال اضطراب یا نیاز به تعامل اجتماعی';

    if (valueChoice === 'money') personality = 'عمل‌گرا با تمایل به امنیت مالی';
    else if (valueChoice === 'knowledge') personality = 'کنجکاو و رشدگرا';

    if (criticismReaction === 'defensive') emotionalState += '، حساس به نقد';
    else if (criticismReaction === 'reflective') emotionalState += '، پذیرای رشد';

    if (selfAnimal === 'cat') recommendation = 'فعالیت‌های فردی مثل نوشتن یا طراحی مناسب شماست';
    else if (selfAnimal === 'dog') recommendation = 'تعامل گروهی و یادگیری مشارکتی برایتان مفید است';

    setInsight({ personality, emotionalState, recommendation });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">🧠 ارزیابی خودشناسی NeuroSnap</h2>
      <p>با پاسخ دادن به سوالات زیر، بینش شخصی‌سازی‌شده دریافت کن</p>

      <div className="space-y-4">
        <div>
          <label>وقتی تنها هستی، چه حسی داری؟</label>
          <select onChange={e => handleChange('loneliness', e.target.value)} className="w-full p-2 border">
            <option value="">انتخاب کن</option>
            <option value="happy">خوشحال و راحت</option>
            <option value="sad">ناراحت یا بی‌حوصله</option>
          </select>
        </div>

        <div>
          <label>بین پول و علم، کدام را ترجیح می‌دهی؟</label>
          <select onChange={e => handleChange('valueChoice', e.target.value)} className="w-full p-2 border">
            <option value="">انتخاب کن</option>
            <option value="money">پول</option>
            <option value="knowledge">علم</option>
          </select>
        </div>

        <div>
          <label>وقتی کسی ازت انتقاد می‌کنه، چه واکنشی داری؟</label>
          <select onChange={e => handleChange('criticismReaction', e.target.value)} className="w-full p-2 border">
            <option value="">انتخاب کن</option>
            <option value="defensive">دفاعی می‌شوم</option>
            <option value="reflective">فکر می‌کنم و بررسی می‌کنم</option>
          </select>
        </div>

        <div>
          <label>اگه بخوای خودتو با یه حیوان توصیف کنی، چی انتخاب می‌کنی؟</label>
          <select onChange={e => handleChange('selfAnimal', e.target.value)} className="w-full p-2 border">
            <option value="">انتخاب کن</option>
            <option value="cat">گربه</option>
            <option value="dog">سگ</option>
            <option value="eagle">عقاب</option>
            <option value="turtle">لاک‌پشت</option>
          </select>
        </div>
      </div>

      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        دریافت تحلیل
      </button>

      {insight && (
        <div className="mt-6 p-4 border rounded bg-gray-50 space-y-2">
          <h3 className="text-xl font-semibold">🔍 نتیجه‌ی تحلیل</h3>
          <p><strong>شخصیت:</strong> {insight.personality}</p>
          <p><strong>وضعیت احساسی:</strong> {insight.emotionalState}</p>
          <p><strong>توصیه:</strong> {insight.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default SelfInsight;
