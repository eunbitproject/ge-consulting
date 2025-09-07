// components/NewsList.tsx
import { news, type NewsItem } from "@/data/news";
import NewsCard from "./NewsCard";

export default function NewsList({ locale }: { locale: "kr" | "en" }) {
  const all = news ?? [];
  const items: NewsItem[] = all
    .filter((n) => n.locale === locale)   // locale 필터
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="space-y-4">
      {/* 디버그: 배포/필터 상태 확인용 */}
      <div className="rounded-md bg-neutral-100 p-3 text-xs text-neutral-600">
        <div>locale = <b>{locale}</b></div>
        <div>all.length = <b>{all.length}</b></div>
        <div>filtered.length = <b>{items.length}</b></div>
        <div>titles = {items.map((i) => i.title).join(" | ") || "(none)"}</div>
      </div>

      {items.map((n) => (
        <NewsCard key={`${n.locale}-${n.slug}`} item={n} locale={locale} />
      ))}

      {items.length === 0 && (
        <div className="text-sm text-neutral-500">
          {locale === "kr" ? "뉴스가 없습니다." : "No news yet."}
        </div>
      )}
    </div>
  );
}

