"use client";

import { useMemo, useState } from "react";
import { faqs as all } from "@/data/faqs";

export default function FaqList({ locale }: { locale: "kr" | "en" }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    return all
      .filter((f) => f.locale === locale)
      .filter((f) =>
        q.trim()
          ? (f.q + f.a + f.category).toLowerCase().includes(q.toLowerCase())
          : true
      );
  }, [locale, q]);

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={locale === "kr" ? "질문 검색" : "Search FAQ"}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50"
      />
      <div className="mt-4 space-y-2">
        {list.map((f) => (
          <details
            key={f.id}
            className="rounded-2xl border border-white/15 bg-white/5 p-4 open:bg-white/10"
          >
            <summary className="cursor-pointer list-none text-white">
              <span className="text-xs text-white/70">{f.category} · </span>
              <span className="font-semibold">{f.q}</span>
            </summary>
            <p className="mt-2 text-white/90">{f.a}</p>
          </details>
        ))}
        {!list.length && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
            {locale === "kr" ? "검색 결과가 없습니다." : "No results found."}
          </div>
        )}
      </div>
    </>
  );
}
