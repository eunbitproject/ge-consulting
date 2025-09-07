export type FAQ = {
  id: string;
  locale: "kr" | "en";
  category: string;
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  // KR
  {
    id: "visa-docs",
    locale: "kr",
    category: "비자/서류",
    q: "학생비자 신청에 필요한 서류는?",
    a: "입학허가서, 재정증명, 여권, 사진 등이 필요합니다. 학교/국가에 따라 추가 서류가 있을 수 있습니다.",
  },
  {
    id: "dorm-info",
    locale: "kr",
    category: "생활",
    q: "기숙사 배정은 어떻게 되나요?",
    a: "학교별 선착순/추첨 방식입니다. 저희가 사전 신청 및 매칭을 도와드립니다.",
  },

  // EN
  {
    id: "visa-docs",
    locale: "en",
    category: "Visa / Documents",
    q: "What papers are required for a student visa?",
    a: "Admission letter, financial statement, passport, photos, etc. Extra docs may apply by school/country.",
  },
  {
    id: "dorm-info",
    locale: "en",
    category: "Student Life",
    q: "How does dorm assignment work?",
    a: "It varies by school—first-come or lottery. We help with pre-application and matching.",
  },
];
