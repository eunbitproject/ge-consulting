// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLocaleFromPath(path: string): "kr" | "en" {
  // /kr/..., /en/... 중 첫 세그먼트로 로케일 판별
  const seg = path.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "kr";
}

export default function SiteHeader() {
  const pathname = usePathname() || "/kr";
  const locale = getLocaleFromPath(pathname);

  // i18n 라벨
  const L = locale === "en"
    ? {
        home: "Home",
        about: "About",
        programs: "Programs",
        contact: "Contact",
        hub: "Info Hub",                // ✅ 추가
        inbound: "Studying in Korea",
        outbound: "Studying Abroad",
        highschool: "High School Consulting",
        exchange: "Cultural Exchange",
        switch: "KR",
      }
    : {
        home: "홈",
        about: "소개",
        programs: "프로그램",
        contact: "문의",
        hub: "자료실",                  // ✅ 추가
        inbound: "한국 유학",
        outbound: "해외 유학",
        highschool: "고등 컨설팅",
        exchange: "국제 교류",
        switch: "EN",
      };

  // Programs 하위 메뉴(로케일 기반 href)
  const subItems = [
    { label: L.inbound, href: `/${locale}/programs/inbound` },
    { label: L.outbound, href: `/${locale}/programs/outbound` },
    { label: L.highschool, href: `/${locale}/programs/high-school` },
    { label: L.exchange, href: `/${locale}/programs/exchange` },
  ];

  // 로케일 전환 버튼(반대편 루트로 보냄)
  const switchHref = locale === "en" ? "/kr" : "/en";

  // 활성 경로 스타일
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 로고/홈 */}
        <Link
          href={`/${locale}`}
          className="font-semibold tracking-tight text-neutral-900"
        >
          GE Consulting
        </Link>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              href={`/${locale}/about`}
              className={`px-3 py-2 rounded-md hover:bg-neutral-100 ${
                isActive(`/${locale}/about`)
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-700"
              }`}
            >
              {L.about}
            </Link>
          </li>

          {/* Programs + 드롭다운 */}
          <li className="relative group">
            <Link
              href={`/${locale}/programs`}
              className={`px-3 py-2 rounded-md hover:bg-neutral-100 ${
                isActive(`/${locale}/programs`)
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-700"
              }`}
            >
              {L.programs}
            </Link>

            {/* 드롭다운 패널 */}
            <div
              className="invisible absolute left-0 top-full mt-2 w-64 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg opacity-0 transition
                         group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
              <ul className="flex flex-col">
                {subItems.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className={`block rounded-lg px-3 py-2 hover:bg-neutral-100 ${
                        isActive(it.href)
                          ? "font-semibold text-neutral-900"
                          : "text-neutral-700"
                      }`}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* ✅ Info Hub / 자료실 추가 */}
          <li>
            <Link
              href={`/${locale}/hub`}
              className={`px-3 py-2 rounded-md hover:bg-neutral-100 ${
                isActive(`/${locale}/hub`)
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-700"
              }`}
            >
              {L.hub}
            </Link>
          </li>

          <li>
            <Link
              href={`/${locale}/contact`}
              className={`px-3 py-2 rounded-md hover:bg-neutral-100 ${
                isActive(`/${locale}/contact`)
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-700"
              }`}
            >
              {L.contact}
            </Link>
          </li>

          {/* 로케일 전환 */}
          <li>
            <Link
              href={switchHref}
              className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
            >
              {L.switch}
            </Link>
          </li>
        </ul>

        {/* 모바일: 간단히 로케일 전환만 노출 (필요 시 햄버거 추후 추가) */}
        <div className="md:hidden">
          <Link
            href={switchHref}
            className="px-3 py-2 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
          >
            {L.switch}
          </Link>
        </div>
      </nav>
    </header>
  );
}
