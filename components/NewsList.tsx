"use client";

import { useMemo, useState } from "react";
import { news as all } from "@/data/news";
import NewsCard from "./NewsCard";

export default function NewsList({ locale }: { locale: "kr" | "en" }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    return all
      .filter((n) => n.locale === locale)
      .filter((n) =>
        q.trim()
          ? (n.title + n.excerpt + (n.tags ?? []).join(","))
              .toLowerCase()
              .includes(q.toLowerCase())
          : true
      )
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [locale, q]);

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={locale === "kr" ? "검색" : "Search"}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-white/50"
      />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {list.map((n) => (
          <NewsCard key={`${n.locale}-${n.slug}`} item={n} locale={locale} />
        ))}
      </div>
    </>
  );
}
