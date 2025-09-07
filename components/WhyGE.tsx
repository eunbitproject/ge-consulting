import React from "react";

type Locale = "ko" | "en";

export default function WhyGE({ locale = "en" }: { locale?: Locale }) {
  const t = TEXTS[locale] ?? TEXTS.en;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          {t.heading}
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((c: any) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-3 text-base font-semibold text-neutral-900">
                {c.title}
              </div>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEXTS: Record<Locale, any> = {
  en: {
    heading: "Why GE Consulting",
    cards: [
      { icon: "🧭", title: "Clear Roadmaps", desc: "Tailored plans from admissions to daily life." },
      { icon: "📌", title: "Local Expertise", desc: "Deep knowledge of KR/EN systems and schools." },
      { icon: "💬", title: "Responsive Support", desc: "Fast, friendly support on every step." },
      { icon: "🤝", title: "Trusted Network", desc: "Partners, schools and service providers." },
    ],
  },
  ko: {
    heading: "왜 GE 컨설팅인가",
    cards: [
      { icon: "🧭", title: "명확한 로드맵", desc: "입학부터 생활까지 맞춤형 계획." },
      { icon: "📌", title: "현지 전문성", desc: "국내/해외 입시·학교·제도에 대한 깊은 이해." },
      { icon: "💬", title: "빠른 응대", desc: "모든 단계에서 친절하고 신속한 지원." },
      { icon: "🤝", title: "믿을 수 있는 네트워크", desc: "학교·기관·서비스 공급자와의 탄탄한 협력." },
    ],
  },
};


