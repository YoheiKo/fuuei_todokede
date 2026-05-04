// app/blog/adult-business-start.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "adult-business-start",
  title: "アダルト配信ビジネスを始める方法｜風営法の届出から運営まで行政書士が解説",
  description:
    "アダルト配信ビジネスの始め方を行政書士が解説。映像送信型性風俗特殊営業の届出が必要になるケース、事務所・書類の準備、警察署への提出手順、開業前に見落としやすいリスクまで整理します。",
  keywords: [
    "アダルト配信ビジネス 始め方",
    "映像送信型性風俗特殊営業 届出方法",
    "アダルト配信 風営法",
    "アダルトサイト 開業 手順",
    "風営法 届出 個人",
    "行政書士",
  ],
  ogImage: "/adult-business-start-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-07T00:00:00+09:00",
  modifiedTime: "2026-04-07T00:00:00+09:00",
  isPublished: true,
  cat: "プラットフォーム・個人",
  date: "2026-04-07",
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
          src="/adult-business-start-eyecatch.jpg"
          alt="アダルト配信ビジネスを始める方法｜風営法の届出から運営まで行政書士が解説"
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
          <li>アダルト配信ビジネスが風営法の届出対象になるケース</li>
          <li>届出から運営開始までの基本的な5ステップ</li>
          <li>個人・法人それぞれの準備の違いと注意点</li>
          <li>開業前に見落としやすいリスクと相談すべきタイミング</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">まず最初に確認すべきこと</a></li>
          <li><a href="#sec2" className="hover:underline">風営法の届出が必要になりやすいケース</a></li>
          <li><a href="#sec3" className="hover:underline">風営法の届出から始める基本的な流れ</a></li>
          <li><a href="#sec4" className="hover:underline">アダルト配信ビジネスの運営で重要なポイント</a></li>
          <li><a href="#sec5" className="hover:underline">開業前に見落としやすいリスク</a></li>
          <li><a href="#sec6" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec7" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-10">
        アダルト配信ビジネスを始めたいと考えたとき、多くの方が最初に悩むのが「何から手を付ければよいのか」「風営法の届出は必要なのか」「個人でも始められるのか」という点です。風営法上、中心的に問題になるのは「映像送信型性風俗特殊営業」であり、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために電気通信設備を用いて客に見せる営業がこれに当たるとされています。警察庁の統計では届出数が令和2年の2,641件から令和6年の4,333件まで増加しており、市場が広がる一方で法務対応の重要性も高まっています。本記事では、届出から運営開始までの流れを行政書士の視点から解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. まず最初に確認すべきこと
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 自分のビジネスが何を提供するのかを整理する
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          アダルト配信ビジネスを始めるとき、最初にすべきことはサイトを作ることでも撮影機材をそろえることでもありません。まず整理すべきなのは「自分のビジネスが何を顧客に提供するのか」です。動画なのか・静止画なのか・ライブ配信なのか・会員制閲覧なのか・単品販売なのか・サブスク型なのかを明確にする必要があります。風営法上の位置付けはサービス名ではなく、実際に顧客へ何をどう提供しているかで決まるからです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 個人で始めるか法人で始めるかを決める
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          どちらでも始めること自体は可能ですが、必要書類と今後の運営のしやすさは変わります。個人の場合は住民票が基本である一方、法人の場合は定款・法人登記事項証明書・役員全員の住民票が追加で必要になります。個人で始めると初動は軽くしやすい一方、後から法人化した場合に名義や営業主体の整理を見直す必要が出てくることがあります。短期と長期の両方を見て決めることが大切です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-3. どのページ・どのサービスで営業するかを決める
        </h3>
        <p className="text-gray-700 leading-relaxed">
          警視庁が映像送信型性風俗特殊営業を「ホームページごとの届出」としている以上、営業の中心になるページやサービスを曖昧にしたまま進めるのは危険です。独自サイトなのか・会員制ページなのか・外部プラットフォームなのか・複数のページを使うのかを整理しておかないと、後で届出書を作る段階で「どこを営業単位として整理するのか」が定まらず、手続全体が止まりやすくなります。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 風営法の届出が必要になりやすいケース
        </h2>
        <div className="my-10">
          <Image
            src="/images/sample/adultb_1.jpg"
            alt="映像送信型性風俗特殊営業としてアダルト配信ビジネスで届出が必要になりやすいケースの解説"
            width={906}
            height={426}
            className="w-[85%] mx-auto h-auto rounded-lg"
          />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. 有料で性的映像を継続提供するケース
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          有料会員や購入者に対し、性的な行為を表す場面や裸体映像を継続して提供するケースが典型例です。会員制・月額課金・単品販売・ライブ配信課金など形式はさまざまでも、営業として継続的に性的映像を見せているなら映像送信型性風俗特殊営業に当たる可能性が高まります。警察庁の基準では静止画も動画も「映像」に含まれるため、「画像販売なら関係ない」といった理解は正確ではありません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. ページやアカウントが実質的な営業ページになっているケース
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          独自サイトでも外部プラットフォームでも、そのページやアカウントが有料の性的コンテンツ販売の中心になっているなら営業ページとして見られやすくなります。SNSで集客し、リンク先の会員ページで成人向け動画や画像を閲覧・購入させている場合、実際の営業の中心はその会員ページです。外部サービスを借りているだけという形式は、届出不要の根拠になりません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-3. 個人活動に見えても実態は事業化しているケース
        </h3>
        <p className="text-gray-700 leading-relaxed">
          本人の感覚としては「副業」「個人活動」でも、更新頻度が高く・複数プランがあり・継続的に収益を得ているなら、十分に営業として見られます。警察庁資料で届出数が増加していることからも、この分野の事業化が進んでいることがうかがえます。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 風営法の届出から始める基本的な流れ
        </h2>
        <div className="my-10">
          <Image
            src="/images/sample/adultb_2.jpg"
            alt="映像送信型性風俗特殊営業の届出からアダルト配信ビジネスの運営開始までの基本的な5ステップ"
            width={907}
            height={430}
            className="w-[85%] mx-auto h-auto rounded-lg"
          />
        </div>

        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "営業内容を整理する",
              body: "何を提供するのか・どのページで販売するのか・どのような方法で顧客に見せるのかを言語化します。営業実態の整理が届出の前提になります。",
            },
            {
              step: "STEP 2",
              title: "事務所を決める",
              body: "警視庁の必要書類には「事務所の使用について権原を有することを疎明する書類」が含まれます。ネット営業でも事務所は必要で、単に住所があるだけでは足りません。使用承諾書・賃貸契約書の写し・建物登記事項証明書などで示す必要があります。",
            },
            {
              step: "STEP 3",
              title: "必要書類を集める",
              body: "個人の場合は住民票が中心です。法人の場合は定款・法人登記事項証明書・役員全員の住民票が追加で必要になります。役員が複数いる法人ではここがボトルネックになりやすいため、早めに準備を進めることが重要です。",
            },
            {
              step: "STEP 4",
              title: "届出書と営業方法の書類を作成する",
              body: "警視庁が公表している様式に基づき、届出書と営業の方法を記載した書類を作成します。どのページを営業単位として届け出るか・どのような営業方法なのかを整理して記載する必要があります。単なる穴埋めではなく、事業内容を法務文書へ整理する作業です。",
            },
            {
              step: "STEP 5",
              title: "管轄警察署へ提出する",
              body: "書類が整ったら、事務所所在地を管轄する警察署の窓口へ提出します。営業がネット上で行われていても、届出先は事務所所在地ベースです。オンライン営業でもオフラインの拠点整理が必要な理由はここにあります。",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex-shrink-0 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. アダルト配信ビジネスの運営で重要なポイント
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. 営業ページを増やすなら再整理が必要
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          警視庁が「ホームページごとの届出」としている以上、営業ページの増減は軽く見ない方がよいです。新しい販売ページや会員ページを追加する場合は、どこまでが同一営業で、どこからが別の整理になるのかを見直す必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 内容が変わったら法務も見直す
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          開始当初は一般向けの要素が多かったのに、途中から成人向け動画販売が中心になるケースもあります。警察庁の基準では「専ら」に当たるかどうかは営業の意図と実態で判断するとされているため、コンテンツの中身や収益モデルが変われば法的な位置付けも変わり得ます。開始時の判断で終わりではなく、運営の変化に応じて見直す必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-3. 個人から法人へ移行するなら名義整理が必要
        </h3>
        <p className="text-gray-700 leading-relaxed">
          法人化やチーム運営へ進む場合、営業主体が変わる以上、届出や書類も同じではありません。警視庁の必要書類一覧でも法人の場合には定款・法人登記事項証明書・役員全員の住民票が追加されています。事業化してきた段階で法務面を放置すると、後からズレが大きくなります。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 開業前に見落としやすいリスク
        </h2>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">① 無届営業のリスク</p>
            <p className="text-gray-700 leading-relaxed">
              届出が必要な営業を無届のまま始めることは最も大きなリスクです。警察庁の令和6年統計でも「無届営業・届出書の虚偽記載等」で15件・11人が検挙されています。ネット営業はニュースになりにくいですが、統計上は現実に取締り対象です。
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">② 事務所を軽く考えるリスク</p>
            <p className="text-gray-700 leading-relaxed">
              オンライン営業だからといって事務所を軽く考えるのも危険です。警視庁が使用承諾書や賃貸契約書の写しを必要書類として示している以上、事務所の整理は届出の核心です。
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">③「個人だから大丈夫」という思い込み</p>
            <p className="text-gray-700 leading-relaxed">
              個人運営は始めやすい一方で「個人だから対象外だろう」という思い込みに陥りやすいです。公的資料上そのような整理はされておらず、個人でも営業実態が法の定義に当たれば届出を検討すべきです。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 自分のサイトが届出対象か分からない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          一般向けと成人向けが混在している・画像と動画が混ざっている・ブログと会員ページが分かれているなど、個人サイトでは線引きが難しいことが多いです。実際のサイト構成に当てはめるには個別判断が必要になることがあります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 自宅やレンタルオフィスの使い方で迷っている
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          どこを事務所にするかは個人運営で最もつまずきやすいポイントです。自宅・賃貸物件・レンタルオフィスのどれが適切かは、契約内容や使用承諾の有無によって変わります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-3. すでに始めてしまっている
        </h3>
        <p className="text-gray-700 leading-relaxed">
          すでに有料会員制や動画販売を始めていて後から不安になっている場合も、早めに相談した方が安全です。無届状態を長く放置するメリットは基本的にありません。
        </p>
      </section>

      {/* sec7 まとめ */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. まとめ
        </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            アダルト配信ビジネスを始める方法を考えるとき、最初に確認すべきなのは何をどのように顧客へ提供するのかという営業実態です。警察庁の解釈運用基準では、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために電気通信設備を用いて客に見せる営業は映像送信型性風俗特殊営業に当たるとされています。静止画も動画も対象になり得ます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            警視庁はホームページごとの届出を案内し、営業開始届出書・営業方法の書類・事務所の使用権原資料・住民票・法人の場合の追加書類を必要書類として公表しています。つまり、アダルト配信ビジネスはサイトやコンテンツを作る前に、法務の土台を整える必要がある分野です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            個人で始める場合でも営業内容が法の定義に当たれば届出を検討すべきです。自分のページが届出対象か分からない・個人と法人のどちらで進めるべきか迷っている・事務所の整理に不安があるという場合は、営業開始前の段階で行政書士へ相談することを推奨します。最初の設計をきちんと行うことが、後から無届営業や名義のズレで困らないための一番の近道です。
          </p>
      </section>

      <AuthorBlock />
    </article>
  );
}
