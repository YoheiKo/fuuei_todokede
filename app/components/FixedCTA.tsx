"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const btn = "flex h-[48px] flex-row items-center justify-center gap-1.5 px-2 py-2 active:opacity-90 cursor-pointer";

export default function FixedCTA() {
  const pathname = usePathname();
  const isBlogArticle = /^\/blog\/.+/.test(pathname);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-3 text-white text-center font-bold text-[13px] leading-tight">
        {isBlogArticle ? (
          <>
            <button onClick={() => scrollTo("contact")} className={`${btn} bg-blue-600`}>
              <span>お申し込み</span>
            </button>
            <button onClick={() => scrollTo("zoom")} className={`${btn} bg-[#06c755]`}>
              <span>LINE相談</span>
            </button>
            <button onClick={() => scrollTo("zoom")} className={`${btn} bg-[#173b73]`}>
              <span>メール相談</span>
            </button>
          </>
        ) : (
          <>
            <Link href="/#contact" className={`${btn} bg-blue-600`}>
              <span>お申し込み</span>
            </Link>
            <Link href="/#zoom" className={`${btn} bg-[#06c755]`}>
              <span>LINE相談</span>
            </Link>
            <Link href="/#zoom" className={`${btn} bg-[#173b73]`}>
              <span>メール相談</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
