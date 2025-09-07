export default function AboutEn() {
  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">GE (Global Education) Consulting</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          GE Consulting is a specialist education consulting group for studying in Korea and abroad,
          high school counseling, and cultural exchange programs. We design a tailored roadmap for each
          student and support every step—from admission to daily life.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Identity & Philosophy</h2>
          <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1 leading-relaxed">
            <li>Student-first decision making</li>
            <li>Transparent management of timeline, documents, and progress</li>
            <li>Practical on-site support using our local networks (housing / visa / settlement)</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Parent Company: Eunbitproject</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Backed by the stable management system and extensive education project experience of{" "}
            <strong>Eunbitproject</strong>, GE Consulting delivers trust and professionalism.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Consultants</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">Youngeun Kim, Lead Consultant</h3>
              <p className="text-neutral-600 text-sm mt-1">Overseas university admissions / essays / portfolio</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-4">
              <h3 className="font-semibold">Hyejin Paek, Consultant</h3>
              <p className="text-neutral-600 text-sm mt-1">Korean language institutes / university entrance / visa</p>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <a
            href="/en/contact"
            className="inline-block rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
