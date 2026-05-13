// app/blog/fuei-home-office.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-home-office",
  title: "自宅でも映像送信型性風俗特殊営業の届出はできる？住所・事務所の扱いを解説",
  description:
    "自宅でも映像送信型性風俗特殊営業の届出ができるのかを行政書士がわかりやすく解説。事務所として認められる考え方、持家と賃貸の違い、住所・使用権原・警察署管轄の整理、自宅以外を検討した方がよいケースをまとめます。",
  keywords: [
    "映像送信型性風俗特殊営業 自宅 届出",
    "映像送信型性風俗特殊営業 事務所 自宅",
    "風営法 自宅 事務所",
    "映像送信型 自宅 住所",
    "行政書士",
  ],
  ogImage: "/fuei-home-office-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-12T00:00:00+09:00",
  modifiedTime: "2026-05-12T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-05-12",
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
          <li>自宅を届出の事務所にできるかどうかの考え方</li>
          <li>持家と賃貸で必要書類・確認事項が変わる理由</li>
          <li>使用承諾書・賃貸契約書が問題になりやすいケース</li>
          <li>自宅以外を検討した方がよい場面と行政書士への相談</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理　自宅でも届出できる可能性はあるが、住所があるだけでは足りない</a></li>
          <li><a href="#sec2" className="hover:underline">映像送信型性風俗特殊営業で「事務所」が必要になる理由</a></li>
          <li><a href="#sec3" className="hover:underline">自宅を事務所にする場合に確認すべきポイント</a></li>
          <li><a href="#sec4" className="hover:underline">持家の場合の考え方</a></li>
          <li><a href="#sec5" className="hover:underline">賃貸住宅の場合の考え方</a></li>
          <li><a href="#sec6" className="hover:underline">自宅住所を使うことで確認すべき点</a></li>
          <li><a href="#sec7" className="hover:underline">自宅以外を検討した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec9" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業の届出を考えている事業者から、よく寄せられる質問が「自宅でも届出はできるのか」という点です。特に、個人で成人向けサイト運営や成人向けライブ配信、動画・画像の会員制販売を始めたい場合、最初から事務所を借りるにはコストがかかるため、自宅を事務所として使いたいと考えることは自然です。もっとも、自宅だから当然に不可とも、自宅なら必ず届出できるとも言えません。重要なのは、その自宅を届出上の「事務所」として適切に位置付けられるか、そしてその使用権原を示せるかどうかです。
        </p>
        <p>
          風営法第31条の7は、映像送信型性風俗特殊営業を営もうとする者は、事務所の所在地を管轄する公安委員会に届出書を提出しなければならないと定めており、この営業がオンライン中心であっても「事務所」を前提にした制度であることが分かります。
        </p>
        <p>
          さらに、警視庁は映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しつつ、必要書類として営業開始届出書、営業の方法を記載した書類、事務所の使用について権原を有することを疎明する書類、住民票、法人の場合は定款・法人登記事項証明書・役員全員の住民票を挙げています。つまり、営業ページの整理と並んで、どこを事務所とするかが届出実務の中核になります。自宅を使う場合も、この枠組みの中で考える必要があります。
        </p>
        <p>
          そこで本記事では、自宅でも映像送信型性風俗特殊営業の届出ができるのかという疑問に対し、風営法上の事務所の考え方、自宅を事務所にする場合の注意点、持家と賃貸の違い、住民票や使用権原資料の見方、そして自宅以外を検討した方がよいケースまで、行政書士の視点から整理して解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理　自宅でも届出できる可能性はあるが、住所があるだけでは足りない
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 法令上「自宅不可」と一律に書かれているわけではない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              最初に確認すべき点は、風営法や施行規則、警察署の公表資料に「自宅は不可」と一律に書かれているわけではないことです。公的資料で一貫して求められているのは、映像送信型性風俗特殊営業について「事務所の使用について権原を有することを疎明する書類」であり、建物の類型として「住宅だから不可」「オフィスだから可」とは整理されていません。したがって、制度上は、自宅であることだけを理由に自動的に排除されているわけではありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. ただし、実務では「その自宅を事務所として使えるか」が問われる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              一方で、実務上は、自宅であれば何でも届出できるわけではありません。警視庁が必要書類として求めているのは、事務所の使用権原を疎明する書類です。愛知県警や宮城県警の案内でも、自己所有であれば登記事項証明書等、賃貸であれば賃貸借契約書の写しや使用承諾書等が必要とされており、所有権か賃借権かによって必要資料が変わることが示されています。つまり、自宅を使う場合も、その住所が単なる住居であることではなく、「届出上の事務所として使用できるか」を説明できる必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-3. 住所だけ借りる、名義だけ置く、という発想は避けるべき</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              この点から考えると、自宅を使う場合に避けるべきなのは、実際には営業の拠点として使わないにもかかわらず、住所だけを届出に使おうとすることです。風営法施行規則上も、届出書の添付書類として事務所の使用権原を示す書類が求められており、届出確認書の様式にも「事務所の所在地」が明記されます。つまり、制度は「営業の本拠」を想定しています。したがって、形式だけ整えた住所利用や、実体の乏しい住所貸しに近い考え方は、届出との整合性を欠きやすいです。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 映像送信型性風俗特殊営業で「事務所」が必要になる理由
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. オンライン営業でも事務所は不可欠</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業は、インターネットを通じて客に性的映像を見せる営業です。警察庁の解釈運用基準でも、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために見せる営業であって、静止画も動画も含まれるとされています。オンライン上で完結する営業のように見える場合でも、制度上は事務所を前提にしています。風営法第31条の7は「事務所の所在地を管轄する公安委員会」への届出を予定しており、オンライン営業であっても、営業の本拠としての事務所が必要になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 届出先の管轄も事務所所在地で決まる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              施行規則では、届出書は事務所の所在地の所轄警察署長を経由して提出しなければならないと整理されています。つまり、自宅を事務所にするかどうかは、単に住所の記載方法の問題ではなく、「どの警察署へ提出するか」にも直結する論点です。サイトのURLやサーバー所在地ではなく、事務所所在地が届出制度の基準になっている以上、自宅を使う場合は、その自宅が法令上の事務所として説明できるかが極めて重要になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-3. ホームページごとの届出と事務所の整理は両方必要</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              警視庁が映像送信型性風俗特殊営業を「ホームページごとの届出」としているため、「ページさえ整理できれば足りる」と考えやすいですが、実際には事務所の整理も必要です。営業単位はホームページごとでも、提出先の管轄は事務所所在地で決まり、必要書類にも事務所資料が含まれます。したがって、営業ページの整理と事務所の整理はセットで考える必要があります。自宅を使う場合は、ページの問題だけでなく、自宅の法的な位置付けまで同時に整える必要があります。
            </p>
          </div>
        </section>

        <div className="flex justify-center my-2">
          <div className="w-[75%] rounded-2xl overflow-hidden">
            <img src="/images/sample/jitaku_info_1.jpg" alt="自宅を事務所にする場合の整理" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 自宅を事務所にする場合に確認すべきポイント
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 持家か賃貸か</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              最初に確認すべき点は、その自宅が自己所有なのか賃貸なのかです。宮城県警の案内では、営業の本拠となる事務所に係る所有権を有していることを疎明する書類として登記簿謄本又は登記事項証明書等、賃貸権を有していることを疎明する書類として賃貸借契約書の写し又は賃貸人の使用承諾書等が挙げられています。つまり、持家と賃貸では準備すべき資料が異なります。自宅であれば一律に同じというわけではありません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 契約や権利関係に矛盾がないか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              特に賃貸の場合は、単に住んでいる事実だけでは足りず、契約内容が届出と矛盾していないかを確認しなければなりません。宮城県警の案内では、賃貸契約書に映像送信型性風俗特殊営業の事務所として使用する旨の記載がない場合は使用承諾書も必要とされ、さらに所有者から直接借りていない場合は、所有者と賃貸人の間の契約書写し等も必要になり得るとされています。これは、使用権原が形式だけでなく、実質的に確認されることを意味します。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-3. 実際にその場所が事務所として機能するか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              事務所の使用権原資料、場合によっては平面図や周囲略図まで求められる制度構造を踏まえると、その自宅が実際に営業の本拠として機能しているかは無視できません。顧客対応、契約管理、サイト管理、会計処理などの中心がそこにあるのか、少なくともその場所を事務所として説明できるのかが重要です。単に住民票上の住所だから使う、という整理では不十分なことがあります。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 持家の場合の考え方
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 書類面では比較的整理しやすい</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              自宅が自己所有である場合は、賃貸に比べると書類面では整理しやすいことが多いです。警察署の案内でも、所有権を有することを疎明する資料として登記事項証明書等が挙げられており、使用承諾の問題は通常生じにくいからです。少なくとも「所有者と利用者が一致している」という意味で、権利関係は比較的明確です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. それでも「持家なら無条件で可能」とは言えない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              もっとも、持家であれば必ず届出できる、とまでは言えません。風営法上の届出は、建物の所有の有無だけでなく、その場所を届出上の事務所として適切に位置付けられるかも重要です。たとえば、家族共有名義の場合や、他の権利関係が絡む場合には、資料の整理が必要になることがあります。また、営業内容や周辺事情によって、別途慎重な整理が必要な場面もあり得ます。公的資料に一律の可否基準が示されていないため、個別事情ごとの判断が必要になるという点は持家でも同様です。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 賃貸住宅の場合の考え方
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 賃貸住宅では特に慎重な確認が必要</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              自宅利用で最も慎重に確認すべきケースは賃貸住宅です。警視庁が使用承諾書や賃貸契約書の写しを必要書類として例示していることからも分かるように、賃貸では「その用途で使えるか」が核心になります。単に居住しているからといって、当然に当該営業の事務所として使えるとは限りません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 使用承諾書が問題になることがある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              宮城県警の案内では、賃貸契約書に映像送信型性風俗特殊営業の事務所として使用する旨の記載がない場合は使用承諾書も必要とされています。この点からも、賃貸住宅では契約書だけでは足りないことがあり、賃貸人の承諾が焦点になると分かります。つまり、「契約書に事業利用禁止と書いていないから問題ないだろう」と楽観するのではなく、届出に必要な説明資料として十分かどうかまで確認する必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. 居住用契約との整合は必ず確認したい</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              公的資料は個々の賃貸借契約の中身まで踏み込んでいませんが、少なくとも事務所としての使用権原を示す必要がある以上、居住用契約のまま届出に使う場合は慎重な確認が必要です。契約の用途、管理会社や大家の意向、使用承諾の可否などを確認しないまま進めると、後から届出の前提が崩れることがあります。これは警視庁や各県警の必要書類案内から導かれる実務上の重要ポイントです。
            </p>
          </div>
        </section>

        <div className="flex justify-center my-2">
          <div className="w-[75%] rounded-2xl overflow-hidden">
            <img src="/images/sample/jitaku_info_2.jpg" alt="賃貸住宅を事務所にする場合の注意点" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 自宅住所を使うことで確認すべき点
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 住所が届出書類に記載される</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              届出をすると、少なくとも届出書や届出確認書のレベルでは事務所所在地が記載されます。e-Govで公開されている届出確認書様式にも「事務所の所在地」という欄があります。したがって、自宅を事務所にするということは、自宅住所を届出制度の中に記載するということでもあります。プライバシー上の感覚や、事業運営上の考え方として、この点をどう捉えるかは事前に考えておくべきです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 生活空間と事業空間が重なる</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              法律上の要件だけでなく、実務面でも、自宅を事務所にすると生活空間と事業空間が重なります。映像送信型性風俗特殊営業はオンライン営業が中心とはいえ、契約書類、会計資料、管理データ、機材などをどこで管理するかという問題があります。公的資料上、事務所は営業の本拠として位置付けられているため、自宅を使うなら、その管理実態も含めて無理がないかを考える必要があります。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 自宅以外を検討した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 賃貸契約や家主承諾で不安がある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              賃貸住宅で、契約内容や家主承諾に少しでも不安があるなら、自宅以外を検討した方がよいことがあります。使用承諾書が出ない、用途が曖昧、管理会社が難色を示している、といった場合は、そこで無理に進めるより、最初から別の事務所候補を探した方が結果的に円滑なことがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 事業規模が拡大しそう</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              最初は個人の小規模運営でも、将来的に複数サイト、複数ブランド、法人化、スタッフ関与などを想定しているなら、自宅よりも外部の事務所を検討した方が整理しやすい場合があります。警視庁の必要書類を見ても、法人化すると追加書類が増え、営業主体の整理も重くなるため、初期段階から拠点をどうするかを長期的に考える価値があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 自宅住所を事業上出したくない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              制度上、事務所所在地は届出書類に現れます。そのため、自宅住所を事業の本拠として扱うことに抵抗がある場合は、別の事務所候補を考えた方がよいです。ただし、レンタルオフィスであれば当然に使用できるというわけではなく、やはり使用権原と実体の説明が必要になるため、物件選びは慎重に行う必要があります。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">8-1. 自宅が使えるかどうか判断がつかない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              相談が多いケースは、「この自宅で本当に届出できるのか」が分からない場合です。持家か賃貸か、契約内容、家主承諾、家族名義、他人との共有など、論点が複数ある場合は、自己判断では整理が難しくなります。物件を変える前提も含めて、早めに整理した方がよいでしょう。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">8-2. 外部プラットフォームや複数ページを使う</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              事務所の問題に加え、営業ページの整理も必要になる案件では、さらに難易度が上がります。警視庁が「ホームページごとの届出」としている以上、どのページが営業単位かを整理しつつ、事務所も整える必要があるからです。自宅を使うかどうかだけでなく、全体設計の問題になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">8-3. 個人で始めるが将来法人化も視野にある</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              最初は個人で始めたいが、将来は法人化も考えている場合、自宅を事務所にするかどうかは後々の整理にも影響します。法人案件では定款や登記資料が加わり、営業主体の整理も必要になるため、現在の選択が将来の制約にならないか確認しておくべきです。
            </p>
          </div>
        </section>

        {/* sec9 */}
        <section id="sec9" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            9. まとめ
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              自宅でも映像送信型性風俗特殊営業の届出ができる可能性はあります。法令や警察署の公表資料に、自宅を一律に排除する明文はありません。ただし、必要なのは「自宅であること」ではなく、その自宅を届出上の事務所として使う権原と実体を説明できることです。警視庁は必要書類として、事務所の使用について権原を有することを疎明する書類を求めており、各県警も、自己所有なら登記事項証明書等、賃貸なら賃貸借契約書や使用承諾書等を例示しています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特に賃貸住宅では、契約内容や家主承諾が問題になりやすく、「住んでいるからそのまま使える」とは限りません。また、届出制度上は事務所所在地が管轄警察署や届出確認書にも関わるため、単なる住所の問題として軽く扱うべきではありません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              自宅を使うか、自宅以外を使うかで迷っている場合は、持家か賃貸か、使用権原資料として何を出せるか、営業ページとの整理が取れるか、将来の法人化や事業拡大に耐えられるかを一度まとめて確認することが重要です。判断に迷う場合は、営業開始前の段階で行政書士へ相談し、後から事務所問題で手続が停滞しないように設計しておくことが現実的です。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：風営法、警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」「性風俗関連特殊営業（様式一覧）」、宮城県警「映像送信型性風俗特殊営業の届出に必要な書類」、愛知県警「映像送信型性風俗特殊営業について」、警察庁「風営法の解釈運用基準」、e-Gov法令検索「風営法施行規則」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
