// app/blog/fuei-police-jurisdiction.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-police-jurisdiction",
  title: "映像送信型性風俗特殊営業の届出はどの警察署に出す？管轄の決まりを行政書士が解説",
  description:
    "映像送信型性風俗特殊営業の届出はどの警察署に出すのかを行政書士がわかりやすく解説。管轄が事務所所在地で決まる理由、自宅・レンタルオフィス・複数拠点の場合の考え方、届出前に整理すべきポイントをまとめます。",
  keywords: [
    "映像送信型性風俗特殊営業 届出 警察署",
    "風営法 管轄 警察署",
    "映像送信型性風俗特殊営業 管轄",
    "風営法 届出先",
    "行政書士",
  ],
  ogImage: "/police_jurisdiction_eye.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-13T00:00:00+09:00",
  modifiedTime: "2026-05-13T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-05-13",
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

      {/* Eyecatch */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
        <Image
          src={meta.ogImage!}
          alt={meta.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* この記事でわかること */}
      <div className="bg-violet-50 border-l-4 border-violet-600 rounded-xl p-4 md:p-6 mb-8">
        <p className="font-bold text-base text-violet-700 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5">
          <li>届出先の管轄は「事務所の所在地」で決まる理由</li>
          <li>サイト・サーバー・外部プラットフォームが管轄の基準にならない理由</li>
          <li>自宅・レンタルオフィス・複数拠点・外部プラットフォーム利用時の整理の仕方</li>
          <li>届出前に確認すべき事務所・営業主体・営業ページの関係</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">管轄は「サイト」ではなく「事務所の所在地」で考える</a></li>
          <li><a href="#sec2" className="hover:underline">そもそも映像送信型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec3" className="hover:underline">事務所所在地で管轄が決まる理由</a></li>
          <li><a href="#sec4" className="hover:underline">管轄警察署の判断で迷いやすいケース</a></li>
          <li><a href="#sec5" className="hover:underline">実務でよくある誤解</a></li>
          <li><a href="#sec6" className="hover:underline">管轄を判断する前に整理しておくべき事項</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        映像送信型性風俗特殊営業の届出を検討する際、比較的早い段階で問題となる論点が、「どの警察署に届出を行うべきか」という点です。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        映像送信型性風俗特殊営業は、インターネット等を利用して映像を送信する営業類型であるため、営業場所の考え方が分かりにくい面があります。そのため、実務上も、
      </p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
        <li>「サイトを公開している場所が基準になるのか」</li>
        <li>「サーバーの所在地で判断するのか」</li>
        <li>「自宅住所でよいのか」</li>
        <li>「法人の本店所在地なのか、実際の事務所所在地なのか」</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        といった点で迷うケースが少なくありません。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        映像送信型性風俗特殊営業の届出先は、原則として事務所の所在地を所轄する警察署を基準に考えます。風俗営業等の規制及び業務の適正化等に関する法律施行規則においても、申請書又は届出書は「事務所の所在地の所轄警察署長を経由して」提出する旨が定められています。また、警視庁は、性風俗関連特殊営業に関する様式として、映像送信型性風俗特殊営業の営業開始届出書や、営業の方法を記載した書類を公表しています。さらに、必要書類として、事務所の使用について権原を有することを疎明する書類が求められていることからも、届出実務において「事務所所在地」が重要な出発点となることが分かります。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        本記事では、映像送信型性風俗特殊営業の届出はどの警察署に提出するのか、管轄は何を基準に判断するのか、自宅・レンタルオフィス・複数拠点・外部プラットフォーム利用時にはどのように整理すべきかについて、行政書士の視点から実務的に解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          1. 管轄は「サイト」ではなく「事務所の所在地」で考える
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1-1. 基本は事務所所在地を所轄する警察署</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          映像送信型性風俗特殊営業は、店舗型の営業とは異なり、インターネット等を通じて映像を客に見せる営業です。そのため、「オンライン上で完結する営業であれば、どの警察署でもよいのではないか」と考えられることがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          しかし、届出先を判断する際の基準は、サイトのURLやサーバー所在地ではありません。法令上、届出書は事務所の所在地の所轄警察署長を経由して提出する建て付けとなっているため、届出先は、営業の本拠となる事務所の所在地を基準に判断します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          したがって、映像送信型性風俗特殊営業の届出を行う場合には、まず「届出上の事務所をどこに置くのか」を明確にする必要があります。管轄警察署の判断は、その後に整理される事項です。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1-2. 「ホームページごとの届出」と「警察署の管轄」は別の問題</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここで混同しやすい点が、警視庁等が案内している「ホームページごとの届出」という考え方です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          これは、どのサイト・どのページを営業単位として届け出るか、という届出対象の整理に関する問題です。一方で、どの警察署に提出するかは、事務所所在地を基準に判断します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">つまり、実務上は次のように分けて考える必要があります。</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
          <li>届出の単位：営業に使用するホームページ・営業ページごとに整理する</li>
          <li>提出先の管轄：事務所所在地を所轄する警察署を基準に判断する</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          この二つを混同すると、「サイトが複数あるから警察署も複数になるのではないか」「外部プラットフォーム上のページだからプラットフォーム所在地の警察署に出すのではないか」といった誤解につながります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">1-3. サーバー所在地やドメイン取得先で管轄が決まるわけではない</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          実務上、特に生じやすい誤解が、「海外サーバーを利用している場合は日本の警察署への届出は不要なのではないか」「ドメイン管理会社の所在地が管轄の基準になるのではないか」というものです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          しかし、届出先の判断基準は、あくまで営業者の事務所所在地です。サーバーの所在地、ドメイン登録事業者の所在地、決済代行会社の所在地、外部プラットフォームの運営会社所在地は、通常、届出先警察署を決める基準にはなりません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          映像送信型性風俗特殊営業の届出では、オンライン上の媒体そのものではなく、営業者がどこを本拠として営業を行うのかが重視されます。そのため、管轄の起点は、営業者が事務所として使用する場所であると整理すべきです。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          2. そもそも映像送信型性風俗特殊営業とは何か
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">2-1. 風営法上の位置付け</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          映像送信型性風俗特殊営業とは、風営法上の性風俗関連特殊営業の一類型です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          警察庁の解釈運用基準では、映像送信型性風俗特殊営業について、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業とされています。また、この「映像」には、動画だけでなく静止画も含まれると解されています。
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">典型的には、次のような営業が問題となります。</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
          <li>成人向け動画の販売</li>
          <li>会員制の成人向けサイト運営</li>
          <li>成人向け画像・動画のサブスクリプション販売</li>
          <li>ライブ配信型の成人向けサービス</li>
          <li>外部プラットフォームを利用した有料コンテンツ提供</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          もっとも、具体的に届出対象となるかどうかは、提供するコンテンツの内容、料金体系、公開方法、営業主体、利用する媒体等によって判断が必要です。単にインターネット上で成人向けコンテンツを扱っているというだけで、常に同じ結論になるわけではありません。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">2-2. 個人でも法人でも届出対象になり得る</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          映像送信型性風俗特殊営業は、個人で行う場合も、法人で行う場合も、届出対象となり得ます。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          警視庁が公表している必要書類でも、個人と法人で添付書類の例示が分かれています。法人の場合には、定款、法人の登記事項証明書、役員全員の住民票など、個人の場合よりも追加で準備すべき書類が多くなります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、警察署の管轄の考え方自体は、営業主体が個人か法人かによって大きく変わるものではありません。いずれの場合であっても、営業の本拠となる事務所所在地を基準に、所轄警察署を判断することになります。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          3. 事務所所在地で管轄が決まる理由
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">3-1. オンライン営業であっても、制度上は「事務所」が前提となる</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          映像送信型性風俗特殊営業は、インターネットを利用する営業であるため、外形上はオンラインで完結しているように見えます。しかし、届出制度上は、営業者の事務所が重要な意味を持ちます。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          警視庁の必要書類一覧でも、事務所の使用について権原を有することを疎明する書類が求められています。具体的には、使用承諾書、賃貸借契約書の写し、建物に係る登記事項証明書などが例示されることがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          これは、営業がオンライン上で行われるとしても、制度上は、営業者がどこを本拠として当該営業を行うのかを明らかにする必要があるためです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          したがって、「インターネット営業だから物理的な事務所は関係ない」と考えるのは適切ではありません。むしろ、オンライン営業であるからこそ、届出上の事務所をどのように設定するかが重要になります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">3-2. 警察署が確認する起点は営業者の拠点</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          届出制度は、どの営業者が、どこを本拠として、どのような方法で営業を行うのかを行政が把握するための制度です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          そのため、警察署が確認の起点とするのは、営業に使用するウェブページそのものではなく、営業者の事務所です。ウェブサイトや外部プラットフォームのページは、あくまで営業の媒体であり、営業者の拠点そのものではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          この点は、施行規則上、「事務所の所在地の所轄警察署長を経由して」届出書を提出するという構造からも自然に理解できます。管轄警察署を判断する際には、まず営業者側の拠点を確定し、その所在地を基準に考える必要があります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          4. 管轄警察署の判断で迷いやすいケース
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">4-1. 自宅を事務所にする場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          個人で映像送信型性風俗特殊営業を開始する場合、自宅を事務所として届け出るケースがあります。この場合、基本的には自宅所在地を所轄する警察署が届出先の候補となります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、届出先の問題と、その自宅を事務所として使用できるかという問題は別です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          警視庁の必要書類では、事務所の使用権原を疎明する書類が求められています。持家であれば建物の登記事項証明書等、賃貸物件であれば賃貸借契約書や使用承諾書等の確認が必要になる場合があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          特に賃貸物件の場合、契約上、事業利用が禁止されていることがあります。また、居住用として契約している物件を性風俗関連特殊営業の事務所として使用できるかについては、慎重な確認が必要です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          そのため、自宅を事務所とする場合には、単に住所があるというだけでなく、その場所を届出上の事務所として適切に説明できるかを検討する必要があります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">4-2. レンタルオフィスを事務所にする場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          レンタルオフィスを事務所として利用する場合も、基本的にはその所在地を所轄する警察署が届出先の候補となります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">もっとも、レンタルオフィスであればどのような形態でもよいわけではありません。実務上は、次のような点が問題となります。</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
          <li>専用区画があるか</li>
          <li>営業者が継続的に使用できる場所といえるか</li>
          <li>事務所としての使用権原を疎明できるか</li>
          <li>契約上、当該用途での利用が禁止されていないか</li>
          <li>運営会社から必要な使用承諾を得られるか</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          単なるバーチャルオフィスや郵便受けのみのサービスでは、事務所としての実体を説明することが難しい場合があります。また、レンタルオフィスの運営会社が、性風俗関連特殊営業での利用を認めないケースも考えられます。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          したがって、レンタルオフィスを利用する場合には、契約前の段階で、届出上の事務所として利用可能かを確認しておくことが重要です。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">4-3. 複数拠点がある場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          法人やチームで運営する場合には、登記上の本店、実際の作業場所、撮影場所、顧客対応を行う場所、データ管理を行う場所が分かれていることがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          このような場合に重要なのは、「届出上の事務所をどこにするのか」を最初に整理することです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          例えば、法人の本店所在地と実際の運営拠点が異なる場合、形式的な本店所在地だけで判断してよいのか、実際に営業管理を行っている場所を事務所とすべきかを検討する必要があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          サイト管理、契約管理、顧客対応、売上管理、コンテンツ管理など、営業の本拠として機能している場所がどこなのかを整理し、その所在地を基準に管轄警察署を判断することになります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          複数の住所が存在するからといって、直ちに複数の警察署へ届出を行うということにはなりません。まずは、届出制度上の「事務所」としてどの場所を位置付けるのかを明確にすることが必要です。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">4-4. 外部プラットフォームを利用する場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fantia、MyFans、OnlyFans、StripChatなどの外部プラットフォームを利用して成人向けコンテンツを提供する場合でも、管轄警察署の考え方は基本的に変わりません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          営業ページが外部サービス上に存在するとしても、届出先の管轄は、営業者自身の事務所所在地を基準に判断します。外部プラットフォームの運営会社所在地、サーバー所在地、決済会社の所在地が届出先になるわけではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、外部プラットフォームを利用する場合には、届出書や営業の方法を記載した書類において、どのページを営業ページとして整理するのか、どのように客に映像を見せるのか、料金の支払方法や閲覧方法をどのように説明するのかが問題となります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          そのため、外部プラットフォームを使う場合でも、「管轄は事務所所在地」「営業方法の説明は実際の提供形態に即して整理する」という二段階で検討することが重要です。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          5. 実務でよくある誤解
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">5-1. 「警視庁のページに様式があるから警視庁本部へ出す」と考えてしまう</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          警視庁のウェブサイトに様式や必要書類の案内が掲載されているため、「警視庁本部へ直接提出するのではないか」と考えるケースがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          しかし、実際の届出では、管轄警察署の考え方が重要です。施行規則上、届出書は事務所所在地の所轄警察署長を経由して提出する構造になっています。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          したがって、東京都内で営業を行う場合であっても、まず確認すべきは、事務所所在地を管轄する警察署です。警視庁の様式を利用する場合でも、提出先は個別の管轄警察署となるのが基本です。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">5-2. 「サイトが複数あれば警察署も複数になる」と考えてしまう</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          「ホームページごとの届出」という案内を見ると、サイトが2つあれば警察署も2か所になるのではないかと誤解されることがあります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          しかし、ホームページごとの届出という考え方は、届出対象となる営業ページの単位に関するものです。一方で、提出先の管轄は、事務所所在地を基準に判断します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          そのため、複数の営業ページを運営している場合でも、営業者の事務所が一つであれば、まずはその所在地を所轄する警察署を基準に整理することになります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          もちろん、複数の拠点で実質的に別個の営業を行っているような場合には、個別の検討が必要です。しかし、少なくとも「ページ数＝警察署数」と単純に考えることは適切ではありません。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">5-3. 「住所だけあればどこでも届出できる」と考えてしまう</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          事務所所在地が管轄の基準になると聞くと、「住所さえ用意すればよい」と考えてしまう場合があります。しかし、これは適切ではありません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          警察が必要書類として求めているのは、事務所の使用について権原を有することを疎明する書類です。したがって、単なる郵便受け、実体のない住所、契約上使用目的に問題がある場所では、届出上の事務所として説明することが困難になる場合があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          管轄警察署を判断する前提として、そもそもその場所を事務所として使用できるのか、使用権原を資料で示せるのか、営業内容との関係で契約上・実務上の問題がないかを確認すべきです。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          6. 管轄を判断する前に整理しておくべき事項
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">6-1. 営業主体は誰か</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          最初に整理すべき点は、営業主体です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          個人として営業するのか、法人として営業するのかによって、届出書の記載内容や添付書類が変わります。法人の場合には、定款、登記事項証明書、役員に関する書類など、個人の場合よりも準備すべき資料が増えます。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          営業主体が曖昧なままでは、事務所の整理も、営業方法の説明も、添付書類の判断も不安定になります。特に、将来的に法人化を予定している場合には、最初の届出をどの主体で行うのかを慎重に検討する必要があります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">6-2. 届出上の事務所をどこにするか</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          次に、届出上の事務所をどこに置くのかを決める必要があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          自宅、賃貸事務所、レンタルオフィス、法人本店、実際の運営拠点など、候補となる場所が複数ある場合には、それぞれについて使用権原、実体、契約内容、営業実態との整合性を確認します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ここが確定しなければ、どの警察署に提出するのかも確定しません。管轄警察署の判断は、事務所所在地の整理と一体で考える必要があります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">6-3. どのページを営業単位とするか</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          警視庁がホームページごとの届出を案内している以上、どのページを営業ページとして整理するのかも重要です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          自社サイトのみを利用するのか、外部プラットフォームを利用するのか、複数のページを使い分けるのかによって、届出書や営業の方法を記載した書類の作り方が変わります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          管轄警察署だけを先に確認しても、営業単位の整理ができていなければ、届出書類全体の整合性が取れません。事務所、営業主体、営業ページは、相互に関連する事項として整理することが重要です。
        </p>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          7. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">7-1. 事務所候補が複数ある場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          自宅とレンタルオフィスのどちらを事務所にすべきか迷っている場合、法人本店と実際の作業場所が異なる場合、撮影場所と管理場所が別にある場合などは、届出上の事務所の整理が難しくなります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          このようなケースでは、どこを営業の本拠として位置付けるのが適切か、どの場所であれば使用権原を資料で示せるか、管轄警察署への説明が可能かを事前に検討する必要があります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">7-2. 外部プラットフォームと自社サイトを併用している場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          外部プラットフォームと自社サイトを併用している場合、営業ページの整理が複雑になりやすいです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          どのページを届出対象として扱うのか、複数ページをどのように整理するのか、営業の方法を記載した書類にどのように反映するのかによって、届出書類の構成が変わります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          後から営業ページの整理をやり直すと、修正や追加資料の提出が必要になることもあります。複数媒体を利用する場合には、営業開始前の段階で専門家に相談しておくと、手戻りを防ぎやすくなります。
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">7-3. 法人で開始する場合、又は将来的な法人化を予定している場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          法人で映像送信型性風俗特殊営業を始める場合、個人の場合よりも必要書類が増えます。また、役員に関する資料、定款の目的、法人の本店所在地、実際の事務所所在地など、確認すべき事項も多くなります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          特に、最初は個人で開始し、後から法人化する予定がある場合には、当初の届出段階から将来の変更を見据えておくことが重要です。営業主体の変更や事務所の変更が生じる場合、別途手続が必要となる可能性もあるため、最初の設計を軽視すべきではありません。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          8. まとめ
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            映像送信型性風俗特殊営業の届出先で迷った場合には、まず「事務所の所在地」を基準に考えることが重要です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            風営法施行規則上、届出書は事務所所在地の所轄警察署長を経由して提出する構造となっており、届出先は、サイトのURL、サーバー所在地、外部プラットフォームの所在地、ドメイン管理会社の所在地によって決まるものではありません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            一方で、警視庁は映像送信型性風俗特殊営業について、ホームページごとの届出を案内しています。したがって、実務上は、
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>提出先の管轄は、事務所所在地で判断する</li>
            <li>届出の単位は、営業に使用するホームページ・営業ページごとに整理する</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            という二段階で考える必要があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、必要書類には、事務所の使用権原を疎明する書類が含まれます。自宅、賃貸事務所、レンタルオフィス、法人本店、実際の作業場所など、どこを届出上の事務所とするのかは、届出全体の前提となる重要な論点です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            特に、自宅を事務所とする場合、レンタルオフィスを利用する場合、複数拠点がある場合、外部プラットフォームを利用する場合には、管轄警察署の判断だけでなく、事務所の実体、使用権原、営業ページの整理、営業主体との整合性を総合的に確認する必要があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            映像送信型性風俗特殊営業の届出は、単に書類を提出すれば足りる手続ではありません。事務所、営業主体、営業方法、営業ページの整理が不十分なまま進めると、後から修正や追加説明が必要となる可能性があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            営業開始前の段階で、管轄警察署、届出上の事務所、営業ページの範囲を適切に整理しておくことが、手続全体を円滑に進めるための重要なポイントです。判断に迷う事情がある場合には、早めに行政書士へ相談し、届出書類の作成前に全体設計を確認しておくことが推奨されます。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
