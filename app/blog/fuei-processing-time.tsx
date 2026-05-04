// app/blog/fuei-processing-time.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-processing-time",
  title: "映像送信型性風俗特殊営業の届出は何日でできる？営業開始までの期間を解説",
  description:
    "映像送信型性風俗特殊営業の届出に何日かかるのかを行政書士がわかりやすく解説。営業開始までの期間の考え方、事前準備で時間がかかるポイント、個人と法人の違い、余裕を持つべきスケジュール感を整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 届出 何日",
    "映像送信型性風俗特殊営業 営業開始 期間",
    "風営法 届出 期間",
    "映像送信型 10日前",
    "性風俗 届出 スケジュール",
    "行政書士",
  ],
  ogImage: "/fuei-processing-time-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-05T00:00:00+09:00",
  modifiedTime: "2026-05-05T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-05-05",
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
          <li>映像送信型性風俗特殊営業の届出で「10日前」というルールの意味</li>
          <li>提出前の準備で時間がかかりやすい3つのポイント</li>
          <li>個人と法人の準備期間の違い</li>
          <li>営業開始までの現実的なスケジュールの立て方</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理　営業開始には「10日前までの届出」が必要</a></li>
          <li><a href="#sec2" className="hover:underline">そもそも映像送信型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec3" className="hover:underline">期間がかかるポイント1　営業内容の整理</a></li>
          <li><a href="#sec4" className="hover:underline">期間がかかるポイント2　事務所の確定</a></li>
          <li><a href="#sec5" className="hover:underline">期間がかかるポイント3　必要書類の収集</a></li>
          <li><a href="#sec6" className="hover:underline">提出後の期間はどう考えるべきか</a></li>
          <li><a href="#sec7" className="hover:underline">営業開始までの現実的な考え方</a></li>
          <li><a href="#sec8" className="hover:underline">行政書士に依頼すると期間面でどう変わるか</a></li>
          <li><a href="#sec9" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業の届出を考えている方が、強い関心を持つのが「結局、営業開始まで何日かかるのか」という点です。サイト公開日を決めたい、会員募集の開始時期を決めたい、広告出稿や制作スケジュールを組みたいという場面では、届出の見通しが立たないと全体の計画が組みにくくなります。もっとも、この手続は風俗営業の許可申請のように「標準処理期間が明確に広く知られている手続」とは少し性格が異なり、実務では提出後の処理日数だけでなく、提出前の準備にどれだけ時間がかかるかが非常に重要です。
        </p>
        <p>
          警視庁は、映像送信型性風俗特殊営業について、営業開始届出書、営業の方法を記載した書類、事務所の使用権原を示す書類、住民票、法人の場合の追加書類を必要書類として公表しています。つまり、営業開始までの期間は、警察署への提出後だけでなく、営業内容や事務所の整理、必要資料の収集に左右される構造になっています。
        </p>
        <p>
          また、関連手続である映像送信型性風俗特殊営業届出確認書の再交付については、警察庁が標準処理期間を14日以内とする資料を公表しています。これは営業開始届出そのものの処理期間をそのまま示すものではありませんが、少なくとも警察実務では映像送信型性風俗特殊営業に関する届出書類の処理に一定の日数を見込む考え方があることは分かります。したがって、「今日提出すれば、翌日から必ず営業できる」という前提ではなく、提出前後ともに余裕を持って計画することが重要です。
        </p>
        <p>
          そこで本記事では、映像送信型性風俗特殊営業の届出は何日でできるのかという疑問に対し、法律上の仕組み、実務で日数がかかりやすいポイント、個人と法人の違い、営業開始までの現実的なスケジュール感を、行政書士の視点から分かりやすく整理して解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理　営業開始には「10日前までの届出」が必要
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 法令上は営業開始日の10日前までに届出が必要</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業については、風営法31条の7第1項により、営業を営もうとする者が、事務所の所在地を管轄する公安委員会に営業開始届出書を提出しなければならないとされています。さらに、風営法施行規則58条2項では、この届出書は、当該映像送信型性風俗特殊営業を開始しようとする日の10日前までに提出しなければならないと定められています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              したがって、営業開始届出については、少なくとも営業開始予定日の10日前までに届出を行う必要があります。実務上は、不備なく受理されていることを前提に、届出日から10日を経過した後に営業開始日を設定する、という理解になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 実務では「提出前の準備」の方が長くなりやすい</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              実際に時間がかかりやすいのは、警察署への提出後よりも、提出前の準備です。警視庁が公表している必要書類を見るだけでも、営業開始届出書、営業方法の書類、事務所の使用権原資料、住民票、法人資料が必要です。しかも、これらは単に集めればよいのではなく、営業の実態と整合している必要があります。つまり、書類の枚数よりも、その前提となる営業内容と事務所の整理に日数がかかることが多いのです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-3. 「数日で終わる」と考えるのは危険</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              このため、開業直前になって慌てて手続を始めると、想定より遅れやすくなります。特に、ページ構成が複数ある、外部プラットフォームを使う、法人で始める、事務所候補が複数あるといった案件では、整理に時間を要しやすいです。映像送信型性風俗特殊営業はネット営業ですが、法務上は相当に「事前整理型」の手続だと考えた方が安全です。これは警視庁の必要書類構成から見ても自然な理解です。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. そもそも映像送信型性風俗特殊営業とは何か
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 風営法上の営業類型</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法は、映像送信型性風俗特殊営業を独立した営業類型として定めています。警察庁の解釈運用基準では、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために、電気通信設備を用いて客に見せる営業がこれに当たるとされています。しかも、ここでいう映像には静止画も動画も含まれます。したがって、成人向けライブ配信、会員制サイト、動画・画像のサブスク販売、ダウンロード販売などは、内容と営業実態によってこの類型に当たり得ます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 「ホームページごとの届出」が前提</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しています。これは、会社単位や個人単位だけではなく、どの営業ページ・どの会員ページ・どのサイトを営業単位として整理するかが重要だという意味です。したがって、営業開始までの期間を考えるときも、単に会社情報や個人情報をそろえるだけでは足りず、営業ページの整理そのものに時間がかかることがあります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 期間がかかるポイント1　営業内容の整理
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. どのページを届出対象にするか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業では、最初に「どのページを届出対象にするのか」を決める必要があります。独自サイトだけなのか、外部プラットフォームも使うのか、ブランドごとに分かれているのか、会員ページと告知ページが分かれているのかによって、整理の仕方が変わるからです。警視庁がホームページごとの届出とする以上、この点が曖昧なままだと、営業開始届出書の作成そのものが進みにくくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 一般向けと成人向けが混在</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              運営予定のページに一般向け要素と成人向け要素が混在している場合は、検討に時間がかかりやすくなります。なぜなら、警察庁の解釈運用基準で、営業の内容や意図、実態を踏まえて判断する考え方が示されているためです。事業者は「営業の中心が一般向け」と考えていても、それを明確に説明できなければなりません。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 期間がかかるポイント2　事務所の確定
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 事務所が決まらないと届出先も決まらない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の届出では、事務所の所在地が極めて重要です。風営法施行規則上、届出書は事務所所在地の所轄警察署長を経由して提出する制度となっているため、事務所が決まらないと、所轄警察署も決まりません。つまり、営業開始までの日数は、物件や住所の確定と密接に結び付いています。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 使用権原資料の確認に時間がかかる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警視庁は、必要書類として、事務所の使用について権原を有することを疎明する書類を挙げ、使用承諾書、賃貸契約書の写し、建物に係る登記事項証明書などを例示しています。持家なら比較的整理しやすいこともありますが、賃貸、自宅、レンタルオフィスなどでは契約内容や承諾の確認に時間がかかることがあります。ここで時間を要する案件は少なくありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 住所があるだけでは足りない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              事務所は単なる郵便受けではなく、届出上の営業の本拠です。そのため、「住所さえあれば提出できる」と考えると危険です。契約上その用途で使えるか、使用権原を資料で示せるかが必要になります。この確認不足が、営業開始までの遅れの大きな原因になりやすいです。これは警視庁が事務所資料を必須書類としていることからも明らかです。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 期間がかかるポイント3　必要書類の収集
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 個人は比較的軽いが、準備ゼロではない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              個人で届出する場合は、住民票と事務所資料が中心になります。それでも、住民票の記載事項、事務所資料との整合、営業ページとの整理が必要になるため、「直ちに全部そろう」と考えない方が安全です。特に、事務所の権原資料で時間がかかると、住民票だけ取れても手続が進まないことがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 法人は役員数次第で時間差が大きい</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              法人の場合は、定款、法人登記事項証明書、役員全員の住民票が必要になります。役員が多い会社では、住民票収集だけでも想定以上に時間がかかることがあります。さらに、定款目的や登記内容との整合も意識する必要があるため、個人案件より準備期間を長めに見た方がよいです。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 提出後の期間はどう考えるべきか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 営業開始日は届出日から10日後以降で考える</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の営業開始届出については、風営法31条の7第1項により届出義務が定められ、風営法施行規則58条2項により、営業を開始しようとする日の10日前までに届出書を提出しなければならないとされています。したがって、営業開始日は、届出日と同日に設定するのではなく、少なくとも届出後10日を経過した日以降に設定する必要があります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              ただし、これは「書類に不備があっても10日後に必ず営業できる」という意味ではありません。届出書や添付書類が整っており、届出が適切に受理されていることが前提になります。そのため、営業開始日を決める際は、10日という法令上の期間に加えて、提出前の確認や補正対応の余裕も見込むことが重要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 再交付手続の14日以内とは分けて整理する</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              関連手続である映像送信型性風俗特殊営業届出確認書の再交付については、警察庁の標準処理期間資料で14日以内とされています。しかし、これは営業開始届出そのものの提出期限や営業開始可能時期を直接定めるものではありません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              営業開始届出について中心になるのは、風営法施行規則58条2項の「営業開始日の10日前までに提出」というルールです。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 営業開始までの現実的な考え方
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 「提出日」ではなく「準備開始日」から逆算する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              実務では、営業開始日から逆算して「何日前に提出するか」だけを考えるのでは不十分です。むしろ、営業ページの整理、事務所確定、必要書類収集を始める日から逆算した方が安全です。届出が必要な営業なのに、サイト公開日や広告開始日を先に決めてしまうと、準備不足でスケジュールが崩れやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 急ぐ案件ほど早めに法務へ着手する</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              公開日が決まっている案件、広告や制作の外注が入っている案件、法人案件、物件がまだ固まっていない案件ほど、早期に法務へ着手することが有効です。映像送信型性風俗特殊営業は、外形以上に「準備段階で差がつく」手続だからです。書類作成そのものは後半工程でも、前提整理は初期段階で行う必要があります。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. 行政書士に依頼すると期間面でどう変わるか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">8-1. 準備の迷いを減らしやすい</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              行政書士に依頼する最大のメリットは、期間が必ず大きく短縮されることではなく、準備段階の迷いを減らしやすいことです。営業ページの単位、事務所、必要資料、個人か法人かの整理を並行して進めやすくなるため、無駄な手戻りを防ぎやすくなります。警視庁が公表している必要書類は明確でも、申請者の案件でどう整理するかは別問題だからです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">8-2. 開業スケジュールを組みやすくなる</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              特に、複数ページ案件、法人案件、レンタルオフィス利用案件、外部プラットフォーム併用案件では、スケジュールの見通しを立てやすくなる点に意味があります。何日で終わるかを一律に言い切りにくい手続だからこそ、段取りの質が全体のスピードを左右します。
            </p>
          </div>
        </section>

        {/* sec9 */}
        <section id="sec9" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            9. まとめ
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-7 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の届出では、法令上、営業開始届出書を営業開始予定日の10日前までに提出しなければならないとされています。そのため、営業開始日は、少なくとも届出日から10日を経過した後に設定する必要があります。ただし、これは「届出書を出せば必ず10日後に営業できる」という意味ではなく、届出書や添付書類に不備がなく、適切に受理されていることが前提になります。関連する再交付手続については、警察庁が14日以内という標準処理期間を示していますが、営業開始届出については、まずこの「10日前までの届出」という法令上のルールを中心に整理することが重要です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              もっとも、実務上は提出後の期間だけでなく、提出前の準備に時間がかかるケースが少なくありません。特に、営業ページの整理、事務所の確定、必要書類の収集は、営業開始までの大きなボトルネックになります。警視庁の必要書類一覧を見ても、営業方法、事務所資料、住民票、法人資料など、営業実態と書類の整合性を確認すべき構造であることが分かります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              そのため、営業開始日やサイト公開日を先に固定するのではなく、まず届出準備の全体像を整理し、そこから逆算してスケジュールを組むことが重要です。個人より法人の方が準備資料は多く、物件や営業ページの整理に迷いがある案件ほど余裕を見た方が安全です。急ぎの案件や、複数ページ・法人案件・自宅やレンタルオフィス利用などで不安がある場合は、早めに行政書士へ相談し、準備段階の手戻りを減らすことが現実的です。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」「性風俗関連特殊営業（様式一覧）」、警察庁「標準処理期間資料」、e-Gov法令検索「風営法」「施行規則」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
