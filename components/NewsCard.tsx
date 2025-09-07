// components/NewsCard.tsx
import type { NewsItem } from "@/data/news";

export default function NewsCard({
  item,
  locale,
}: {
  item: NewsItem;
  locale: "kr" | "en";
}) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-4">
      <a
        href={`/${locale}/hub/news/${item.slug}`}
        className="text-lg font-semibold hover:underline"
      >
        {item.title}
      </a>
      <div className="mt-1 text-xs text-neutral-500">{item.date}</div>

      {item.tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs"
            >
              #{t}
            </span>
          ))}
        </div>
      ) : null}

      <p className="mt-3 text-sm text-neutral-700">{item.excerpt}</p>
    </article>
  );
}

