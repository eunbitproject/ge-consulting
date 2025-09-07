// app/kr/stories/[slug]/page.tsx
import { stories } from "@/data/stories";

type Params = { slug: string };

export async function generateMetadata(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const item = stories.find((s) => s.locale === "kr" && s.slug === slug);
  return {
    title: item ? `${item.title} | 성공 사례` : "성공 사례 | GE Consulting",
  };
}

export default async function StoryKrDetail(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  const item = stories.find((s) => s.locale === "kr" && s.slug === slug);
  if (!item) {
    return <main className="min-h-screen px-6 py-10">Not Found</main>;
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      {item.oneLine ? (
        <p className="mt-2 text-neutral-600">{item.oneLine}</p>
      ) : null}
      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
              #{t}
            </span>
          ))}
        </div>
      ) : null}
    </main>
  );
}
