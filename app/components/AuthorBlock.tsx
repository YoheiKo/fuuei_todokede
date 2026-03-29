// app/components/AuthorBlock.tsx
import Link from "next/link";
import Image from "next/image";

export default function AuthorBlock() {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <p className="text-sm text-gray-500 mb-4">この記事の執筆者</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
          <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 p-1 mt-[6px]">
            <Image
              src="/NANAIRO_transparent.png"
              alt="なないろ風営届出サポート"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-bold text-gray-900">なないろ風営届出サポート 行政書士チーム</p>
            <p className="text-xs text-gray-600 mt-1">
              映像送信型・無店舗型性風俗特殊営業の届出手続きを専門とする行政書士2名のチームです。
              警察署への届出書類作成から提出まで一括サポート。
            </p>
            <Link
              href="/operator"
              className="text-xs text-violet-600 hover:underline mt-2 inline-block"
            >
              運営者情報を見る →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
