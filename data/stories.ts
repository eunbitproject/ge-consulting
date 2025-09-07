// data/stories.ts
export type Story = {
  slug: string;
  locale: "kr" | "en";
  title: string;
  oneLine: string;
  category: string; // ex) "Korea", "US Top"
  year: number;
  country: string;  // "KR" | "US" 등
  major: string;    // "Business" | "CS" 등
  thumb: string;    // public/ 기준 경로
  tags: string[];
  background: string;
  strategy: string;
  result: string;
  comment?: string;
};

export const stories: Story[] = [
  {
    slug: "kli-to-univ-01",
    locale: "kr",
    title: "한국어학당 수료 후 ○○대학 합격",
    oneLine: "TOPIK 5 취득, 장학 혜택으로 1학기 등록",
    category: "Korea",
    year: 2024,
    country: "KR",
    major: "Business",
    thumb: "/hero/ge-campus.jpg",     // 이미 있는 이미지 경로 사용
    tags: ["한국 진학", "장학금", "어학당"],
    background: "어학 성적 부재 및 전공 선택 고민. 1년 내 한국대학 진학 목표.",
    strategy:
      "어학당 레벨 플랜 → TOPIK 달성 → 학과 리스트업 → 자기소개서/포트폴리오 코칭 → 출원/비자",
    result: "○○대학 경영학부 합격, 입학장학 일부 수혜, 기숙사 배정 완료.",
    comment: "로드맵대로 진행해 편했습니다. 빠르게 정착했어요."
  },
  {
    slug: "us-stem-01",
    locale: "en",
    title: "Admitted to ○○ University with STEM scholarship",
    oneLine: "Full tuition waived for the first year",
    category: "US Top",
    year: 2023,
    country: "US",
    major: "CS",
    thumb: "/images/placeholder.jpg", // 없으면 public/images에 아무 이미지 하나 추가
    tags: ["STEM", "Scholarship", "Top Univ"],
    background: "GPA는 괜찮지만 비교과가 약함. 장학 중심 지원 희망.",
    strategy:
      "코스 강화, 연구 인턴십 매칭, 에세이 코칭, 추천서 파이프라인 구축.",
    result: "○○ Univ 합격 + STEM 장학 수혜.",
    comment: "플랜이 명확해 집중할 수 있었고, 에세이가 크게 좋아졌어요."
  }
];
