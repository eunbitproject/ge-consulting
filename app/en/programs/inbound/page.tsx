import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function InboundEn() {
  return (
    <ProgramTemplate
      locale="en"
      title="A New Chapter in Korea"
      subtitle="Start strong with one-stop support."
      overview={`A full pathway for international students who want to study at a Korean university or language institute.
We cover admissions strategy, visa, housing, and landing services end to end.`}
      benefits={[
        "Personalized school/language-institute shortlist & timeline",
        "Document check, submission, and interview support",
        "Visa preparation & guidance",
        "Housing matching (dorm/studio), airport pickup, banking & mobile setup",
        "Scholarship & campus-life information",
      ]}
      primaryCta={{ label: "Get Admission Guidance", href: "/en/contact", variant: "primary" }}
      secondaryCta={{ label: "Download Brochure", href: "/files/inbound-brochure.pdf", variant: "ghost" }}
      sections={[
        {
          id: "process",
          title: "Process (Timeline)",
          content: (
            <ol>
              <li>1) Discovery → admissions plan & schedule</li>
              <li>2) School shortlist & document prep</li>
              <li>3) Submission/interview/offer → visa</li>
              <li>4) Housing/flight/arrival prep</li>
              <li>5) Landing: banking, mobile, orientation</li>
            </ol>
          ),
        },
        {
          id: "scope",
          title: "Service Scope",
          content: (
            <ul>
              <li>Admissions strategy & school recommendation</li>
              <li>Document review & portal submission</li>
              <li>Visa guidance/support</li>
              <li>Housing match, airport pickup, landing support</li>
              <li>Scholarship & life info</li>
            </ul>
          ),
        },
        {
          id: "notes",
          title: "Fees & Notes",
          content: (
            <>
              <p>Quoted after consultation based on plan/nationality/targets.</p>
              <p className="text-white/70">
                * Third-party costs (visa fees, flights, dorms) are excluded.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "FAQ",
          content: (
            <ul>
              <li>Q. Can I progress from language school to university? → Yes.</li>
              <li>Q. Do you advise on scholarships? → Yes, when eligible.</li>
            </ul>
          ),
        },
        {
          id: "cases",
          title: "Case Teasers",
          content: (
            <ul>
              <li>Student A: After 1-year language school, admitted to ○○ Univ. (Business)</li>
              <li>Student B: 50% scholarship, admitted to ○○ Univ. (Media)</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
