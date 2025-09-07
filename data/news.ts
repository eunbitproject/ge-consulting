// data/news.ts
export type NewsItem = {
  slug: string;
  locale: "kr" | "en";
  title: string;
  date: string; // YYYY-MM-DD
  tags?: string[];
  excerpt: string;
  content: string; // markdown-ish text
};

export const news: NewsItem[] = [
  // =============== KOREAN ===============
  {
    slug: "k-culture-winter-camp-2025",
    locale: "kr",
    title: "K-컬처 윈터캠프 2025 참가 안내 (서울·강원권)",
    date: "2025-12-01",
    tags: ["캠프", "문화교류", "한류"],
    excerpt:
      "한류 체험 + 스키·스노우 액티비티 + 대학탐방 + 스튜디오 투어. 중/고등 대상 8박9일 프로그램.",
    content: [
      "◆ 대상: 중/고등학생 (만 12–18세)",
      "◆ 일정: 12/26 ~ 01/03 (8박 9일)",
      "◆ 지역: 서울·강원권",
      "◆ 주요 구성:",
      "- K-팝 댄스/보컬 클래스, 한식 쿠킹, 한복·전통공예",
      "- 스키/보드 강습(2일) + 설경 트레킹",
      "- 대학 탐방(연세/고려/한양 중 1~2곳) 및 유학생 멘토링",
      "- K-콘텐츠 산업 견학(방송사·스튜디오 투어)",
      "◆ 포함: 체험/수업, 숙박, 조식, 국내교통, 여행자보험, 전담 인솔",
      "◆ 문의: 033-762-7746 / eunbitproject@naver.com",
    ].join("\n"),
  },
  {
    slug: "k-industry-tour",
    locale: "kr",
    title: "K-콘텐츠 산업 현장 투어(스튜디오·방송사) 신규 오픈",
    date: "2025-11-05",
    tags: ["진로탐색", "현장학습", "한류"],
    excerpt:
      "K-드라마·예능 제작 환경을 직접 체험하는 1일 현장학습 코스.",
    content:
      "K-콘텐츠 제작 파이프라인을 한 번에 보는 체험형 투어입니다.\n- 스튜디오(촬영/녹음) 투어\n- 방송사 견학 및 편집룸 설명\n- 단편 콘텐츠 기획 미니 워크숍\n- 안전교육 & 직무 Q&A",
  },
  {
    slug: "kli-scholarship-briefing",
    locale: "kr",
    title: "어학당 장학/등록 가이드 업데이트 (2026봄학기)",
    date: "2026-01-10",
    tags: ["어학당", "장학", "등록"],
    excerpt:
      "대학부설 한국어학당 2026 봄학기 장학·등록 절차 안내.",
    content:
      "◆ 주요 내용\n- 추천 장학 유형(성적·출석·활동)\n- 등록 절차 및 e-Application 체크리스트\n- TOPIK 목표별 커리큘럼 제안\n- 기숙사/민박/원룸 선택법",
  },
  {
    slug: "visa-update-2026",
    locale: "kr",
    title: "D-4/D-2 비자 업데이트: 2026 상반기 유의사항",
    date: "2026-01-05",
    tags: ["비자", "체류", "행정"],
    excerpt:
      "2026년 상반기 비자 심사 경향 및 준비 팁.",
    content:
      "최근 심사 동향: 재정능력 입증, 학업계획서 명확성 강화.\n필수 체크리스트: 은행잔고·학업계획·숙소·신원기록.\n자주 묻는 질문(FAQ)도 자료실에서 확인 가능.",
  },
  {
    slug: "stem-scholarship-call",
    locale: "kr",
    title: "해외 STEM 전공 장학 선발 공고(미국/캐나다/호주)",
    date: "2025-10-15",
    tags: ["STEM", "장학", "해외대학"],
    excerpt:
      "Top Univ·州립대 다수 파트너 장학(Partial~Full) 접수 중.",
    content:
      "선발 대상: 공학/컴퓨터/바이오·데이터 분야 관심 수험생.\n포함 혜택: 등록금 감면/RA/TA/기숙사 보조 등.\n서류마감: 2026-02-28.",
  },
  {
    slug: "exchange-mou",
    locale: "kr",
    title: "유럽 교환 프로그램 MOU 체결",
    date: "2025-09-25",
    tags: ["교환", "MOU", "유럽"],
    excerpt:
      "서유럽 3개 대학과 학점교류·단기연수 MOU 체결.",
    content:
      "영어트랙 교환(한 학기/1년) + 여름단기(4~6주) 옵션 제공.\n언어레벨에 따른 브릿지코스 포함.",
  },
  {
    slug: "airport-pickup-2026",
    locale: "kr",
    title: "2026 봄학기 공항픽업/기숙사 체크인 지원",
    date: "2026-02-01",
    tags: ["생활지원", "픽업", "기숙사"],
    excerpt:
      "신입생 맞춤형 픽업·생활오리엔테이션 제공.",
    content:
      "인천공항 픽업 → 숙소 체크인 → 주변편의 탐방(은행/통신/마트).\n상시 신청 가능(성수기 마감 주의).",
  },
  {
    slug: "uni-fair-feb",
    locale: "kr",
    title: "2월 해외대학 온·오프라인 설명회",
    date: "2026-02-05",
    tags: ["설명회", "해외대학"],
    excerpt:
      "미국/캐나다/유럽 명문대·州립대·전문대 합동 세션.",
    content:
      "참가대학 리스트/세부 타임테이블은 접수 후 이메일 발송.\n개별 1:1 상담도 신청 가능.",
  },

  // =============== ENGLISH ===============
  {
    slug: "k-culture-winter-camp-2025",
    locale: "en",
    title: "K-Culture Winter Camp 2025 (Seoul & Gangwon)",
    date: "2025-12-01",
    tags: ["Camp", "Exchange", "Hallyu"],
    excerpt:
      "Hallyu experiences + Ski/Board + University visit + Studio tour (8D9N).",
    content: [
      "◆ Audience: Middle/High schoolers (Age 12–18)",
      "◆ Dates: Dec 26 – Jan 3 (8D9N)",
      "◆ Region: Seoul & Gangwon",
      "◆ Highlights:",
      "- K-pop dance/vocal class, Korean cooking, Hanbok & crafts",
      "- Ski/Snowboard lessons (2 days) + Winter trekking",
      "- Campus tour (1–2 univ) + mentor talk",
      "- K-content industry field tour (broadcast & studio)",
      "◆ Includes: classes/activities, accommodation, breakfasts, local transport, insurance, team leaders",
      "◆ Contact: +82-33-762-7746 / eunbitproject@naver.com",
    ].join("\n"),
  },
  {
    slug: "k-industry-tour",
    locale: "en",
    title: "New! K-Content Industry Field Tour",
    date: "2025-11-05",
    tags: ["Career", "FieldTrip", "Hallyu"],
    excerpt:
      "One-day hands-on tour across studio, broadcast station, and mini planning workshop.",
    content:
      "Experience the pipeline of K-content production: studio tour, broadcast station visit, editing room briefing, and a short planning workshop with safety briefings and Q&A.",
  },
  {
    slug: "kli-scholarship-briefing",
    locale: "en",
    title: "Korean Language Institute Scholarships (Spring 2026)",
    date: "2026-01-10",
    tags: ["KLI", "Scholarship", "Registration"],
    excerpt:
      "Updated checklist & scholarship routes for Spring 2026.",
    content:
      "Recommended scholarship types, online registration checklist, TOPIK-oriented study track, and housing options (dorm/hasuk/one-room).",
  },
  {
    slug: "visa-update-2026",
    locale: "en",
    title: "Visa Update (D-4 / D-2): Key Notes for 1H 2026",
    date: "2026-01-05",
    tags: ["Visa", "Immigration"],
    excerpt:
      "Recent review trend and must-have documents.",
    content:
      "Emphasis on financial proof and concrete study plan. Prepare bank statement, study plan, housing doc, and background record. See FAQs for more.",
  },
  {
    slug: "stem-scholarship-call",
    locale: "en",
    title: "Call for STEM Scholarships (US/Canada/Australia)",
    date: "2025-10-15",
    tags: ["STEM", "Scholarship", "Overseas"],
    excerpt:
      "Partial to full awards for engineering/CS/bio/data programs.",
    content:
      "Benefits range from tuition waivers to RA/TA and housing support. Deadline: Feb 28, 2026.",
  },
  {
    slug: "exchange-mou",
    locale: "en",
    title: "New MOU for Europe Exchange Programs",
    date: "2025-09-25",
    tags: ["Exchange", "MOU", "Europe"],
    excerpt:
      "Credit-bearing exchange (1 sem/1 yr) + summer short course (4–6 weeks).",
    content:
      "Includes English-track courses and a language bridge course depending on placement.",
  },
  {
    slug: "airport-pickup-2026",
    locale: "en",
    title: "Spring 2026 Airport Pickup & Dorm Check-in",
    date: "2026-02-01",
    tags: ["StudentLife", "Arrival"],
    excerpt:
      "Meet-and-greet at ICN → dorm check-in → city orientation.",
    content:
      "Orientation includes bank/telecom/grocery set-ups. Peak season slots fill quickly.",
  },
  {
    slug: "uni-fair-feb",
    locale: "en",
    title: "February Global University Fair (Online/Offline)",
    date: "2026-02-05",
    tags: ["InfoSession", "Universities"],
    excerpt:
      "Flagships, state universities, and colleges from US/Canada/Europe.",
    content:
      "Detailed timetable sent upon registration. 1:1 counseling available.",
  },
];
