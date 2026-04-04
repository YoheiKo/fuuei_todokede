// app/components/Footer.tsx
import Link from "next/link";
import FixedCTA from "./FixedCTA";

export default function Footer() {
  return (
    <>
    <footer className="bg-violet-950 text-white py-12 border-t border-violet-900 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-violet-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
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
