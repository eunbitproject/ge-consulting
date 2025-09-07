// components/StoryDetail.tsx
import type { Story as StoryBase } from "@/data/stories";

type Locale = "kr" | "en";
type Localized<T = string> = Record<Locale, T>;

/**
 * 데이터에 실제로 있는 필드를 안전하게 접근하기 위해
 * 가져온 Story 타입을 확장(Intersection)합니다.
 * - thumbnail, category, year, country, major, recommended 등은
 *   데이터에 없을 수도 있으므로 모두 optional(?)로 둡니다.
 * - title/oneLine 등은 다국어 객체라고 가정하여 Localized로 지정.
 */
type Story = StoryBase & {
  title: Localized;
  oneLine: Localized;
  background?: Localized;
  strategy?: Localized;
  result?: Localized;
  quote?: Localized;
  thumbnail?: string;
  category?: string;
  year?: string | number;
  country?: string;
  major?: string;
  recommended?: string[];
};

const I18N: Record<
  Locale,
  {
    background: string;
    strategy: string;
    result: string;
    comment: string;
    recommended: string;
  }
> = {
  kr: {
    background: "배경(목표/과제)",
    strategy: "전략(로드맵·준비)",
    result: "결과(합격·장학)",
    comment: "학생/학부모 코멘트",
    recommended: "관련 프로그램 추천",
  },
  en: {
    background: "Background (Goal & Challenge)",
    strategy: "Strategy (Roadmap & Preparation)",
    result: "Outcome (Admission & Scholarship)",
    comment: "Student/Parent Comment",
    recommended: "Recommended Programs",
  },
};

function StoryDetail({
  story,
  locale,
}: {
  story: Story;
  locale: Locale;
}) {
  const t = I18N[locale];

  return (
    <article className="mx-auto max-w-4xl space-y-6 px-6 py-10 sm:py-12 lg:px-8 text-white">
      {/* 메타 정보 (존재하는 값만 점으로 연결) */}
      <header className="space-y-2">
        <div className="text-sm text-white/70">
          {[story.category, story.year, story.country, story.major]
            .filter(Boolean)
            .join(" • ")}
        </div>

        <h1 className="text-2xl font-semibold">{story.title[locale]}</h1>

        {story.oneLine?.[locale] && (
          <p className="text-white/80">{story.oneLine[locale]}</p>
        )}
      </header>

      {/* 썸네일 (옵셔널) */}
      {story.thumbnail && (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={story.thumbnail}
            alt={story.title[locale]}
            className="w-full"
          />
        </div>
      )}

      {/* 본문 섹션들 (존재할 때만 표시) */}
      {story.background?.[locale] && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">{t.background}</h2>
          <p className="text-white/85">{story.background[locale]}</p>
        </section>
      )}

      {story.strategy?.[locale] && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">{t.strategy}</h2>
          <p className="text-white/85">{story.strategy[locale]}</p>
        </section>
      )}

      {story.result?.[locale] && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">{t.result}</h2>
          <p className="text-white/85">{story.result[locale]}</p>
        </section>
      )}

      {story.quote?.[locale] && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">{t.comment}</h2>
          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90">
            {story.quote[locale]}
          </blockquote>
        </section>
      )}

      {Array.isArray(story.recommended) && story.recommended.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">{t.recommended}</h2>
          <ul className="flex flex-wrap gap-2">
            {story.recommended.map((p) => (
              <li
                key={p}
                className="rounded-md border border-white/15 px-3 py-1 text-sm text-white/85"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export default StoryDetail;
export type { Story, Locale };
