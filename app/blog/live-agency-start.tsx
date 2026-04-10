// app/blog/live-agency-start.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "live-agency-start",
  title: "ライブ配信事務所の開業手続き｜風営法・届出・注意点まとめ",
  description:
    "ライブ配信事務所の開業手続きを行政書士がわかりやすく解説。風営法上の届出が必要になるケース、営業主体・事務所・配信ページの整理、必要書類、開業前に押さえるべき注意点をまとめます。",
  keywords: [
    "ライブ配信事務所 開業",
    "ライブ配信事務所 風営法",
    "映像送信型性風俗特殊営業 届出",
    "ライブ配信 届出 手続き",
    "ライブ配信事務所 設立",
    "行政書士",
  ],
  ogImage: "/live-agency-start-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-09T00:00:00+09:00",
  modifiedTime: "2026-04-09T00:00:00+09:00",
  isPublished: true,
  cat: "開業・依頼",
  date: "2026-04-09",
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
          src="/live-agency-start-eyecatch.jpg"
          alt="ライブ配信事務所の開業手続き｜風営法・届出・注意点まとめ"
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
          <li>ライブ配信事務所が風営法の届出対象になるケース</li>
          <li>営業主体・事務所・配信ページの整理の考え方</li>
          <li>届出の流れと必要書類</li>
          <li>運営開始後に注意すべきポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li>まず確認すべきことは「どんなライブ配信事務所をやるのか」</li>
          <li>ライブ配信事務所の開業で風営法が問題になるのはどんなときか</li>
          <li>開業前に整理すべき3つのポイント</li>
          <li>届出の流れ</li>
          <li>運営開始後に気を付けるべきこと</li>
          <li>よくある誤解</li>
          <li>行政書士に相談した方がよいケース</li>
          <li>まとめ</li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        ライブ配信事務所を開業したいと考えたとき、多くの方が最初に迷うのが、「自分たちの事業は風営法の届出が必要なのか」「配信者のマネジメント会社として始めるだけでも手続が要るのか」という点です。特に、一般向け配信と成人向け配信が混在する現在では、「ライブ配信事務所」という言葉だけで法律上の位置付けを決めることはできません。実際には、どのような内容の配信を、どのようなページやアカウントを通じて、誰の名義で営業として提供するのかによって、必要な手続が変わります。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        風営法上、成人向け配信の分野で中心的に問題になるのは「映像送信型性風俗特殊営業」であり、警察庁の解釈運用基準では、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業がこれに当たるとされています。静止画も動画も「映像」に含まれます。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        また、警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しており、営業開始届出書、営業の方法を記載した書類、事務所の使用について権原を有することを疎明する書類、住民票、法人の場合の定款・法人登記事項証明書・役員全員の住民票を必要書類として公表しています。つまり、ライブ配信事務所であっても、実態として成人向け配信の営業主体になるのであれば、配信者個人の問題だけでは済まず、事務所側の法務整理が必要になります。そこで本記事では、ライブ配信事務所の開業手続きを、風営法の観点を中心に、開業前の整理、届出の流れ、必要書類、運営開始後の注意点まで含めて、行政書士の視点から解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. まず確認すべきことは「どんなライブ配信事務所をやるのか」
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 一般向け配信事務所と成人向け配信事務所は法的に同じではない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          最初に押さえたいのは、ライブ配信事務所という名称自体は法律用語ではない、ということです。雑談配信、ゲーム配信、音楽配信、教育配信などの一般向け配信者をマネジメントするだけなら、直ちに風営法上の映像送信型性風俗特殊営業に当たるわけではありません。一方で、成人向けライブ配信を継続的に営業として行うなら、風営法上の届出が問題になります。つまり、同じ「ライブ配信事務所」でも、扱うコンテンツの中身によって法的な位置付けが変わります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 配信者を支援するだけなのか、事務所自体が営業主体なのかを分けて考える
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          次に大切なのは、事務所の役割です。配信者個人が完全に独立して活動し、事務所は機材提供や簡単な事務サポートだけをしているのか、それとも事務所がページやアカウントを管理し、売上管理、広告出稿、顧客対応、出演者管理まで担っているのかで、法的な見え方は大きく違います。後者であれば、実態として事務所側が営業主体と評価されやすくなります。風営法の届出は営業主体単位で考える必要があるため、この整理を最初に曖昧にしないことが重要です。これは警視庁が届出書とともに事務所資料や法人資料を求めていることからも分かる実務上の整理です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-3. どのページ・どのアカウントで営業するかを決める
        </h3>
        <p className="text-gray-700 leading-relaxed">
          警視庁は、映像送信型性風俗特殊営業を「ホームページごとの届出」としています。このため、ライブ配信事務所を開業するなら、どのサイト、どの会員ページ、どの配信アカウントを営業の中心にするのかを先に決める必要があります。独自サイトなのか、外部プラットフォームなのか、複数ページを横断して運営するのかで、届出の整理の仕方が変わります。ここを曖昧にしたまま会社だけ作っても、あとで届出書の作成段階で止まりやすくなります。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. ライブ配信事務所の開業で風営法が問題になるのはどんなときか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. 成人向けライブ配信を営業として継続提供する場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          もっとも典型的なのは、成人向けライブ配信を有料で継続的に提供する場合です。警察庁の解釈運用基準では、性的な行為を表す場面や衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために見せる営業が映像送信型性風俗特殊営業に当たるとされています。ライブ配信であっても、結局は顧客に映像を見せる営業である以上、この定義に接近します。月額課金、ポイント制、会員限定視聴、外部サイトでの都度課金など、収益化の形式は問われません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. 事務所が管理するページが実質的な営業ページになっている場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          たとえば、事務所が管理するサイトやアカウントに出演者を並べ、顧客を誘導し、そこで成人向け配信を提供しているなら、そのページ自体が営業ページとして見られやすくなります。警視庁が「ホームページごとの届出」としている以上、営業単位は単なる会社名ではなく、実際に顧客へ配信を見せているページごとに問題になります。独自ドメインでなくても、外部プラットフォーム上のページが実質的な営業の中心なら、法的整理が必要です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-3. 事務所が出演者・売上・顧客対応を一体管理している場合
        </h3>
        <p className="text-gray-700 leading-relaxed">
          配信者個人が表に出ていても、事務所が出演者管理、売上分配、顧客対応、広告宣伝、配信スケジュール調整を一体で担っているなら、単なる支援会社とは言いにくくなります。特に法人で開業する場合、警視庁は定款、法人登記事項証明書、役員全員の住民票を必要書類として求めています。これは、法人が営業主体になる形を制度上当然に想定しているということです。ライブ配信事務所を事業として継続するなら、この前提で考えた方が安全です。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 開業前に整理すべき3つのポイント
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 個人で始めるのか法人で始めるのか
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          ライブ配信事務所を立ち上げるとき、まず決めるべきなのが個人名義で始めるか、法人名義で始めるかです。個人なら必要書類は比較的少なくなりますが、後から出演者が増えたり、配信ページが増えたりして事業化が進むと、法人化のタイミングで整理し直す必要が出ます。法人なら最初から事業としての体裁は整えやすいですが、定款、登記事項証明書、役員全員の住民票など、準備する資料が増えます。警視庁の必要書類一覧を見る限り、法人の方が負担は重いものの、長期運営を前提にするなら検討価値は高いと言えます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. 事務所をどこに置くか
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          ライブ配信事務所はオンライン営業だからといって、事務所が不要になるわけではありません。警視庁は必要書類として、事務所の使用権原を疎明する書類を挙げており、使用承諾書、賃貸契約書の写し、建物に係る登記事項証明書などを例示しています。したがって、賃貸物件、自宅、レンタルオフィスのいずれを使うにしても、その場所を届出上の事務所として説明できることが必要です。住所があるだけでは足りません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-3. どの配信ページを届出単位にするか
        </h3>
        <p className="text-gray-700 leading-relaxed">
          独自サイトを持つのか、外部プラットフォームを使うのか、配信者ごとにページを分けるのか、共通ページで集客するのかによって、届出上の整理の仕方は変わります。警視庁の案内は「ホームページごとの届出」という考え方なので、営業ページの単位整理は開業前の大きなテーマです。配信者数が増えてから考えるのではなく、最初の段階でどこを営業ページの中心にするかを設計しておく必要があります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 届出の流れ
        </h2>

        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "営業内容を整理する",
              body: "届出の第一歩は、書類を埋めることではなく、営業内容を整理することです。どのような成人向け配信を、どのページで、どの名義で、どの方法で提供するのかを明確にします。警察庁の解釈運用基準でも、「専ら」に当たるかどうかは営業者の意図と営業実態で判断するとされているため、実態整理が曖昧だと、そもそも届出書が書けません。",
            },
            {
              step: "STEP 2",
              title: "必要書類をそろえる",
              body: "警視庁の公表資料によれば、映像送信型性風俗特殊営業の届出に必要なのは、営業開始届出書、営業の方法を記載した書類、事務所の使用権原を疎明する書類、住民票です。法人の場合は、これに定款、法人登記事項証明書、役員全員の住民票が加わります。書類自体は公式サイトから確認できますが、実務では「何をどう書くか」「どの書類で足りるか」の方が難しいことが多いです。",
            },
            {
              step: "STEP 3",
              title: "警察署へ届出書を提出する",
              body: "書類がそろったら、事務所所在地を管轄する警察署の担当窓口に届出書を提出します。届出後は受理され、届出確認書が交付されれば営業を開始できます。事前に警察署へ相談する場合も、整理した営業内容と事務所の概要を持参しておくとスムーズです。",
            },
            {
              step: "STEP 4",
              title: "変更が出ることも見越しておく",
              body: "開業後にページ名、営業内容、事務所、名義などが変わることもあります。警視庁は、映像送信型性風俗特殊営業などについて変更届出書の様式を公開しています。つまり、営業開始時点で終わりではなく、変化に応じて見直す制度です。最初から、将来変更しやすい設計にしておくことが重要です。",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 bg-gray-50 rounded-xl p-4 md:p-5">
              <div className="shrink-0 w-20 text-center bg-violet-600 text-white text-xs font-bold rounded-lg py-2 flex items-center justify-center">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 運営開始後に気を付けるべきこと
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-1. 営業ページを増やすときは要注意
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          ライブ配信事務所は、開業後にページやアカウントが増えやすい業態です。出演者が増える、別ブランドを立ち上げる、プラットフォームを追加する、といった展開が起こりやすいですが、警視庁がホームページごとの届出としている以上、営業ページの追加は軽く考えられません。どこまでが既存の営業で、どこからが新しい整理になるのかを見直す必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-2. 出演者管理だけでなく営業主体の一貫性を保つ
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          事務所が配信者を増やしていくと、実態として誰が営業主体なのかが曖昧になりやすくなります。個人出演者が表に出ていても、売上、ページ、顧客対応、広告を事務所が握っているなら、営業主体は事務所と見られやすいです。この点を曖昧にすると、届出内容と実態がずれていき、後から修正が必要になりやすくなります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-3. 事務所の実態を保つ
        </h3>
        <p className="text-gray-700 leading-relaxed">
          オンライン営業でも、事務所は届出の土台です。形式だけ住所を置いて実態がない状態より、実際に配信管理、顧客対応、契約管理などを行う拠点として機能している方が、届出との整合は取りやすくなります。これは警視庁が事務所の使用権原資料を必要書類として重視していることから導ける実務上の考え方です。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. よくある誤解
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "「ライブ配信事務所」という名前なら風営法は関係ない",
              a: "もっとも多い誤解のひとつが、業態名で安全性を判断してしまうことです。ライブ配信事務所という名前でも、扱う内容が成人向けで、実態として性的映像の営業になっていれば、風営法の問題は生じます。名前ではなく、内容と営業実態で判断されます。",
            },
            {
              q: "配信者個人の問題だから事務所は関係ない",
              a: "配信者本人が前面に出ていても、ページ管理、売上管理、広告宣伝、顧客対応を事務所が行っていれば、事務所側の法務問題になります。出演者の活動を束ねて営業化している以上、「本人の問題」と切り離せないケースは多いです。",
            },
            {
              q: "プラットフォームを使っていれば自社で届出不要",
              a: "外部プラットフォーム利用でも、実際の営業ページやアカウントが存在する以上、警視庁の「ホームページごとの届出」という考え方から外れるわけではありません。独自ドメインがないことは、届出不要の決定打にはなりません。",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-200 rounded-xl p-4 md:p-5">
              <p className="font-bold text-gray-800 mb-2">Q. {q}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-1. 一般向けと成人向けが混在している
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          事務所として一般向け配信も成人向け配信も扱う場合は、どの部分が風営法の対象になるのかが分かりにくくなります。このようなケースは、最初に整理しておかないと、全体の設計がずれやすいです。警察庁の解釈運用基準はありますが、実際のビジネスモデルへの当てはめには個別判断が要ります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-2. 複数ページ・複数出演者で始める
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          複数のページや複数の配信者を最初から運営する場合、営業ページの単位整理、名義、役割分担が複雑になりやすいです。後から整理するより、最初に届出の前提を固めた方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-3. 事務所物件で迷っている
        </h3>
        <p className="text-gray-700 leading-relaxed">
          自宅、賃貸オフィス、レンタルオフィスのどれを使うかで迷うなら、契約前に確認した方がよいです。事務所の使用権原資料は届出の必須部分であり、後から「この物件では説明しにくい」となると、開業全体が遅れます。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          8. まとめ
        </h2>
        <div className="bg-gray-50 rounded-xl p-5 md:p-7 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            ライブ配信事務所の開業手続きで最も重要なのは、まず自分たちの事業が一般向け配信事務所なのか、成人向け配信を扱う事務所なのかをはっきりさせることです。成人向け配信を営業として継続提供するなら、風営法上の映像送信型性風俗特殊営業に当たる可能性があり、警視庁が案内する営業開始届出書、営業方法書類、事務所資料、住民票などの準備が必要になります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、警視庁はホームページごとの届出としているため、営業の中心になるページやアカウントを最初に設計することが重要です。開業後にページや出演者が増えることも見越して、名義、事務所、営業ページを最初から整理しておけば、その後の運営もかなり楽になります。変更届の制度もあるため、開始後の変化を前提にした設計が大切です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            自分たちの事務所で届出が必要か分からない、個人と法人のどちらで始めるべきか迷う、物件選びや営業ページの整理に不安があるという場合は、開業前の段階で行政書士へ相談するのが安全です。最初の法務整理を軽く見ないことが、長く安定して運営を続けるための土台になります。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
