import HeroOptionA from "@/components/HeroOptionA";
import WhyGE from "@/components/WhyGE";
import ProgramsGrid from "@/components/ProgramsGrid";

export default function HomeKr() {
  return (
    <main>
      {/* 헤더는 레이아웃에서 렌더링됩니다 */}
      <HeroOptionA locale="ko" imageUrl="/hero/ge-campus.jpg" />
      <WhyGE locale="ko" />
      <ProgramsGrid locale="ko" />
    </main>
  );
}


