// app/blog/video-fuuei-penalty.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "video-fuuei-penalty",
  title: "映像送信型性風俗特殊営業の無届営業は違法？罰則と摘発事例を行政書士が解説",
  description:
    "映像送信型性風俗特殊営業の無届営業が違法になる理由を行政書士がわかりやすく解説。風営法上の位置づけ、無届営業に対する罰則、警察庁統計から見る摘発状況、運営者が見直すべき実務上の注意点を整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 無届営業 違法",
    "映像送信型性風俗特殊営業 罰則",
    "風営法 無届 摘発",
    "アダルト配信 無届 リスク",
    "行政書士",
  ],
  ogImage: "/video-fuuei-penalty-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-07T00:00:00+09:00",
  modifiedTime: "2026-05-07T00:00:00+09:00",
  isPublished: true,
  cat: "リスク・罰則",
  date: "2026-05-07",
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
          <li>映像送信型性風俗特殊営業の無届営業が違法になる理由</li>
          <li>無届営業に対する罰則の内容</li>
          <li>警察庁統計から見る摘発の実態</li>
          <li>無届営業になりやすいケースと早期に見直すべきポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">映像送信型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec2" className="hover:underline">無届営業はなぜ違法なのか</a></li>
          <li><a href="#sec3" className="hover:underline">どのような罰則があり得るのか</a></li>
          <li><a href="#sec4" className="hover:underline">摘発事例はあるのか</a></li>
          <li><a href="#sec5" className="hover:underline">無届営業になりやすい典型ケース</a></li>
          <li><a href="#sec6" className="hover:underline">無届営業かもしれないときに見直すべきポイント</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          成人向け動画配信、会員制の画像・動画販売、ライブ配信型の成人向けコンテンツ運営などをしている事業者が、後から不安を感じやすいテーマのひとつが、「届出をしていないまま営業しているが問題ないのか」という点です。特に、インターネット上の営業は店舗型の風俗営業と違って外部から見えにくく、「自分は動画を販売しているだけ」「プラットフォームを利用しているだけだから問題ないのでは」と考えてしまうケースも少なくありません。
        </p>
        <p>
          しかし、風営法は、インターネット等を通じて性的な映像を見せる営業を「映像送信型性風俗特殊営業」として明確に位置付けています。警察庁の解釈運用基準では、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業がこれに当たるとされています。さらに、「映像」には動画だけでなく静止画も含まれます。
        </p>
        <p>
          また、警視庁は映像送信型性風俗特殊営業について「ホームページごとの届出」と案内し、営業開始届出書、営業の方法を記載した書類、事務所の使用権原資料、住民票、法人の場合の定款や登記事項証明書などを必要書類として公表しています。つまり、対象となる営業を開始する場合には、事前に制度を確認し、必要な届出を整理することが求められる制度設計になっています。
        </p>
        <p>
          そこで本記事では、映像送信型性風俗特殊営業の無届営業がなぜ違法となるのか、どのような罰則リスクがあるのか、実際の摘発状況はどうなっているのか、そして運営者が早期に見直すべきポイントは何かを、行政書士の視点から解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 映像送信型性風俗特殊営業とは何か
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 風営法が対象としている営業</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法は、「映像送信型性風俗特殊営業」を、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業として定めています。警察庁の解釈運用基準でも、自慰行為、性交、性交類似行為などを行っている人の様子や光景が「性的な行為を表す場面」に当たり、静止画も動画も「映像」に含まれると整理されています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              このため、問題になるのは単なる「動画販売」という名称ではありません。どのような内容を、どのような方法で、営業として顧客に見せているかが重要です。ライブ配信、サブスク型販売、単品動画販売、会員制サイト、外部プラットフォーム利用など、形式はさまざまでも、実態がこの定義に当てはまるなら、映像送信型性風俗特殊営業として届出の要否を検討しなければなりません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「個人だから不要」とは限らない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              この分野で生じやすい誤解が、「個人で行っているだけだから風営法の届出は関係ない」という考え方です。しかし、届出の要否は、個人か法人かで決まるのではなく、営業内容が法の定義に当てはまるかどうかで決まります。警視庁の必要書類案内でも、個人届出と法人届出の両方が前提になっており、法人の場合に追加書類が必要なだけで、個人が対象外になるとはされていません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              副業であっても、小規模であっても、会員から対価を受け取り、性的映像を継続的に見せているなら、営業性は認められやすいです。「趣味の延長」「限定的に行っているだけ」という認識は、法的な評価とは別に整理する必要があります。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 無届営業はなぜ違法なのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 届出を前提とした制度だから</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業は、そもそも届出を前提とした制度です。警視庁は、営業開始届出書の様式と記載例を公表し、必要書類も一覧化しています。これは、営業開始前に必要事項を整理し、公安委員会へ届出をすることが制度上予定されていることを意味します。届出をしないまま始めるということは、この制度の前提に沿わない形で営業することになります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              また、警察庁も、性風俗関連特殊営業は「届出制によりその実態を把握し、規制を課して取り締まる対象」と説明しています。つまり、許可を受ける業種ではない代わりに、届出を通じて実態把握と規制が行われる構造です。届出しないまま営業することは、その管理の枠外で営業することになり、違法性の中心になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 無届営業だけでなく、虚偽記載も問題になる</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              届出をしないことだけでなく、届出書に虚偽の記載をすることも問題になります。警察庁の令和6年統計では、風営適正化法違反の違反態様として「無届営業・届出書の虚偽記載等」が独立して集計されており、令和6年は15件・11人が検挙されています。つまり、制度上は「提出すれば足りる」のではなく、「正確に提出する」ことも求められているということです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              これは実務上重要です。たとえば、営業主体を曖昧にする、実態と異なる事務所を記載する、営業の中心ページを記載しない、といった行為は、単なる書類上の不備ではなく、届出制度そのものを害する行為として扱われ得ます。無届営業と虚偽記載は、いずれも慎重に扱う必要があります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. どのような罰則があり得るのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 無届営業に刑事罰が予定されている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法違反には刑事罰が予定されており、e-Govの法令検索でも、違反類型に応じて1年以下の拘禁刑若しくは100万円以下の罰金などの罰則条項が置かれていることが確認できます。さらに、警察庁の制度改正資料では、無届営業に対する罰則が「6月以下の懲役若しくは100万円以下の罰金又はその併科」に引き上げられたと説明されています。現行法では懲役が拘禁刑に置き換わっているため、表現は現在の法文と一致しない部分がありますが、少なくとも無届営業に重い刑事罰が予定されているという制度趣旨は明確です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              ここで重要なのは、無届営業は行政上の指導にとどまらず、刑事処分につながり得る違反類型として位置付けられているという点です。成人向け配信をインターネット上の副業として始める場合でも、この点を見落とさないようにする必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 変更未届や広告規制違反などが重なることもある</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              実際の運営では、無届営業だけでなく、変更届を提出していない、虚偽の内容で届け出ている、広告や宣伝の態様が問題になるなど、複数の論点が重なることがあります。警察庁統計でも、無届営業・虚偽記載等のほか、広告宣伝違反などが別の違反態様として集計されています。つまり、「届出だけ提出していればすべて問題ない」ということではなく、営業開始後の運営や表示も含めて法令順守が求められます。
            </p>
            <p className="text-gray-700 leading-relaxed">
              そのため、実務では、最初の届出時点で営業実態を正確に整理しておくことが重要です。入口の整理が曖昧なままだと、その後の変更や広告運用でもずれが広がりやすくなります。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 摘発事例はあるのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 個別報道は多くないが、摘発は現実にある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の無届営業については、店舗型風俗営業ほど個別報道が多いわけではありません。そのため、「ニュースであまり見ないから問題ない」と誤解されることがあります。しかし、警察庁統計では、風営適正化法違反として毎年検挙があり、令和6年には「無届営業・届出書の虚偽記載等」で15件・11人が検挙されています。個別ニュースが少ないことと、取り締まりがないことは同じではありません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              むしろ、ネット上の営業は外部から見えにくいため、表面的に摘発が少なく見えるだけという面があります。営業が広がり、売上が増え、外部通報や別件捜査との関係で発覚するリスクもあります。報道件数の少なさを安全の根拠にするのは適切ではありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 警察庁統計から見える「無届営業の取締り」</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警察庁の令和6年統計では、風営適正化法違反の総検挙件数は737件・人員1,048人で、そのうち「無届営業・届出書の虚偽記載等」は15件・11人でした。また、性風俗関連特殊営業を営む者に対する行政処分件数は令和6年で212件あり、その内訳を見ると映像送信型性風俗特殊営業に対する行政処分は令和3年に2件、令和4年に1件、令和5年・令和6年は0件とされています。件数自体は多くありませんが、行政上も刑事上も対象になってきたことが分かります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              この数字から言えるのは、映像送信型性風俗特殊営業は、件数が少ないからといって放置されているわけではないということです。警察庁統計の表に現れている時点で、無届営業や虚偽記載が明確な取締対象として把握されていることは否定できません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 届出件数が増えていること自体が取締り強化の背景になる</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              警察庁資料では、映像送信型性風俗特殊営業の届出数は、令和2年の2,641件から令和6年の4,333件まで増加しています。警察庁自身も、無店舗型性風俗特殊営業と映像送信型性風俗特殊営業の届出数は継続して増加していると明示しています。営業の裾野が広がるほど、取締りや実態把握の必要性も高まると考えるのが自然です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              つまり、「これまで摘発を聞いたことがないから問題ない」というより、市場拡大に伴って、今後も実態把握の対象になりやすい分野と見るべきです。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 無届営業になりやすい典型ケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 個人が副業として始めるケース</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              典型的なのは、個人が副業として始め、営業としての自覚が薄いまま有料販売や配信を続けてしまうケースです。本人としては「少額の副収入」「趣味の延長」という認識でも、外部から見れば、会員を募り、販売ページを用意し、対価を得て性的映像を見せる営業になっていることがあります。届出の要否は本人の主観ではなく、営業実態で判断されます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 外部プラットフォームなら問題ないと考えるケース</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              次に多いのが、外部プラットフォームを使っているため問題ないと考えるケースです。しかし、警視庁はホームページごとの届出を案内しており、実務上は、どのページ・どのアカウントで営業しているかが問題になります。サービス基盤を利用していることと、自身が営業していないことは同義ではありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. 最初は一般向けでも途中で成人向けに寄っていくケース</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              開始当初は一般向けコンテンツが中心でも、途中から成人向け動画や画像が収益の中心になることがあります。この場合、開始時点の認識のまま「届出は不要」と考え続けるのは適切ではありません。営業実態が変われば、法的な位置付けも変わり得ます。警視庁が変更届関係の様式を公表していることからも、開始後の変更を見直す制度になっていることが分かります。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 無届営業かもしれないときに見直すべきポイント
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-1. コンテンツ内容</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                最初に見直すべきは、何を見せているかです。性的な行為を表す場面に当たるのか、裸体姿態に当たるのか、専ら性的好奇心をそそる目的で見せていると評価されるのかを確認します。これは警察庁解釈運用基準の中心部分です。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-2. 有料性と継続性</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                次に、有料で継続提供しているかを見ます。月額課金、サブスク、会員制、単品の継続販売などは、営業性を強める要素です。「少額だから」「本業ではないから」という事情だけで対象外になるわけではありません。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-3. 営業主体と事務所</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                最後に、誰が営業主体で、どこを事務所としているかを見直します。警視庁の必要書類案内からも分かるように、届出はオンライン上のページだけで完結せず、現実の営業主体と事務所の整理が前提です。個人か法人か、賃貸物件か自己所有か、使用権原をどのように示すかも含めて確認すべきです。
              </p>
            </div>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 必要か不要かの線引きで迷っている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              相談の必要性が高いのは、自身の営業が届出対象かどうかの線引きで迷っている場合です。一般向け要素と成人向け要素が混在している、複数ページを使っている、画像と動画が混在しているなど、境界事例では自己判断が難しくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. すでに始めている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              すでに配信や販売を始めている場合も、早めの相談が重要です。無届営業の状態が続くほど、後から整理する負担とリスクは増えます。開始前相談より心理的な負担はありますが、後回しにするメリットは通常ありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 名義や事務所の整理に不安がある</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              個人で進めるべきか法人で進めるべきか、現在の物件を事務所にしてよいか、賃貸契約との整合は取れているかなど、営業主体と事務所に不安があるなら、届出前に整理することが重要です。ここは単なる書類作成ではなく、事業設計そのものに関わります。
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
              映像送信型性風俗特殊営業の無届営業は、制度上明確に問題となる行為です。警察庁は、性的映像をネットで見せる営業をこの類型として位置付け、警視庁はホームページごとの届出と必要書類を公表しています。つまり、対象になる営業を無届のまま始めることは、制度の前提を外れて営業することになり、違法リスクを抱えることになります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              罰則面でも、警察庁の公式資料では無届営業に対する重い刑事罰が説明されており、風営法には違反類型に応じた拘禁刑・罰金の条項が置かれています。さらに、警察庁統計では、令和6年に「無届営業・届出書の虚偽記載等」で15件・11人が検挙されており、個別報道が多くないからといって安全とは言えません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              自身の営業が届出対象か分からない、すでに始めている、名義や事務所の整理に不安があるという場合は、早めに行政書士へ相談することを推奨します。初期段階で営業実態、ページ構成、営業主体、事務所を整理することが、刑事・行政上のリスクを低減し、適切に運営を続けるための基礎になります。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
