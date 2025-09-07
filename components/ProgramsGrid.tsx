import React from "react";

type Locale = "ko" | "en";

export default function ProgramsGrid({ locale = "en" }: { locale?: Locale }) {
  const t = TEXTS[locale] ?? TEXTS.en;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {t.heading}
          </h2>
          <a
            href={locale === "ko" ? "/kr/programs" : "/en/programs"}
            className="text-sm font-semibold text-neutral-700 hover:text-neutral-900"
          >
            {t.more} →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((c: any) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="text-lg font-semibold text-neutral-900">
                {c.title}
              </div>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{c.desc}</p>
              <div className="mt-4 text-sm font-semibold text-neutral-700 group-hover:text-neutral-900">
                {t.learn} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEXTS: Record<Locale, any> = {
  en: {
    heading: "Latest Programs",
    more: "View all",
    learn: "Learn more",
    cards: [
      { title: "Studying in Korea (Inbound)", desc: "Admissions & visa one-stop service", href: "/en/programs/inbound" },
      { title: "Studying Abroad (Outbound)", desc: "Personalized roadmaps by country/major", href: "/en/programs/outbound" },
      { title: "High School Consulting", desc: "Academic plan & portfolio for top univ.", href: "/en/programs/high-school" },
      { title: "Cultural Exchange", desc: "K-culture & ski camps", href: "/en/programs/exchange" },
    ],
  },
  ko: {
    heading: "최신 프로그램",
    more: "모두 보기",
    learn: "자세히 보기",
    cards: [
      { title: "한국 유학 (Inbound)", desc: "입학·비자 원스톱", href: "/kr/programs/inbound" },
      { title: "해외 유학 (Outbound)", desc: "국가·전공 맞춤 로드맵", href: "/kr/programs/outbound" },
      { title: "고등학생 컨설팅", desc: "학업 설계/포트폴리오", href: "/kr/programs/high-school" },
      { title: "국제 교류 프로그램", desc: "K-컬처/스키 캠프", href: "/kr/programs/exchange" },
    ],
  },
};

