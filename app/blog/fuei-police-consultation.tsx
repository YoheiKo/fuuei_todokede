// app/blog/fuei-police-consultation.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-police-consultation",
  title: "風営法の届出で警察署に聞かれること｜事前相談のポイントを行政書士が解説",
  description:
    "風営法の届出で警察署に聞かれることを行政書士がわかりやすく解説。事前相談で確認されやすい営業内容・事務所・営業ページ・必要書類のポイント、相談前に整理しておくべき事項をまとめます。",
  keywords: [
    "風営法 届出 警察署",
    "風営法 事前相談",
    "映像送信型性風俗特殊営業 相談",
    "風営法 届出 聞かれること",
    "行政書士",
  ],
  ogImage: "/fuei-police-consultation-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-11T00:00:00+09:00",
  modifiedTime: "2026-05-11T00:00:00+09:00",
  isPublished: true,
  cat: "Q&A",
  date: "2026-05-11",
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
          <li>警察署の事前相談で確認されやすい営業内容・主体・事務所の論点</li>
          <li>映像送信型・無店舗型それぞれで問われやすいポイントの違い</li>
          <li>相談前にまとめておくべきこと・よくある不備</li>
          <li>行政書士に事前相談することが有効な場面</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理</a></li>
          <li><a href="#sec2" className="hover:underline">警察署に聞かれやすいこと その1　どのような営業をするのか</a></li>
          <li><a href="#sec3" className="hover:underline">警察署に聞かれやすいこと その2　誰が営業主体なのか</a></li>
          <li><a href="#sec4" className="hover:underline">警察署に聞かれやすいこと その3　事務所はどこか</a></li>
          <li><a href="#sec5" className="hover:underline">警察署に聞かれやすいこと その4　どのページで営業するのか</a></li>
          <li><a href="#sec6" className="hover:underline">警察署に聞かれやすいこと その5　営業の方法はどうなっているか</a></li>
          <li><a href="#sec7" className="hover:underline">事前相談の前にまとめておくべきこと</a></li>
          <li><a href="#sec8" className="hover:underline">よくある不備</a></li>
          <li><a href="#sec9" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec10" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          風営法の届出を進めようとしたとき、多くの事業者が不安に感じやすいのが、「警察署へ行ったら何を聞かれるのか分からない」という点です。必要書類は警視庁などの公的案内で確認できても、実際に事前相談や届出の場面で、どこまで説明を求められるのかまでは見えにくいからです。特に、映像送信型性風俗特殊営業や無店舗型性風俗特殊営業のように、営業の実態、事務所、営業方法の整理が重要な類型では、単に様式を印刷して持参するだけでは足りないことがあります。
        </p>
        <p>
          警視庁は、性風俗関連特殊営業の届出に必要な書類として、営業開始届出書、営業の方法を記載した書類、事務所の使用について権原を有することを疎明する書類、住民票などを示しており、法人ならさらに定款や登記事項証明書、役員全員の住民票も必要としています。つまり、警察署が確認するのは、書類の有無だけではなく、その裏付けとなる営業の実態です。
        </p>
        <p>
          また、風営法の解釈運用基準においては、映像送信型性風俗特殊営業や無店舗型性風俗特殊営業は、サービス名ではなく営業の実態で判断されると規定されています。たとえば、映像送信型性風俗特殊営業では、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために見せる営業が対象とされており、静止画も動画も含まれます。つまり、警察署における相談や確認でも、「何という名前のサービスか」より、「実際に何をどのように提供するのか」が中心になります。
        </p>
        <p>
          そこで本記事では、風営法の届出で警察署に聞かれやすいことを、実務上の論点に沿って整理し、事前相談の前に何をまとめておけばよいのか、どのような点で手続が進みにくくなりやすいのかを、行政書士の視点から解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 警察署は「営業実態」と「書類の整合」を見ている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法の届出で警察署が確認する事項は、単に書類がそろっているかどうかだけではありません。営業の種類、営業方法、事務所、営業主体、必要資料が相互に整合しているかが重要です。警視庁の必要書類一覧でも、営業開始届出書だけでなく、営業の方法を記載した書類や事務所の使用権原資料がセットで求められていることから、この点は明らかです。つまり、「届出書だけ作成できたから問題ない」ということではなく、その内容と整合した説明ができるかが問われます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 事前相談は「質問に答える場」ではなく「営業内容を整理する場」</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              事前相談というと、「窓口で聞かれたことに答えればよい」と考えられやすいです。しかし、実際には、自身の営業を法的な類型に当てはめて整理する場と考えた方がよいです。警視庁は無店舗型性風俗特殊営業、映像送信型性風俗特殊営業、変更届、廃止届などを類型ごとに分けて様式を公表しており、実体にあわせた営業類型を選ぶ必要があります。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 警察署に聞かれやすいこと その1　どのような営業をするのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 何を提供するのか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              最初に確認されやすいのは、「どのようなサービスを提供するのか」です。映像送信型性風俗特殊営業なら、動画なのか静止画なのか、会員制なのか単品販売なのか、ライブ配信なのかアーカイブ販売なのか、といった点が問題になります。警察庁の解釈運用基準でも、映像送信型性風俗特殊営業は、性的映像を見せる営業として定義されており、静止画と動画の両方が含まれます。無店舗型性風俗特殊営業なら、人を派遣して客の指定場所で異性に接触する役務を提供する営業か、性的好奇心をそそる写真等の販売・頒布かといった区別が出てきます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 営業類型はどれに当たるのか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ここで重要なのは、自身のサービスがどの営業類型に当たるのかを、一定程度自分の言葉で説明できることです。警察署はサービス名だけで判断するわけではないため、「ライブチャット事務所です」「配信ビジネスです」「紹介サービスです」といった抽象的な表現だけでは足りないことがあります。実際には、何を、どこで、どのように提供するのかという具体的な説明が必要です。これは、風営法の条文と警察庁の解釈運用基準が、いずれも営業の実態に着目していることからも自然です。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 警察署に聞かれやすいこと その2　誰が営業主体なのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 個人か法人か</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警察署で確認されやすい基本事項の一つが、営業主体が個人なのか法人なのかです。これは単なる名義確認ではなく、必要書類の範囲が変わるため重要です。警視庁の案内では、個人なら住民票が基本書類ですが、法人なら定款、法人登記事項証明書、役員全員の住民票が追加されます。つまり、営業主体を曖昧にしたままでは、必要資料の準備もできません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 表向きの名義と実際の運営が一致しているか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              見落とされやすいのが、表向きの名義と実際の運営実態のずれです。たとえば、配信者個人の名前で見せていても、実際には法人がページ管理、売上管理、顧客対応をしているなら、営業主体の整理が必要になります。警視庁が法人書類まで求めているのは、営業主体が誰かを制度上明確にする必要があるからです。相談時にも、この点を確認される可能性があります。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 警察署に聞かれやすいこと その3　事務所はどこか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. どこを事務所にするのか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法の届出で非常に重要なのが事務所です。警視庁は必要書類として「事務所の使用について権原を有することを疎明する書類」を挙げており、使用承諾書、賃貸契約書の写し、建物に係る登記事項証明書などを例示しています。つまり、警察署では「どこを事務所にするのか」「その場所を届出上の事務所として使用できるのか」が確認されやすいです。
              関連して、届出の際には、事務所の図面も提出も要求されることが多いです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 自宅か、賃貸事務所か、レンタルオフィスか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              事務所候補が自宅なのか、賃貸事務所なのか、レンタルオフィスなのかで論点は変わります。自宅なら持家か賃貸か、賃貸なら契約内容や使用承諾に問題がないか、レンタルオフィスなら専用区画や利用承諾を示せるかなど、確認すべきことが増えます。警察署に相談するときも、単に「住所があります」ではなく、どのような形でその場所を使うのかまで整理しておく方が円滑です。これは必要書類の構造から見ても明らかです。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 警察署に聞かれやすいこと その4　どのページで営業するのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 映像送信型は「ホームページごと」の整理が必要</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業では、警視庁が「ホームページごとの届出」と案内しています。したがって、警察署の相談でも「どのページを営業単位として届け出るのか」が重要になります。独自サイト、会員ページ、外部プラットフォーム、サブドメイン、ブランド別ページなどがある場合は、原則としてそれぞれの届出が必要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 複数ページ・複数ブランドの場合</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              複数サイトを運営する場合は、URLの数だけで考えるのではなく、各ページがどの程度独立した営業ページなのか、呼称や会員導線が分かれているかなども整理材料になります。届出の単位を誤ると、変更届で足りるのか、新たな届出が必要なのかという後続論点にも影響します。警察署の事前相談では、このあたりを確認される可能性があります。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 警察署に聞かれやすいこと その5　営業の方法はどうなっているか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 料金や会員制の仕組み</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              営業の方法を記載した書類が必要とされている以上、料金体系や会員制の構造も重要です。月額課金なのか、都度課金なのか、会員限定なのか、ライブ配信なのか、物販を併用するのかなど、営業方法の説明が必要になります。とく物販を伴う場合は、映像送信型性風俗特殊営業に加えて、無店舗型性風俗特殊営業の届出が必要になるケースが多いです。下着等の販売では、無店舗型性風俗特殊営業に加えて、古物商も必要なケースがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 無店舗型では受付所・待機所の有無</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              無店舗型性風俗特殊営業では、事務所だけでなく、受付所や待機所の有無も重要です。警視庁の必要書類案内では、受付所や待機所を設ける場合の資料も挙げられており、平面図や周囲略図が必要になることがあります。つまり、「派遣型の営業である」というだけではなく、実務では物理的な拠点の整理まで確認されることがあります。
              なお、受付所の設置は制約大きく、新規の届出は事実上困難です。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 事前相談の前にまとめておくべきこと
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">7-1. サービス概要を一枚にまとめる</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                事前相談の前には、まず「誰が、何を、どこで、どのように提供するか」を一枚にまとめておくと役立ちます。営業主体、サービス内容、料金、営業ページ、事務所所在地を整理しておけば、相談時の説明がぶれにくくなります。これは法定書式ではありませんが、実務上有効です。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">7-2. 事務所資料の候補を確認する</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                賃貸契約書の写し、使用承諾書、建物資料など、どの資料で事務所を説明するかを先に確認しておくと、相談が具体的になります。警視庁がこの部分を必要書類として明示している以上、事務所の整理が不十分だと全体が進みにくくなります。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">7-3. ページ一覧を作る</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                映像送信型案件では、独自サイト、会員ページ、外部プラットフォーム、SNS誘導先などの一覧を作っておくと整理しやすいです。どこが告知で、どこが有料提供の中心なのかを言語化できると、相談の精度が上がります。
              </p>
            </div>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. よくある不備
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">8-1. サービス名だけで説明してしまう</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              「配信事務所です」「コンテンツ販売です」「マッチングです」といった抽象的な説明だけでは、営業類型の整理に足りないことがあります。警察署が確認したいのは、名称ではなく実態です。これは風営法の定義そのものが、営業内容ベースで組まれていることからも当然です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">8-2. 事務所が決まっていないまま相談する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              事務所所在地は届出先の管轄とも関わるため、「まだどこにするか未定です」という状態だと話が進みにくいことがあります。少なくとも候補と契約形態は整理しておくことが推奨されます。施行規則上も事務所所在地を基準にした手続構造になっています。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">8-3. 複数ページの関係を整理していない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              映像送信型では、ホームページごとの届出という前提があるため、ページ間の関係を整理していないと、相談時に手続が進みにくくなります。変更届と新規届出の区別にも影響するため、早めに整理しておくべきです。
            </p>
          </div>
        </section>

        {/* sec9 */}
        <section id="sec9" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            9. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">9-1. 類型判断で迷うとき</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型なのか、無店舗型なのか、そもそも届出対象なのかで迷う場合は、事前に行政書士へ相談した方が安全です。入口の判断を誤ると、その後の書類準備全体に影響します。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">9-2. 複数ページ・複数ブランドがあるとき</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              ページ構成が複雑な案件は、相談前に整理しておく方が円滑です。どこが営業単位かを決める作業は、外形以上に重要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">9-3. 事務所や物件で不安があるとき</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              自宅、賃貸、レンタルオフィスなどで迷っている場合は、物件契約前後の段階で確認することが推奨されます。事務所の使用権原資料は届出の中核です。
            </p>
          </div>
        </section>

        {/* sec10 */}
        <section id="sec10" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            10. まとめ
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-7 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              風営法の届出で警察署に聞かれやすいのは、「何というサービスか」ではなく、「誰が、何を、どこで、どのように営業するのか」です。営業類型、営業主体、事務所、営業ページ、営業方法、料金や会員制の仕組みが相互に整合しているかが重要であり、警視庁が求める必要書類もその構造に沿っています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              事前相談は、単なる窓口確認ではなく、自身の営業を法務の言葉に整理する場です。サービス概要、事務所資料、ページ一覧を先にまとめておくだけでも、相談の質は大きく向上します。少しでも類型判断、ページ整理、事務所の扱いで迷う場合は、事前に行政書士へ相談してから警察署へ行く方が、結果的に手戻りを減らしやすくなります。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」「性風俗関連特殊営業（様式一覧）」「変更届出書（様式一覧）」、e-Gov法令検索「風営法」「風営法施行規則」、警察庁「風営法の解釈運用基準」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
