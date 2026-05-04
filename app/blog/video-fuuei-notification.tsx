// app/blog/video-fuuei-notification.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "video-fuuei-notification",
  title: "映像送信型性風俗特殊営業の届出手順｜行政書士が完全解説",
  description:
    "映像送信型性風俗特殊営業の届出手順を行政書士がわかりやすく解説。必要書類、事務所要件、費用の考え方、届出確認書受領までの期間の目安を整理し、ライブ配信・アダルトサイト運営の開業準備をサポートします。",
  keywords: [
    "映像送信型性風俗特殊営業 届出",
    "ライブ配信 届出手順",
    "アダルトサイト 届出",
    "風営法 届出 必要書類",
    "映像送信型 費用",
    "映像送信型 期間",
    "行政書士",
  ],
  robots: "index, follow",
  publishedTime: "2026-04-02T00:00:00+09:00",
  modifiedTime: "2026-04-02T00:00:00+09:00",
  ogImage: "/video-fuuei-notification-eyecatch.jpg",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-04-02",
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
          <li>映像送信型性風俗特殊営業の届出が必要になるケースと判断ポイント</li>
          <li>届出手順の全体像（整理→事務所確定→書類収集→作成→提出→確認書受領）</li>
          <li>必要書類の詳細と個人・法人それぞれの注意点</li>
          <li>費用の考え方と期間の目安</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">映像送信型性風俗特殊営業の届出が必要になるケース</a></li>
          <li><a href="#sec2" className="hover:underline">映像送信型性風俗特殊営業は許可ではなく届出</a></li>
          <li><a href="#sec3" className="hover:underline">届出手順の全体像</a></li>
          <li><a href="#sec4" className="hover:underline">必要書類を詳しく解説</a></li>
          <li><a href="#sec5" className="hover:underline">費用の考え方</a></li>
          <li><a href="#sec6" className="hover:underline">期間の目安</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に依頼するメリット</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業を始めようとすると、多くの方が最初に悩むのが「何から着手すればよいのか分からない」という点です。ライブ配信、アダルトサイト運営、会員制の画像・動画販売などを事業として始めたいと思っても、風営法上の位置づけ、届出の流れ、必要書類、どれくらいの期間がかかるのかが見えにくく、手続が後回しになりやすいです。しかし、映像送信型性風俗特殊営業は、風営法上きちんと届出制度が設けられている営業類型であり、適法に始めるには開始前の準備が重要です。
        </p>
        <p>
          実際、警察庁の公表資料では、映像送信型性風俗特殊営業の届出数は増加傾向にあり、令和2年の2,641件から令和6年には4,333件まで伸びています。これは、この分野の事業者が増えていることを示すと同時に、法務対応の需要が高まっていることも意味します。
        </p>
        <p>
          そこで本記事では、映像送信型性風俗特殊営業の届出手順を中心に、必要書類、費用の考え方、準備から届出確認書の受領までの期間の目安を、行政書士の視点から分かりやすく整理して解説します。これから開業する方が、そのまま準備リストとして使えるように構成しています。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 映像送信型性風俗特殊営業の届出が必要になるケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. そもそもどんな営業が対象か</h3>
          <div className="space-y-4 mb-6">
            <p>
              風営法は、映像送信型性風俗特殊営業を、専ら性的好奇心をそそるために、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業として定めています。これは、いわゆる店舗型の営業ではなく、インターネット等を通じて性的コンテンツを有料で提供する営業を念頭に置いた類型です。
            </p>
            <p>
              実務上は、アダルト系のライブ配信、会員制サイトでの画像・動画販売、有料サブスク型のコンテンツ提供、独自サイトでの販売などが典型例になります。名称や売り方が違っていても、営業の実態がこの定義に当てはまるのであれば、届出を検討すべきです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「個人だから不要」とは限らない</h3>
          <div className="space-y-4">
            <p>
              この分野でよくある誤解が、「個人でやっているだけなので届出は不要ではないか」という考え方です。しかし、届出の要否は、個人か法人かではなく、営業内容が法の定義に当てはまるかどうかで判断されます。個人であっても、継続して有料配信や有料販売を行っていれば、対象になる可能性があります。
            </p>
            <p>
              逆に、法人だから必ず大がかりな審査があるというわけでもありませんが、法人の場合は添付書類が増えるため、個人より準備に時間がかかる傾向があります。最初の段階で、自分の営業形態がどこに当たるのかを整理しておくことが大切です。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 映像送信型性風俗特殊営業は許可ではなく届出
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 許可制との違い</h3>
          <div className="space-y-4 mb-6">
            <p>
              映像送信型性風俗特殊営業は、風俗営業のような許可制ではなく、届出制です。警察庁の資料でも、性風俗関連特殊営業は、届出制によりその実態を把握し、規制を課して取り締まる対象と整理されています。
            </p>
            <p>
              このため、「許可が下りるまで営業できない」という理解ではなく、「必要な届出をしたうえで営業を始める」という位置づけになります。ただし、届出制だから簡単という意味ではありません。必要書類や事務所の整理が不十分だと、提出までに時間がかかったり、書類の再準備が必要になったりすることがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. ホームページごとの届出が前提</h3>
          <div className="space-y-4">
            <p>
              警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しています。つまり、営業の実態がどのホームページ、どのURL、どの導線で行われているのかを踏まえて整理することが重要です。
            </p>
            <p>
              ここは実務上重要なポイントです。たとえば、ひとつの事業者が複数のサイトや販売ページを運営している場合、どこまでを一体の営業として扱うのかを最初に検討する必要があります。見た目には同じブランドでも、URLや運営構造が分かれていると、整理の仕方が変わることがあります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 届出手順の全体像
          </h2>

          <div className="space-y-6">
            {[
              { step: "STEP 1", title: "営業実態を整理する", desc: "誰が営業主体なのか、どのホームページで営業するのか、本拠となる事務所はどこか、個人名義でいくのか法人名義でいくのかといった前提事項を整理します。この整理が曖昧なまま書類作成に入ると、後からすべてやり直しになることがあります。" },
              { step: "STEP 2", title: "事務所を確定する", desc: "届出に記載する事務所を確定します。単に住所があればよいわけではなく、その場所を届出上の事務所として使えることを示す資料（使用承諾書・賃貸契約書・登記事項証明書など）が必要です。" },
              { step: "STEP 3", title: "必要書類を収集する", desc: "営業開始届出書、営業の方法を記載した書類、事務所の使用権原を疎明する書類、住民票を収集します。法人の場合は定款・法人登記事項証明書・役員全員の住民票も必要です。" },
              { step: "STEP 4", title: "届出書と営業方法の書類を作成する", desc: "警視庁が公開している様式・記載例をもとに届出書本体と営業の方法を記載した書類を作成します。実際の営業内容と一致した記載にすることが重要です。" },
              { step: "STEP 5", title: "管轄警察署へ提出する", desc: "書類が整ったら、事務所を管轄する警察署の窓口へ提出します。提出前に説明できる状態に整理しておくことが望ましいです。" },
              { step: "STEP 6", title: "届出確認書を受け取る", desc: "届出が受理されると、映像送信型性風俗特殊営業届出確認書が交付されます。届出日、氏名・名称、呼称、事務所所在地などが記載された重要書類で、適切に保管が必要です。" },
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
            4. 必要書類を詳しく解説
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 営業開始届出書</h3>
          <div className="space-y-4 mb-6">
            <p>
              営業開始届出書は、届出の中心となる書類です。警視庁が公開している別記様式第31号がこれに当たります。氏名又は名称、事務所所在地、広告又は宣伝をする場合に使用する呼称など、営業の基本情報を記載します。
            </p>
            <p>
              この書類で重要なのは、単に空欄を埋めることではなく、今後の実際の営業内容と齟齬がないようにすることです。後でホームページの構成や名義を変える予定がある場合は、届出後の変更対応も視野に入れておく必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 営業の方法を記載した書類</h3>
          <div className="space-y-4 mb-6">
            <p>
              営業の方法を記載した書類は、実務上非常に重要です。どのような方法で営業するのかを具体的に整理する必要があり、「ライブ配信をします」といった抽象的な記載ではなく、実態が伝わるようにまとめることが重要です。
            </p>
            <p>
              複数サイトを併用する場合や、配信・販売の導線が複数ある場合には、整理力が問われる部分です。ここが曖昧だと、届出全体の整合性が崩れます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 事務所の使用権原を示す書類</h3>
          <div className="space-y-4 mb-6">
            <p>
              使用承諾書、賃貸契約書の写し、建物の登記事項証明書などが例示されています。どの資料をそろえるべきかは物件の形態によりますが、その場所を届出上の事務所として使用できることを証明する必要があります。
            </p>
            <p>
              賃貸物件の場合は、居住用契約で問題がないか、使用目的に矛盾がないかなどを確認しておく必要があります。安易に住所だけ確保して進めると、後で修正が必要になることがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-4. 住民票と法人書類</h3>
          <div className="space-y-4">
            <p>
              個人の場合は住民票、法人の場合はさらに定款、法人登記事項証明書、役員全員の住民票が必要です。特に法人では役員数が多いほど収集に時間がかかりますし、定款の内容が現状の事業に合っているかも確認しておいた方が安全です。
            </p>
            <p>
              別事業用の法人を使う場合は、定款目的や社内体制が現状に合っていないこともあります。単に会社が存在するだけでは足りず、届出の前提として整合していることが重要です。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 費用の考え方
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 公的証明書の取得費用</h3>
          <div className="space-y-4 mb-6">
            <p>
              まずかかるのは住民票や登記事項証明書などの公的証明書の取得費用です。役所で取得する証明書の実費は必ず発生し、法人の場合は個人より取得する書類が増えるため、その分だけ実費も増えやすいです。役員数が多いと、住民票の収集だけでも想定以上に手間と費用がかかることがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 事務所関係の費用</h3>
          <div className="space-y-4 mb-6">
            <p>
              事務所を新たに借りる場合は、賃料、初期費用、保証金、契約関連費用などが発生します。届出に使える形で契約や使用権原を整えなければならないため、安い物件を借りれば済むという話ではありません。後から物件を変えると再調整の負担が大きいため、最初の選定が大切です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. 行政書士へ依頼する場合の費用</h3>
          <div className="space-y-4">
            <p>
              行政書士に依頼する場合は、書類作成報酬や提出代行費用が発生します。報酬額は事務所ごとに異なり、書類作成だけなのか、事務所要件の確認や提出対応まで含むのかで差が出ます。価格だけで比較するのではなく、どこまで伴走してもらえるかを見る方が実務的です。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 期間の目安
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 書類準備にかかる期間</h3>
          <div className="space-y-4 mb-6">
            <p>
              もっとも時間がかかりやすいのは、警察署提出後よりも提出前の準備段階です。営業内容の整理、事務所の確定、賃貸契約書や使用承諾書の確認、住民票や法人書類の取得など、事前準備で想像以上に時間がかかります。特に法人案件や複数サイト運営案件は、書類作成前の整理に時間を要しやすいです。
            </p>
            <p>
              そのため、営業開始予定日から逆算して動くことが重要です。「サイト公開日が決まってから動く」のではなく、「公開日を決める前に法務の段取りを確認する」くらいの意識の方が安全です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 提出後から確認書受領までの感覚</h3>
          <div className="space-y-4">
            <p>
              届出確認書の再交付に関する警察庁の審査基準資料では、標準処理期間として14日以内という記載があります。営業開始届出そのものについて一律の期間が明示されているわけではないため、実務上は余裕をもってスケジュールを組むのが無難です。提出前の整理不足があると、そのぶん全体が遅れます。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 行政書士に依頼するメリット
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 手順の全体を整理できる</h3>
          <div className="space-y-4 mb-6">
            <p>
              行政書士に依頼する最大のメリットは、最初から最後までの流れを整理してもらえることです。どのサイトを対象にするか、どの名義で出すか、事務所はどこにするかなど、入口の設計が非常に重要で、そこを最初に整えることで書類作成がスムーズになります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 書類の抜け漏れを防ぎやすい</h3>
          <div className="space-y-4 mb-6">
            <p>
              行政書士が入ることで、何が不足しているか、どの順で集めるべきかが明確になり、手戻りを減らしやすくなります。自分のケースで何をどう集めればよいかは、一覧を見るだけでは判断しにくい部分があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 開業スケジュールを組みやすい</h3>
          <div className="space-y-4">
            <p>
              配信やサイト運営の準備と並行して法務対応を進めるのは、思った以上に負担が大きいです。法務を専門家に任せることで、制作や集客に集中しやすくなります。営業開始日が決まっている方ほど、早めに相談する意味は大きいでしょう。
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
              映像送信型性風俗特殊営業の届出手順は、単に書類を作って出すだけではありません。最初に営業実態を整理し、事務所を確定し、必要書類を集め、届出書と営業方法の書類を整えたうえで、管轄警察署へ提出し、届出確認書の受領まで進めるという流れになります。警視庁は必要書類として、営業開始届出書、営業の方法を記載した書類、事務所の使用権原を示す書類、住民票、法人の場合は定款・登記事項証明書・役員全員の住民票を挙げています。
            </p>
            <p>
              費用面では、公的証明書の取得費、事務所関係の費用、専門家へ依頼する場合の報酬などを見込む必要があります。期間についても、提出後だけでなく、提出前の準備に時間がかかることを前提に考えるべきです。
            </p>
            <p>
              これからライブ配信やアダルトサイト運営を適法に始めたい方は、公開日や集客施策を先に決める前に、まず届出の全体像を把握することを推奨します。必要書類の収集や事務所要件の確認に不安がある場合は、早めに行政書士へ相談するのが安全です。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
