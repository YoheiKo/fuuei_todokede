// app/page.tsx
import ContactFormCTA from "./components/ContactFormCTA";
import PricingCards from "./components/PricingCards";
import StatsSection from "./components/StatsSection";
import type { Metadata } from "next";

const NOINDEX = false;

export const metadata: Metadata = {
  title: "なないろ風営届出サポート | 映像送信型・無店舗型性風俗特殊営業の届出支援",
  description:
    "映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出手続きを行政書士がサポート。届出書類の作成から警察署への提出まで全国対応。無料相談受付中。",
  keywords: [
    "映像送信型性風俗特殊営業",
    "無店舗型性風俗特殊営業",
    "風俗特殊営業 届出",
    "風営法 届出",
    "性風俗特殊営業 行政書士",
    "デリヘル 届出",
    "なないろ風営届出サポート",
    "行政書士",
  ],
  robots: NOINDEX
    ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },

  openGraph: {
    title: "なないろ風営届出サポート | 映像送信型・無店舗型性風俗特殊営業の届出支援",
    description:
      "映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出手続きを行政書士がサポート。全国対応・無料相談受付中。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.fuuei-todokede.com/",
    images: [
      {
        url: "/fuuei_hero.jpg",
        width: 1200,
        height: 630,
        alt: "なないろ風営届出サポート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "なないろ風営届出サポート | 映像送信型・無店舗型性風俗特殊営業の届出支援",
    description:
      "映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出手続きを行政書士がサポート。全国対応・無料相談受付中。",
    images: ["/fuuei_hero.jpg"],
  },
  alternates: {
    canonical: "https://www.fuuei-todokede.com/",
  },
};

export default function Page() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-brand-indigo" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-brand-text md:text-white">
          <p className="text-white font-inter font-bold tracking-[0.2em] mb-3 uppercase drop-shadow-sm text-sm">
            Licensed Administrative Scrivener Support
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md text-white">
            <span className="md:hidden">性風俗特殊営業の届出</span>
            <span className="hidden md:inline">性風俗特殊営業の届出を、</span>
            <br />
            <span className="md:hidden">プロに任せて安心開業</span>
            <span className="hidden md:inline">プロに任せて安心開業。</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm">
            <span className="md:hidden">映像送信型・無店舗型性風俗特殊営業の届出<br />行政書士が一括サポート</span>
            <span className="hidden md:inline">映像送信型・無店舗型性風俗特殊営業の届出書類作成から<br />警察署への提出まで、行政書士が一括サポートします。</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-brand-gradient text-white font-inter font-bold px-8 py-4 rounded-full text-lg hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-comment-dots" aria-hidden="true" />
              無料相談を申し込む
              <span aria-hidden="true">›</span>
            </a>
            <a
              href="#services"
              className="bg-white border border-gray-200 text-brand-text font-inter font-bold px-8 py-4 rounded-full text-lg hover:bg-brand-bg transition flex items-center justify-center gap-2"
            >
              <i className="fas fa-list-check" aria-hidden="true" />
              対応業務を見る
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ===== About Section ===== */}
      <section id="about" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              こんなお悩みはありませんか？
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              届出手続きは複雑で、書類の不備があると再提出が必要になります。
              専門家に任せることで、確実・迅速に手続きを進められます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-file-alt",
                title: "書類の書き方がわからない",
                desc: "届出書の様式や記載事項が複雑で、どう書けばよいか迷っている方が多くいらっしゃいます。",
              },
              {
                icon: "fa-building",
                title: "警察署への対応が不安",
                desc: "警察署窓口での質疑応答や補正対応が不安で、事前にしっかり準備したい方へ。",
              },
              {
                icon: "fa-clock",
                title: "開業までの時間が足りない",
                desc: "届出受理まで時間がかかるため、早期に書類を整えて提出したい方をサポートします。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${item.icon} text-violet-600 text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="scroll-mt-20 py-20 bg-violet-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">対応業務</h2>
            <p className="text-gray-600">
              風営法に基づく性風俗特殊営業の届出手続きを専門的にサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 映像送信型 */}
            <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-video text-white text-xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-violet-600 font-bold tracking-wide">TYPE 01</p>
                  <h3 className="text-xl font-bold text-gray-900">映像送信型性風俗特殊営業</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                インターネットを通じて映像・画像を送信し、性的好奇心を満たす目的で運営するサービス（いわゆるライブチャット・オンラインデリヘル等）の届出をサポートします。
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5" aria-hidden="true">✓</span>
                  届出書類一式の作成
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5" aria-hidden="true">✓</span>
                  管理者・従業者の要件確認
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5" aria-hidden="true">✓</span>
                  警察署への提出代行
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5" aria-hidden="true">✓</span>
                  変更届・廃止届のサポート
                </li>
              </ul>
            </div>

            {/* 無店舗型 */}
            <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-purple-600 font-bold tracking-wide">TYPE 02</p>
                  <h3 className="text-xl font-bold text-gray-900">無店舗型性風俗特殊営業</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                店舗を持たずに性的サービスを提供する営業（いわゆるデリバリーヘルス・派遣型等）の届出をサポートします。営業所の所在地を管轄する警察署への届出が必要です。
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5" aria-hidden="true">✓</span>
                  届出書類一式の作成
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5" aria-hidden="true">✓</span>
                  営業所・管理者要件の確認
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5" aria-hidden="true">✓</span>
                  警察署への提出代行
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5" aria-hidden="true">✓</span>
                  変更届・廃止届のサポート
                </li>
              </ul>
            </div>
          </div>

          {/* 追加サポート */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-violet-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <i className="fas fa-plus-circle text-violet-600 mr-2" aria-hidden="true" />
              その他対応可能な手続き
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "変更届出",
                "廃止届出",
                "承継届出",
                "深夜酒類提供飲食店営業届出",
                "特定遊興飲食店営業許可",
                "接待飲食等営業許可",
                "風俗営業許可（1号〜5号）",
                "各種相談・コンサルティング",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-violet-50 rounded-lg px-3 py-2 text-sm text-violet-800 text-center font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              選ばれる3つの理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "風営法専門の行政書士",
                desc: "風俗営業・性風俗特殊営業の届出経験が豊富な行政書士が2名体制で対応。法改正にも常時対応しています。",
              },
              {
                num: "02",
                title: "スピード対応",
                desc: "ご依頼から最短3営業日で書類を作成。お急ぎの場合はご相談ください。",
              },
              {
                num: "03",
                title: "全国対応・オンライン完結",
                desc: "全国の警察署に対応。書類のやりとりはオンラインで完結するため、地方の方も安心してご依頼いただけます。",
              },
            ].map((item) => (
              <div key={item.num} className="relative bg-gray-50 border border-gray-100 rounded-xl p-6">
                <span className="absolute top-4 right-4 text-5xl font-bold text-violet-100 select-none">
                  {item.num}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 届出実績セクション ===== */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    なないろ風営届出サポートの実績
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出について、東京都をはじめ全国各地での支援実績があります。
                    どの都道府県の警察署への届出であっても、管轄の違いや必要書類の差異を含めて対応いたします。
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "東京都",
                      "埼玉県",
                      "神奈川県",
                      "茨城県",
                      "愛知県",
                      "三重県",
                      "富山県",
                      "山梨県",
                      "ほか日本全国",
                    ].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section id="pricing" className="scroll-mt-20 py-20 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-gray-600">
              映像送信型性風俗特殊営業の届出について、必要なサポートに応じた2つのプランをご用意しています。
            </p>
          </div>

          {/* 2プランカード */}
          <PricingCards />

          {/* 注意事項 */}
          <div className="bg-white rounded-xl border border-violet-100 p-6 text-sm text-gray-700 space-y-2">
            <p className="font-bold text-gray-800 mb-3">ご注意・補足事項</p>
            <p className="flex items-start gap-2">
              <span className="text-violet-400 shrink-0 mt-0.5">※</span>
              公安委員会（警察署）へ支払う届出手数料 3,400円が別途発生します（上記料金には含まれません）。
            </p>
            <p className="flex items-start gap-2">
              <span className="text-violet-400 shrink-0 mt-0.5">※</span>
              上記はURL1件当たりの金額です。複数のプラットフォーム・ファンサイトに登録される場合は、申請件数に応じて別途見積もりますのでご相談ください。
            </p>
            <p className="flex items-start gap-2">
              <span className="text-violet-400 shrink-0 mt-0.5">※</span>
              届出の代理（プラン02）は関東地方に主たる営業所がある場合に限ります。関東以外の地域はプラン01（書類作成のみ）にてご対応いたします。
            </p>
            <p className="flex items-start gap-2">
              <span className="text-violet-400 shrink-0 mt-0.5">※</span>
              報酬は資料作成の着手前にお支払いいただきます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== Flow Section ===== */}
      <section id="flow" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ご依頼の流れ</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "無料相談",
                desc: "フォーム・LINE・メール・お電話にてご相談ください。営業内容・希望スケジュールをお聞きします。",
              },
              {
                step: "02",
                title: "お見積もり・ご契約",
                desc: "内容確認後、料金・納期をご提示します。ご納得いただけましたらご契約となります。",
              },
              {
                step: "03",
                title: "必要書類のご提供",
                desc: "届出に必要な情報・書類をご提供いただきます。チェックリストをお渡しするので迷いません。",
              },
              {
                step: "04",
                title: "書類作成",
                desc: "行政書士が届出書類一式を作成します。内容はお客様に確認していただいてから提出します。",
              },
              {
                step: "05",
                title: "警察署への提出・受理",
                desc: "管轄の警察署へ届出書類を提出します。補正が必要な場合も対応します。受理確認まで完全サポート。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 mt-5 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "届出と許可の違いは何ですか？",
                a: "風俗営業（1〜5号）は「許可」が必要ですが、映像送信型・無店舗型の性風俗特殊営業は「届出」のみで営業が可能です。届出は許可と異なり、書類を提出して受理されれば営業を開始できます（一部審査あり）。",
              },
              {
                q: "届出から営業開始まで何日かかりますか？",
                a: "届出書類を警察署に提出後、受理されれば届出日から営業を開始できる場合があります。ただし、書類の不備があると補正が必要となり時間がかかるため、正確な書類作成が重要です。",
              },
              {
                q: "全国どこでも対応可能ですか？",
                a: "はい、全国対応しております。書類のやりとりはオンラインで完結しますので、どの都道府県の方でもご依頼いただけます。",
              },
              {
                q: "既に届出済みですが、変更が生じました。どうすればよいですか？",
                a: "届出内容に変更が生じた場合は、変更届出が必要です。変更の種類（代表者変更・営業所所在地変更等）によって手続きが異なりますので、まずはご相談ください。",
              },
              {
                q: "料金はいつ支払いますか？",
                a: "ご契約時に着手金をいただき、書類完成・受理確認後に残金をお支払いいただく形が基本です。詳細はご契約時にご説明します。",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden group"
              >
                <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-bold text-gray-800 list-none">
                  <span>Q. {item.q}</span>
                  <svg
                    className="w-5 h-5 text-violet-600 shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  A. {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* ===== Contact Section ===== */}
      <ContactFormCTA />
    </>
  );
}
