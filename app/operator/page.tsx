// app/operator/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "運営者情報｜なないろ風営届出サポート（行政書士2名体制）",
  description:
    "なないろ風営届出サポートの運営者情報です。映像送信型・無店舗型性風俗特殊営業の届出手続きを専門とする行政書士が対応しています。",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.fuuei-todokede.com/operator",
  },
  openGraph: {
    title: "運営者情報｜なないろ風営届出サポート",
    description:
      "映像送信型・無店舗型性風俗特殊営業の届出手続きを専門とする行政書士チームの運営者情報です。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.fuuei-todokede.com/operator",
    siteName: "なないろ風営届出サポート",
  },
  twitter: {
    card: "summary_large_image",
    title: "運営者情報｜なないろ風営届出サポート",
    description: "映像送信型・無店舗型性風俗特殊営業の届出手続きを専門とする行政書士チームの運営者情報です。",
  },
};

type Member = {
  name: string;
  role: string;
  affiliation: string;
  regNo: string;
  bio: string;
  imageSrc: string;
  education: string[];
  credentials: string[];
};

const members: Member[] = [
  {
    name: "藤原 七海",
    role: "行政書士",
    affiliation: "東京都行政書士会所属（千代田支部）",
    regNo: "25080175",
    bio: "コンサルティングファームで約8年の勤務経験。培った要件整理・論点整理の力を活かし、映像送信型・無店舗型性風俗特殊営業の届出手続きを実務に即して丁寧にサポートします。",
    imageSrc: "/Nanami.png",
    education: ["岡山大学経済学部"],
    credentials: ["行政書士", "J.S.A.ワインエキスパート"],
  },
  {
    name: "古森 洋平",
    role: "行政書士",
    affiliation: "東京都行政書士会所属（板橋支部）",
    regNo: "23080246",
    bio: "銀行・投資銀行での法人向け実務経験を経て、行政書士として各種書類作成支援に従事。正確性とスピードの両立を重視し、風営法の届出手続きを丁寧に対応します。",
    imageSrc: "/Yohei.png",
    education: ["慶應義塾大学経済学部"],
    credentials: ["行政書士", "J.S.A.ワインエキスパート"],
  },
];

const strengths = [
  {
    title: "風営法専門の届出支援実績",
    desc: "映像送信型・無店舗型性風俗特殊営業の届出を専門的に取り扱い、豊富な支援実績を有しています。",
  },
  {
    title: "書類作成から提出まで一括対応",
    desc: "届出書類の作成から管轄警察署への提出代行まで一括でサポート。補正が発生した場合も対応します。",
  },
  {
    title: "全国対応・明確な料金設計",
    desc: "全国の警察署に対応。支援内容ごとにメニューを整理し、必要な支援のみを選択いただける料金体系です。",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">運営者情報</h1>

          <p className="text-gray-700 leading-relaxed">
            なないろ風営届出サポートは、映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出手続きを中心に、
            風営法に関連する各種手続きを専門とする行政書士2名体制で対応するサービスです。
            ご相談内容に応じて、対応範囲と進め方を明確にした上で支援いたします。
          </p>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-violet-600 pl-3">
            選ばれる理由
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">{s.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-violet-600 pl-3">
            行政書士（運営メンバー）
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((m) => (
              <div key={m.name} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white border border-gray-200">
                    <Image
                      src={m.imageSrc}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                      priority={false}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{m.name}</div>
                    <div className="text-sm text-gray-700">{m.role}</div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-800 leading-relaxed space-y-2">
                  <p className="font-medium">{m.affiliation}</p>
                  <p>行政書士登録番号：{m.regNo}</p>
                  <p className="text-gray-700">{m.bio}</p>

                  <div className="pt-3">
                    <p className="font-bold text-gray-900 mb-2">学歴・資格</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {[...m.education, ...m.credentials].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-violet-600 pl-3">
            連絡先
          </h2>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p className="text-gray-700 mb-2">
              映像送信型・無店舗型性風俗特殊営業の届出に関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="text-gray-900 font-bold">なないろ風営届出サポート</div>
            <a className="text-violet-600 hover:underline" href="mailto:nanairo.law@gmail.com">
              nanairo.law@gmail.com
            </a>
          </div>

          <hr className="my-8 border-gray-200" />

          <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-violet-600 pl-3">
            ご留意事項
          </h2>

          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p>・本ページは運営者情報の提供を目的としています。</p>
            <p>
              ・当サービスは行政手続支援の範囲で提供しており、紛争性のある事案、交渉、訴訟代理等に関する対応はお受けできません。
            </p>
            <p>
              ・提供範囲や料金、納期等の条件は、料金プランおよびご依頼の流れをご確認ください。
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500">最終更新日：2026年3月29日</p>
        </div>
      </div>
    </div>
  );
}
