import React from "react";

type Locale = "ko" | "en";

const TEXTS: Record<Locale, any> = {
  en: {
    h1: (
      <>
        Your Trusted <span className="text-[#F4A261]">Global Education</span> Partner
      </>
    ),
    sub: "From admission to daily life—tailored guidance by expert counselors.",
    ctaPrimary: "Book a Free Consultation",
    ctaSecondary: "See Success Stories",
    stats: [
      { label: "Consultations", value: "2,000+" },
      { label: "Partners", value: "50+" },
      { label: "Satisfaction", value: "98%" },
    ],
    cards: [
      {
        title: "Studying in Korea (Inbound)",
        desc: "One-stop for admissions & visas",
        cta: "Learn More",
        href: "/en/programs/inbound",
      },
      {
        title: "Studying Abroad (Outbound)",
        desc: "Country-by-major roadmaps",
        cta: "Learn More",
        href: "/en/programs/outbound",
      },
      {
        title: "High School Consulting",
        desc: "Early planning & portfolio",
        cta: "Learn More",
        href: "/en/programs/high-school",
      },
      {
        title: "Cultural Exchange",
        desc: "K-culture & ski camps",
        cta: "Learn More",
        href: "/en/programs/exchange",
      },
    ],
  },
  ko: {
    h1: (
      <>
        당신의 글로벌 교육 파트너, <span className="text-[#F4A261]">GE Consulting</span>
      </>
    ),
    sub: "입학부터 생활까지—전문가의 맞춤형 가이드.",
    ctaPrimary: "무료 상담 신청",
    ctaSecondary: "성공 사례 보기",
    stats: [
      { label: "누적 상담", value: "2,000+" },
      { label: "파트너 기관", value: "50+" },
      { label: "만족도", value: "98%" },
    ],
    cards: [
      {
        title: "한국 유학 (Inbound)",
        desc: "입학·비자·숙소까지 원스톱",
        cta: "자세히 보기",
        href: "/kr/programs/inbound",
      },
      {
        title: "해외 유학 (Outbound)",
        desc: "국가·전공별 로드맵",
        cta: "자세히 보기",
        href: "/kr/programs/outbound",
      },
      {
        title: "고등학생 컨설팅",
        desc: "조기 유학/포트폴리오",
        cta: "자세히 보기",
        href: "/kr/programs/high-school",
      },
      {
        title: "국제 교류 프로그램",
        desc: "K-컬처·스키 캠프",
        cta: "자세히 보기",
        href: "/kr/programs/exchange",
      },
    ],
  },
};

export default function HeroOptionA({
  locale = "en",
  imageUrl = "/hero/ge-campus.jpg",
}: {
  locale?: Locale;
  imageUrl?: string;
}) {
  const t = TEXTS[locale] ?? TEXTS.en;

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label="Hero background"
      />
      {/* 어둡게 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-neutral-900/55" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* 왼쪽: 타이틀/설명/CTA/지표 */}
          <div className="lg:col-span-7">
            <h1
              id="hero-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {t.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {t.sub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={locale === "ko" ? "/kr/contact" : "/en/contact"}
                className="rounded-xl bg-[#F4A261] px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:opacity-95"
              >
                {t.ctaPrimary}
              </a>
              <a
                href={locale === "ko" ? "/kr/stories" : "/en/stories"}
                className="rounded-xl border border-white/30 bg-white/0 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.ctaSecondary}
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-white/90">
              {t.stats.map((s: any) => (
                <div key={s.label} className="rounded-2xl bg-white/5 p-4 text-center">
                  <dt className="text-xs uppercase tracking-wide text-white/70">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 오른쪽: 4 카드 */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {t.cards.map((c: any) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group relative rounded-2xl border border-white/15 bg-white/5 p-4 text-white hover:bg-white/10"
                >
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-1 text-xs text-white/75">{c.desc}</div>
                  <div className="mt-4 inline-flex items-center text-xs font-semibold text-white/90">
                    {c.cta}
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
