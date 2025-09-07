import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function OutboundEn() {
  return (
    <ProgramTemplate
      locale="en"
      title="Personalized roadmaps across majors, countries, and budgets"
      subtitle="From testing to essays, scholarships, and visas."
      overview={`We design a tailored study-abroad plan based on your major fit, target countries/cities, and total budget.
Our one-stop support covers test planning, documents/essays, curated school lists, scholarship and visa guidance.`}
      benefits={[
        "Country/Major/Budget–aligned roadmap",
        "TOEFL/IELTS/SAT/ACT/GMAT/GRE planning",
        "Document/essay/recommendation/portfolio support",
        "Curated school lists with difficulty/scholarship/city factors",
        "Scholarship/visa/housing & insurance guidance",
      ]}
      primaryCta={{ label: "Book a Consultation", href: "/en/contact", variant: "primary" }}
      secondaryCta={{
        label: "Download Brochure/Checklist",
        href: "/files/outbound-brochure.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "countries",
          title: "Country Guides",
          content: (
            <ul>
              <li>United States: research/liberal arts/state options, scholarships, app components</li>
              <li>United Kingdom: foundation/3-year bachelor, A-Level/IB/foundation tracks</li>
              <li>Canada: Co-op/PGWP, province-specific pathways</li>
              <li>Australia: trimester, scholarships & internships</li>
              <li>EU: English-track options, tuition & cost-of-living comparison</li>
              <li>Asia: HK/SG/JP selective admissions highlights</li>
            </ul>
          ),
        },
        {
          id: "exams",
          title: "Tests & Documents",
          content: (
            <ul>
              <li>English (TOEFL/IELTS/Duolingo), standardized tests (SAT/ACT, GMAT/GRE)</li>
              <li>Official transcripts/certificates & proof of funds</li>
              <li>Essays/portfolios: ideation → drafts → feedback → final</li>
              <li>Recommendations: referee selection & request guidance</li>
            </ul>
          ),
        },
        {
          id: "list",
          title: "Recommended School List",
          content: (
            <p className="text-white/90">
              We propose Reach / Match / Safety tiers, attaching scholarship
              likelihood, major strength, and city safety/cost considerations.
            </p>
          ),
        },
        {
          id: "timeline",
          title: "18–6 Month Timeline Checklist",
          content: (
            <ol>
              <li>18–12 mo: goal setting, test plan</li>
              <li>12–9 mo: research & shortlist, essay/portfolio drafts</li>
              <li>9–6 mo: finalize scores, submit apps & scholarships</li>
              <li>After offers: visa, housing/insurance, pre-departure</li>
            </ol>
          ),
        },
        {
          id: "notes",
          title: "Fees & Notes",
          content: (
            <>
              <p>Quoted after consultation based on country/level/plan.</p>
              <p className="text-white/70">
                * Third-party costs (tests, application fees, visas, flights, housing, insurance) excluded.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "FAQ",
          content: (
            <ul>
              <li>Q. Can I apply with conditional English? → We’ll propose language/foundation routes.</li>
              <li>Q. When do I apply for scholarships? → It varies by country; included in your roadmap.</li>
            </ul>
          ),
        },
        {
          id: "cases",
          title: "Case Teasers",
          content: (
            <ul>
              <li>Student C: Admitted to US Top-30 Business with partial scholarship</li>
              <li>Student D: UK foundation → bachelor transfer route</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
