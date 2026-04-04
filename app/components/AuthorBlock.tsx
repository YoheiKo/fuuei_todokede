// app/components/AuthorBlock.tsx
import Link from "next/link";
import Image from "next/image";

export default function AuthorBlock() {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <p className="text-sm text-gray-500 mb-4">この記事の執筆者</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
          <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 p-1 mt-0">
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
            <ul className="text-sm text-gray-600 mt-2 space-y-1 leading-relaxed">
              <li>✔ 映像送信型・無店舗型性風俗特殊営業の届出実績多数</li>
              <li>✔ 書類作成から警察署への提出まで一括サポート</li>
              <li>✔ 行政書士2名体制で全国対応・無料相談受付中</li>
            </ul>
            <div className="mt-3">
              <Link href="/operator" className="text-sm text-violet-600 hover:underline block mb-1.5">
                運営者情報を見る →
              </Link>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                <a href="#contact" className="text-sm text-violet-600 hover:underline inline-block">
                  フォームでお問い合わせ
                </a>
                <a href="#zoom" className="text-sm text-violet-600 hover:underline inline-block">
                  LINEでお問い合わせ
                </a>
                <a href="#zoom" className="text-sm text-violet-600 hover:underline inline-block">
                  メール/電話でお問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
