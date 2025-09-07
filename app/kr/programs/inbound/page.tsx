import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function InboundKr() {
  return (
    <ProgramTemplate
      locale="kr"
      title="한국에서 시작하는 새로운 기회"
      subtitle="A New Chapter in Korea."
      overview={`한국 대학/어학당 진학을 목표로 하는 외국인 학생을 위한 종합 패키지입니다. 
입학 전략부터 비자, 숙소, 초기 정착까지 One-stop으로 지원합니다.`}
      benefits={[
        "대학/어학당 맞춤 추천 및 지원 일정 관리",
        "입학 서류 체크 · 제출 · 합격까지 전 과정 지원",
        "비자(VISA) 준비/대행 가이드",
        "숙소 매칭(기숙사/원룸), 공항 픽업, 은행·통신 개통 동행",
        "장학금·기숙사·생활 정보 제공",
      ]}
      primaryCta={{ label: "입학 상담 받기", href: "/kr/contact", variant: "primary" }}
      secondaryCta={{ label: "브로셔 다운로드", href: "/files/inbound-brochure.pdf", variant: "ghost" }}
      sections={[
        {
          id: "process",
          title: "프로세스 (타임라인)",
          content: (
            <ol>
              <li>1) 목표 상담 → 전형/일정 설계</li>
              <li>2) 대학/어학당 리스트업 및 지원 서류 준비</li>
              <li>3) 접수/면접/합격 → 비자 진행</li>
              <li>4) 숙소/항공/픽업/초기 정착 준비</li>
              <li>5) 입국 후 은행/통신 개통 및 오리엔테이션</li>
            </ol>
          ),
        },
        {
          id: "scope",
          title: "서비스 범위",
          content: (
            <ul>
              <li>입학 전략 수립, 학교/어학당 추천</li>
              <li>서류 점검 및 지원 포털 제출</li>
              <li>비자 서류 가이드/대행 지원</li>
              <li>숙소 매칭, 공항 픽업, 초기 정착 동행</li>
              <li>장학/생활 정보 안내</li>
            </ul>
          ),
        },
        {
          id: "notes",
          title: "비용 범위 / 유의사항",
          content: (
            <>
              <p>상담 후 학업 계획/국적/희망 학교에 따라 산정됩니다.</p>
              <p className="text-white/70">
                ※ 비자 발급/항공권/기숙사 비용 등 제3자 비용은 불포함.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "자주 묻는 질문",
          content: (
            <ul>
              <li>Q. 어학당 수료 후 대학 진학도 지원하나요? → 예.</li>
              <li>Q. 장학금 정보는 제공되나요? → 예, 조건에 맞춰 안내합니다.</li>
            </ul>
          ),
        },
        {
          id: "cases",
          title: "케이스 스터디 티저",
          content: (
            <ul>
              <li>중국 국적 A학생: 어학당 1년 후 ○○대 경영학 합격</li>
              <li>태국 국적 B학생: 장학 50%로 ○○대 미디어학 합격</li>
            </ul>
          ),
        },
      ]}
    />
  );
}

