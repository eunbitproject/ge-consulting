export type NewsItem = {
  slug: string;
  locale: "kr" | "en";
  title: string;
  date: string;            // ISO (YYYY-MM-DD)
  tags?: string[];
  excerpt: string;
  content: string;         // 간단히 markdown-ish 텍스트
};

export const news: NewsItem[] = [
  {
    slug: "ge-2026-spring-intake",
    locale: "kr",
    title: "2026 봄학기 지원 안내",
    date: "2026-01-15",
    tags: ["공지", "입학"],
    excerpt: "2026년 봄학기 한국/해외 대학 및 어학당 모집 일정을 안내드립니다.",
    content:
      "◆ 주요 일정\n- 원서 마감: 02/28\n- 비자 안내 세션: 02/10\n\n◆ 문의: 033-762-7746 / eunbitproject@naver.com",
  },
  {
    slug: "ge-2026-spring-intake",
    locale: "en",
    title: "Spring 2026 Intake Guide",
    date: "2026-01-15",
    tags: ["Notice", "Admission"],
    excerpt:
      "Timeline for Spring 2026 admissions in Korea & overseas universities.",
    content:
      "◆ Key Dates\n- Application deadline: Feb 28\n- Visa webinar: Feb 10\n\n◆ Contact: +82-33-762-7746 / eunbitproject@naver.com",
  },
  {
    slug: "k-culture-winter-camp",
    locale: "kr",
    title: "K-컬처 동계 캠프 오픈",
    date: "2025-12-10",
    tags: ["캠프", "문화교류"],
    excerpt: "서울·강원권 K-컬처 체험과 스키 캠프 참가자 모집.",
    content:
      "◆ 대상: 중/고등학생\n◆ 일정: 12/26~01/03\n◆ 포함: 체험/숙박/보험/스키강습",
  },
  {
    slug: "k-culture-winter-camp",
    locale: "en",
    title: "K-culture Winter Camp Open",
    date: "2025-12-10",
    tags: ["Camp", "Exchange"],
    excerpt: "Join our K-culture + ski winter camp.",
    content:
      "◆ For: Middle/High schoolers\n◆ When: Dec 26 – Jan 3\n◆ Includes: Activities/Stay/Insurance/Ski lessons",
  },
];
