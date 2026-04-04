// app/blog/nonstore-fuuei-notification.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "nonstore-fuuei-notification",
  title: "無店舗型性風俗特殊営業の届出方法｜警察署への申請から営業開始までの流れ",
  description:
    "無店舗型性風俗特殊営業の届出方法を行政書士がわかりやすく解説。警察署への申請から営業開始までの流れ、必要書類、事務所・受付方法の注意点、開業前に押さえたい実務ポイントを整理します。",
  keywords: [
    "無店舗型性風俗特殊営業 届出",
    "デリヘル 開業 手順",
    "派遣型 届出方法",
    "風営法 届出 警察署",
    "無店舗型 必要書類",
    "行政書士",
  ],
  ogImage: "/nonstore-fuuei-notification-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-03T00:00:00+09:00",
  modifiedTime: "2026-04-03T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-04-03",
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
          src="/nonstore-fuuei-notification-eyecatch.jpg"
          alt="無店舗型性風俗特殊営業の届出方法｜警察署への申請から営業開始までの流れ"
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
          <li>無店舗型性風俗特殊営業の届出前に整理すべき事項（名義・事務所・受付方法）</li>
          <li>警察署への申請から届出確認書受領までの6ステップ</li>
          <li>必要書類の詳細と個人・法人それぞれの注意点</li>
          <li>つまずきやすいポイントと期間の考え方</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">無店舗型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec2" className="hover:underline">届出前に整理すべきこと</a></li>
          <li><a href="#sec3" className="hover:underline">届出方法の全体像</a></li>
          <li><a href="#sec4" className="hover:underline">届出に必要な主な書類</a></li>
          <li><a href="#sec5" className="hover:underline">警察署への申請でよくあるつまずきポイント</a></li>
          <li><a href="#sec6" className="hover:underline">営業開始までの期間の考え方</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に依頼するメリット</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          無店舗型性風俗特殊営業を始めようとする方にとって、最初の大きな壁になるのが「届出をどう進めればよいのか分からない」という点です。デリヘルや派遣型サービスは、一般的には店舗を構えずに営業するため、飲食店や一般的なサービス業の開業手続とは流れが大きく異なります。物件を借りればすぐに始められるわけではなく、風営法上の位置づけを確認し、必要書類をそろえ、管轄警察署へ適切に届出を行ったうえで営業を開始する必要があります。
        </p>
        <p>
          特にこの分野は、「無店舗型」という言葉だけが先行し、店舗がないなら自由に始められるような印象を持たれがちです。しかし実際には、事務所の設定、受付方法、派遣の仕組み、広告や営業方法の整理など、開業前に確認すべき事項が多くあります。届出が必要な営業であるにもかかわらず、準備不足のまま進めてしまうと、営業開始時期がずれたり、後から手続面の見直しが必要になったりすることもあります。
        </p>
        <p>
          そこで本記事では、無店舗型性風俗特殊営業の届出方法について、警察署への申請から営業開始までの流れを中心に、行政書士の視点から分かりやすく整理して解説します。これからデリヘルや派遣型サービスを始めたい方が、そのまま開業準備のチェックリストとして使えるように、実務目線でまとめています。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 無店舗型性風俗特殊営業とは何か
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. まず押さえたい営業類型</h3>
          <div className="space-y-4 mb-6">
            <p>
              無店舗型性風俗特殊営業とは、風営法上、店舗で客に接するのではなく、スタッフを客の指定する場所へ派遣して役務を提供する営業などをいいます。一般的なデリヘルや派遣型ファッションヘルスは、この類型に当たることが多いです。さらに、法律上は通信販売型のアダルトビデオ販売なども含まれますが、実務で相談が多いのはいわゆる派遣型サービスです。
            </p>
            <p>
              ここで大切なのは、日常的に使われる「デリヘル」という言葉と、法律上の「無店舗型性風俗特殊営業」という言葉が一致しないことです。事業者側はデリヘル開業と考えていても、法的には無店舗型性風俗特殊営業として届出を行う必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「無店舗型」でも事務所は必要</h3>
          <div className="space-y-4 mb-6">
            <p>
              無店舗型という名称から、「店舗がないなら事務所も不要ではないか」と考える方もいますが、これは誤解です。客が来店する店舗がないという意味であって、営業の本拠となる事務所まで不要になるわけではありません。電話受付、従業者管理、事務処理、広告管理などを行うための拠点が必要になり、その場所が届出上も重要になります。
            </p>
            <p>
              また、事務所と受付所の扱いは必ずしも同じではありません。客を来訪させて依頼を受ける形を取るのか、電話やウェブで受付を完結させるのかによって、実務上の整理は変わります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-3. なぜ開業前の届出が重要なのか</h3>
          <div className="space-y-4">
            <p>
              無店舗型性風俗特殊営業は、営業開始前の届出が前提となる営業です。広告を出したり、求人を開始したり、サイトを公開したりする前に、法務面の準備を固めておく必要があります。届出には事務所資料、住民票、法人資料、営業方法の整理などが必要になるため、思いつきですぐ終わるものではありません。
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-bold text-amber-800 mb-1">注意</p>
              <p className="text-sm text-amber-700">
                事務所物件の契約内容が届出に適していない場合は、最初からやり直しになることもあります。開業の成功率を高めるには、まず法務面の入口を押さえることが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 届出前に整理すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 個人で始めるのか法人で始めるのか</h3>
          <div className="space-y-4 mb-6">
            <p>
              最初に決めておきたいのが、個人名義で始めるのか、法人名義で始めるのかです。個人で始める場合は比較的書類が少なくて済みますが、法人の場合は定款、登記事項証明書、役員全員の住民票など追加で準備すべき資料が増えます。既存法人を使う場合には、定款目的が現状の営業内容に合っているかも確認が必要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. どの物件を事務所にするのか</h3>
          <div className="space-y-4 mb-6">
            <p>
              届出前にもっとも重要な判断のひとつが、どの場所を事務所にするかです。とくに賃貸物件では、契約上の用途制限や、オーナー・管理会社との関係が問題になることがあります。事務所は単に郵便物を受け取る住所ではなく、届出上の本拠であり、営業実態との整合が求められます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-3. 受付方法をどう設計するか</h3>
          <div className="space-y-4">
            <p>
              無店舗型営業では、客の依頼をどこで、どのように受けるのかも重要です。電話受付中心なのか、ウェブ予約中心なのか、対面で客を呼ぶのかによって、法務上の扱いが変わる可能性があります。特に客を来訪させる形を取る場合は、受付所としての整理が問題になりやすく、単なる事務所と同じ感覚では進められません。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 届出方法の全体像
          </h2>

          <div className="space-y-6">
            {[
              { step: "STEP 1", title: "営業実態を整理する", desc: "誰が営業主体になるのか、どの地域を営業エリアにするのか、どこに事務所を置くのか、どのような方法で受付し、どのように派遣するのかを明確にします。この整理が曖昧なまま進めると、後からすべての書類に影響します。" },
              { step: "STEP 2", title: "事務所を確定し、権原資料を整える", desc: "届出には、事務所の使用について権原を有することを示す資料が必要です。賃貸契約書の写し、使用承諾書、建物に関する資料などを整えます。事務所が固まっていないと届出の核心部分が進みません。" },
              { step: "STEP 3", title: "必要書類を集める", desc: "住民票や法人関係書類など添付資料を集めます。法人の場合は役員全員分の書類も必要になるため、人数が多いと想像以上に時間がかかります。内容の整合性も確認が必要です。" },
              { step: "STEP 4", title: "届出書と営業方法の書類を作成する", desc: "事務所所在地、営業主体、広告に使用する名称、営業方法などを整理して記載します。様式はありますが、ひな形を埋めるだけで適切な届出になるとは限りません。営業実態と記載内容が一致していることが大切です。" },
              { step: "STEP 5", title: "管轄警察署へ提出する", desc: "事務所を管轄する警察署へ提出します。管轄は営業エリアではなく事務所所在地で決まります。提出の場面では営業内容の説明が必要になることもあるため、書類だけでなく説明できる状態に整えておくことが望ましいです。" },
              { step: "STEP 6", title: "届出確認書を受領し、営業開始へ進む", desc: "届出が受理されると届出確認書が交付されます。確認書の受領まで含めて一区切りです。交付後も適切に保管し、変更があれば変更届を忘れずに行います。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="shrink-0 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-lg mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 届出に必要な主な書類
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 営業開始届出書</h3>
          <div className="space-y-4 mb-6">
            <p>
              営業開始届出書は届出の中心となる書類です。営業主体、事務所所在地、広告等に使用する呼称などを記載します。特に、屋号や呼称を先に広告で出してしまっている場合は、書類上の表記との整合も意識する必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 営業の方法を記載した書類</h3>
          <div className="space-y-4 mb-6">
            <p>
              どのような流れで依頼を受け、どのようにサービスを提供するのかを整理します。受付は電話なのかウェブなのか、従業者の管理はどうするのか、広告導線はどうなっているのかといったことを言語化できていないと、書類作成が止まりやすいです。この工程は書類作成というより事業整理に近い面があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 事務所の使用権原を示す資料</h3>
          <div className="space-y-4 mb-6">
            <p>
              使用承諾書、賃貸借契約書の写し、建物資料など、事務所を適法に使用できることを示す資料を整える必要があります。特に居住用物件を事務所に使う場合は慎重さが必要です。法務上の土台が不安定だと、後からより大きなコストを払うことになります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-4. 住民票・法人書類</h3>
          <div className="space-y-4">
            <p>
              個人なら住民票、法人なら定款や登記事項証明書、役員全員の住民票などが必要です。法人案件では、このパートだけでも相応の時間がかかるため早めに着手した方が安全です。役員変更や本店移転を予定している場合は、そのタイミングも含めて検討すべきです。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 警察署への申請でよくあるつまずきポイント
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">物件選びを先に間違える</p>
              <p className="text-sm text-gray-600 leading-relaxed">賃料・立地・広さだけで物件を決めると、後から届出との相性が悪いと分かることがあります。無店舗型営業では客が来店しないからと軽く考えがちですが、事務所の適法性は非常に重要です。</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">開業日を先に決めすぎる</p>
              <p className="text-sm text-gray-600 leading-relaxed">サイト公開日や求人開始日を先に決めてしまい、届出準備が間に合わなくなるケースが多いです。書類収集や事務所関係の調整には時間がかかることがあるため、余裕を持ったスケジューリングが必要です。</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">書類の整合性が取れていない</p>
              <p className="text-sm text-gray-600 leading-relaxed">広告上の名称と届出上の名称が違う、実際の受付方法と書面上の説明がずれているなど、書類単体を見ているだけでは気づきにくいズレが生じやすいです。全体を俯瞰して確認することが重要です。</p>
            </div>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 営業開始までの期間の考え方
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. もっとも時間がかかるのは提出前</h3>
          <div className="space-y-4 mb-6">
            <p>
              実務上、もっとも時間がかかるのは警察署へ提出した後ではなく、その前の準備段階です。物件選定、書類収集、営業方法の整理、書面作成といった工程があり、ここがスムーズに進まないと全体が遅れます。営業開始を急ぐほど、提出前準備を前倒しで始める必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 提出後も余裕を持つべき</h3>
          <div className="space-y-4">
            <p>
              提出後は確認書の交付まで一定の時間を見込んでおいた方がよいです。提出したその日にすべて完了する前提で動くと、少しのズレが開業全体に影響します。広告出稿や採用面接の日程を組んでいる場合は、余裕ある計画が重要です。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 行政書士に依頼するメリット
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 開業全体を逆算しやすい</h3>
          <div className="space-y-4 mb-6">
            <p>
              行政書士に依頼するメリットは書類作成だけではありません。開業全体の流れを整理し、どこから着手すべきかを明確にできることが大きいです。無店舗型営業では物件、導線、名義、広告など複数の要素が絡むため、全体設計をサポートしてもらう意味があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 手戻りを減らせる</h3>
          <div className="space-y-4 mb-6">
            <p>
              物件選びや書類の整合性を最初に確認できれば、後からやり直すリスクを下げやすくなります。開業時はやることが多いため、法務面だけでも専門家に任せることで、結果的に時間もコストも抑えやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 本業準備に集中しやすい</h3>
          <div className="space-y-4">
            <p>
              開業時には採用、広告、サイト、写真、サービス設計など本来やるべき準備が多くあります。届出を専門家に任せることで、自分は集客や事業づくりに集中しやすくなります。これは単なる手間削減ではなく、開業成功率を上げる意味でも重要です。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. まとめ
          </h2>
          <div className="space-y-4">
            <p>
              無店舗型性風俗特殊営業の届出方法は、単に書類を提出するだけではなく、営業主体、事務所、受付方法、営業導線を最初に整理したうえで、必要資料を集め、届出書と営業方法の書類を整え、管轄警察署へ提出し、届出確認書の受領まで進めるという流れになります。
            </p>
            <p>
              特に重要なのは、事務所選びと営業方法の設計です。ここを曖昧にしたまま進めると、後から書類全体に影響します。デリヘルや派遣型サービスを適法に始めたいのであれば、営業開始日だけを先に決めるのではなく、まず届出の全体像を把握し、準備の順番を間違えないことが大切です。
            </p>
            <p>
              事務所選びに不安がある方、個人と法人のどちらで進めるべきか迷っている方、警察署への申請をスムーズに進めたい方は、早めに行政書士へ相談することをおすすめします。最初の届出をきちんと整えることが、その後の集客、採用、営業のしやすさにもつながります。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
