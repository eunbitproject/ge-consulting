// components/ProgramTemplate.tsx
import React, { ReactNode } from "react";

type CTA = {
  label: string;
  href: string;          // 내부 경로 또는 파일 링크
  variant?: "primary" | "ghost";
};

type Section = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  locale: "kr" | "en";
  title: string;
  subtitle?: string;
  overview: string;
  benefits: string[];
  primaryCta: CTA;
  secondaryCta?: CTA;
  sections?: Section[];
};

function CtaButton({ label, href, variant = "primary" }: CTA) {
  const base =
    "inline-flex items-center rounded-xl px-4 py-2 text-sm transition";
  const primary =
    "bg-amber-500 hover:bg-amber-400 text-black shadow";
  const ghost =
    "border border-white/30 hover:border-white/60 text-white/90";
  return (
    <a className={`${base} ${variant === "ghost" ? ghost : primary}`} href={href}>
      {label}
      <span className="ml-1">→</span>
    </a>
  );
}

export default function ProgramTemplate({
  locale,
  title,
  subtitle,
  overview,
  benefits,
  primaryCta,
  secondaryCta,
  sections = [],
}: Props) {
  // 고정 연락처 (요청하신 정보)
  const CONTACT = {
    phone: "033-762-7746",
    email: "eunbitproject@naver.com",
    address: "강원도 원주시 서원대로 500 원주프리미엄아울렛 4층 418호",
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        {/* 헤더 */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-white/80">{subtitle}</p>
          )}
        </header>

        {/* 개요 + 혜택 + CTA */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-white/90">{overview}</p>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-medium">
              {locale === "kr" ? "주요 혜택" : "Key Benefits"}
            </h2>
            <ul className="space-y-2">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-white/90">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <CtaButton {...primaryCta} />
              {secondaryCta && <CtaButton {...secondaryCta} />}
            </div>
          </aside>
        </div>

        {/* 하위 섹션들 */}
        {sections.length > 0 && (
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h3 className="mb-3 text-2xl font-semibold">{s.title}</h3>
                <div className="prose prose-invert max-w-none">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* 연락처 박스 */}
        <footer className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-2 text-lg font-medium">
            {locale === "kr" ? "문의" : "Contact"}
          </h4>
          <p className="text-white/90">
            {locale === "kr" ? "전화" : "Phone"}: {CONTACT.phone} · Email:{" "}
            <a className="underline" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <br />
            {locale === "kr" ? "주소" : "Address"}: {CONTACT.address}
          </p>
        </footer>
      </section>
    </main>
  );
}
