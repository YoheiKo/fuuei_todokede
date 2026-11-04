// app/blog/kosai-club-todokede.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const meta: PostMeta = {
  slug: "kosai-club-todokede",
  title: "交際クラブの開業に届出は必要？東京都の条例とマッチングアプリ型の注意点を行政書士が解説",
  description:
    "交際クラブ（デートクラブ）の開業に届出が必要かを行政書士がわかりやすく解説。東京都条例の対象になる要件、店舗なしで開業できるか、マッチングアプリ型の注意点、届出の対象外になるケース、開業前に知っておきたいリスクを整理します。",
  keywords: [
    "交際クラブ 開業 届出",
    "デートクラブ営業 届出",
    "東京都デートクラブ営業等の規制に関する条例",
    "インターネット異性紹介事業 届出",
    "交際クラブ 事務所方式",
    "行政書士",
  ],
  ogImage: "/dateclub_eye.png",
  robots: "index, follow",
  publishedTime: "2026-11-04T00:00:00+09:00",
  modifiedTime: "2026-11-04T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-11-04",
  faqs: [
    {
      question: "東京都以外で交際クラブを開業する場合も届出は必要ですか？",
      answer:
        "この条例は、東京都内に営業所や事務所を設ける場合に適用されます。デートクラブ営業そのものを規制する条例は東京都にしかないとされていますが、他の道府県でも、仕組みによっては風営法や出会い系サイト規制法などの対象になります。開業する地域の規制を個別に確認してください。",
    },
    {
      question: "男性会員から入会金を受け取ると「対価」に当たりますか？",
      answer:
        "条例でいう「対価」は、会員同士の間で受け渡されるものと読むのが自然です。事業者が受け取る入会金や紹介料は、営業としての収益にあたります。ただし公的な解説で明示されているわけではないため、判断に迷う場合は事前に確認しておくと安心です。",
    },
    {
      question: "自宅を事務所にして届出できますか？",
      answer:
        "一律に不可とはされていませんが、物件の使用権原を示す書類や事務所としての実態が求められます。賃貸物件であれば、貸主の承諾が得られるかも確認が必要です。具体的な可否は、管轄の警察署に事前に確認することをおすすめします。",
    },
    {
      question: "届出に手数料はかかりますか？",
      answer:
        "警視庁の案内ページには、手数料についての記載が見当たりません。手数料の有無や提出方法は、届出先となる管轄警察署に確認してください。",
    },
  ],
};

export default function Content() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-lg">
      <Breadcrumb items={[{ label: "実務コラム", href: "/blog" }, { label: meta.title }]} />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm bg-violet-100 text-violet-700 font-bold px-2 py-0.5 rounded-full">
            {meta.cat}
          </span>
          <time className="text-sm text-gray-400">{meta.date}</time>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
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
        <p className="font-bold text-lg text-violet-700 mb-2">この記事でわかること</p>
        <ul className="space-y-1 text-base text-gray-700 list-disc pl-5">
          <li>交際クラブが東京都の条例の対象になる要件と、「対価」の意味</li>
          <li>店舗を持たずに事務所だけで開業できるか</li>
          <li>マッチングアプリ型やLINEで連絡させる形にした場合の注意点</li>
          <li>届出の対象にならない形、開業前に知っておきたいリスク</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-lg mb-3">目次</h2>
        <ol className="space-y-1.5 text-base text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">まず結論　東京都で交際クラブを開くなら、届出が必要になることが多い</a></li>
          <li><a href="#sec2" className="hover:underline">店舗なし・事務所だけで開業できる？</a></li>
          <li><a href="#sec3" className="hover:underline">マッチングアプリ型・LINEで連絡させる場合はどうなる？</a></li>
          <li><a href="#sec4" className="hover:underline">こんな形はデートクラブ営業にならない？</a></li>
          <li><a href="#sec5" className="hover:underline">無届営業・売春防止法のリスクと注意点</a></li>
          <li><a href="#sec6" className="hover:underline">女性会員の集め方で注意すること</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談するメリット</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
          <li><a href="#sec9" className="hover:underline">よくある質問</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        交際クラブを始めたいと考えている方の多くが、最初に気になるのは「そもそも届出は必要なのか」という点です。マッチングアプリのような仕組みにしたい、店舗は持たずに小さく始めたい、と考える方も少なくありません。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ただし、重要なのは、届出が必要かどうかは「交際クラブ」という名称やサービスの見せ方ではなく、実際の仕組みで決まるという点です。東京都には「東京都デートクラブ営業等の規制に関する条例」があり、一定の要件を満たす営業は、警察署を経由して東京都公安委員会に届け出る必要があります。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        本記事では、交際クラブの開業前に抱きやすい疑問に順番に答えながら、届出が必要になる場面と、開業前に注意したいポイントを行政書士が解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          1. まず結論　東京都で交際クラブを開くなら、届出が必要になることが多い
        </h2>

        <div className="my-10">
          <Image
            src="/images/sample/dateclub_4conditions.png"
            alt="交際クラブが東京都デートクラブ営業等の規制に関する条例の対象になる4つの要件"
            width={3840}
            height={2160}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1-1. 条例の対象になるかは4つの要件で考える</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          条例では、デートクラブ営業を「客と他の異性の客との間における対価を伴う交際を仲介する営業」と定めています（出会い系喫茶は除かれます）。分解すると、次の4つの要件になります。
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-gray-700 leading-relaxed mb-4">
          <li>客と他の異性の客との間の交際であること</li>
          <li>対価を伴うこと</li>
          <li>それを仲介する営業であること</li>
          <li>出会い系喫茶に当たらないこと</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          会員同士の交際に金銭のやり取りがある一般的な交際クラブは、この4つを満たしやすい形です。都内に営業所や事務所を設けて営む場合は、営業開始の10日前までに届出が必要になります。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1-2. 「対価」は会員同士の間で受け渡されるもの</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          誤解されやすいのが「対価」の意味です。条文の組み立てからすると、ここでいう対価は、男性会員から女性会員に渡される交際手当のように、客同士の間で受け渡されるものと読むのが自然です。事業者が受け取る入会金や紹介料は、「営業」として収益を得ている部分にあたります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          なお、条例には「対価」の定義規定がなく、この点を明示した公的な解説も見当たりません。判断に迷う設計の場合は、事前に確認しておくことが重要です。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1-3. 名称が「交際クラブ」かどうかは関係ない</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          「交際クラブ」は法令上の用語ではありません。どのような名称を使っていても、上の4要件を満たせば条例の対象になり得ます。反対に、「交際クラブ」と名乗っていても、仕組みによっては対象外となることもあります（4章で解説します）。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          2. 店舗なし・事務所だけで開業できる？
        </h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2-1. 事務所方式なら店舗は不要。ただし事務所は1か所必要</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          届出には、自前の店舗に会員を迎える「営業所方式」と、店舗を持たない「事務所方式」があります。事務所方式であれば、会員が出入りする店舗は必要ありません。ただし、条例は「営業所又は事務所を設けて」営むことを前提としているため、事務所は最低1か所必要です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          営業所と事務所の違いは条例に定義がありませんが、実務上は、会員との面談や紹介の場を自社で設けるかどうかが目安になります。面談をホテルのラウンジなど外部で行う形であれば、事務所方式として整理しやすくなります。最終的な判断は管轄の警察署が行うため、事前相談で確認しておくと安心です。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2-2. 設置禁止区域の対象は「営業所」</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          条例では、住居系の用途地域や、学校・図書館・病院などの周囲200m以内に営業所を設けることを禁止しています。この規制の対象は「営業所」で、事務所は条文上の対象に含まれていません。物件の選択肢が広がるため、これから開業する方には事務所方式が現実的です。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、事務所でも物件の使用権原を示す書類や、周囲の略図などの添付は必要です。自宅やレンタルオフィスを事務所にしたい場合は、物件の契約前に、使用承諾が得られるか、事務所としての実態を説明できるかを確認しておきましょう。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          3. マッチングアプリ型・LINEで連絡させる場合はどうなる？
        </h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3-1. インターネット異性紹介事業の4要件</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          会員のプロフィールをウェブサイトやアプリで公開し、会員同士が連絡を取り合える仕組みにする場合は、デートクラブの条例とは別に、出会い系サイト規制法の「インターネット異性紹介事業」に当たるかを検討する必要があります。警察庁の解釈基準によると、次の4つをすべて満たすと該当します。
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-gray-700 leading-relaxed mb-4">
          <li>異性との交際を希望する人の情報を、ウェブサイト（アプリを含む）に掲載する</li>
          <li>その情報を公衆が閲覧できる（会員制でも、誰でも会員になれれば該当）</li>
          <li>閲覧者と掲載者が1対1で連絡を取り合える（事業者がメッセージを中継する場合も含む）</li>
          <li>有償・無償を問わず、反復継続して行う</li>
        </ol>
        <p className="text-gray-700 leading-relaxed mb-4">
          こちらは対価の有無を問いません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          なお、この2つは択一の関係ではありません。会員同士の対価を伴う交際を仲介しながら、サイトやアプリで会員同士が連絡を取り合える仕組みも設けている場合は、デートクラブ営業とインターネット異性紹介事業の両方に当たり、届出も両方必要になります。交際クラブでは、こうした形で2つを併せて届け出るケースも少なくありません。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3-2. 分かれ目は「会員同士が直接連絡できるか」</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          交際クラブで特に問題になるのは、3つ目の要件です。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-base border-collapse">
            <thead>
              <tr className="bg-violet-50">
                <th className="border border-gray-200 px-3 py-2 text-left font-bold text-gray-800">仕組み</th>
                <th className="border border-gray-200 px-3 py-2 text-left font-bold text-gray-800">考え方</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">サイト内でメッセージや「いいね」を送り合える</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当する</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">事業者がメッセージを中継する</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当する</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">サイトはあるが、連絡や日程調整はすべて事業者を通す</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当しにくい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">プロフィール欄や成立後の案内でLINEのIDを伝える</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当する可能性が高い</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">初回は事業者が調整し、会った後に本人同士で連絡先を交換する</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当しにくい</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">サイトはなく、スタッフが個別に紹介する</td>
                <td className="border border-gray-200 px-3 py-2 align-top leading-relaxed">該当しない</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          LINE公式アカウントやメールマガジンで会員のプロフィールを一斉に配信する場合も、「公衆が閲覧できる」に当たり得るとされています。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3-3. 該当すれば届出は2つになる</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          インターネット異性紹介事業に当たる場合は、事業開始の前日までに別途届出が必要です。デートクラブの届出が営業所・事務所ごとであるのに対し、こちらは事業者ごとに1件です。欠格事由や年齢確認の方法が法律で定められている点も異なります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          4. こんな形はデートクラブ営業にならない？
        </h2>

        <div className="my-10">
          <Image
            src="/images/sample/date_3_cases.png"
            alt="デートクラブ営業に当たらない形と、代わりに問題となる規制の整理"
            width={1536}
            height={2817}
            className="w-[85%] mx-auto h-auto rounded-lg"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4-1. 女性会員に事業者が報酬を払う場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          女性に事業者が報酬を支払う仕組みにすると、女性は「客」ではなく事業者側で働く人（従業者）と評価されやすくなります。その場合、「客と他の異性の客」という要件から外れ、デートクラブ営業には当たらない可能性があります。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ただし、これは「規制がない」という意味ではありません。性的な接触を伴うサービスであれば、風営法の無店舗型性風俗特殊営業の問題になります。性的なサービスがなくても、働き方によっては労働法上の問題が生じます。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4-2. 「キックバック」などの名目で支払う場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          会員同士で対価を受け渡しつつ、事業者が女性に別途お金を払う形もあります。交際と無関係の特典であれば「客」のままと考えやすい一方、交際1件ごとの支払いや出勤日・ノルマの指示があると、従業者に近づきます。判断の目安は次のとおりです。
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed mb-4">
          <li>支払いが交際の回数や時間に連動しているか</li>
          <li>実費の補填か、報酬か</li>
          <li>事業者による指示や拘束があるか</li>
          <li>対価の金額を当事者が決めるか、事業者が決めて受領・分配するか</li>
          <li>契約が会員規約か、業務委託・雇用か</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4-3. 会員同士の対価がない場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          会員間で金銭のやり取りがなく、ネット上の仕組みもない場合は、デートクラブ営業にもインターネット異性紹介事業にも当たりません。ただし、結婚を目的とした紹介で、期間が2か月を超え、支払総額が5万円を超える契約は、特定商取引法の「結婚相手紹介サービス」としての規制を受けます。また、会員同士で受け渡すお金を「交通費」などの名目にして、名目上「対価なし」としていても、実態で判断される点に注意が必要です。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          5. 無届営業・売春防止法のリスクと注意点
        </h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5-1. 条例の罰則</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          届出をせずに営業した場合や虚偽の届出をした場合は、30万円以下の罰金の対象です。18歳未満の者を客にしたり、客に接する業務に従事させたりした場合は、6月以下の拘禁刑又は50万円以下の罰金の対象となり、営業停止などの行政処分を受ける可能性もあります。会員の年齢確認は確実に行いましょう。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5-2. 売春防止法との関係</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          交際クラブで最も注意すべきなのが売春防止法です。売春の周旋は、2年以下の拘禁刑又は5万円以下の罰金の対象です。過去には、男性会員から入会金や紹介料を受け取り、交際の対価は会員同士で直接受け渡す仕組みの交際クラブが、周旋の容疑で摘発されたと報じられています。お金の受け渡しを会員に任せていても、責任を免れるとは限りません。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          また、売春防止法については見直しの議論が進んでいます。2026年9月、法務省の有識者検討会は、現在は罰則のない「買う側」の勧誘行為に規制を設けるべきとする報告書をまとめ、法務省は改正法案の国会提出に向けた検討を進めています（2026年11月時点）。今後の動向にも注意が必要です。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5-3. 広告やサイトの表現にも注意</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          会員同士で対価が発生するサービスで、性的な関係を連想させる交際区分やキャッチコピーを使うと、売春の周旋・誘引を疑われる材料になり得ます。「食事のみ」「定期的に会いたい」「長期的なお付き合い」など、交際の頻度や期間を軸にした表現にするのが無難です。「会うかどうかは本人の自由」「断ってもペナルティはない」と明記しておくことも、女性が「客」であることを示すうえで役立ちます。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          6. 女性会員の集め方で注意すること
        </h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6-1. 路上での声かけ・スカウト</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          東京都の迷惑防止条例では、公共の場所で、身体や衣服をつかむ、進路に立ちふさがるといった執拗な勧誘を、業態を問わず禁止しています。さらに、区によっては独自の客引き防止条例があります。渋谷区、江戸川区、足立区などのように業種を限定せずに勧誘を規制し、過料を定めている区もあります（2026年11月時点で確認できた範囲）。活動する区の条例を事前に確認しておきましょう。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6-2. ビラなどの配布</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          デートクラブの条例では、営業所の設置禁止区域にあたる場所での広告文書の配布や、18歳未満の者への配布が禁止されています。委託先の業者に配布を任せる場合も、事業者として指導する義務があります。
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6-3. 紹介料を払って集める場合</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          令和7年の風営法改正で、性風俗店が、従業者になろうとする人の紹介を受けて紹介料を払うこと（いわゆるスカウトバック）が禁止されました。デートクラブの条例に直接は適用されませんが、実態が無店舗型性風俗特殊営業と評価されれば対象になり得ます。また、人材紹介会社を通じて女性を「採用」する形は、女性が「客」であるというデートクラブの前提と矛盾します。広告費を「入会1人あたり○円」の成果報酬で払う形も、紹介の対価と見られるおそれがあるため注意が必要です。
        </p>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          7. 行政書士に相談するメリット
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          交際クラブの開業では、届出書類の準備そのものよりも、「どの規制の対象になるか」を事前に整理することが重要です。行政書士に相談すると、次のような点をまとめて確認できます。
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed mb-4">
          <li>サービスの仕組みが、デートクラブ営業・インターネット異性紹介事業のどちらに当たるか、両方か</li>
          <li>事務所方式で届け出るための物件の考え方と、使用承諾の取り方</li>
          <li>会員規約や同意書に入れておくべき項目</li>
          <li>管轄警察署との事前相談の進め方とスケジュール</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-4">
          デートクラブ営業開始届出の手数料は次のとおりです。
        </p>

        {/* 料金表：内容幅で中央配置・セル内は左寄せ。注記は表の左端にそろえる */}
        <div className="my-6 flex justify-center">
          <div className="inline-block max-w-full overflow-x-auto">
            <table className="w-auto text-base border-collapse">
              <thead>
                <tr className="bg-violet-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold text-gray-800">サービス内容</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold text-gray-800">手数料（税別）</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-left align-top leading-relaxed">デートクラブ営業開始届出の書類作成のみ</td>
                  <td className="border border-gray-200 px-4 py-2 text-left align-top leading-relaxed">50,000円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-left align-top leading-relaxed">デートクラブ営業開始届出の書類作成と届出代行</td>
                  <td className="border border-gray-200 px-4 py-2 text-left align-top leading-relaxed">70,000円</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              ※営業所のない事務所方式の場合の料金です。
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          その他のサービスの料金は
          <Link href="/#pricing" className="text-violet-700 hover:underline">料金プラン</Link>
          ページでご確認いただけます。すでに営業を始めている場合も、早めのご相談で対応の選択肢が広がります。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          8. まとめ
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            東京都で交際クラブを開業する場合、会員同士の対価を伴う交際を仲介する仕組みであれば、条例に基づく届出が必要になることが多いです。判断は名称ではなく実態で行われ、店舗を持たない事務所方式でも開業できます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            一方で、会員同士が直接連絡できるサイトやアプリを使う場合は別の届出が必要になることがあり、女性への報酬の払い方によっては、デートクラブの枠から外れて別の規制の対象になることもあります。売春防止法や年齢確認、会員の集め方にも注意が必要です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            迷ったときは、開業前の段階で行政書士へ相談し、仕組みを整理しておくことが現実的です。
          </p>
        </div>
      </section>

      {/* sec9 よくある質問 */}
      <section id="sec9" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-200 pb-2">
          9. よくある質問
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              Q1. 東京都以外で交際クラブを開業する場合も届出は必要ですか？
            </h3>
            <p className="text-gray-700 leading-relaxed">
              この条例は、東京都内に営業所や事務所を設ける場合に適用されます。デートクラブ営業そのものを規制する条例は東京都にしかないとされていますが、他の道府県でも、仕組みによっては風営法や出会い系サイト規制法などの対象になります。開業する地域の規制を個別に確認してください。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              Q2. 男性会員から入会金を受け取ると「対価」に当たりますか？
            </h3>
            <p className="text-gray-700 leading-relaxed">
              条例でいう「対価」は、会員同士の間で受け渡されるものと読むのが自然です。事業者が受け取る入会金や紹介料は、営業としての収益にあたります。ただし公的な解説で明示されているわけではないため、判断に迷う場合は事前に確認しておくと安心です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              Q3. 自宅を事務所にして届出できますか？
            </h3>
            <p className="text-gray-700 leading-relaxed">
              一律に不可とはされていませんが、物件の使用権原を示す書類や事務所としての実態が求められます。賃貸物件であれば、貸主の承諾が得られるかも確認が必要です。具体的な可否は、管轄の警察署に事前に確認することをおすすめします。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">
              Q4. 届出に手数料はかかりますか？
            </h3>
            <p className="text-gray-700 leading-relaxed">
              警視庁の案内ページには、手数料についての記載が見当たりません。手数料の有無や提出方法は、届出先となる管轄警察署に確認してください。
            </p>
          </div>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
