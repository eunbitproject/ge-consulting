// app/en/page.tsx
import HeroOptionA from "../../components/HeroOptionA";
import WhyGE from "../../components/WhyGE";
import ProgramsGrid from "../../components/ProgramsGrid";

export default function HomeEn() {
  return (
    <main>
      <HeroOptionA locale="en" imageUrl="/hero/ge-campus.jpg" />
      <WhyGE locale="en" />
      <ProgramsGrid locale="en" />
    </main>
  );
}


