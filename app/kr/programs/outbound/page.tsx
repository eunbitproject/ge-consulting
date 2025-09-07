import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function OutboundKr() {
  return (
    <ProgramTemplate
      locale="kr"
      title="전공·국가·예산을 반영한 개인화 로드맵"
      subtitle="Personalized roadmaps across majors, countries, and budgets."
      overview={`학과 적합도, 목표 국가/도시, 예산을 반영해 18~6개월 타임라인 기준의 개인 맞춤 유학 로드맵을 설계합니다. 
시험 준비부터 서류/에세이, 추천 학교 리스트업, 장학 정보까지 One-stop으로 지원합니다.`}
      benefits={[
        "국가/전공/예산 맞춤 로드맵 설계",
        "TOEFL/IELTS/SAT/ACT/GMAT/GRE 등 시험 플랜",
        "서류/에세이/추천서/포트폴리오 준비",
        "난이도·장학·도시(치안/생활비) 반영 추천 리스트",
        "장학/비자/숙소·보험 등 실무 가이드",
      ]}
      primaryCta={{ label: "상담 신청", href: "/kr/contact", variant: "primary" }}
      secondaryCta={{
        label: "브로셔/체크리스트 다운로드",
        href: "/files/outbound-brochure.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "countries",
          title: "국가별 가이드",
          content: (
            <ul>
              <li>미국(US): 리서치·리버럴아츠·주립별 특성, 장학 유형, 입시 구성</li>
              <li>영국(UK): 파운데이션/학부 3년제, A-Level·IB·파운데이션 트랙</li>
              <li>캐나다(CA): Co-op/PGWP, 주별 이민/취업 연계</li>
              <li>호주(AU): trimester 제도, 장학/인턴십</li>
              <li>EU: 독/프/네/이/스 등 영어트랙, 수업료·생활비 비교</li>
              <li>아시아: 홍콩/싱가포르/일본 등 상위대 입시 포인트</li>
            </ul>
          ),
        },
        {
          id: "exams",
          title: "시험/서류 준비",
          content: (
            <ul>
              <li>영어: TOEFL·IELTS·Duolingo / 표준화 시험: SAT/ACT, GMAT/GRE</li>
              <li>서류: 성적/재학·졸업 증명, 재정 서류</li>
              <li>에세이/포트폴리오: 소재 발굴 → 드래프트 → 피드백 → 최종본</li>
              <li>추천서: 추천인 선정/요청 및 양식 안내</li>
            </ul>
          ),
        },
        {
          id: "list",
          title: "추천 학교 리스트(난이도/장학/도시)",
          content: (
            <p className="text-white/90">
              도달(Reach) · 적합(Match) · 안정(Safety) 3구간으로 구성하여 장학
              가능성, 전공 순위, 도시 안전/생활비를 함께 제시합니다.
            </p>
          ),
        },
        {
          id: "timeline",
          title: "타임라인 (18–6개월 전 체크리스트)",
          content: (
            <ol>
              <li>18–12개월: 목표 설정, 언어·표준화 시험 계획 수립</li>
              <li>12–9개월: 대학·전공 리서치, 에세이/포트폴리오 초안</li>
              <li>9–6개월: 시험 성적 확보, 서류 마감·접수, 장학 신청</li>
              <li>합격 후: 비자/숙소/보험/출국 준비, 프리-디파처 가이드</li>
            </ol>
          ),
        },
        {
          id: "notes",
          title: "비용 범위 / 유의사항",
          content: (
            <>
              <p>개인 계획/희망 국가/학위 레벨에 따라 산정되며 상담 후 견적 드립니다.</p>
              <p className="text-white/70">
                ※ 공인시험/원서비/비자/보험/항공/숙소 등 제3자 비용은 불포함.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "자주 묻는 질문",
          content: (
            <ul>
              <li>Q. 시험 점수가 부족한데 지원이 가능할까요? → 조건부 입학/어학과정 트랙 안내 가능합니다.</li>
              <li>Q. 장학금은 어느 시점에 신청하나요? → 학교별/국가별로 상이하며 로드맵에 포함해 드립니다.</li>
            </ul>
          ),
        },
        {
          id: "cases",
          title: "케이스 스터디 티저",
          content: (
            <ul>
              <li>국제고 12학년 C: 미국 상경계열 Top 30 &amp; 장학 일부 수혜</li>
              <li>검정고시 D: 영국 파운데이션 → 학부 편입 루트로 합격</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
