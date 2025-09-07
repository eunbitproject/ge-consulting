// components/Footer.tsx
type FooterProps = { locale?: "kr" | "en" };

const PHONE = "033-762-7746";
const EMAIL = "eunbitproject@naver.com";
const ADDRESS_KR = "강원도 원주시 서원대로 500 원주프리미엄아울렛 4층 418호";
const ADDRESS_EN = "4F-418, Wonju Premium Outlet, 500 Seowon-daero, Wonju-si, Gangwon-do";

const t = {
  kr: {
    contact: "고객 지원",
    phone: "전화",
    email: "이메일",
    address: "주소",
    rights: "© GE (Global Education) Consulting. All rights reserved.",
  },
  en: {
    contact: "Contact",
    phone: "Phone",
    email: "Email",
    address: "Address",
    rights: "© GE (Global Education) Consulting. All rights reserved.",
  },
};

export default function Footer({ locale = "kr" }: FooterProps) {
  const i18n = t[locale];

  return (
    <footer className="mt-20 border-t border-white/10 bg-neutral-950 text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <h2 className="text-lg font-semibold">{i18n.contact}</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <div className="text-sm opacity-70">{i18n.phone}</div>
            <a href={`tel:${PHONE}`} className="mt-1 inline-block text-base hover:underline">
              {PHONE}
            </a>
          </div>

          <div>
            <div className="text-sm opacity-70">{i18n.email}</div>
            <a href={`mailto:${EMAIL}`} className="mt-1 inline-block text-base hover:underline">
              {EMAIL}
            </a>
          </div>

          <div className="sm:col-span-1">
            <div className="text-sm opacity-70">{i18n.address}</div>
            <p className="mt-1 text-base">
              {locale === "kr" ? ADDRESS_KR : ADDRESS_EN}
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs opacity-60">{i18n.rights}</p>
      </div>
    </footer>
  );
}
