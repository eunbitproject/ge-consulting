import Link from "next/link";
import type { NewsItem } from "@/data/news";

export default function NewsCard({
  item,
  locale,
}: {
  item: NewsItem;
  locale: "kr" | "en";
}) {
  return (
    <Link
      href={`/${locale}/hub/news/${item.slug}`}
      className="block rounded-2xl border border-white/15 bg-white/5 p-4 hover:bg-white/10"
    >
      <div className="text-base font-semibold text-white">{item.title}</div>
      <div className="mt-1 text-xs text-white/70">{item.date}</div>
      <p className="mt-2 text-sm text-white/90">{item.excerpt}</p>
      {item.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 px-2 py-1 text-xs text-white"
            >
              #{t}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
