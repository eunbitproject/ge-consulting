// app/kr/hub/page.tsx
import HubTabs from "@/components/HubTabs";
import NewsList from "@/components/NewsList";
import FaqList from "@/components/FaqList";

export default function HubKr({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const tab = searchParams?.tab ?? "news";
  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10 text-white">
        <h1 className="text-3xl font-semibold">뉴스</h1>
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

