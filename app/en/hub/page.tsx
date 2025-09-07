// app/en/hub/page.tsx
import HubTabs from "@/components/HubTabs";
import NewsList from "@/components/NewsList";
import FaqList from "@/components/FaqList";

// Next.js 15: searchParams는 Promise일 수 있음
type Search = Promise<{ tab?: string }>;

export default async function HubEn({
  searchParams,
}: {
  searchParams?: Search;
}) {
  const qs = (await searchParams) ?? {};
  const tab = qs.tab ?? "news";

  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-semibold text-white">Info Hub</h1>

        <div className="mt-6">
          <HubTabs locale="en" />
        </div>

        <div className="mt-6">
          {tab === "faq" ? <FaqList locale="en" /> : <NewsList locale="en" />}
        </div>
      </div>
    </main>
  );
}
