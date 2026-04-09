"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type CardPost = {
  slug: string;
  title: string;
  description: string;
  cat: string;
  img: string;
  date?: string;
  isLive: boolean;
};

// ─── 記事メタデータ ────────────────────────────────────────────────────────────

const ALL_POSTS: CardPost[] = [
  {
    slug: "video-fuuei-business",
    title: "映像送信型性風俗特殊営業とは？ライブ配信・アダルトサイト運営に必要な届出を行政書士が解説",
    description: "映像送信型性風俗特殊営業とは何かを行政書士がわかりやすく解説。ライブ配信・アダルトサイト運営で届出が必要となるケース、必要書類、事務所要件、無届営業のリスクまで開業前に知っておきたいポイントを整理します。",
    cat: "制度の基礎",
    img: "/video-fuuei-business-eyecatch.jpg",
    date: "2026-03-29",
    isLive: true,
  },
  {
    slug: "nonstore-fuuei-business",
    title: "無店舗型性風俗特殊営業とは？デリヘル・派遣型サービスの届出手続きを行政書士がわかりやすく解説",
    description: "無店舗型性風俗特殊営業とは何かを行政書士がわかりやすく解説。デリヘル・派遣型サービスの届出手続き、必要書類、事務所・受付所の注意点、無届営業のリスクまで開業前に知っておきたいポイントを整理します。",
    cat: "制度の基礎",
    img: "/nonstore-fuuei-business-eyecatch.jpg",
    date: "2026-03-30",
    isLive: true,
  },
  {
    slug: "video-vs-nonstore",
    title: "映像送信型性風俗特殊営業と無店舗型性風俗特殊営業の違いとは？",
    description: "映像送信型性風俗特殊営業と無店舗型性風俗特殊営業の違いを行政書士がわかりやすく解説。営業内容・提供方法・届出の考え方・必要書類・実務上の注意点を比較し、自分のビジネスがどちらに当たるのか整理します。",
    cat: "制度の基礎",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "video-fuuei-notification",
    title: "映像送信型性風俗特殊営業の届出手順｜必要書類・費用・期間を行政書士が完全解説",
    description: "映像送信型性風俗特殊営業の届出手順を行政書士がわかりやすく解説。必要書類、事務所要件、費用の考え方、届出確認書受領までの期間の目安を整理し、ライブ配信・アダルトサイト運営の開業準備をサポートします。",
    cat: "届出手続き",
    img: "/video-fuuei-notification-eyecatch.jpg",
    date: "2026-04-02",
    isLive: true,
  },
  {
    slug: "nonstore-fuuei-notification",
    title: "無店舗型性風俗特殊営業の届出方法｜警察署への申請から営業開始までの流れ",
    description: "無店舗型性風俗特殊営業の届出方法を行政書士がわかりやすく解説。警察署への申請から営業開始までの流れ、必要書類、事務所・受付方法の注意点、開業前に押さえたい実務ポイントを整理します。",
    cat: "届出手続き",
    img: "/nonstore-fuuei-notification-eyecatch.jpg",
    date: "2026-04-03",
    isLive: true,
  },
  {
    slug: "fuei-notification",
    title: "風営法の届出は自分でできる？行政書士に依頼した方がいいケースを解説",
    description: "風営法の届出は自分でできるのかを行政書士がわかりやすく解説。自力で進めやすいケース、行政書士に依頼した方がいいケース、事務所・営業方法・開業スケジュールで判断すべきポイントを整理します。",
    cat: "届出手続き",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "video-fuuei-documents",
    title: "映像送信型性風俗特殊営業の届出に必要な書類一覧｜住民票・誓約書など全部まとめ",
    description: "映像送信型性風俗特殊営業の届出に必要な書類を行政書士がわかりやすく解説。住民票、営業開始届出書、営業方法を記載した書類、事務所資料、法人の場合の追加書類、誓約書の考え方まで開業前に必要な準備を整理します。",
    cat: "届出手続き",
    img: "/video-fuuei-documents-eyecatch.jpg",
    date: "2026-04-05",
    isLive: true,
  },
  {
    slug: "fantia-fuei",
    title: "Fantia・MyFans・OnlyFansで動画販売するなら届出は必要？風営法を行政書士が解説",
    description: "Fantia・MyFans・OnlyFansで動画販売する場合に風営法の届出が必要かを行政書士がわかりやすく解説。映像送信型性風俗特殊営業に当たるケース、判断ポイント、必要書類、個人クリエイターが注意すべき実務上の論点を整理します。",
    cat: "プラットフォーム・個人",
    img: "/fantia-fuei-eyecatch.jpg",
    date: "2026-04-09",
    isLive: true,
  },
  {
    slug: "adult-streaming-law",
    title: "アダルト動画配信は風営法の届出が必要？知らないと違法になるケース",
    description: "アダルト動画配信で風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業に当たる判断ポイント、無届で違法になるケース、個人配信者や運営者が開業前に確認すべき実務上の注意点を整理します。",
    cat: "プラットフォーム・個人",
    img: "/adult-streaming-law-eyecatch.jpg",
    date: "2026-04-06",
    isLive: true,
  },
  {
    slug: "doujin-av-law",
    title: "同人AV販売は届出が必要？映像送信型性風俗特殊営業との関係を行政書士が解説",
    description: "同人AV販売で風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業との関係、届出が問題になりやすい販売形態、個人・法人運営で注意すべきポイント、違法リスクを整理します。",
    cat: "プラットフォーム・個人",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "livechat-fuei",
    title: "ライブチャット事務所は風営法の届出が必要？運営者が知るべき法律",
    description: "ライブチャット事務所で風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業との関係、届出が問題になりやすい運営形態、事務所・営業主体・配信ページの整理など、運営者が押さえるべき法律上のポイントをまとめます。",
    cat: "プラットフォーム・個人",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "adult-site-law",
    title: "個人でアダルトサイトを運営する場合の法律｜届出は必要？",
    description: "個人でアダルトサイトを運営する場合に風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業との関係、有料会員制サイトや動画・画像販売で注意すべきポイント、個人運営で見落としやすい法務リスクを整理します。",
    cat: "プラットフォーム・個人",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-side-business",
    title: "映像送信型性風俗特殊営業の届出は副業でも必要？個人クリエイター向け解説",
    description: "映像送信型性風俗特殊営業の届出は副業でも必要になるのかを行政書士がわかりやすく解説。会社員や個人クリエイターが見落としやすい判断ポイント、届出が必要になりやすいケース、事務所や営業ページの整理の考え方をまとめます。",
    cat: "プラットフォーム・個人",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "video-fuuei-penalty",
    title: "映像送信型性風俗特殊営業の無届営業は違法？罰則と摘発事例を行政書士が解説",
    description: "映像送信型性風俗特殊営業の無届営業が違法になる理由を行政書士がわかりやすく解説。風営法上の位置づけ、無届営業に対する罰則、警察庁統計から見る摘発状況、運営者が見直すべき実務上の注意点を整理します。",
    cat: "リスク・罰則",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-penalty",
    title: "風営法の届出をしないとどうなる？罰金・営業停止のリスクを解説",
    description: "風営法の届出をしないとどうなるのかを行政書士がわかりやすく解説。無届営業による罰金・刑事罰、営業停止・廃止命令などの行政処分、警察庁統計から見る摘発状況、開業前に見直すべきポイントを整理します。",
    cat: "リスク・罰則",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "adult-streaming-crime",
    title: "アダルト配信ビジネスで摘発されるケース｜知らないと危険な風営法",
    description: "アダルト配信ビジネスで摘発されやすいケースを行政書士がわかりやすく解説。無届営業、虚偽記載、プラットフォーム利用時の誤解、風営法上の危険なポイント、運営者が開業前に確認すべき法務リスクを整理します。",
    cat: "リスク・罰則",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "office-requirement",
    title: "レンタルオフィスでも届出できる？風営法の事務所要件を行政書士が解説",
    description: "レンタルオフィスでも風営法の届出ができるのかを行政書士がわかりやすく解説。事務所要件の基本、届出できる可能性があるケース、難しいケース、使用承諾書や契約内容など物件選びで確認すべきポイントを整理します。",
    cat: "届出手続き",
    img: "/office-requirement-eyecatch.jpg",
    date: "2026-04-04",
    isLive: true,
  },
  {
    slug: "fuei-police-jurisdiction",
    title: "映像送信型性風俗特殊営業の届出はどの警察署に出す？管轄の決まりを行政書士が解説",
    description: "映像送信型性風俗特殊営業の届出はどの警察署に出すのかを行政書士がわかりやすく解説。管轄が事務所所在地で決まる理由、自宅・レンタルオフィス・複数拠点の場合の考え方、届出前に整理すべきポイントをまとめます。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-home-office",
    title: "自宅でも映像送信型性風俗特殊営業の届出はできる？住所・事務所の扱いを解説",
    description: "自宅でも映像送信型性風俗特殊営業の届出ができるのかを行政書士がわかりやすく解説。事務所として認められる考え方、持家と賃貸の違い、住所・使用権原・警察署管轄の整理、自宅以外を検討した方がよいケースをまとめます。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-processing-time",
    title: "映像送信型性風俗特殊営業の届出は何日でできる？営業開始までの期間を解説",
    description: "映像送信型性風俗特殊営業の届出に何日かかるのかを行政書士がわかりやすく解説。営業開始までの期間の考え方、事前準備で時間がかかるポイント、個人と法人の違い、余裕を持つべきスケジュール感を整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-overseas-server",
    title: "海外サーバーのアダルトサイトでも届出は必要？風営法の適用範囲を行政書士が解説",
    description: "海外サーバーのアダルトサイトでも風営法の届出が必要になるのかを行政書士がわかりやすく解説。サーバー所在地だけでは決まらない理由、事務所・営業主体・営業実態からみる適用範囲、届出が問題になるケースを整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-multiple-sites",
    title: "複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルール",
    description: "複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルールを行政書士がわかりやすく解説。ホームページごとの届出の考え方、追加届出と変更届の違い、独自サイト・外部プラットフォーム併用時の注意点を整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "delivery-sex-business-examples",
    title: "無店舗型性風俗特殊営業の届出が必要になるサービス例【知らないと違法】",
    description: "無店舗型性風俗特殊営業の届出が必要になるサービス例を行政書士がわかりやすく解説。デリヘルや派遣型サービス、成人向け物販など対象になりやすい営業、名前では判断できない理由、知らずに始めるリスクを整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-police-consultation",
    title: "風営法の届出で警察署に聞かれること｜事前相談のポイントを行政書士が解説",
    description: "風営法の届出で警察署に聞かれることを行政書士がわかりやすく解説。事前相談で確認されやすい営業内容・事務所・営業ページ・必要書類のポイント、相談前に整理しておくべき事項をまとめます。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "after-fuei-notification",
    title: "映像送信型性風俗特殊営業の届出後にやるべきこと【営業開始チェックリスト】",
    description: "映像送信型性風俗特殊営業の届出後にやるべきことを行政書士がわかりやすく解説。営業開始後に確認すべきチェックリスト、変更届・廃止届が必要になる場面、営業ページや事務所の見直しポイントを整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-not-required",
    title: "映像送信型性風俗特殊営業の届出が不要なケースはある？判断ポイントを行政書士が解説",
    description: "映像送信型性風俗特殊営業の届出が不要なケースはあるのかを行政書士がわかりやすく解説。届出不要と言いやすい場合、不要と早合点しやすい注意ケース、画像販売・副業・外部プラットフォーム利用時の判断ポイントを整理します。",
    cat: "Q&A",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "adult-business-start",
    title: "アダルト配信ビジネスを始める方法｜風営法の届出から運営まで行政書士が解説",
    description: "アダルト配信ビジネスの始め方を行政書士がわかりやすく解説。風営法上の届出が必要になるケース、営業開始までの流れ、必要書類、事務所の考え方、運営開始後に見直すべき法務ポイントを整理します。",
    cat: "プラットフォーム・個人",
    img: "/adult-business-start-eyecatch.jpg",
    date: "2026-04-07",
    isLive: true,
  },
  {
    slug: "live-agency-start",
    title: "ライブ配信事務所の開業手続き｜風営法・届出・注意点まとめ",
    description: "ライブ配信事務所の開業手続きを行政書士がわかりやすく解説。風営法上の届出が必要になるケース、営業主体・事務所・配信ページの整理、必要書類、開業前に押さえるべき注意点をまとめます。",
    cat: "開業・依頼",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-lawyer",
    title: "映像送信型性風俗特殊営業の届出を行政書士に依頼するメリット｜費用相場も解説",
    description: "映像送信型性風俗特殊営業の届出を行政書士に依頼するメリットをわかりやすく解説。自分で進める場合との違い、依頼した方がよいケース、事務所・営業ページ整理の重要性、費用相場の目安まで開業前に知っておきたいポイントをまとめます。",
    cat: "開業・依頼",
    img: "",
    date: "",
    isLive: false,
  },
  {
    slug: "fuei-service",
    title: "風営法届出の代行は行政書士へ｜申請書作成から警察署提出までサポート",
    description: "風営法届出の代行を行政書士へ依頼するメリットをわかりやすく解説。申請書作成から警察署提出までのサポート内容、自分で進める場合との違い、依頼した方がよいケース、費用相場の目安を整理します。",
    cat: "開業・依頼",
    img: "",
    date: "",
    isLive: false,
  },
];

// ─── カテゴリ順 ────────────────────────────────────────────────────────────────

const CAT_ORDER = ["制度の基礎", "届出手続き", "プラットフォーム・個人", "リスク・罰則", "Q&A", "開業・依頼"];

// ─── ページコンポーネント ──────────────────────────────────────────────────────

const PAGE_SIZE = 6;

export default function BlogListPage() {
  const [selectedCat, setSelectedCat] = useState<"ALL" | string>("ALL");
  const [page, setPage] = useState(1);

  const categories = CAT_ORDER.filter((c) => ALL_POSTS.some((p) => p.cat === c));

  const filtered = useMemo(() => {
    const posts = selectedCat === "ALL" ? ALL_POSTS : ALL_POSTS.filter((p) => p.cat === selectedCat);
    return [...posts].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
  }, [selectedCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  React.useEffect(() => {
    setPage(1);
  }, [selectedCat]);

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [page, filtered]);

  const Pagination = ({ className = "" }: { className?: string }) => (
    <div className={`flex justify-center gap-2 ${className}`}>
      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        const active = p === page;
        return (
          <button
            key={p}
            type="button"
            onClick={() => setPage(p)}
            className={`w-10 h-8 flex items-center justify-center rounded text-sm font-medium transition ${
              active ? "bg-violet-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {p}
          </button>
        );
      })}
    </div>
  );

  const CardInner = ({ post }: { post: CardPost }) => (
    <>
      <div className="h-48 overflow-hidden relative bg-gray-100">
        {post.img ? (
          <img
            src={post.img}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              post.isLive ? "group-hover:scale-105" : "brightness-75 grayscale"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-300 text-4xl">📄</span>
          </div>
        )}
        {!post.isLive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium opacity-90">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
          <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">
            {post.cat}
          </span>
          {post.date && <span>{post.date}</span>}
        </div>
        <h2
          className={`text-base font-bold mb-2 leading-snug transition-colors line-clamp-2 ${
            post.isLive ? "text-gray-900 group-hover:text-violet-700" : "text-gray-500"
          }`}
        >
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {post.description}
        </p>
      </div>
    </>
  );

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            実務コラム
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            映像送信型・無店舗型性風俗特殊営業の届出手続きに関する実務情報をわかりやすく解説しています。
          </p>

          <Pagination className="mt-8" />

          <div className="mt-8 mx-auto w-full max-w-3xl flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => { setSelectedCat("ALL"); setPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                selectedCat === "ALL"
                  ? "bg-gray-900 text-white border-gray-900 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              すべて
            </button>
            {categories.map((cat) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { if (!active) { setSelectedCat(cat); setPage(1); } }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    active
                      ? "bg-violet-600 text-white border-violet-600 shadow-md"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {paged.map((post) => {
            const cardEl = (
              <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 ${post.isLive ? "cursor-pointer" : "cursor-default"}`}>
                <CardInner post={post} />
              </div>
            );
            if (post.isLive) {
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  {cardEl}
                </Link>
              );
            }
            return <div key={post.slug}>{cardEl}</div>;
          })}
        </div>

        <Pagination className="mt-12" />
      </div>
    </div>
  );
}
