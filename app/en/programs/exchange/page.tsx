import ProgramTemplate from "../../../../components/ProgramTemplate";

export default function ExchangeEn() {
  return (
    <ProgramTemplate
      locale="en"
      title="K-culture and sports exchange programs"
      subtitle="K-culture experiences • Ski/sports camps • Language & culture immersion"
      overview={`We run exchange programs for international groups featuring K-culture,
ski/sports camps, and language & culture immersion. Safety and operations are managed end-to-end
with dedicated escorts. Custom itineraries are available for schools/organizations.`}
      benefits={[
        "Safety: on-site escorts, insurance, emergency hotline",
        "Variety: K-culture, ski/sports, city & nature tours",
        "Customization: tailored to group size, age, budget, duration",
        "Documentation: invitation letters, itineraries, insurance confirmations",
      ]}
      primaryCta={{ label: "Book a Consultation", href: "/en/contact", variant: "primary" }}
      secondaryCta={{
        label: "Download Brochure",
        href: "/files/exchange-brochure-en.pdf",
        variant: "ghost",
      }}
      sections={[
        {
          id: "schedule",
          title: "Schedule / Age / Group size",
          content: (
            <ul>
              <li>Duration: 3–10 days recommended (term or vacation)</li>
              <li>Age: upper elementary to university (mixed groups allowed)</li>
              <li>Group size: 15–120 (large groups run in sub-teams)</li>
            </ul>
          ),
        },
        {
          id: "safety",
          title: "Safety Management",
          content: (
            <ul>
              <li>Escort throughout the itinerary + local staff on site</li>
              <li>Group insurance & 24/7 emergency hotline</li>
              <li>Pre-checks for lodging/transport/venues and risk briefing</li>
            </ul>
          ),
        },
        {
          id: "includes",
          title: "Inclusions / Exclusions",
          content: (
            <ul>
              <li>Included: lodging, meals (per program), local transport, fees, escort/ops</li>
              <li>Excluded: international flights, personal items, optional insurance, shopping</li>
            </ul>
          ),
        },
        {
          id: "gallery",
          title: "Photo/Video Gallery",
          content: (
            <p className="text-white/90">
              Sample media is provided in the brochure or during consultation.
              Private links can be shared for institutions on request.
            </p>
          ),
        },
        {
          id: "process",
          title: "Application Process (Timeline)",
          content: (
            <ol>
              <li>Inquiry & requirements → group size/budget/schedule check</li>
              <li>Custom proposal & quotation → institutional approval</li>
              <li>Contract & PIC assignment → finalize itinerary / pre-departure briefing</li>
              <li>Program execution (with escort) → wrap-up report & media delivery</li>
            </ol>
          ),
        },
        {
          id: "faq",
          title: "FAQ",
          content: (
            <ul>
              <li>Q. Do you accept small groups? → Yes, groups around 15 are fine.</li>
              <li>Q. What lodging options are available? → Hotels/resorts/training centers as per budget & goals.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}

