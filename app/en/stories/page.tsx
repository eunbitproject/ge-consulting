// app/en/stories/page.tsx
"use client";

import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export default function StoriesEn() {
  const list = stories.filter((s) => s.locale === "en");

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2">
        {list.map((story) => (
          <StoryCard key={story.slug} story={story} locale="en" />
        ))}
      </div>
    </main>
  );
}
