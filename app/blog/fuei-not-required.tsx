// app/blog/fuei-not-required.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-not-required",
  title: "映像送信型性風俗特殊営業の届出が不要なケースはある？判断ポイントを行政書士が解説",
  description:
    "映像送信型性風俗特殊営業の届出が不要なケースはあるのかを行政書士がわかりやすく解説。届出不要と言いやすい場合、不要と早合点しやすい注意ケース、画像販売・副業・外部プラットフォーム利用時の判断ポイントを整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 届出 不要",
    "映像送信型性風俗特殊営業 対象外",
    "風営法 届出 不要 ケース",
    "アダルトサイト 届出 判断",
    "行政書士",
  ],
  ogImage: "/fuei-not-required-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-06T00:00:00+09:00",
  modifiedTime: "2026-05-06T00:00:00+09:00",
  isPublished: true,
  cat: "Q&A",
  date: "2026-05-06",
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
          <li>映像送信型性風俗特殊営業の届出が不要と整理しやすいケース</li>
          <li>「不要」と早合点しやすい注意すべきケース</li>
          <li>画像販売・副業・外部プラットフォーム利用時の判断ポイント</li>
          <li>迷ったときに整理すべき事項と行政書士への相談が有効な場面</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理</a></li>
          <li><a href="#sec2" className="hover:underline">届出が不要と整理しやすい基本ケース</a></li>
          <li><a href="#sec3" className="hover:underline">「不要」と判断しやすいが、注意が必要なケース</a></li>
          <li><a href="#sec4" className="hover:underline">不要かどうかを判断するための具体的なポイント</a></li>
          <li><a href="#sec5" className="hover:underline">届出不要と思っていた場合でも問題になりやすい場面</a></li>
          <li><a href="#sec6" className="hover:underline">届出不要か迷ったときに整理すべきこと</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業について調べている事業者の多くは、「自身の活動も届出が必要なのか」「届出が不要なケースはあるのか」を最初に確認したいと考えます。特に、個人クリエイター、副業でのコンテンツ販売、会員制サイト運営、外部プラットフォーム利用などでは、一般向け表現と成人向け表現が混在しやすく、どこから届出対象になるのかが見えにくくなります。
        </p>
        <p>
          ただし、重要なのは、映像送信型性風俗特殊営業の届出が不要かどうかは、サービス名や本人の感覚だけでは決まらないという点です。風営法は、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業を映像送信型性風俗特殊営業として定義しています。警察庁の解釈運用基準では、この「映像」には静止画だけでなく動画も含まれるとされており、「専ら」に当たるかどうかも営業者の意図と営業実態を踏まえて判断すると整理されています。
        </p>
        <p>
          また、警視庁は映像送信型性風俗特殊営業を「ホームページごとの届出」と案内し、必要書類として営業開始届出書、営業の方法を記載した書類、事務所の使用権原資料、住民票、法人の場合の定款・登記事項証明書・役員全員の住民票を示しています。つまり、制度は具体的に整備されており、「曖昧なら届出不要でよい」という前提にはなっていません。
        </p>
        <p>
          そこで本記事では、映像送信型性風俗特殊営業の届出が不要と整理しやすいケースと、直ちには不要と言い切れないケースを分けながら、判断ポイントを行政書士の視点で解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 「不要なケース」はあるが、慎重な判断が必要</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の届出が不要なケースはあります。ただし、それは「副業だから不要」「個人だから不要」「外部サービスを使っているから不要」といった単純な理由によるものではありません。不要と整理しやすいのは、そもそも風営法上の映像送信型性風俗特殊営業の定義に当たらない場合です。つまり、判断の出発点は、提供している内容と営業実態です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「名称」や「規模」だけでは不要にならない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              誤解が生じやすい点として、「クリエイター活動だから」「小規模だから」「趣味の延長だから」といった理由で対象外と考えてしまうケースがあります。しかし、公的資料上、そのような区別はありません。法が見ているのは、性的映像を、専ら性的好奇心をそそるために、営業として見せているかどうかです。規模や肩書きだけでは判断できません。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 届出が不要と整理しやすい基本ケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. そもそも性的な行為や裸体姿態の映像を見せていない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              基本的なケースは、提供しているコンテンツが、性的な行為を表す場面や衣服を脱いだ人の姿態の映像に当たらない場合です。風営法の定義は、この内容を前提にしています。したがって、一般的な雑談配信、ゲーム実況、音楽配信、教育コンテンツ、通常の写真作品、一般的な創作映像などで、法が想定する性的映像に当たらないのであれば、映像送信型性風俗特殊営業としては整理されにくいです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 営業として見せているとは言いにくい</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              法の定義は「営業」であることを前提にしています。そのため、継続的な収益化や営業構造がなく、単発的・例外的で、営業としての体裁が弱いケースでは、直ちに典型的な映像送信型性風俗特殊営業とは言いにくいことがあります。ただし、この点は慎重に確認すべき部分です。本人は「試験的に一回だけ」と考えていても、会員募集や有料導線、販売ページが整っていれば、客観的に見た営業性は高くなるからです。これは警察庁の解釈運用基準が実態判断を重視していることからも分かります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-3. 一般向け表現にとどまる創作活動</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              一般的なグラビア、アート、コスプレ、創作映像などでも、直ちに映像送信型性風俗特殊営業になるわけではありません。重要なのは、専ら性的好奇心をそそるための映像かどうかです。一般向けの創作活動の範囲にとどまるなら、届出不要と整理しやすい場面はあります。ただし、表現の強さや販売方法によって評価が変わる余地があるため、境界が曖昧なケースでは自己判断に頼りすぎないことが重要です。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 「不要」と判断しやすいが、注意が必要なケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 画像だけを販売しているケース</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              「動画ではなく写真だけだから不要」と考えるケースがありますが、警察庁の解釈運用基準では、「映像」には静止映像も含まれるとされています。つまり、画像中心だから自動的に対象外とは言えません。内容が性的な行為を表す場面や裸体姿態に当たり、専ら性的好奇心をそそるためのものであり、営業として見せているなら、動画と同様に検討対象になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 外部プラットフォームを使っているケース</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              独自サイトではなく、外部プラットフォームや会員制サービスを使っている場合でも、直ちに届出不要にはなりません。警視庁は「ホームページごとの届出」としており、独自ドメインに限るとは書いていません。実質的に営業ページとして機能している会員ページや販売ページがあるなら、それを無視してよいとは言えません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-3. 副業・個人クリエイターのケース</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              副業や個人活動でも、届出不要とは限りません。公的資料に、本業と副業を分ける基準はありません。個人でも、営業として性的映像を継続して見せているなら、制度上は対象になり得ます。警視庁の必要書類に個人向けの住民票が明記されていることからも、個人が当然に制度外とされていないことは明らかです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-4. 一般向けコンテンツも混在しているケース</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              サイトやアカウントに一般向け投稿と成人向け投稿が混在している場合、「全部が成人向けではないから不要」と考えることがあります。しかし、警察庁の解釈運用基準では、「専ら」に当たるかどうかは営業者の意図と実態に基づいて判断するとされています。つまり、一部に一般向け要素があるだけでは足りず、収益の中心や顧客の期待がどこにあるかまで確認する必要があります。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 不要かどうかを判断するための具体的なポイント
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 何を見せているか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              最初に確認すべきは、どのような映像・画像を見せているかです。性的な行為を表す場面なのか、裸体姿態なのか、それとも一般的な創作や表現にとどまるのか。この整理が判断の出発点です。法の定義がここを基礎にしている以上、この点を曖昧にしたまま「不要」と判断するのは適切ではありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. どのように収益化しているか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              次に重要なのが、有料性と継続性です。会員制、月額課金、チップ制、単品販売、サブスク、限定プランなど、何らかの形で継続的に対価を得ているなら、営業性が強まります。反対に、営業構造が弱く、継続的収益化もなく、単発で終わるようなケースでは、典型的な営業とは言いにくい場合があります。ただし、これは「無料ならすべて問題ない」という意味ではありません。実態全体で見る必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. どのページが営業の中心か</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業はホームページごとの届出という建て付けです。そのため、独自サイト、会員ページ、外部プラットフォーム、サブページのうち、どこが実際の営業ページなのかを整理することが重要です。一般向けの表紙ページだけを見て判断すると、実際の有料成人向けページの存在を見落としやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-4. 事務所と営業主体が整理できるか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              警視庁は必要書類として、事務所の使用権原資料と住民票、法人なら定款や登記事項証明書まで求めています。これは、制度が営業主体と事務所を明確にすることを前提にしているからです。逆に言えば、事業者の活動について「誰が主体で、どこを拠点に営業しているのか」が明確であるほど、対象性の検討もしやすくなります。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 届出不要と思っていた場合でも問題になりやすい場面
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 最初は一般向けだったが、徐々に成人向け比率が増えた</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              開設当初は一般向け表現や創作中心でも、運営を続けるうちに成人向けコンテンツの比率が増え、収益の中心がそちらに移ることがあります。この場合、開始時の認識のまま「対象外」と考え続けるのは適切ではありません。実態が変われば、法的な見え方も変わり得ます。解釈運用基準が実態判断を重視している以上、運営の変化も無視できません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 外部プラットフォーム上で別料金プランを設けた</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              通常プランは一般向けでも、別料金で成人向けプランを提供し始めた場合、その有料部分が営業の中心になることがあります。警察庁の基準でも、別料金設定は「専ら」の判断で重要な事情になり得ます。付随的な追加機能として設けた場合でも、法的には意味を持つことがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. サイトやページを増やした</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              最初は一つのページだけだった場合でも、会員専用ページ、ブランド別ページ、別プラットフォームなどを追加すると、届出要否の判断も複雑になります。警視庁がホームページごとの届出としている以上、ページ追加は軽視できません。届出不要と考えていた状態でも、営業構造が強まることで再検討が必要になることがあります。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 届出不要か迷ったときに整理すべきこと
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-1. 営業内容を文章で説明する</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                事業者の活動について、「誰が、何を、どのページで、誰に、どのように、有料で見せているのか」を文章でまとめることが重要です。これができると、法の定義との距離が見えやすくなります。逆に、ここが曖昧なままだと、不要かどうかの判断も曖昧になります。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-2. ページ一覧を作成する</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                独自サイト、会員ページ、外部プラットフォーム、SNS誘導先などの一覧を作り、どこが告知で、どこが有料提供の中心かを整理します。ホームページごとの届出という制度を考えると、この整理は不可欠です。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-3. 事務所と主体を確認する</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                個人か法人か、どこを事務所にするか、必要書類を出せるかを確認します。ここが明確になると、制度との接続の仕方も見えやすくなります。
              </p>
            </div>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 一般向けと成人向けの境界が曖昧</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              相談の必要性が高いのは、表現や内容の境界が曖昧なケースです。事業者自身では一般向け寄りだと考えていても、法的にどう整理されるかは別問題です。このような案件は、早めに専門家へ確認することが有効です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 外部プラットフォームや複数ページを使っている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              複数ページ運営や外部サービス併用は、営業ページの整理が複雑になりやすいです。不要と判断する前に、制度との整合を確認することが重要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. すでに始めている</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              すでに会員募集や販売を始めていて、「今さら聞きにくい」と感じるケースもありますが、放置するメリットは通常ありません。迷っている時点で一度整理する方が、後からの負担は小さくなりやすいです。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. まとめ
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-7 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の届出が不要なケースはありますが、それは「副業だから」「個人だから」「外部プラットフォームだから」といった理由によるものではありません。不要と整理しやすいのは、そもそも風営法が想定する性的映像の営業に当たらない場合や、営業性が極めて弱い場合など、法の定義から外れるケースです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              一方で、画像だけ、外部プラットフォーム、副業、一般向け混在といった事情は、それだけで対象外を意味しません。警察庁の解釈運用基準は実態判断を重視しており、警視庁も具体的な届出制度と必要書類を公表しています。つまり、少しでも境界に迷うなら、「不要」と決めつけるのではなく、営業内容、ページ構成、収益化の仕組み、事務所、営業主体を整理したうえで判断すべきです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              事業者のケースで届出が不要か分からないときは、サービス名ではなく、何をどのように営業として見せているのかを基準に見直すことが重要です。少しでも不安がある場合は、営業開始前でも開始後でも、早めに行政書士へ相談して整理することが現実的です。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：風営法、警察庁「風営法の解釈運用基準」、警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
