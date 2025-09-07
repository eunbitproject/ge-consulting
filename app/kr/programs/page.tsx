
export default function ProgramsKr() {
  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">주요 프로그램</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          GE Consulting의 핵심 프로그램을 소개합니다. 학교/전공 탐색부터 지원·비자·정착까지
          학생별 맞춤 로드맵으로 처음부터 끝까지 함께합니다.
        </p>

        {/* Inbound (한국 유학) */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">한국 유학 (Inbound)</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            대학 및 어학당 지원, 비자, 숙소, 공항 픽업, 생활 정착 지원까지 원스톱으로 제공합니다.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">대학 입학</h3>
              <p className="text-neutral-600 text-sm mt-1">
                학교 리스트업, 일정 설계, 서류/면접 준비, 장학금 연계.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">어학당 과정</h3>
              <p className="text-neutral-600 text-sm mt-1">
                한국어 능력 향상 및 대학 입학을 위한 브릿지 과정 설계.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/kr/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              한국 유학 상담하기
            </a>
          </div>
        </section>

        {/* Outbound (해외 유학) */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">해외 유학 (Outbound)</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            국가·전공별 로드맵, 대학 리스트업, 에세이/포트폴리오 코칭, 비자까지 종합 지원.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">미국 / 캐나다</h3>
              <p className="text-neutral-600 text-sm mt-1">Common App, 에세이, 추천서, SAT/ACT 전략.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">영국 / 유럽</h3>
              <p className="text-neutral-600 text-sm mt-1">UCAS, PS 작성, A-level/IB 정렬.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">아시아 / 오세아니아</h3>
              <p className="text-neutral-600 text-sm mt-1">일본/호주/싱가포르 등 적합 대학 탐색 및 비자.</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/kr/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              해외 유학 상담하기
            </a>
          </div>
        </section>

        {/* 고등학생 컨설팅 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">고등학생 컨설팅</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            조기 유학 설계, 내신/과목 선택, 비교과 전략, 대회 및 장기 포트폴리오 구축까지
            명문대 입시를 목표로 로드맵을 설계합니다.
          </p>
          <div className="mt-4">
            <a
              href="/kr/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              고등 컨설팅 문의
            </a>
          </div>
        </section>

        {/* 국제 교류 프로그램 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">국제 교류 프로그램</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            동남아 대상 K-Culture 체험, 스키 캠프 등 단기 교류 프로그램을 제공합니다.
          </p>
          <div className="mt-4">
            <a
              href="/kr/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              교류 프로그램 문의
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
