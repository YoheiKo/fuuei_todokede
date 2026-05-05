// app/components/Footer.tsx
import Link from "next/link";
import FixedCTA from "./FixedCTA";

export default function Footer() {
  return (
    <>
    <footer className="bg-brand-indigo text-white py-12 border-t border-white/10 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold flex items-center">
            なないろ風営届出サポート
          </Link>
          <p className="text-violet-300 text-sm mt-2">
            映像送信型・無店舗型性風俗特殊営業の届出を専門の行政書士がサポート。
          </p>
        </div>

        <div className="flex space-x-6 text-sm text-violet-200">
          <Link href="/operator" className="hover:text-white transition">
            運営者情報
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition">
            プライバシーポリシー
          </Link>
        </div>
      </div>

      <div className="text-center text-violet-400 text-xs mt-10">
        &copy; 2026 なないろ風営届出サポート. All rights reserved.
      </div>
    </footer>
      <FixedCTA />
    </>
  );
}
