// app/blog/delivery-tenpo-business-examples.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "delivery-tenpo-business-examples",
  title: "無店舗型性風俗特殊営業の届出が必要になるサービス例【知らないと違法】",
  description:
    "無店舗型性風俗特殊営業の届出が必要になるサービス例を行政書士がわかりやすく解説。デリヘルや派遣型サービス、成人向け物販など対象になりやすい営業、名前では判断できない理由、知らずに始めるリスクを整理します。",
  keywords: [
    "無店舗型性風俗特殊営業 サービス例",
    "デリヘル 届出",
    "派遣型風俗 風営法",
    "無店舗型 届出 必要",
    "成人向け通販 風営法",
    "行政書士",
  ],
  ogImage: "/delivery-tenpo-business-examples-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-13T00:00:00+09:00",
  modifiedTime: "2026-04-13T00:00:00+09:00",
  isPublished: true,
  cat: "Q&A",
  date: "2026-04-13",
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
          src="/delivery-tenpo-business-examples-eyecatch.jpg"
          alt="無店舗型性風俗特殊営業の届出が必要になるサービス例【知らないと違法】"
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
          <li>無店舗型性風俗特殊営業に当たりやすいサービスの具体例</li>
          <li>第1類型（派遣型）と第2類型（物販型）の違い</li>
          <li>名称や規模にかかわらず届出が必要になる理由</li>
          <li>知らないまま始めた場合のリスク</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">まず押さえたい結論</a></li>
          <li><a href="#sec2" className="hover:underline">無店舗型性風俗特殊営業の第1類型に当たりやすいサービス例</a></li>
          <li><a href="#sec3" className="hover:underline">無店舗型性風俗特殊営業の第2類型に当たりやすいサービス例</a></li>
          <li><a href="#sec4" className="hover:underline">誤解されやすいグレーなサービス例</a></li>
          <li><a href="#sec5" className="hover:underline">届出が必要な場合に求められるもの</a></li>
          <li><a href="#sec6" className="hover:underline">知らないまま始めると何が危険か</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        無店舗型性風俗特殊営業という言葉は、一般の方には非常に分かりにくい表現です。そのため、実際には対象になり得るサービスを始めようとしているのに、「うちはデリヘルではないから関係ない」「店舗がないだけで、ただの紹介業だと思っていた」「副業レベルなら届出までは要らないのでは」と誤解してしまうケースが少なくありません。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ですが、風営法は、無店舗型性風俗特殊営業を明確に定義し、営業開始の届出を前提とした制度を置いています。風営法第2条第7項は、無店舗型性風俗特殊営業として、主に「客の依頼を受けて人の住居や宿泊施設等において異性に接触する役務を提供する者を派遣する営業」と、「専ら、性的好奇心をそそるため衣服を脱いだ人の姿態を撮影した写真等を販売・頒布する営業」の2類型を定めています。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        また、警視庁は無店舗型性風俗特殊営業について、営業開始届出書や営業の方法を記載した書類の様式を公表しており、届出に必要な書類として、事務所の使用権原を示す書類、住民票、法人の場合の定款や登記事項証明書などを案内しています。つまり、無店舗型性風俗特殊営業は、十分に具体的な届出実務が存在する営業類型であり、「曖昧なグレーゾーン」ではなく、制度として整理された分野だといえます。本記事では、どんなサービスが無店舗型性風俗特殊営業に当たりやすいのか、逆に一見似ていても直ちにそうとは言い切れないものは何か、そして知らないまま始めるとどんなリスクがあるのかを、具体例ベースで整理して解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. まず押さえたい結論
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 「店舗がない性的サービス」は広く対象になり得る
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          無店舗型性風俗特殊営業というと、いわゆるデリヘルだけを思い浮かべる方が多いですが、法律の整理はもう少し広いです。風営法第2条第7項第1号は、客の依頼を受けて、人の住居、宿泊施設その他客が指定する場所において、異性の客に接触する役務を提供する者を派遣する営業を対象としています。つまり、名称が「デリヘル」であるかどうかではなく、店舗を持たず、客の指定場所へ人を派遣して、異性の客に接触する役務を提供する構造かどうかが重要です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 「写真や動画の販売系」でも無店舗型の第2類型が問題になることがある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          さらに、風営法第2条第7項第2号は、専ら性的好奇心をそそるため衣服を脱いだ人の姿態を撮影した写真その他の物品を販売し、または貸し付ける営業などを無店舗型性風俗特殊営業に含めています。一般には第1号の派遣型ばかり注目されますが、条文上は第2号も明確に存在しています。したがって、「人を派遣しないから無店舗型ではない」と短絡的に考えるのは危険です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-3. サービス名より「実態」で判断される
        </h3>
        <p className="text-gray-700 leading-relaxed">
          最も重要なのは、サービス名や見せ方ではなく、実態で判断されるという点です。「派遣型リラクゼーション」「大人向けマッチング支援」「撮影作品の通販」などと別の名前を付けても、実質が無店舗型性風俗特殊営業に当たるなら、届出を避けられるわけではありません。これは条文構造からも当然の考え方です。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 無店舗型性風俗特殊営業の第1類型に当たりやすいサービス例
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. デリヘル、派遣型ファッションヘルス
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          最も典型的なのは、いわゆるデリヘルや派遣型ファッションヘルスです。客が電話やウェブで申し込み、ホテルや自宅などの指定場所へキャストを派遣する形は、条文の「客の依頼を受けて」「人の住居、宿泊施設その他客が指定する場所において」「異性の客に接触する役務を提供する者を派遣する営業」に、そのまま当てはまりやすい典型です。実務上も、警視庁の無店舗型性風俗特殊営業の様式・必要書類案内は、このような派遣型営業を強く想定した内容になっています。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. 出張型の性的サービス、派遣型成人向け接客サービス
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          名称は違っていても、実質的に客のもとへ人を派遣し、異性の客に接触する役務を提供するなら、無店舗型性風俗特殊営業に当たりやすいです。「出張型大人向けサービス」「派遣型会員制接客」といった名称にしていても、実際のサービス内容が条文構造に当てはまれば、法律上の評価は大きく変わりません。重要なのは、客が指定する場所へキャストが行くこと、そして異性の客に接触する役務の提供が営業の中心であることです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-3. 「店舗を持たないだけの風俗営業」も当然対象になる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          「店舗はないが、受付サイトだけあり、キャストを派遣する」タイプのビジネスは、まさに無店舗型性風俗特殊営業という制度の想定範囲です。店舗型ではないから規制が緩いのではなく、店舗型とは別に、無店舗型として別節で規制されているのが風営法の構造です。施行規則でも、無店舗型性風俗特殊営業は独立した節で規律され、開始届出書の様式も別に置かれています。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 無店舗型性風俗特殊営業の第2類型に当たりやすいサービス例
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 成人向け写真・物品の通販サイト
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          風営法第2条第7項第2号は、専ら性的好奇心をそそるため衣服を脱いだ人の姿態を撮影した写真その他の物品の販売・貸付等を対象としています。そのため、成人向けの写真集、DVD、関連物品などを、専らその目的で販売・頒布する通販型サービスは、この第2類型を意識する必要があります。一般には「通販だから風営法ではなく景表法や特商法だけを見ればよい」と思われがちですが、条文上は無店舗型性風俗特殊営業の一類型です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. 店舗を持たない成人向け物販サービス
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          実店舗がなく、ネット通販や郵送販売だけで成人向けの写真・物品を扱うサービスも、第2類型との関係で検討が必要です。とくに、販売物が「専ら性的好奇心をそそるため」のものかどうかがポイントになります。一般的なアート写真やファッション商品ではなく、営業の中心が性的好奇心をそそることにあるなら、無店舗型の第2類型に近づきます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-3. 「コンテンツ販売だから映像送信型だけ」と思い込まない
        </h3>
        <p className="text-gray-700 leading-relaxed">
          成人向けコンテンツ販売というと、映像送信型性風俗特殊営業ばかり意識されがちですが、条文上は無店舗型第2類型との区別も必要です。配信なのか、物品販売なのか、頒布なのかで整理が変わるからです。「オンラインだから全部映像送信型」と一括りにせず、提供形態をよく見る必要があります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 誤解されやすいグレーなサービス例
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. 派遣型リラクゼーション、マッサージの名目
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          名称が「リラクゼーション」「エステ」「マッサージ」であっても、実態として異性の客に接触する性的役務を提供する者を派遣するなら、無店舗型性風俗特殊営業に当たり得ます。逆に、本当に一般的な施術サービスで、性的役務が営業の中核ではないなら直ちには当たりません。ここで重要なのは、名称ではなく実態です。届出が必要かどうかを、サービス名だけで判断するのは危険です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 「紹介」だけだから関係ないと思ってしまうケース
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          利用者とキャストをつなぐだけのマッチングや紹介と考えていても、実態として派遣型サービスの営業構造に深く関与しているなら、単純な紹介とは言い切れないことがあります。特に、受付、指名、料金設定、顧客管理、キャスト管理まで一体で行っているなら、名目が紹介であっても営業性が強くなります。警察庁の通達でも、性風俗関連特殊営業における紹介やスカウトバックを問題視する整理が見られ、周辺行為まで含めた実態把握が強まっていることがうかがえます。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-3. 「副業だから対象外」と考えてしまうケース
        </h3>
        <p className="text-gray-700 leading-relaxed">
          副業で小規模に行っている場合でも、条文上は本業・副業の区別はありません。営業実態が無店舗型性風俗特殊営業に当たれば、規模の小ささだけで当然に外れるわけではありません。副業ユーザーほど「まだ趣味の延長」と考えやすいですが、対価を得て継続的に営業しているなら、制度上は無関係ではありません。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 届出が必要な場合に求められるもの
        </h2>

        <div className="space-y-4">
          {[
            {
              label: "営業開始届出書と営業方法書類",
              body: "警視庁の様式一覧では、無店舗型性風俗特殊営業営業開始届出書と、営業の方法を記載した書類が公表されています。つまり、制度は「自分で判断できる人だけが知っていればよい裏ルール」ではなく、営業開始を前提に具体的な書式まで用意された正式な届出制度です。",
            },
            {
              label: "事務所の使用権原資料",
              body: "届出に必要な書類として、事務所の使用について権原を有することを疎明する書類が必要です。警視庁は、使用承諾書、賃貸契約書の写し、建物に係る登記事項証明書などを例示しています。無店舗型だからといって事務所が要らないわけではなく、むしろ営業の本拠としての事務所整理が非常に重要です。",
            },
            {
              label: "住民票、法人資料など",
              body: "個人なら住民票、法人なら定款、法人登記事項証明書、役員全員の住民票も必要です。これは、届出が単なるネット登録や申告ではなく、公的な営業届出手続であることを示しています。",
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
          6. 知らないまま始めると何が危険か
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 無届営業や虚偽記載のリスク
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          風営法違反の取締りでは、無届営業や届出書の虚偽記載等が独立の違反態様として扱われています。無店舗型性風俗特殊営業も、法令違反行為や重大な不正行為の文脈で処分対象に含まれており、制度上明確な監督対象です。「知らなかった」「名称を変えていたから大丈夫だと思った」では済みにくい分野です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 開始後に気づくと整理が難しくなる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          この分野は、始める前より、始めた後に法務整理をしようとする方が大変です。すでにサイト、広告、顧客対応、キャスト管理が動いていると、名義や事務所、営業方法をあとから整える負担が増えるからです。変更届制度はありますが、そもそも開始時点で届出が必要だった場合は、後追い整理には限界があります。
        </p>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-1. サービス名と実態がズレているかもしれないとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          「エステ」「紹介」「マッチング」「会員制サポート」などの名称を使っていても、実態が条文に近いと感じるなら、早めに相談した方が安全です。名称ではなく実態で見られるためです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-2. 物販系か派遣型か、自分で区別がつかないとき
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          無店舗型第1類型と第2類型、あるいは映像送信型との違いは、一般の方には分かりにくいです。自分のサービスがどこに当たるか曖昧なまま始めると、届出の種類そのものを誤る可能性があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-3. すでに始めてしまっているとき
        </h3>
        <p className="text-gray-700 leading-relaxed">
          すでに運営を始めていて不安があるなら、後回しにしない方がよいです。問題が小さいうちに整理した方が、修正もしやすくなります。
        </p>
      </section>

      {/* sec8 まとめ */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          8. まとめ
        </h2>
        <div className="bg-gray-50 rounded-xl p-5 md:p-7 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            無店舗型性風俗特殊営業の届出が必要になるサービスは、典型的にはデリヘルや派遣型ファッションヘルスなど、客の指定場所へ人を派遣して異性に接触する役務を提供する営業です。加えて、専ら性的好奇心をそそるための写真その他の物品を販売・頒布する営業も、風営法第2条第7項上は無店舗型性風俗特殊営業の一類型です。つまり、「店舗がない性的サービス」や「成人向け通販・頒布系サービス」は、名称にかかわらず法的整理が必要になることがあります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            警視庁は無店舗型性風俗特殊営業の様式や必要書類を公表しており、この分野が正式な届出制度の対象であることは明らかです。事務所資料や住民票、法人資料まで求められる以上、「なんとなくグレー」ではなく、具体的に判断すべき営業類型です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            自分のサービスが該当するか少しでも迷うなら、サービス名ではなく、誰に何をどこでどう提供しているか、客の指定場所への派遣か、成人向け物品の販売・頒布かという実態から見直すことが大切です。知らないまま始めると無届営業のリスクがあるため、早い段階で行政書士へ相談し、正しい営業類型を整理してから進めるのが安全です。
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          参照：風営法、風営法施行規則、警察庁「風営法の解釈運用基準」、警視庁「性風俗関連特殊営業（様式一覧）」「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」
        </p>
      </section>

      <AuthorBlock />
    </article>
  );
}
