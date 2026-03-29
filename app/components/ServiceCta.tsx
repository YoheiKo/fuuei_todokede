// app/components/ServiceCta.tsx
import Link from "next/link";

export default function ServiceCta() {
  return (
    <div className="my-8 border-l-4 border-violet-600 pl-5 bg-violet-50 py-5 pr-5 rounded-r-xl">
      <p className="text-sm font-bold text-violet-800 mb-2">
        なないろ風営届出サポートについて
      </p>
      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        <li>✔ 映像送信型・無店舗型性風俗特殊営業の届出実績多数</li>
        <li>✔ 書類作成から警察署への提出まで一括サポート</li>
        <li>✔ 全国対応・無料相談受付中</li>
      </ul>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/operator"
          className="text-violet-700 hover:underline"
        >
          運営者情報
        </Link>
        <a href="/#contact" className="text-violet-700 hover:underline">
          お問い合わせ
        </a>
        <a
          href="mailto:nanairo.law@gmail.com"
          className="text-violet-700 hover:underline"
        >
          nanairo.law@gmail.com
        </a>
      </div>
    </div>
  );
}
