import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function ExchangeKr() {
  return (
    <ProgramTemplate
      locale="kr"
      title="K-컬처 체험, 스키 캠프 등 스포츠·문화 교류 프로그램"
      subtitle="K-culture • Sports camps • Language & culture immersion"
      overview={`동남아 등 해외 학생을 대상으로 K-컬처 체험, 스키/스포츠 캠프, 언어·문화 몰입 프로그램을 운영합니다.
일정·안전·운영 관리까지 전 과정에서 전문 인솔자가 동행하며, 학교/기관 단체 맞춤 구성도 가능합니다.`}
      benefits={[
        "안전 관리: 상시 인솔, 안전지침/보험/비상연락 체계",
        "프로그램 다양성: K-컬처 체험, 스키/스포츠, 도시·자연 탐방",
        "학교·기관 맞춤: 인원/연령/기간/예산에 맞춘 커스텀",
        "문서 지원: 초청장/일정표/보험 확인서 등 행정 서류",
      ]}
      primaryCta={{ label: "상담 신청", href: "/kr/contact", variant: "primary" }}
      secondaryCta={{
        label: "브로셔 다운로드",
        href: "/files/exchange-brochure-kr.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "schedule",
          title: "일정/연령/모집정원",
          content: (
            <ul>
              <li>일정: 3–10일(권장), 방학/학기 중 선택 가능</li>
              <li>연령: 초등 고학년 ~ 대학생(팀 혼합 가능)</li>
              <li>정원: 15–120명(대형 단체는 분반 운영)</li>
            </ul>
          ),
        },
        {
          id: "safety",
          title: "안전 관리",
          content: (
            <ul>
              <li>전 일정 인솔자 동행 및 현장 스태프 배치</li>
              <li>단체보험 가입, 24시간 비상 연락 체계</li>
              <li>숙소·차량·활동지 사전 점검 및 리스크 브리핑</li>
            </ul>
          ),
        },
        {
          id: "includes",
          title: "비용 포함·불포함",
          content: (
            <ul>
              <li>포함: 숙박, 식사(프로그램별), 현지 이동, 입장료/강습비, 인솔/운영비</li>
              <li>불포함: 국제선 항공, 개인 용품, 개인 여행자보험(선택), 개인 쇼핑</li>
            </ul>
          ),
        },
        {
          id: "gallery",
          title: "사진/영상 갤러리",
          content: (
            <p className="text-white/90">
              샘플 사진/영상은 브로셔 또는 상담 시 제공해 드립니다.
              (학교/기관 요청 시 비공개 링크로 별도 공유)
            </p>
          ),
        },
        {
          id: "process",
          title: "신청 절차(타임라인)",
          content: (
            <ol>
              <li>문의/요건접수 → 일정/인원/예산 파악</li>
              <li>맞춤 제안서/견적서 → 기관 승인</li>
              <li>계약/담당자 지정 → 세부 일정 확정/사전 브리핑</li>
              <li>행사 실행(인솔 동행) → 종료 리포트/사진 전달</li>
            </ol>
          ),
        },
        {
          id: "faq",
          title: "자주 묻는 질문",
          content: (
            <ul>
              <li>Q. 소그룹도 가능한가요? → 15명 내외 소그룹 맞춤 가능합니다.</li>
              <li>Q. 숙소 타입은? → 호텔/리조트/연수원 등 예산과 목적에 맞춰 선택합니다.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}

