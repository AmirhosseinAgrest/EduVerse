import React, { useState } from 'react';

type UserInput = {
  goal: string;
  durationWeeks: number;
  dailyHours: number;
  targetLevel: 'basic' | 'intermediate' | 'advanced';
  learningStyle: 'visual' | 'auditory' | 'kinesthetic';
};

type DayPlan = {
  day: string;
  topic: string;
  method: string;
  duration: number;
};

type WeeklyPlan = {
  week: number;
  days: DayPlan[];
};

const LearningPathBuilder: React.FC = () => {
  const [input, setInput] = useState<UserInput>({
    goal: '',
    durationWeeks: 2,
    dailyHours: 2,
    targetLevel: 'basic',
    learningStyle: 'visual',
  });

  const [plan, setPlan] = useState<WeeklyPlan[]>([]);

  const handleChange = <K extends keyof UserInput>(key: K, value: UserInput[K]) => {
    setInput(prev => ({ ...prev, [key]: value }));
  };

  const generatePlan = () => {
    const topics = input.goal.toLowerCase().includes('python')
      ? ['Syntax & Variables', 'Control Flow', 'Functions', 'Data Structures', 'OOP', 'Modules', 'Projects']
      : ['General Concepts', 'Practice', 'Review'];

    const methods = {
      visual: 'ویدیو + نمودار',
      auditory: 'پادکست + توضیح صوتی',
      kinesthetic: 'تمرین عملی + پروژه',
    };

    const weekly: WeeklyPlan[] = [];

    for (let w = 1; w <= input.durationWeeks; w++) {
      const days: DayPlan[] = [];
      for (let d = 1; d <= 7; d++) {
        const topic = topics[(w - 1) * 7 + (d - 1)] || 'مرور یا تمرین';
        days.push({
          day: `روز ${d}`,
          topic,
          method: methods[input.learningStyle],
          duration: input.dailyHours,
        });
      }
      weekly.push({ week: w, days });
    }

    setPlan(weekly);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">🧠 ساخت نقشه‌ی یادگیری با MindMap AI</h2>
      <p>هدف یادگیری‌ات رو مشخص کن تا نقشه‌ی شخصی‌سازی‌شده دریافت کنی</p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="مثلاً: یادگیری پایتون در دو هفته"
          className="w-full p-2 border"
          onChange={e => handleChange('goal', e.target.value)}
        />

        <label>مدت یادگیری (هفته):</label>
        <input
          type="number"
          min={1}
          max={12}
          value={input.durationWeeks}
          className="w-full p-2 border"
          onChange={e => handleChange('durationWeeks', Number(e.target.value))}
        />

        <label>زمان روزانه (ساعت):</label>
        <input
          type="number"
          min={1}
          max={8}
          value={input.dailyHours}
          className="w-full p-2 border"
          onChange={e => handleChange('dailyHours', Number(e.target.value))}
        />

        <label>سطح هدف:</label>
        <select
          className="w-full p-2 border"
          onChange={e => handleChange('targetLevel', e.target.value as UserInput['targetLevel'])}
        >
          <option value="basic">مقدماتی</option>
          <option value="intermediate">متوسط</option>
          <option value="advanced">حرفه‌ای</option>
        </select>

        <label>سبک یادگیری:</label>
        <select
          className="w-full p-2 border"
          onChange={e => handleChange('learningStyle', e.target.value as UserInput['learningStyle'])}
        >
          <option value="visual">دیداری</option>
          <option value="auditory">شنیداری</option>
          <option value="kinesthetic">حرکتی</option>
        </select>
      </div>

      <button onClick={generatePlan} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        ساخت نقشه‌ی یادگیری
      </button>

      {plan.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold">📅 نقشه‌ی یادگیری شخصی‌سازی‌شده</h3>
          {plan.map(week => (
            <div key={week.week} className="border p-4 rounded bg-gray-50">
              <h4 className="font-bold">هفته {week.week}</h4>
              <ul className="list-disc pl-5">
                {week.days.map((day, idx) => (
                  <li key={idx}>
                    {day.day}: {day.topic} ({day.method}) – {day.duration} ساعت
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningPathBuilder;