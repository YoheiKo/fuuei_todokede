// app/blog/adult-streaming-law.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "adult-streaming-law",
  title: "アダルト動画配信は風営法の届出が必要？知らないと違法になるケース",
  description:
    "アダルト動画配信で風営法の届出が必要になるケースを行政書士がわかりやすく解説。映像送信型性風俗特殊営業に当たる判断ポイント、無届で違法になるケース、個人配信者や運営者が開業前に確認すべき実務上の注意点を整理します。",
  keywords: [
    "アダルト動画配信 風営法 届出",
    "映像送信型性風俗特殊営業 個人",
    "アダルト配信 違法",
    "風営法 動画販売",
    "アダルトサイト 届出 必要",
    "行政書士",
  ],
  ogImage: "/adult-streaming-law-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-06T00:00:00+09:00",
  modifiedTime: "2026-04-06T00:00:00+09:00",
  isPublished: true,
  cat: "プラットフォーム・個人",
  date: "2026-04-06",
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
          src="/adult-streaming-law-eyecatch.jpg"
          alt="アダルト動画配信は風営法の届出が必要？知らないと違法になるケース"
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
          <li>アダルト動画配信が風営法の届出対象になる判断ポイント</li>
          <li>届出が必要になりやすいケース・一律には言えないケースの違い</li>
          <li>知らないまま進めると違法になる具体的なケース</li>
          <li>届出が必要か迷ったときに確認すべきポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">アダルト動画配信で問題になる営業類型とは</a></li>
          <li><a href="#sec2" className="hover:underline">届出が必要になりやすいケース</a></li>
          <li><a href="#sec3" className="hover:underline">一律に届出が必要とは言い切れないケース</a></li>
          <li><a href="#sec4" className="hover:underline">知らないと違法になるケース</a></li>
          <li><a href="#sec5" className="hover:underline">届出が必要か迷ったときに確認すべきポイント</a></li>
          <li><a href="#sec6" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec7" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-10">
        アダルト動画配信を始めたいと考えたとき、多くの方が最初にぶつかるのが「自分の配信は風営法の届出が必要なのか」という疑問です。ライブ配信・会員制サイト・サブスク販売・単品動画販売・外部プラットフォームでの有料公開など、現在は販売方法が多様化しているため、昔ながらの「風俗店」のイメージだけでは判断しにくくなっています。風営法は、インターネット等を通じて性的な映像を見せる営業について「映像送信型性風俗特殊営業」という類型を明確に定めており、知らないまま始めると後から大きなリスクになる可能性があります。本記事では、どのような場合に届出対象になりやすいのかを行政書士の視点から解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. アダルト動画配信で問題になる営業類型とは
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 風営法上の「映像送信型性風俗特殊営業」
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          アダルト動画配信で中心的に問題になるのは、風営法上の「映像送信型性風俗特殊営業」です。法律は、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、電気通信設備を用いて客に見せる営業をこの類型として定義しています。条文上も独立した規制が設けられており、単なる注意喚起レベルではなく、制度として明確に位置付けられています。
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          ここで重要なのは、「アダルト動画配信」という一般的な言い方と、「映像送信型性風俗特殊営業」という法律上の言い方が一致しないことです。配信者や運営者から見るとクリエイター活動やコンテンツ販売の感覚であっても、法的には別の整理がされることがあります。したがって、業界での呼び方ではなく、風営法上の定義に当てはまるかどうかを確認する必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 動画だけでなく静止画も含まれる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          「動画配信」と聞くとStripchatやmyfansなどライブ配信や動画販売だけをイメージされやすいですが、警察庁の解釈運用基準は「映像」には静止画も含まれるとしています。つまり、会員制ページでの画像閲覧・有料画像投稿・課金制の写真コンテンツなども、内容と実態によっては同じ類型で検討されることになります。動画でなければ大丈夫という理解は危険で、結局は「性的な行為を表す場面」や「衣服を脱いだ人の姿態」を営業としてネット上で見せているかが判断の中心になります。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 届出が必要になりやすいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-1. 会員制・有料販売で性的映像を継続提供している
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          もっとも届出が必要になりやすいのは、有料会員や購入者に対して性的な行為を表す場面や裸体映像を継続的に提供しているケースです。月額課金・定期購読・単品販売・見放題プランなど形式はさまざまでも、顧客から対価を受け取りその見返りとして性的映像を見せる営業であれば、映像送信型性風俗特殊営業の定義に近づきます。重要なのは個人の副業か本格事業かではなく、外部から見て有料の性的コンテンツ配信ビジネスとして成立しているかどうかです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-2. 独自サイトや販売ページが営業の中心になっている
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          警視庁は映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しています。独自サイト・会員制ページ・販売専用ページなどが営業の中心導線になっている場合、そのページ単位で届出の必要性が問題になりやすいです。独自ドメインを持っていない場合でも、外部サービス上の販売ページが実質的に営業の中核であれば安心はできません。どこで収益化しているのかが重要になります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          2-3. 複数の導線で集客し、性的コンテンツ販売に誘導している
        </h3>
        <p className="text-gray-700 leading-relaxed">
          SNS・ブログ・プロフィールページ・外部プラットフォームなど、複数の導線から最終的に有料の性的コンテンツ販売へ誘導しているケースも注意が必要です。表向きは一般向け投稿や雑談コンテンツが混ざっていても、実際の収益の中心がアダルト動画配信なら届出の要否を検討すべきです。
          顧客が何を期待して課金しているか、営業の中心がどこにあるかを見直す必要があります。本件の場合、有料の性的コンテンツは届出の対象、SNS等の導線も広告として届出が必要です。
        </p>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 一律に届出が必要とは言い切れないケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 一般的な創作活動や成人向けに至らない表現
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          性的な行為を表す場面・裸体姿態に当たらない表現については、届出対象とならない可能性もあります。法律上の定義に当てはまるかどうかが出発点であるため、コンテンツ内容がそこまで達していない場合は映像送信型性風俗特殊営業として整理されない可能性があります。ただし「露出は少ないが性的な演出が強い」「一部有料プランのみ成人向け」など境界線が曖昧なケースも多く、有料部分の内容と営業の中心を見て判断する必要があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. 一時的・例外的な投稿だけのケース
        </h3>
        <p className="text-gray-700 leading-relaxed">
          継続的な営業ではなく例外的な投稿が一度あるだけのケースでは、営業性の評価が変わることがあります。風営法の定義は「営業」であることを前提としているため、継続性や反復性を欠く場合には直ちに典型的な営業とは言いにくいことがあります。ただし「一回だけなら何でも大丈夫」という意味ではなく、投稿頻度・課金導線・顧客募集の態様などを総合して見られます。グレーなケースでは自己判断だけで進めない方が安全です。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 知らないと違法になるケース
        </h2>

        <div className="space-y-5">
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">① 届出が必要な営業なのに無届のまま開始する</p>
            <p className="text-gray-700 leading-relaxed">
              もっとも典型的なケースです。映像送信型性風俗特殊営業に当たるにもかかわらず何もせずに営業を始めてしまう場合、「知らなかった」「副業である」「個人だから関係ないと思った」といった事情は言い訳にはなりにくいです。
              営業を始める前に自分の活動が風営法上の届出対象かを確認しないまま動くこと自体が大きなリスクです。このケースは違法な状態ですので、直ちに配信を停止した上で、届け出てください。届出後10日を経過してから配信が可能です。
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">② 途中で営業内容が変わり届出対象になっているのに見直さない</p>
            <p className="text-gray-700 leading-relaxed">
              始めた当初は一般向けの配信だったとしても、途中から有料の成人向け動画販売へ比重が移り実態として映像送信型性風俗特殊営業に近づくことがあります。「最初は対象外だったから今も大丈夫」と思い込むのは危険です。配信内容や収益モデルが変わったときこそ、改めて法的整理を見直す必要があります。
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
            <p className="font-bold text-red-800 mb-2">③ 個人から法人化したのに名義や体制を整理しない</p>
            <p className="text-gray-700 leading-relaxed">
              法人化やチーム運営へ移行した際、営業主体や事務所体制が変わっているのに名義や必要書類の整理をしないまま運営を続けると、届出との整合性に問題が生じます。警視庁は法人の場合には定款・法人登記事項証明書・役員全員の住民票を必要書類として挙げており、個人と法人は同じ扱いではありません。事業が拡大したときほど、最初のままの感覚で運営しないことが重要です。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 届出が必要か迷ったときに確認すべきポイント
        </h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">① コンテンツの中心が何か</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              販売しているコンテンツの中心が性的な行為を表す場面なのか、裸体姿態なのか、顧客の性的好奇心をそそることを主目的としているのかを確認します。サイト名やプラットフォーム名だけを見ても十分ではなく、コンテンツ内容が定義に当たるかどうかが出発点です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">② 有料性と継続性があるか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              顧客から対価を得て継続的にコンテンツを提供しているなら、営業性が強くなります。「少額だから」「副業だから」という理由は決定打になりません。継続的な営業として構成されていれば、法的な見方は変わりません。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">③ どこを本拠として、誰の名義で運営しているか</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              届出が必要になる場合は、誰が営業主体で、どこを事務所としているかも重要です。配信や販売はネット上で完結していても、法務対応はそうではありません。オフラインの営業主体と事務所の整理が不可欠です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 行政書士に相談した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 必要か不要かの線引きが自分で判断できない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          一般向けと成人向けが混在している、複数の導線がある、画像と動画が混在している、会員プランごとに内容が違うといったケースでは、自己判断が難しくなりやすいです。書類を作る前に法的整理そのものが必要であるため、迷っている段階で専門家に相談する価値があります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 事務所や名義の整理に不安がある
        </h3>
        <p className="text-gray-700 leading-relaxed">
          届出が必要だとしても、次に出てくるのがどの名義で、どの事務所で進めるべきかという問題です。個人で進めるのか法人で進めるのか、今の物件でよいのか、賃貸契約の扱いはどうかなど、ここでつまずく方は多いです。最初に整えておくことで、開業後の変更対応やトラブルを減らしやすくなります。
        </p>
      </section>

      {/* sec7 まとめ */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. まとめ
        </h2>
        <div className="bg-violet-50 rounded-xl p-5 md:p-6 space-y-3 text-gray-700 leading-relaxed">
          <p>
            アダルト動画配信が風営法上の届出対象になるかどうかは、プラットフォーム名や「動画か画像か」という形式だけで決まりません。重要なのは、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を、専ら性的好奇心をそそるために、営業としてネット上で見せているかどうかです。
          </p>
          <p>
            警察庁の解釈運用基準では静止画も動画も「映像」に含まれるとされており、会員制販売・サブスク・単品販売など形式を問わず内容と継続性によって判断されます。警視庁はホームページごとの届出を案内しており、独自サイトであれ外部プラットフォームであれ、実態としてこの営業に当たるなら届出を無視して始めるのは危険です。
          </p>
          <p>
            とくに注意すべきなのは、届出が必要な営業を無届のまま始めること、途中で配信内容や収益モデルが変わって届出対象になっているのに見直さないこと、個人から法人へ移行したのに名義や体制を整理しないことです。自分のケースで必要かどうか迷うなら、コンテンツ内容・有料性・継続性・営業の中心ページ・営業主体と事務所を基準に見直し、判断に迷う段階こそ早めに行政書士へ相談することを推奨します。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
