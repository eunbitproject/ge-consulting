// app/kr/hub/page.tsx
import HubTabs from "@/components/HubTabs";
import NewsList from "@/components/NewsList";
import FaqList from "@/components/FaqList";

type Search = Promise<{ tab?: string }>;

export default async function HubKr({
  searchParams,
}: {
  searchParams?: Search;
}) {
  const qs = (await searchParams) ?? {};
  const tab = qs.tab ?? "news";

  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-white">자료실</h1>

        <div className="mt-6">
          <HubTabs locale="kr" />
        </div>

        <div className="mt-6">
          {tab === "faq" ? <FaqList locale="kr" /> : <NewsList locale="kr" />}
        </div>
      </div>
    </main>
  );
}
