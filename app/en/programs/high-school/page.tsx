import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function HighSchoolEn() {
  return (
    <ProgramTemplate
      locale="en"
      title="Build a strong foundation for top universities."
      subtitle="Academic planning • Activities portfolio • Seasonal camps • Parent guidance"
      overview={`We help middle/high school students balance academics and activities to maximize
admissions outcomes for top universities in Korea and overseas. Curriculum selection, test planning,
portfolio strategy, and parent briefings are aligned into one timeline.`}
      benefits={[
        "Academic planning: IB/AP/A-Level/KR curriculum & course selection",
        "Testing: GPA/TOEFL/IELTS/SAT/ACT plans",
        "Activities portfolio: research, service, leadership, competitions",
        "Seasonal programs: summer/winter camps (domestic/abroad)",
        "Parent guidance: admissions, safety, finance/visa briefings",
      ]}
      primaryCta={{ label: "Book a Consultation", href: "/en/contact", variant: "primary" }}
      secondaryCta={{
        label: "Download Curriculum Guide",
        href: "/files/highschool-guide-en.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "academics",
          title: "Academic Planning",
          content: (
            <ul>
              <li>IB: HL/SL mix, IA/EE timeline, TOK management</li>
              <li>AP: course roadmap, exam schedule, credit strategy</li>
              <li>A-Level: subject balance, foundation alignment</li>
              <li>KR curriculum: GPA/testing & assessment strategy</li>
            </ul>
          ),
        },
        {
          id: "activities",
          title: "Activities Portfolio",
          content: (
            <ul>
              <li>Research projects: topic → execution → documentation</li>
              <li>Service/leadership: sustainable initiatives with impact logs</li>
              <li>Academic/competitions: essays, olympiads, hackathons</li>
              <li>Portfolio: reflections, evidences, web/document archiving</li>
            </ul>
          ),
        },
        {
          id: "camps",
          title: "Summer/Winter Camps",
          content: (
            <p className="text-white/90">
              We curate language/STEM/leadership/culture programs and link outcomes
              back to essays and portfolios.
            </p>
          ),
        },
        {
          id: "parents",
          title: "Parent Guidance",
          content: (
            <ul>
              <li>Roadmap, metrics, deadlines dashboard</li>
              <li>Safety/housing/finance/insurance/visa guidance</li>
              <li>Regular reports & briefing calls</li>
            </ul>
          ),
        },
        {
          id: "timeline",
          title: "Yearly Timeline (Sample)",
          content: (
            <ol>
              <li>Q1: Goal/course/test plan, design activities</li>
              <li>Q2: Mid-check, exams, activity progress</li>
              <li>Q3: Camps/projects, portfolio synthesis</li>
              <li>Q4: Finalize exams, year-end review & next-year plan</li>
            </ol>
          ),
        },
        {
          id: "notes",
          title: "Fees & Notes",
          content: (
            <>
              <p>Quoted after consultation based on grade/targets/country.</p>
              <p className="text-white/70">
                * Third-party costs (camp fees, flights, housing, insurance, test fees) excluded.
              </p>
            </>
          ),
        },
        {
          id: "faq",
          title: "FAQ",
          content: (
            <ul>
              <li>Q. Can we balance local curriculum and overseas prep? → Yes, we design dual tracks by term/season.</li>
              <li>Q. We lack activities so far. → We build 3–6 month themed projects aligned to interests.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}

