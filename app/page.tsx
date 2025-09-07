// app/ko/page.tsx
// ⬇ 별도 components 폴더 없이, 페이지 파일 하나로 Hero 섹션을 렌더링합니다.
//    onClick 같은 브라우저 이벤트를 없애서 서버 컴포넌트에서도 안전하게 동작합니다.
// 타입 선언 (파일 최상단에 추가)
type StatItem = { label: string; value: string };
type CardItem = { title: string; desc: string; cta: string; href: string };

function LangSwitch() {
  return (
    <nav className="fixed right-4 top-4 z-50 flex gap-2 text-sm">
      <a href="/kr" className="rounded-md bg-white px-3 py-1.5 text-neutral-900">KR</a>
      <a href="/en" className="rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">EN</a>
    </nav>
  );
}

type Locale = "ko" | "en";

function HeroOptionA({
  locale = "ko",
  imageUrl = "/hero/ge-campus.jpg",
}: {
  locale?: Locale;
  imageUrl?: string;
}) {
  const t = texts[locale] ?? texts.ko;

  return (
    <section className="relative isolate w-full overflow-hidden" aria-labelledby="hero-heading">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={t.bgAlt}
      />
      {/* Contrast overlay */}
      <div className="absolute inset-0 -z-0 bg-neutral-900/55" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Copy block */}
          <div className="lg:col-span-7">
            <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {t.sub}
            </p>

            {/* CTAs — 링크로 처리해서 클라이언트 코드 불필요 */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/ko/contact"
                className="rounded-xl bg-[#F4A261] px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4A261]/70"
                aria-label={t.ctaPrimary}
              >
                {t.ctaPrimary}
              </a>
              <a
                href="/ko/stories"
                className="rounded-xl border border-white/30 bg-white/0 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label={t.ctaSecondary}
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Trust stats */}
<dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-white/90">
  {t.stats.map((s: StatItem) => (
    <div
      key={s.label}
      className="rounded-2xl bg-white/5 p-4 text-center backdrop-blur-sm"
    >
      <dt className="text-xs uppercase tracking-wide text-white/70">
        {s.label}
      </dt>
      <dd className="mt-1 text-xl font-semibold">{s.value}</dd>
    </div>
  ))}
</dl>

          </div>

          {/* Quick links cards */}
<div className="lg:col-span-5">
  <div className="grid grid-cols-2 gap-3">
    {t.cards.map((c: CardItem) => (
      <a
        key={c.title}
        href={c.href}
        className="group relative rounded-2xl border border-white/15 bg-white/5 p-4 text-white backdrop-blur-sm hover:bg-white/10"
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

const texts: Record<Locale, any> = {
  ko: {
    h1: (
      <>
        당신의 글로벌 교육 파트너, <span className="text-[#F4A261]">GE Consulting</span>
      </>
    ),
    sub: "입학부터 생활까지, 전문가가 설계하는 맞춤형 유학 컨설팅.",
    ctaPrimary: "무료 상담 신청",
    ctaSecondary: "성공 사례 보기",
    bgAlt: "대학 캠퍼스 배경 이미지",
    stats: [
      { label: "누적 상담", value: "2,000+" },
      { label: "파트너 기관", value: "50+" },
      { label: "만족도", value: "98%" },
    ],
    cards: [
      { title: "한국 유학 (Inbound)", desc: "입학·비자·숙소까지 원스톱", cta: "자세히 보기", href: "/ko/programs/inbound" },
      { title: "해외 유학 (Outbound)", desc: "국가별 전공 로드맵", cta: "자세히 보기", href: "/ko/programs/outbound" },
      { title: "고등학생 컨설팅", desc: "조기 유학/비교과/로드맵", cta: "자세히 보기", href: "/ko/programs/high-school" },
      { title: "국제 교류 프로그램", desc: "K-컬처·스키 캠프", cta: "자세히 보기", href: "/ko/programs/exchange" },
    ],
  },
  en: {
    h1: (
      <>
        Your Trusted <span className="text-[#F4A261]">Global Education</span> Partner
      </>
    ),
    sub: "From admission to daily life—tailored guidance by expert counselors.",
    ctaPrimary: "Book a Free Consultation",
    ctaSecondary: "See Success Stories",
    bgAlt: "University campus background image",
    stats: [
      { label: "Consultations", value: "2,000+" },
      { label: "Partners", value: "50+" },
      { label: "Satisfaction", value: "98%" },
    ],
    cards: [
      { title: "Studying in Korea (Inbound)", desc: "One-stop for admissions & visas", cta: "Learn More", href: "/en/programs/inbound" },
      { title: "Studying Abroad (Outbound)", desc: "Country-by-major roadmaps", cta: "Learn More", href: "/en/programs/outbound" },
      { title: "High School Consulting", desc: "Early planning & portfolio", cta: "Learn More", href: "/en/programs/high-school" },
      { title: "Cultural Exchange", desc: "K-culture & ski camps", cta: "Learn More", href: "/en/programs/exchange" },
    ],
  },
};

export default function HomeKr() {
  return (
    <main className="min-h-screen">
      <LangSwitch />
      <HeroOptionA locale="ko" imageUrl="/hero/ge-campus.jpg" />
    </main>
  );
}

