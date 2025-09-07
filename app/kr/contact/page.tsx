export default function ContactKr() {
  // 참고: action 은 Formspree 예시입니다. 실제로 쓰시려면 yourFormId 를 본인 것으로 교체하세요.
  const formAction = "https://formspree.io/f/yourFormId";

  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">문의 / 상담 신청</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          간단한 정보를 남겨 주시면, 전문 컨설턴트가 빠르게 연락드려 맞춤형 상담을 도와드립니다.
        </p>

        {/* 폼 */}
        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            action={formAction}
            method="POST"
            className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">이름</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="홍길동"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">이메일</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">연락처</label>
                  <input
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">관심 서비스</label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  defaultValue="한국 유학 (Inbound)"
                >
                  <option>한국 유학 (Inbound)</option>
                  <option>해외 유학 (Outbound)</option>
                  <option>고등학생 컨설팅</option>
                  <option>국제 교류 프로그램</option>
                  <option>기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">상담 내용</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="상담을 희망하시는 내용/목표/일정 등을 적어주세요."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
              >
                무료 상담 신청
              </button>

              <p className="text-xs text-neutral-500 mt-2">
                개인정보는 상담 및 프로그램 안내 목적 외에는 사용되지 않습니다.
              </p>
            </div>
          </form>

          {/* 연락처 + 지도 */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
              <h2 className="text-xl font-semibold">연락처</h2>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>
                  <span className="font-medium">전화</span> : 033-762-7746
                </li>
                <li>
                  <span className="font-medium">이메일</span> : eunbitproject@naver.com
                </li>
                <li>
                  <span className="font-medium">카카오톡</span> : @geconsulting
                </li>
                <li>
                  <span className="font-medium">주소</span> : 강원도 원주시 서원대로 500 원주프리미엄아울렛 4층 418호, GE Consulting
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <iframe
                title="GE Consulting Map"
                src="https://www.google.com/maps?q=Wonju&output=embed"
                className="w-full h-[280px] border-0"
                loading="lazy"
              />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
