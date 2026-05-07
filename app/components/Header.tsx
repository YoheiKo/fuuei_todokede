// app/components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const headerCls =
    "fixed top-0 left-0 w-full z-50 bg-white text-gray-900 shadow-sm border-b border-gray-200";

  const linkCls =
    "hover:text-violet-600 transition-colors text-gray-700 hover:text-gray-900";

  return (
    <header className={headerCls}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 cursor-pointer hover:opacity-90"
          onClick={() => setOpen(false)}
          aria-label="なないろ風営届出サポート"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white">
            <Image
              src="/NANAIRO_transparent.png"
              alt="なないろ風営届出サポート"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>

          <div className="font-bold text-xl tracking-tight flex flex-col leading-none text-gray-900">
            <span>なないろ風営届出サポート</span>
            <span className="text-[10px] ml-[2px] mt-[4px] opacity-70 font-normal tracking-wider text-gray-600">
              FUUEI TODOKEDE SUPPORT
            </span>
          </div>
        </Link>

        {/* PC Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          {/* <Link href="/#about" className={linkCls}>
            サービス特徴
          </Link> */}
          <Link href="/#pricing" className={linkCls}>
            料金プラン
          </Link>
          <Link href="/blog" className={linkCls}>
            実務コラム
          </Link>
          <Link href="/#flow" className={linkCls}>
            ご依頼の流れ
          </Link>
          <Link href="/#contact" className={linkCls}>
            お問い合わせ
          </Link>
          <Link href="/operator" className={linkCls}>
            運営者情報
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/10 transition"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-bold tracking-widest">
            {/* <a href="/#about" className={linkCls} onClick={() => setOpen(false)}>
              サービス特徴
            </a> */}
            <a href="/#services" className={linkCls} onClick={() => setOpen(false)}>
              対応業務
            </a>
            <a href="/#pricing" className={linkCls} onClick={() => setOpen(false)}>
              料金プラン
            </a>
            <Link href="/blog" className={linkCls} onClick={() => setOpen(false)}>
              実務コラム
            </Link>
            <a href="/#flow" className={linkCls} onClick={() => setOpen(false)}>
              ご依頼の流れ
            </a>
            <a href="/#contact" className={linkCls} onClick={() => setOpen(false)}>
              お問い合わせ
            </a>
            <Link href="/operator" className={linkCls} onClick={() => setOpen(false)}>
              運営者情報
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
