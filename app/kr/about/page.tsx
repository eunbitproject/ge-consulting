export default function AboutKr() {
  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">GE (Global Education) Consulting</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          GE Consulting은 국내·해외 유학, 고등학생 컨설팅, 국제 교류 프로그램을 전문으로 하는 교육 컨설팅 그룹입니다.
          학생의 목표와 상황에 맞춘 맞춤형 로드맵을 통해 입학부터 생활까지 전 과정을 동행합니다.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">정체성과 철학</h2>
          <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1 leading-relaxed">
            <li>학생 중심(Student-first) 의사결정</li>
            <li>투명한 일정/서류/진행 관리</li>
            <li>현지 네트워크를 활용한 실질 지원(숙소/비자/정착)</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">모회사: 은빛프로젝트 (Eunbitproject)</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            GE Consulting은 모회사 <strong>은빛프로젝트</strong>의 안정적인 경영 시스템과 풍부한 교육 프로젝트 경험을 바탕으로
            신뢰와 전문성을 제공합니다.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">컨설턴트</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">김영은 수석 컨설턴트</h3>
              <p className="text-neutral-600 text-sm mt-1">해외대학 입시 / 에세이 / 포트폴리오</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">백혜진 컨설턴트</h3>
              <p className="text-neutral-600 text-sm mt-1">한국 어학당 / 대학 진학 / 비자</p>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <a
            href="/kr/contact"
            className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
          >
            무료 상담 신청
          </a>
        </div>
      </div>
    </main>
  );
}

