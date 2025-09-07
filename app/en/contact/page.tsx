export default function ContactEn() {
  // Note: Replace yourFormId with your real Formspree form id when ready.
  const formAction = "https://formspree.io/f/yourFormId";

  return (
    <main className="pt-16 pb-20 px-6 text-neutral-900 bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Contact / Consultation</h1>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Leave us a few details and our counselors will reach out to provide a tailored consultation.
        </p>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            action={formAction}
            method="POST"
            className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="+82-10-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Interested Service</label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  defaultValue="Studying in Korea (Inbound)"
                >
                  <option>Studying in Korea (Inbound)</option>
                  <option>Studying Abroad (Outbound)</option>
                  <option>High School Consulting</option>
                  <option>Cultural Exchange</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="Tell us about your goals, timeline, and questions."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#F4A261] px-5 py-3 font-semibold text-neutral-900 hover:opacity-95"
              >
                Book a Free Consultation
              </button>

              <p className="text-xs text-neutral-500 mt-2">
                Your information will only be used for consultation and program guidance.
              </p>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>
                  <span className="font-medium">Phone</span>: +82-33-762-7746
                </li>
                <li>
                  <span className="font-medium">Email</span>: eunbitproject@naver.com
                </li>
                <li>
                  <span className="font-medium">KakaoTalk</span>: @geconsulting
                </li>
                <li>
                  <span className="font-medium">Address</span>: Wonju-si Seowondaero 500 Wonju Premiumoutlet 4FL 401, South Korea
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
