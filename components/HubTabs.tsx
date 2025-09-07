"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HubTabs({ locale }: { locale: "kr" | "en" }) {
  const sp = useSearchParams();
  const tab = sp.get("tab") ?? "news";
  const base = `/${locale}/hub`;

  const pill = (active: boolean) =>
    `rounded-xl px-3 py-1.5 text-sm font-semibold ${
      active
        ? "bg-white text-neutral-900"
        : "bg-white/10 text-white hover:bg-white/20"
    }`;

  return (
    <div className="flex items-center gap-2">
      <Link href={`${base}?tab=news`} className={pill(tab === "news")}>
        {locale === "kr" ? "뉴스" : "News"}
      </Link>
      <Link href={`${base}?tab=faq`} className={pill(tab === "faq")}>
        FAQ
      </Link>
    </div>
  );
}
