// app/blog/office-requirement.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "office-requirement",
  title: "レンタルオフィスでも届出できる？風営法の事務所要件を行政書士が解説",
  description:
    "映像送信型性風俗特殊営業・無店舗型性風俗特殊営業の届出でレンタルオフィスを事務所にできるか、行政書士が解説。専用区画・使用承諾・契約内容など、届出できる可能性があるケースと難しいケース、物件選びの確認ポイントを整理します。",
  keywords: [
    "風営法 レンタルオフィス 届出",
    "性風俗特殊営業 事務所要件",
    "映像送信型性風俗特殊営業 事務所",
    "無店舗型性風俗特殊営業 事務所",
    "風営法 使用承諾",
    "行政書士",
  ],
  ogImage: "/office-requirement-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-04T00:00:00+09:00",
  modifiedTime: "2026-04-04T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-04-04",
};

export default function Content() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "実務コラム", href: "/blog" }, { label: meta.title }]} />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-violet-100 text-violet-700 font-bold px-2 py-0.5 rounded-full">
            {meta.cat}
          </span>
          <time className="text-xs text-gray-400">{meta.date}</time>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {meta.title}
        </h1>
        <p className="text-gray-600 mt-3 leading-relaxed">{meta.description}</p>
      </header>

      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src="/office-requirement-eyecatch.jpg"
          alt="レンタルオフィスでも届出できる？風営法の事務所要件を行政書士が解説"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* この記事でわかること */}
      <div className="bg-violet-50 border-l-4 border-violet-600 rounded-xl p-4 md:p-6 mb-8">
        <p className="font-bold text-base text-violet-700 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5">
          <li>風営法上「事務所」として求められる要件の基本</li>
          <li>レンタルオフィスで届出できる可能性があるケースと難しいケース</li>
          <li>映像送信型性風俗特殊営業・無店舗型性風俗特殊営業それぞれの事務所要件の違い</li>
          <li>物件契約前に必ず確認すべきポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">まず結論　レンタルオフィスでも届出できる可能性はあるが、一律ではない</a></li>
          <li><a href="#sec2" className="hover:underline">風営法でいう「事務所」とは何か</a></li>
          <li><a href="#sec3" className="hover:underline">レンタルオフィスで届出できる可能性があるケース</a></li>
          <li><a href="#sec4" className="hover:underline">レンタルオフィスで難しくなりやすいケース</a></li>
          <li><a href="#sec5" className="hover:underline">映像送信型と無店舗型で事務所要件の見え方は少し違う</a></li>
          <li><a href="#sec6" className="hover:underline">物件選びの前に確認すべきポイント</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-10">
        映像送信型性風俗特殊営業や無店舗型性風俗特殊営業の届出を検討している方から、かなり多く寄せられるのが「レンタルオフィスでも事務所として使えるのか」という質問です。特に、映像送信型性風俗特殊営業や無店舗型性風俗特殊営業のように、店舗を持たずに営業する形では、「自宅は避けたい」「できるだけ初期費用を抑えたい」「まずは小さく始めたい」という理由から、レンタルオフィスやシェアオフィスを候補にする方が多いです。ですが、結論から言えば、レンタルオフィスなら必ず届出できるとも、逆に一律にできないとも言えません。重要なのは、その物件で風営法上の「事務所」としての実態と使用権原を説明できるかどうかです。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. まず結論　レンタルオフィスでも届出できる可能性はあるが、一律ではない
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 法令上「レンタルオフィス禁止」とは書かれていない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          まず押さえたいのは、風営法や施行規則、警視庁の届出案内には、「レンタルオフィスは不可」といった一律の禁止文言は見当たらないということです。公的資料で求められているのは、あくまで「事務所の使用について権原を有することを疎明する書類」であり、建物の類型そのものではありません。したがって、制度上はレンタルオフィスだから当然不可、という整理にはなっていません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 実務では「その物件で本当に事務所として使えるか」が問われる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          ただし、法令に明文の禁止がないことと、実務上そのまま届出が通りやすいことは別です。警視庁が求めているのは事務所の使用権原を疎明する資料ですから、契約上その場所を当該営業の事務所として使用できるのか、個別の区画やスペースを事務所として特定できるのか、使用承諾を示せるのかが問題になります。レンタルオフィスでも、契約内容や利用形態によっては届出に使える可能性がありますが、単なる住所貸しや実体の乏しい利用形態では難しいと考えるのが自然です。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 風営法でいう「事務所」とは何か
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. 映像送信型性風俗特殊営業でも事務所は必要
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          インターネット営業だから事務所は不要だと思われがちですが、警視庁は映像送信型性風俗特殊営業の届出に必要な書類として、営業開始届出書、営業の方法を記載した書類のほか、事務所の使用権原を示す書類を挙げています。映像送信型性風俗特殊営業であっても、オンラインだけで完結する話ではなく、現実の「事務所」を前提に届出制度が設計されています。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. 無店舗型性風俗特殊営業でも事務所は中心論点
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          無店舗型性風俗特殊営業でも同様で、警視庁の案内では事務所の使用権原資料が必要書類の一つとして明示されています。さらに、派遣型ファッションヘルスの場合は事務所の平面図、待機所を設ける場合は待機所の平面図や使用権原資料、受付所を設ける場合はその平面図や周囲略図なども必要とされています。無店舗型性風俗特殊営業だからこそ、どこを事務所とするかが重要です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-3. 事務所は単なる郵便受けではない
        </h3>
        <p className="text-gray-700 leading-relaxed">
          風営法上の事務所は、単なる名刺上の住所や郵便受けではありません。公的資料上は、その場所を事務所として使用する権原があり、必要に応じてその場所に関する資料を提出できることが求められています。実体のないバーチャルオフィスに近い利用形態や、自由席の共用スペースだけを利用する形態は、事務所としての説明が難しくなる可能性があります。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. レンタルオフィスで届出できる可能性があるケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 専用区画があり、契約で使用が明確な場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          レンタルオフィスで比較的届出に乗せやすいのは、個別の専用区画や個室が与えられていて、その区画を自分が継続的に利用する契約になっている場合です。警視庁が求める「事務所の使用について権原を有することを疎明する書類」との相性が比較的良く、使用承諾書、賃貸契約書の写し、建物資料などにより「この場所をこの営業の事務所として使う」ことを説明しやすくなります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. 使用承諾が取れる場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          公的資料では、使用承諾書が事務所の使用権原を疎明する書類の例として明示されています。レンタルオフィス事業者や建物所有者から、当該営業の事務所として使用することについて明示的な承諾を受けられる場合は、書類面では前に進めやすくなります。逆に言えば、運営会社が風営法関係の業種に承諾を出さない方針であれば、そこで実務的に止まってしまいます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-3. 実際に事務作業・管理拠点として機能する場合
        </h3>
        <p className="text-gray-700 leading-relaxed">
          映像送信型性風俗特殊営業であれ無店舗型性風俗特殊営業であれ、事務所は営業の本拠として位置付けられます。レンタルオフィスが実際に、顧客対応・契約管理・サイト管理・会計処理・従業者管理などの事務拠点として機能しているなら、事務所としての説明はしやすくなります。反対に、形式上だけ借りていて実際は何も行っていないと、届出書類全体の説得力が弱くなります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. レンタルオフィスで難しくなりやすいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. バーチャルオフィスに近い利用形態
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          最も注意したいのは、実体の乏しいバーチャルオフィス型です。警視庁が求めているのは事務所の使用権原を疎明する書類であり、無店舗型性風俗特殊営業では平面図なども要求される場面があります。実際の専用スペースがなく、住所利用と郵便転送が中心の形態では、事務所としての実体説明が難しくなると考えられます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 共用ラウンジだけを使うタイプ
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          個室や専用ブースがなく、自由席の共用ラウンジだけを使うタイプのレンタルオフィスも、事務所の特定が難しくなりやすいです。「どの場所を事務所として使っているのか」を明確にしづらいため、特に待機所や受付所・平面図が問題になる無店舗型性風俗特殊営業では、この点がよりシビアになり得ます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-3. 事業用途や風営法関係の利用が契約で制限されている場合
        </h3>
        <p className="text-gray-700 leading-relaxed">
          レンタルオフィスの利用規約や契約書で、特定業種が禁止されている場合も要注意です。警視庁が必要書類として賃貸契約書の写しや使用承諾書を挙げている以上、契約内容と実際の営業用途が矛盾していれば、届出の説明が難しくなります。「借りている」という事実よりも「その用途で使えるか」が重要です。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 映像送信型と無店舗型で事務所要件の見え方は少し違う
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-1. 映像送信型性風俗特殊営業は「営業ページ」と並んで事務所が重要
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          映像送信型性風俗特殊営業では「ホームページごとの届出」と案内されているため、営業ページの整理が目立ちます。しかし、それでも必要書類には事務所の使用権原資料が入っており、オンライン営業でも事務所が不要になるわけではありません。レンタルオフィスを使うなら、営業ページの単位だけでなく、事務所の実体も同時に整える必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-2. 無店舗型性風俗特殊営業は事務所・待機所・受付所の物理的整理がより重要
        </h3>
        <p className="text-gray-700 leading-relaxed">
          無店舗型性風俗特殊営業では、事務所だけでなく、待機所や受付所を置く場合の追加書類まで警視庁が明示しています。派遣型ファッションヘルスでは事務所の平面図も必要です。レンタルオフィスを使うとしても、「本当にその場所で無店舗型性風俗特殊営業の拠点としての説明ができるか」というハードルは映像送信型性風俗特殊営業より高くなりやすいと考えられます。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 物件選びの前に確認すべきポイント
        </h2>

        <div className="space-y-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">① 契約書に事業用途の制限がないか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              事業用途の制限、業種制限、再転貸禁止、営業利用禁止などがないかを確認します。警視庁が賃貸契約書の写しを必要書類の例としている以上、契約内容と届出内容は整合している必要があります。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">② 使用承諾が出せるか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              建物所有者またはレンタルオフィス運営者が、当該営業の事務所として使用することについて承諾を出せるかを確認します。使用承諾書は公式案内でも例示されているため、ここが曖昧だとかなり厳しくなります。契約前に確認した方が安全です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">③ 専用スペースを示せるか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              平面図や場所の特定が必要になる可能性を考えると、専用スペースを示せるかも重要です。特に無店舗型性風俗特殊営業で待機所や受付所の可能性がある場合は、物件のレイアウトや使用区画が曖昧だと説明しにくくなります。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">④ 実際に事務拠点として機能するか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              その場所で本当に事務作業をするのかを自問すべきです。警察署へ提出するだけの住所ではなく、営業の本拠として機能するかが大切です。形式だけ整えても、実態が伴わないと後で困りやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-1. 今の物件で届出できるか判断がつかないとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          最も多いのは「このレンタルオフィスで届出できるか分からない」という相談です。公式資料には一般論しか書かれていないため、実際には契約書・利用規約・区画の状況を見ないと判断しにくいことがあります。物件契約前または契約直後の段階で行政書士に確認した方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-2. 映像送信型か無店舗型の性風俗特殊営業かで迷っているとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          同じ「店舗を持たない営業」でも、映像送信型性風俗特殊営業と無店舗型性風俗特殊営業では事務所に求められる実務感覚が少し異なります。自分の営業がどちらに当たるか曖昧なままだと、物件の選び方もずれてしまいます。最初に類型を間違えないことが大切です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-3. 自宅とレンタルオフィスのどちらがよいか迷っているとき
        </h3>
        <p className="text-gray-700 leading-relaxed">
          個人で始める場合、自宅を使うかレンタルオフィスを借りるかで悩むことも多いです。どちらが有利かは一概には言えず、契約内容・家主承諾・営業実態・コスト・将来の運営方針によって変わります。テンプレートで決めず、個別に整理した方が失敗しにくいです。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          8. まとめ
        </h2>
        <div className="bg-violet-50 rounded-xl p-5 md:p-6 space-y-3 text-gray-700 leading-relaxed">
          <p>
            レンタルオフィスでも風営法の届出ができる可能性はあります。ただし、重要なのは「レンタルオフィスかどうか」そのものではなく、その場所を当該営業の事務所として使う権原と実態を説明できるかどうかです。
          </p>
          <p>
            警視庁の案内でも、映像送信型性風俗特殊営業・無店舗型性風俗特殊営業ともに、事務所の使用権原を疎明する書類が必要とされており、使用承諾書・賃貸契約書の写し・建物資料などが例示されています。
          </p>
          <p>
            専用区画があり、契約上も当該営業の事務所として使えることが明確で、使用承諾も取れるレンタルオフィスなら届出に使える可能性があります。一方で、バーチャルオフィスに近い形態、共用スペースだけの利用、用途制限がある契約、実体のない利用形態では難しくなりやすいです。
          </p>
          <p>
            物件を先に借りてから悩むより、契約前に「使用承諾が出るか」「専用スペースを示せるか」「この営業の事務所として説明できるか」を確認することが大切です。少しでも判断に迷うなら、営業開始前の段階で行政書士へ相談し、事務所要件を固めてから進めることをおすすめします。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
