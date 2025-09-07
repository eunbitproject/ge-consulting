
export default function ProgramsEn() {
  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Programs</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Explore GE Consulting’s core programs. We provide an end-to-end roadmap tailored to each
          student—from school selection and applications to visas and settlement.
        </p>

        {/* Inbound (Study in Korea) */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Studying in Korea (Inbound)</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            University & language institute admissions, visa support, housing, airport pickup, and
            ongoing life support.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">University Admissions</h3>
              <p className="text-neutral-600 text-sm mt-1">
                School shortlist, timeline, documents, interviews, and scholarships.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">Language Institutes</h3>
              <p className="text-neutral-600 text-sm mt-1">
                Korean language programs as a pathway to degree admissions.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/en/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              Ask about Studying in Korea
            </a>
          </div>
        </section>

        {/* Outbound (Study Abroad) */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Studying Abroad (Outbound)</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Country-by-major roadmaps, university list building, essay/portfolio coaching, and visa.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">US / Canada</h3>
              <p className="text-neutral-600 text-sm mt-1">Common App, essays, recommendations, SAT/ACT strategy.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">UK / Europe</h3>
              <p className="text-neutral-600 text-sm mt-1">UCAS, personal statements, A-level/IB alignment.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">Asia / Oceania</h3>
              <p className="text-neutral-600 text-sm mt-1">Japan, Australia, Singapore and more—program fit & visas.</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/en/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              Ask about Studying Abroad
            </a>
          </div>
        </section>

        {/* High School Consulting */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">High School Consulting</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Early study-abroad planning, course selection, extracurricular strategy, competitions, and
            long-term portfolio building for top universities.
          </p>
          <div className="mt-4">
            <a
              href="/en/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              Discuss High School Planning
            </a>
          </div>
        </section>

        {/* Cultural Exchange */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Cultural Exchange</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Short-term programs such as K-Culture experiences and ski camps for students from
            Southeast Asia and beyond.
          </p>
          <div className="mt-4">
            <a
              href="/en/contact"
              className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
            >
              Inquire about Exchange Programs
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
