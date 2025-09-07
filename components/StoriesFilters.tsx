// components/StoriesFilters.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "kr" | "en";
type Story = {
  locale: Locale;
  slug: string;
  title: string;
  thumb?: string;
  oneLine?: string;
  category?: string;
  year?: string | number;
  country?: string;
  major?: string;
  tags?: string[];
};

export default function StoriesFilters({
  locale,
  items = [],              // ⬅️ 기본값 추가
  onChange,
}: {
  locale: Locale;
  items?: Story[];          // ⬅️ 선택적 + 위에서 기본값 처리
  onChange?: (list: Story[]) => void;
}) {
  const base = items ?? []; // ⬅️ 더블세이프

  // 고유값 추출 (항상 배열 보장)
  const categories = useMemo(
    () =>
      Array.from(
        new Set(base.map((i) => i.category).filter(Boolean))
      ) as string[],
    [base]
  );

  const years = useMemo(
    () => Array.from(new Set(base.map((i) => String(i.year ?? "")).filter(Boolean))),
    [base]
  );

  const countries = useMemo(
    () =>
      Array.from(new Set(base.map((i) => i.country).filter(Boolean))) as string[],
    [base]
  );

  const majors = useMemo(
    () =>
      Array.from(new Set(base.map((i) => i.major).filter(Boolean))) as string[],
    [base]
  );

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [major, setMajor] = useState("");

  const t =
    locale === "kr"
      ? { search: "검색", all: "전체", category: "카테고리", year: "연도", country: "국가", major: "전공" }
      : { search: "Search", all: "All", category: "Category", year: "Year", country: "Country", major: "Major" };

  useEffect(() => {
    let list = base;

    if (q.trim()) {
      const k = q.toLowerCase();
      list = list.filter(
        (s) =>
          s.title?.toLowerCase().includes(k) ||
          s.oneLine?.toLowerCase().includes(k) ||
          s.tags?.some((tag) => tag.toLowerCase().includes(k))
      );
    }
    if (category) list = list.filter((s) => s.category === category);
    if (year) list = list.filter((s) => String(s.year ?? "") === year);
    if (country) list = list.filter((s) => s.country === country);
    if (major) list = list.filter((s) => s.major === major);

    onChange?.(list);
  }, [q, category, year, country, major, base, onChange]);

  const box = "w-full rounded-md border border-neutral-300 bg-neutral-100 px-3 py-2";

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search} className={box} />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className={box}>
        <option value="">{t.all}</option>
        {(categories ?? []).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={year} onChange={(e) => setYear(e.target.value)} className={box}>
        <option value="">{t.all}</option>
        {(years ?? []).map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <select value={country} onChange={(e) => setCountry(e.target.value)} className={box}>
        <option value="">{t.all}</option>
        {(countries ?? []).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={major} onChange={(e) => setMajor(e.target.value)} className={box}>
        <option value="">{t.all}</option>
        {(majors ?? []).map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}
