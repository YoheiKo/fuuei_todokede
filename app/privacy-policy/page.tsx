// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜なないろ風営届出サポート",
  description:
    "なないろ風営届出サポート（映像送信型・無店舗型性風俗特殊営業の届出支援サービス）における個人情報の取扱いについて定めるプライバシーポリシーです。",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.fuuei-todokede.com/privacy-policy",
  },
  openGraph: {
    title: "プライバシーポリシー｜なないろ風営届出サポート",
    description:
      "なないろ風営届出サポートにおける個人情報の取扱いについて定めるプライバシーポリシーです。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.fuuei-todokede.com/privacy-policy",
    siteName: "なないろ風営届出サポート",
  },
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
            プライバシーポリシー
          </h1>

          <div className="text-gray-700 space-y-8 leading-relaxed">
            <p>
              なないろ風営届出サポートが提供するサービス（以下、「本サービス」といいます。）における個人情報の取扱いについて、
              以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                個人情報の取得
              </h2>
              <p>
                なないろ風営届出サポートは、個人情報を、適正な手段により取得します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                個人情報の利用目的
              </h2>
              <p className="mb-3">
                なないろ風営届出サポートは、個人情報を、以下の目的で利用します。個人情報保護法その他の法令により認められる事由があるとき、
                または、人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるときを除き、
                ご本人の同意がない限り、この範囲を超えて個人情報を利用することはありません。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  本サービス（映像送信型・無店舗型性風俗特殊営業の届出支援、書類作成支援、警察署への提出代行等）の提供・運営
                </li>
                <li>ご相談・お問い合わせへの対応、必要な連絡</li>
                <li>本人確認、契約の締結・履行、請求・支払等の事務処理</li>
                <li>届出に必要な書類の作成支援、内容確認、提出手続支援（代行の範囲は個別契約に従います）</li>
                <li>サービス品質の維持・改善、利用状況の分析、業務改善</li>
                <li>不正利用の防止、セキュリティ確保、トラブル対応</li>
                <li>その他、上記の利用目的に付随する目的</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                個人情報の管理
              </h2>
              <p>
                なないろ風営届出サポートは、個人情報を、適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                第三者提供及び委託
              </h2>
              <p className="mb-3">
                なないろ風営届出サポートは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
                ただし、本サービスの提供に必要な範囲で、業務を外部に委託することがあります。この場合、委託先に対して適切な監督を行います。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>各種クラウドサービス、連絡・管理ツール等の提供事業者</li>
                <li>業務の一部（書類作成補助、事務処理等）の委託先</li>
                <li>決済、請求、会計処理等に関する事業者</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                個人情報の開示、訂正等、利用停止等、利用目的の通知
              </h2>
              <p>
                なないろ風営届出サポートは、個人情報について、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止または利用目的の通知等につき、
                ご本人からのお申し出があった場合には、ご本人からのお求めであることを確認の上、法令に従い、合理的な範囲で速やかに対応します。
                <br />
                なお、お申出が個人情報保護法の定める要件を満たさない場合、または、法令により、開示等を拒絶することが認められる事由がある場合には、
                お申出に添えないことがございます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                Cookie（クッキー）及びアクセス解析ツール
              </h2>
              <p>
                当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用する場合があります。
                Googleアナリティクスは、Cookieを使用することでお客様のトラフィックデータを収集しています。
                お客様はブラウザの設定でCookieを無効にすることで、トラフィックデータの収集を拒否することができます。
                なお、トラフィックデータから個人を特定することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                プライバシーポリシーの変更
              </h2>
              <p>
                なないろ風営届出サポートは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく本ポリシーを変更する場合があります。
                本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-violet-600 pl-3">
                お問い合わせ窓口
              </h2>
              <p className="mb-2">
                本ポリシーに関するお問い合わせは、下記連絡先までお願いいたします。
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold">なないろ風営届出サポート</p>
                <a href="mailto:nanairo.law@gmail.com" className="text-violet-600 hover:underline">
                  nanairo.law@gmail.com
                </a>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                制定日：2026年3月24日 / 最終改定日：2026年3月24日
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
