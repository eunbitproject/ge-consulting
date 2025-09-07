// app/kr/hub/news/[slug]/page.tsx
import { news } from "@/data/news";

type Params = Promise<{ slug: string }>;

export default async function NewsDetailKr({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const item = news.find((n) => n.locale === "kr" && n.slug === slug);
  if (!item) return <div className="p-6">페이지를 찾을 수 없습니다</div>;

  return (
    <main className="min-h-screen bg-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-10 text-white">
        <div className="text-xs text-white/70">{item.date}</div>
        <h1 className="mt-2 text-3xl font-semibold">{item.title}</h1>

        {item.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-2 py-1 text-xs"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="prose prose-invert mt-6 whitespace-pre-wrap">
          {item.content}
        </div>
      </article>
    </main>
  );
}
