// app/en/layout.tsx
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="pt-16">{children}</div>
        <Footer locale="en" />
      </body>
    </html>
  );
}


