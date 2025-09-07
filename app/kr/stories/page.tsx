// app/kr/stories/page.tsx
"use client";

import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export default function StoriesKr() {
  // locale "kr" 데이터만 필터
  const list = stories.filter((s) => s.locale === "kr");

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* ...필터 UI 등 */}
      <div className="grid gap-6 sm:grid-cols-2">
        {list.map((story) => (
          <StoryCard key={story.slug} story={story} locale="kr" />
        ))}
      </div>
    </main>
  );
}

