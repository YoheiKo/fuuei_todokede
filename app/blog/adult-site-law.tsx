// app/blog/adult-site-law.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "adult-site-law",
  title: "個人でアダルトサイトを運営する場合の法律｜届出は必要？",
  description:
    "個人でアダルトサイトを運営する場合に風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業との関係、有料会員制サイトや動画・画像販売で注意すべきポイント、個人運営で見落としやすい法務リスクを整理します。",
  keywords: [
    "個人 アダルトサイト 運営 法律",
    "アダルトサイト 風営法 届出",
    "映像送信型性風俗特殊営業 個人",
    "アダルト動画 個人販売 届出",
    "成人向けサイト 法律",
    "行政書士",
  ],
  ogImage: "/adult-site-law-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-14T00:00:00+09:00",
  modifiedTime: "2026-04-14T00:00:00+09:00",
  isPublished: true,
  cat: "プラットフォーム・個人",
  date: "2026-04-14",
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
          src="/adult-site-law-eyecatch.jpg"
          alt="個人でアダルトサイトを運営する場合の法律｜届出は必要？"
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
          <li>個人運営でも風営法の届出が必要になるケース</li>
          <li>映像送信型性風俗特殊営業と個人アダルトサイトの関係</li>
          <li>届出が必要になりやすいケース・一律には言えないケース</li>
          <li>個人運営で見落としやすい実務上の注意点</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">個人でアダルトサイトを運営しても風営法は関係あるのか</a></li>
          <li><a href="#sec2" className="hover:underline">個人のアダルトサイト運営で問題になりやすい営業類型</a></li>
          <li><a href="#sec3" className="hover:underline">どのような場合に届出が必要になりやすいのか</a></li>
          <li><a href="#sec4" className="hover:underline">一律に届出が必要とは言い切れないケース</a></li>
          <li><a href="#sec5" className="hover:underline">個人運営で特に注意すべき実務上の論点</a></li>
          <li><a href="#sec6" className="hover:underline">届出をしないとどうなるのか</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        個人でアダルトサイトを運営しようとすると、多くの方が最初に気になるのが、「法人ではなく個人でも風営法の届出が必要なのか」という点です。副業として始める場合や、まずは小さく運営してみたい場合には、「個人サイトだからそこまで厳しい規制はないのでは」「プラットフォームを使わずに自分のサイトで売るだけなら自由ではないか」と考えがちです。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        しかし、風営法は、店舗型の風俗営業だけでなく、インターネットなどを通じて性的な映像を見せる営業も対象にしています。警察庁の解釈運用基準では、映像送信型性風俗特殊営業とは、専ら性的好奇心をそそるため、性的な行為を表す場面または衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業をいうとされています。さらに、「映像」には静止画だけでなく動画も含まれると整理されています。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        また、警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内し、必要書類として営業開始届出書、営業の方法を記載した書類、事務所の使用について権原を有することを疎明する書類、住民票、法人の場合の追加書類を公表しています。個人運営だから制度の外にある、という整理にはなっていません。本記事では、個人でアダルトサイトを運営する場合に、どのような法律が問題になりやすいのか、どのようなケースで届出が必要になりやすいのかを、行政書士の視点から解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. 個人でアダルトサイトを運営しても風営法は関係あるのか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 個人か法人かより「営業の実態」が重要
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          まず押さえたいのは、風営法上の届出の要否は、個人か法人かだけで決まるわけではないということです。大切なのは、実際にどのような内容を、どのような方法で、営業として顧客に提供しているかです。警視庁の必要書類案内でも、個人については住民票、法人についてはこれに加えて定款や登記事項証明書、役員全員の住民票が必要とされており、個人が当然に対象外とされているわけではありません。つまり、「個人サイトだから自由」「会社ではないから風営法は関係ない」という理解は危険です。個人であっても、法の定義に当たる営業をしていれば、届出を検討すべき立場になります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 副業や小規模運営でも安心できない
        </h3>
        <p className="text-gray-700 leading-relaxed">
          個人運営のアダルトサイトでは、最初は副業や趣味の延長として始めることも多いです。しかし、風営法上は、本業か副業か、売上が大きいか小さいかよりも、営業として継続的に有料で性的映像を見せているかが重要になります。警察庁の解釈運用基準でも、「専ら」に当たるかどうかは営業者の意図と営業の実態を踏まえて判断するとされており、形式的な肩書や本人の感覚だけでは決まりません。継続して収益化し、性的映像の提供が営業の中心になっているなら、個人でも法的な検討が必要です。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 個人のアダルトサイト運営で問題になりやすい営業類型
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. 中心になるのは映像送信型性風俗特殊営業
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          個人のアダルトサイト運営で、最も問題になりやすいのは「映像送信型性風俗特殊営業」です。警察庁の解釈運用基準では、客に「性的な行為を表す場面又は衣服を脱いだ人の姿態の映像」を見せる営業のうち、それらを「専ら」見せるものであって、かつ、客の「性的好奇心をそそるため」見せるものがこれに当たるとされています。個人でアダルトサイトを運営する場合、会員制ページ、サブスク型サイト、ダウンロード販売ページ、ライブ配信ページなどを通じて、顧客が画面上で性的コンテンツを視聴できる構造になっていれば、この類型が問題になります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. 動画だけでなく静止画も含まれる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          「うちは動画ではなく画像中心だから大丈夫ではないか」と考える方もいますが、警察庁の解釈運用基準は、「映像」とは静止映像のほか、動画も含まれるとしています。つまり、動画販売だけでなく、有料画像ギャラリー、会員限定の画像投稿、写真集型の販売ページなども、内容と営業実態によっては同じ類型で検討されます。サイトの見た目がシンプルでも、提供している中身が法の定義に近ければ、風営法上の問題は生じます。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. どのような場合に届出が必要になりやすいのか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 有料会員向けに性的映像を継続提供している場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          最も典型的なのは、有料会員や購入者に対し、性的な行為を表す場面や裸体映像を継続的に提供している場合です。月額制、定期購読、単品課金、見放題、ダウンロード販売など形式は問いません。営業として継続的に性的映像を見せているなら、映像送信型性風俗特殊営業の届出対象に近づきます。「会員制にしているかどうか」よりも、「性的映像を有料で見せる営業になっているかどうか」が重要であり、個人サイトであることは届出不要の理由にはなりません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. サイト自体が営業ページとして機能している場合
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」としています。これは、営業の中心となるページ単位で届出を考えるという発想です。自分のサイトが単なるブログや紹介ページではなく、実質的に会員募集や有料コンテンツ閲覧の中心ページとして機能しているなら、営業ページとして見られやすくなります。個人で独自ドメインを取って運営している場合は特に、自分のサイトだからこそ営業の中核として見られやすい面があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-3. 個人名義でも実態として事業化している場合
        </h3>
        <p className="text-gray-700 leading-relaxed">
          サイト運営が軌道に乗り、更新頻度が高く、顧客対応、決済管理、複数プラン運営、広告導線の整備まで行っている場合、本人の感覚としては個人活動でも、実態としては十分に事業化されています。警察庁統計でも、映像送信型性風俗特殊営業の届出数は令和2年の2,641件から令和6年の4,333件へ増加しており、この分野の営業が広がっていることが分かります。営業として成立している以上、法務対応も同じように考える必要があります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 一律に届出が必要とは言い切れないケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. 一般的な創作活動や成人向けに至らない表現
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          個人サイトであっても、すべてが直ちに映像送信型性風俗特殊営業になるわけではありません。一般的な創作活動、非性的な写真・映像、ファンコミュニティ運営、作品紹介などにとどまる場合は、当然ながら一律に届出対象とは言えません。出発点はあくまで、提供している内容が「性的な行為を表す場面」や「衣服を脱いだ人の姿態の映像」に当たるかどうかです。ただし、「少し一般向け投稿もあるから大丈夫」というわけでもなく、営業全体の中心が何かを見られるため、混在型のサイトでは慎重な判断が必要です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 一時的・例外的な投稿しかない場合
        </h3>
        <p className="text-gray-700 leading-relaxed">
          継続的な営業とまで言えない、一時的・例外的な投稿だけのケースでは、営業性の評価が異なることがあります。もっとも、これは「一回だけなら安全」という意味ではありません。警察庁の解釈運用基準は、「専ら」に当たるかどうかを意図と実態で見るとしており、全体の営業構造を踏まえて判断する考え方です。課金の仕組み、ページ構成、顧客の期待を総合して見る必要があります。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 個人運営で特に注意すべき実務上の論点
        </h2>

        <div className="space-y-4">
          {[
            {
              label: "事務所の整理",
              body: "個人運営のアダルトサイトでも、事務所の整理は必要です。警視庁の必要書類には「事務所の使用について権原を有することを疎明する書類」が含まれており、使用承諾書、賃貸契約書の写し、建物に係る登記事項証明書などが例示されています。オンライン営業だから物件の整理は不要、ということにはなりません。自宅を使うのか、賃貸物件を使うのかで論点が変わるため、個人運営ではここを軽く見がちですが、届出実務では重要なポイントです。",
            },
            {
              label: "住民票の取得",
              body: "個人の場合、必要書類として住民票が挙げられています。警視庁の案内では、本籍記載のもの、外国人にあっては国籍記載のものとされています。住民票自体は取得しやすい書類ですが、必要な記載事項を外すと取り直しになることがあるため注意が必要です。",
            },
            {
              label: "営業ページの単位整理",
              body: "個人サイト運営では、ブログ、本サイト、会員ページ、販売ページ、SNS誘導ページなどが分かれていることが多いです。警視庁がホームページごとの届出としている以上、どこが営業の中心ページなのかを整理しておかないと、届出全体が曖昧になります。",
            },
          ].map(({ label, body }) => (
            <div key={label} className="flex gap-4 bg-gray-50 rounded-xl p-4 md:p-5">
              <div className="shrink-0 w-2 bg-violet-400 rounded-full" />
              <div>
                <p className="font-bold text-gray-800 mb-1">{label}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 届出をしないとどうなるのか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 無届営業は違法リスクがある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          届出が必要な実態なのに、何もしないまま営業を始めると、風営法違反のリスクがあります。警察庁の解釈運用基準では、性風俗関連特殊営業を営む者については、届出書を提出した者に限られず、届出書を提出していない者に対しても報告又は資料の提出を求めることができるとされています。無届だから制度の外というわけではなく、無届のままでも把握・監督の対象です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 取締りは現実にある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          警察庁統計では、令和6年の風営適正化法違反のうち「無届営業・届出書の虚偽記載等」で15件・11人が検挙されています。ネット営業は見えにくいため個別のニュースが少なくても、公式統計上は取締りが存在します。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-3. 事業拡大後にリスクが顕在化しやすい
        </h3>
        <p className="text-gray-700 leading-relaxed">
          小規模のうちは問題にならなくても、売上が増え、ページが増え、法人化や外注化が進むと、営業主体や事務所の整理が追いつかず、法務上のリスクが表面化しやすくなります。個人運営であっても、途中から事業化していくケースほど注意が必要です。
        </p>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-1. 届出が必要か不要かの線引きで迷うとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          一般向けと成人向けが混在している、画像と動画が混ざっている、複数プランを運営している、会員ページとブログが分かれているなど、個人サイトでは線引きが難しいケースが少なくありません。警察庁の解釈運用基準はありますが、実際のサイト構成に当てはめると迷うことがあります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-2. 自宅や賃貸物件を事務所にしてよいか不安なとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          個人運営では、事務所の整理が最もつまずきやすい部分です。どの場所を事務所にするのか、賃貸契約と整合するのか、使用権原資料は足りるのかで迷うなら、早めに相談した方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-3. すでに始めてしまっているとき
        </h3>
        <p className="text-gray-700 leading-relaxed">
          すでに有料販売や会員制運営を始めていて、今さら聞きにくいと感じる方もいます。しかし、無届状態を放置するメリットはありません。少しでも不安があるなら、早めに整理した方が傷は浅く済みます。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          8. まとめ
        </h2>
        <div className="bg-gray-50 rounded-xl p-5 md:p-7 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            個人でアダルトサイトを運営する場合でも、風営法が関係ないとは言えません。警察庁の解釈運用基準では、性的な行為を表す場面や衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために、電気通信設備を通じて客に見せる営業は、映像送信型性風俗特殊営業に当たるとされています。動画だけでなく静止画も含まれるため、個人サイトの画像・動画販売も対象になり得ます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、警視庁は、映像送信型性風俗特殊営業についてホームページごとの届出を案内し、営業開始届出書、営業の方法を記載した書類、事務所の使用権原資料、住民票などを必要書類として公表しています。個人運営だからといって制度の外にあるわけではありません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            自分のサイトで、何を、どのように、どのページで、有料で継続提供しているのかを整理したうえで、届出の要否を見極めることが大切です。少しでも迷うなら、営業開始前や運営拡大前の段階で行政書士へ相談し、後から無届営業のリスクを抱えないようにしておくことをおすすめします。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
