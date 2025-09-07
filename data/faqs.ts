// data/faqs.ts
export type FaqItem = {
  id: string;
  locale: "kr" | "en";
  category: string;
  q: string;
  a: string; // markdown-ish 허용
};

export const faqs: FaqItem[] = [
  // =============== KOREAN ===============
  {
    id: "camp-what",
    locale: "kr",
    category: "윈터캠프",
    q: "K-컬처 윈터캠프는 어떤 프로그램인가요?",
    a: "한류 체험(K-팝 댄스/보컬, 한복·공예, 한식)과 **스키/보드 강습**, 대학탐방, 스튜디오 투어가 결합된 8박9일 청소년 프로그램입니다. 숙소/식사(조식), 국내교통, 보험, 인솔 포함.",
  },
  {
    id: "camp-safety",
    locale: "kr",
    category: "윈터캠프",
    q: "안전관리는 어떻게 하나요?",
    a: "소규모 팀 배정(학생:인솔 10:1 내외) + 현장 안전교육 + 활동별 전문강사(스키) 배치. 야간 통화/응급체계(보험 포함) 운영.",
  },
  {
    id: "kli-track",
    locale: "kr",
    category: "어학당",
    q: "TOPIK 목표에 맞는 수업 트랙은?",
    a: "초중급은 **문법+회화 균형형**, 고급은 **논술·시사 토론형**을 추천합니다. 목표 점수/기간에 따라 집중반 및 자습플랜을 함께 설계해 드립니다.",
  },
  {
    id: "kli-scholar",
    locale: "kr",
    category: "어학당",
    q: "어학당 장학은 어떻게 준비하나요?",
    a: "성적·출석·활동 장학이 핵심입니다. 매 레벨 별 성적 상위, 봉사/홍보 활동 기록, 출석 95% 이상을 목표로 하세요.",
  },
  {
    id: "visa-d4",
    locale: "kr",
    category: "비자/체류",
    q: "D-4(어학) 비자 준비물은?",
    a: "재정증명(잔고/스폰서), 입학허가서, 숙소 증빙, 학업계획서, 신원기록 등. 최근엔 **학업계획서 구체성**이 중요합니다.",
  },
  {
    id: "visa-d2",
    locale: "kr",
    category: "비자/체류",
    q: "D-2(대학) 비자 주의사항은?",
    a: "전공 적합성, 어학능력, 재정능력이 주요 심사 포인트입니다. 서류 원본성 확인과 번역/공증 요건을 꼭 점검하세요.",
  },
  {
    id: "housing",
    locale: "kr",
    category: "생활",
    q: "기숙사와 원룸 중 무엇이 좋나요?",
    a: "초기엔 **기숙사**(안전/비용/동선) 추천. 이후 통학거리/개인공간/요리 여부를 고려해 원룸 전환을 검토하세요.",
  },
  {
    id: "guardian",
    locale: "kr",
    category: "생활",
    q: "미성년자 가디언십이 필요한가요?",
    a: "학교/지역에 따라 요구될 수 있습니다. 저희가 **공식 가디언/서약서** 절차를 지원합니다.",
  },
  {
    id: "payment",
    locale: "kr",
    category: "등록/결제",
    q: "등록금 송금은 어떻게 하나요?",
    a: "학교 해외계좌/Flywire 등 지정 채널을 사용합니다. **송금 전 수취정보**와 송금액, 환율·수수료를 반드시 재확인하세요.",
  },
  {
    id: "insurance",
    locale: "kr",
    category: "보험",
    q: "유학생 보험은 어디까지 보장되나요?",
    a: "외래/입원/상해·질병, 배상책임 등 기본 담보 포함. 레포츠(스키 등) 특약 포함 여부를 반드시 확인하세요.",
  },

  // =============== ENGLISH ===============
  {
    id: "camp-what",
    locale: "en",
    category: "Winter Camp",
    q: "What is the K-Culture Winter Camp?",
    a: "An 8D9N youth program combining Hallyu experiences (K-pop class, Hanbok & crafts, Korean cooking) with **ski/board lessons**, university visits, and studio tour. Includes accommodation/breakfast, local transport, insurance, and team leaders.",
  },
  {
    id: "camp-safety",
    locale: "en",
    category: "Winter Camp",
    q: "How do you ensure safety?",
    a: "Small group ratio (~10:1), safety briefing at each site, certified ski instructors, and 24/7 emergency line with travel insurance.",
  },
  {
    id: "kli-track",
    locale: "en",
    category: "KLI",
    q: "Which KLI track matches my TOPIK goal?",
    a: "For beginner/intermediate, a **balanced grammar-speaking** track; for advanced, a **writing/debate** track. We design a study plan by target score and timeline.",
  },
  {
    id: "kli-scholar",
    locale: "en",
    category: "KLI",
    q: "How to win KLI scholarships?",
    a: "Focus on **grades, attendance (≥95%)**, and activities (volunteering/PR). Keep records each term.",
  },
  {
    id: "visa-d4",
    locale: "en",
    category: "Visa",
    q: "D-4 visa checklist?",
    a: "Financial proof, admission letter, housing doc, study plan, and background record. Recently, **clarity of study plan** matters more.",
  },
  {
    id: "visa-d2",
    locale: "en",
    category: "Visa",
    q: "D-2 visa tips?",
    a: "Major relevance, language proficiency, and financial capacity are key. Verify originals and translation/notarization requirements.",
  },
  {
    id: "housing",
    locale: "en",
    category: "Life",
    q: "Dorm vs. one-room?",
    a: "We recommend **dorms** for the first term (safety & cost). Later, consider one-room based on commute, privacy, and cooking needs.",
  },
  {
    id: "guardian",
    locale: "en",
    category: "Life",
    q: "Do I need a guardian as a minor?",
    a: "Some schools/regions require it. We support **official guardian/consent** documentation.",
  },
  {
    id: "payment",
    locale: "en",
    category: "Payment",
    q: "How do I remit tuition?",
    a: "Use the university’s wire/Flywire channel. Double-check **beneficiary info** and fees/exchange rate before sending.",
  },
  {
    id: "insurance",
    locale: "en",
    category: "Insurance",
    q: "What does student insurance cover?",
    a: "Outpatient/inpatient, injury/illness, and liability. Check if leisure sports (e.g., ski) are included as riders.",
  },
];
