import HubTabs from "@/components/HubTabs";
import NewsList from "@/components/NewsList";
import FaqList from "@/components/FaqList";

type Search = { tab?: string };

export default async function HubKr({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { tab } = await searchParams;
  const active = tab === "faq" ? "faq" : "news";

  return (
    <main className="min-h-screen bg-neutral-900/0">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-neutral-900">
          {active === "faq" ? "자주 묻는 질문" : "뉴스"}
        </h1>

        <div className="mt-6">
          <HubTabs locale="kr" />
        </div>

        <div className="mt-6">
          {active === "faq" ? <FaqList locale="kr" /> : <NewsList locale="kr" />}
        </div>
      </div>
    </main>
  );
}
