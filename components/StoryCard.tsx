// components/StoryCard.tsx
import Link from "next/link";

type Story = {
  slug: string;
  title: string;
  summary?: string;
  tags?: string[];
  thumb?: string;
};

export default function StoryCard({
  story,
  locale,
}: {
  story: Story | undefined;
  locale: "kr" | "en";
}) {
  // 방어: story가 없으면 렌더링하지 않음
  if (!story || !story.slug) return null;

  const prefix = locale === "kr" ? "/kr" : "/en";
  const href = `${prefix}/stories/${story.slug}`;

  return (
    <Link href={href} className="block rounded-2xl overflow-hidden shadow hover:shadow-lg">
      {/* 썸네일/내용은 기존대로 */}
      {/* 예시 */}
      <div className="relative aspect-[16/9] bg-neutral-200">
        {story.thumb ? (
          // next/image를 쓰신다면 여기서 Image로 교체
          <img src={story.thumb} alt={story.title} className="h-full w-full object-cover" />
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{story.title}</h3>
        {story.summary ? (
          <p className="mt-1 text-sm text-neutral-600">{story.summary}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {(story.tags ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}


