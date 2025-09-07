import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function HighSchoolKr() {
  return (
    <ProgramTemplate
      locale="kr"
      title="조기 유학/국내·해외 명문대 진학의 기초를 설계합니다."
      subtitle="Build a strong foundation for top universities."
      overview={`중·고등 단계에서 학업/비교과를 균형 있게 설계해 국내/해외 명문대 진학 가능성을 극대화합니다.
학교·커리큘럼(IB/AP/A-Level/국내 특목/자사) 선택, 학기·방학 로드맵, 활동 포트폴리오까지 일관되게 관리합니다.`}
      benefits={[
        "학업 설계: 커리큘럼(IB/AP/A-Level/국내) 및 과목 선택",
        "시험/평가: 내신/공인시험(TOEFL/IELTS/SAT/ACT) 플랜",
        "비교과 포트폴리오: 리서치·봉사·동아리·콘테스트",
        "방학 프로그램: 여름/겨울 캠프(국내·해외)",
        "학부모 가이드: 진학/생활/안전/재정/비자 브리핑",
      ]}
      primaryCta={{ label: "상담 신청", href: "/kr/contact", variant: "primary" }}
      secondaryCta={{
        label: "커리큘럼 가이드 다운로드",
        href: "/files/highschool-guide-kr.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "academics",
          title: "학업 설계",
          content: (
            <ul>
              <li>IB: HL/SL 과목 조합, IA/EE 타임라인, TOK 관리</li>
              <li>AP: 과목 로드맵, 시험 시기, 대학 학점 인정 전략</li>
              <li>A-Level: 과목 선택/난이도 밸런스, 예비 파운데이션 연계</li>
              <li>국내 커리큘럼: 내신/모의고사/수행평가 전략</li>
            </ul>
          ),
        },
        {
          id: "activities",
          title: "비교과 포트폴리오",
          content: (
            <ul>
              <li>탐구 활동: 연구 주제 설정 → 활동 → 결과물 문서화</li>
              <li>봉사·리더십: 지속 가능 프로젝트 설계, 임팩트 기록</li>
              <li>학술/콘테스트: 에세이·올림피아드·해커톤·콘테스트 참가</li>
              <li>포트폴리오: 활동 리플렉션·증빙·웹/문서 아카이빙</li>
            </ul>
          ),
        },
        {
          id: "camps",
          title: "여름/겨울 캠프",
          content: (
            <p className="text-white/90">
              국내·해외 캠프(어학·STEM·리더십·문화체험)를 목표 전공과 연계,
              활동 보고서/에세이 소재로 연결되도록 큐레이션합니다.
            </p>
          ),
        },
        {
          id: "parents",
          title: "부모 가이드",
          content: (
            <ul>
              <li>진학 로드맵/평가 지표/마감 일정 정리</li>
              <li>생활/안전/거주/재정/보험/비자 가이드</li>
              <li>정기 리포트/콜 브리핑 제공</li>
            </ul>
          ),
        },
        {
          id: "timeline",
          title: "연간 타임라인(예시)",
          content: (
            <ol>
              <li>1분기: 목표/과목/시험 플랜 수립, 비교과 설계</li>
              <li>2분기: 중간 점검, 시험 응시, 활동 중간 보고</li>
              <li>3분기: 방학 캠프/프로젝트, 포트폴리오 정리</li>
              <li>4분기: 내신/공인시험 확정, 연말 평가 및 다음 해 계획</li>
            </ol>
          ),
        },
        {
          id: "notes",
          title: "비용 범위/유의사항",
          content: (
            <>
              <p>개별 상담 후 학년/목표/국가에 따라 제안서와 함께 안내드립니다.</p>
              <p className="text-white/70">
                ※ 캠프 참가비/항공/숙소/보험/시험 응시료 등 제3자 비용은 불포함.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "자주 묻는 질문",
          content: (
            <ul>
              <li>Q. 국내 내신과 해외 준비를 병행할 수 있나요? → 학기/방학 기준 이중 트랙 설계가 가능합니다.</li>
              <li>Q. 활동 실적이 부족합니다. → 관심 분야 기반의 프로젝트를 3–6개월 단위로 만듭니다.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}

