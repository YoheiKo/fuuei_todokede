// app/blog/fuei-side-business.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-side-business",
  title: "映像送信型性風俗特殊営業の届出は副業でも必要？個人クリエイター向け解説",
  description:
    "映像送信型性風俗特殊営業の届出は副業でも必要になるのかを行政書士がわかりやすく解説。会社員や個人クリエイターが見落としやすい判断ポイント、届出が必要になりやすいケース、事務所や営業ページの整理の考え方をまとめます。",
  keywords: [
    "映像送信型性風俗特殊営業 副業",
    "映像送信型性風俗特殊営業 個人",
    "風営法 副業 届出",
    "アダルトサイト 個人 届出",
    "行政書士",
  ],
  ogImage: "/fuei-side-business-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-07T00:00:00+09:00",
  modifiedTime: "2026-05-07T00:00:00+09:00",
  isPublished: true,
  cat: "プラットフォーム・個人",
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
          <li>副業でも風営法の届出が必要になる理由と判断の基準</li>
          <li>届出が必要になりやすいケースと言い切れないケースの違い</li>
          <li>個人クリエイターが見落としやすい事務所・書類の論点</li>
          <li>副業で運営する事業者が誤解しやすいポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理　副業でも届出が必要になる場合がある</a></li>
          <li><a href="#sec2" className="hover:underline">そもそも映像送信型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec3" className="hover:underline">副業で届出が必要になりやすいケース</a></li>
          <li><a href="#sec4" className="hover:underline">直ちに届出が必要とは言い切れないケース</a></li>
          <li><a href="#sec5" className="hover:underline">個人クリエイターが特に見落としやすいポイント</a></li>
          <li><a href="#sec6" className="hover:underline">副業で運営する事業者が誤解しやすいポイント</a></li>
          <li><a href="#sec7" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec8" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          副業で成人向け配信や成人向けコンテンツ販売を始めようとすると、多くの事業者が最初に気になるのが、「会社員の副業レベルでも風営法の届出は必要なのか」という点です。月に数本だけ動画を販売する、画像を会員向けに公開する、外部プラットフォームで少額の収益化をする、といった小規模な活動であれば、「本業ではないし、個人の副収入だから、厳格な手続は不要ではないか」と考えやすいです。しかし、風営法は、本業か副業かで届出の要否を分けてはいません。法律が見ているのは、営業の実態がどのようになっているかです。
        </p>
        <p>
          風営法上、映像送信型性風俗特殊営業とは、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を見せる営業であって、電気通信設備を用いてその映像を伝達するものをいいます。警察庁の解釈運用基準では、この「映像」には静止画だけでなく動画も含まれるとされており、「専ら」に当たるかどうかは営業を営む者の意図と営業の実態を踏まえて判断すると説明されています。つまり、動画か画像か、本業か副業かという表面的な分類より、何をどのように有料で見せているのかが重要です。
        </p>
        <p>
          さらに、警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内し、必要書類として営業開始届出書、営業の方法を記載した書類、事務所の使用権原を示す書類、住民票、法人の場合の追加資料を公表しています。ここでも、副業か本業かという区別はされていません。届出制度は、個人クリエイターであっても、実態が法の定義に当たれば対象になり得る建て付けです。
        </p>
        <p>
          そこで本記事では、副業で映像送信型性風俗特殊営業に当たり得る活動をする場合に、届出が必要になりやすいケース、直ちにはそうとは言い切れないケース、個人クリエイターが特に見落としやすいポイントを、行政書士の視点から整理して解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理　副業でも届出が必要になる場合がある
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 本業か副業かではなく「営業実態」で決まる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              副業でも映像送信型性風俗特殊営業の届出が必要になることはあります。なぜなら、風営法の条文や警察庁の解釈運用基準には、「本業なら対象」「副業なら対象外」という区別はないからです。法律が見ているのは、性的な映像を、専ら性的好奇心をそそるために、電気通信設備を通じて客に見せる営業かどうかです。したがって、会社員が夜間や休日に小規模で行っている活動でも、内容と営業実態がこの定義に当たれば、届出の検討が必要になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「少額だから不要」とも言い切れない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              副業では、売上が小さいうちは「まだ事業とは言えないだろう」と考えやすいです。しかし、公的資料上、届出の要否を売上額で分ける考え方は示されていません。実務上重要なのは、継続して有料で性的映像を見せているか、顧客から対価を得ているか、営業としての体裁が整っているかです。少額でも、月額会員を募っている、継続販売している、別料金で成人向けコンテンツを見せているといった構造があれば、副業だから問題ないとは言えません。これは警察庁の「専ら」の判断が営業者の意図と実態に基づくという説明からも自然に導かれます。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. そもそも映像送信型性風俗特殊営業とは何か
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 成人向け動画販売だけが対象ではない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              この類型は、「成人向け動画サイト運営」だけを指すものではありません。警察庁の解釈運用基準では、性的な行為を表す場面とは、自慰行為、性交、性交類似行為等を行っている人の様子や光景をいうとされ、映像には静止画も動画も含まれます。つまり、動画販売だけでなく、会員制の画像ギャラリー、静止画中心の成人向け有料ページ、ライブ配信のアーカイブ販売なども、内容次第でこの類型に当たり得ます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 外部プラットフォーム利用でも無関係ではない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              副業で運営する事業者に多いのが、独自サイトではなく外部プラットフォームや会員制サービスを使って収益化する形です。しかし、警視庁は映像送信型性風俗特殊営業を「ホームページごとの届出」としており、営業の中心となるページや会員ページをどう整理するかが重要です。外部サービスを使っていること自体は、届出不要の決定的な事情にはなりません。実質的に性的映像を有料で見せる営業ページになっているなら、検討対象になります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 副業で届出が必要になりやすいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 月額会員制で成人向けコンテンツを継続提供している</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              典型的なのは、月額課金やサブスク方式で、成人向け動画や画像を継続的に提供しているケースです。副業であっても、会員を募り、対価を受け取り、継続的に性的映像を見せているなら、営業性は強くなります。本人の認識では「副収入」でも、外部から見れば継続的な営業として評価されることがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 別料金で成人向けセクションを設けている</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警察庁の解釈運用基準では、ホームページの一部セクションだけで性的映像を見せている場合でも、そのセクションに別料金を設定しているなどの事情があれば、「専ら」に当たるかどうかの判断で重要になることが示されています。たとえば、通常プランと成人向け上位プランを分けている、副業アカウントの一部だけ有料成人向けにしている、といった構造では注意が必要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-3. 副業アカウントが実質的に営業ページになっている</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              SNSや告知ページから、外部プラットフォームの会員ページへ誘導し、そこで成人向けコンテンツを販売しているケースもあります。この場合、外形上は副業アカウントに見えても、実質的には営業ページとして機能していることがあります。警視庁の「ホームページごとの届出」という考え方からすると、見た目の軽さではなく、営業の中心がどこにあるかが重要です。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 直ちに届出が必要とは言い切れないケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 一般向け創作活動にとどまる場合</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              もちろん、個人クリエイターの副業がすべて映像送信型性風俗特殊営業になるわけではありません。一般的な創作活動、ファンコミュニティ運営、成人向けに至らない表現、性的な行為を表す場面や裸体姿態に当たらないコンテンツであれば、一律にこの類型とは言えません。出発点は、あくまで提供している内容が法の定義に当たるかどうかです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 単発的で営業性が弱い場合</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              継続性や反復性が乏しく、営業としての構造がまだ弱いケースでは、直ちに典型的な営業とまでは言いにくいこともあります。ただし、この点は誤解が生じやすい部分です。「一回だけだから問題ない」と単純には言えず、実際には課金の仕組み、導線、今後の継続性などを含めて判断されます。副業で運営する事業者は「まだ試験運用だから」と考えやすいですが、会員募集や販売導線をすでに整えているなら、営業性が問題になることがあります。これは公的資料の実態重視の考え方からの整理です。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 個人クリエイターが特に見落としやすいポイント
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 個人でも事務所が必要になる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              副業で運営する事業者が見落としやすいのが、映像送信型性風俗特殊営業でも事務所が前提になっている点です。警視庁は必要書類として、事務所の使用権原を疎明する書類を求めています。つまり、オンライン販売であっても「どこを事務所とするのか」を整理しなければなりません。自宅を使うのか、レンタルオフィスを使うのか、賃貸物件で足りるのかといった論点が出てきます。副業だから自宅住所だけあればよい、という整理にはなりません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 住民票などの公的資料が必要になる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              個人で届出する場合でも、住民票が必要です。警視庁は、本籍記載のもの、外国人にあっては国籍記載のものを求めています。つまり、個人クリエイターであっても、趣味感覚の延長ではなく、公的な届出手続として必要書類を整える必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. 後から規模が大きくなると整理が難しくなる</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              副業は、最初は小さく始めても、後から会員数が増えたり、別ページを作ったり、法人化したりすることがあります。警視庁は変更届出書の様式も公開しており、開始後の変更が制度上予定されています。つまり、副業で始めたとしても、成長に応じて法務整理を見直さなければならない場面が出てきます。最初に整理しないまま始めると、後からページや名義の整合を取り直す負担が大きくなりやすいです。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 副業で運営する事業者が誤解しやすいポイント
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-1. 「会社員だから事業ではない」</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                これは典型的な誤解です。会社員であることと、別に営業をしていないことは同じではありません。休日や夜間に独立して収益化していれば、法律上は副業であっても営業と見られ得ます。風営法は就業形態ではなく営業実態を見ます。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-2. 「少額だから対象外」</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                少額・小規模でも、継続して有料で性的映像を見せているなら、届出の検討を避ける理由にはなりません。公的資料上、売上額による線引きは示されていません。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">6-3. 「外部プラットフォームだから自分は関係ない」</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                プラットフォームの仕組みを利用している場合でも、そのページを使って自身が営業しているなら、届出の問題は残ります。営業主体と営業ページの整理が重要です。
              </p>
            </div>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 一般向けと成人向けが混在している</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              事業者自身では「半分は通常の創作、半分は成人向け」と考えていても、営業の中心がどこにあるかは別問題です。プランごとに内容が違う場合や、別料金セクションがある場合は、早めに整理した方が安全です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 自宅やレンタルオフィスを事務所にする予定がある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              事務所資料は届出の重要部分です。副業で運営する事業者ほど、自宅利用やレンタルオフィス利用で迷いやすいため、物件選びの段階から確認した方が再整理の負担を減らしやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. すでに始めている</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              すでに副業で配信・販売を始めていて、「今さら聞きにくい」と感じるケースもあります。しかし、後回しにして状況がよくなることは通常ありません。開始後の変更様式が用意されていることからも、制度は運営の変化を前提にしています。早めに整理した方が安全です。
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
              映像送信型性風俗特殊営業の届出は、副業でも必要になることがあります。風営法は、本業か副業かではなく、性的映像を営業として電気通信設備を通じて見せているかどうかで考える制度だからです。警察庁の解釈運用基準では、静止画も動画も含まれ、「専ら」に当たるかどうかは営業者の意図と営業実態で判断するとされています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              また、警視庁は、映像送信型性風俗特殊営業についてホームページごとの届出と必要書類を公表しており、個人でも事務所資料や住民票の準備が必要です。つまり、「個人クリエイターだから」「会社員の副業だから」という理由だけで、制度の外にいるとは言えません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              副業で成人向けコンテンツ販売や配信をしている事業者は、売上規模や肩書きではなく、何をどのように、どのページで、有料で継続提供しているのかを基準に見直すことが重要です。少しでも判断に迷う場合は、営業開始前でも開始後でも、早めに行政書士へ相談し、後から無届や整理不足で困らないようにしておくことが現実的です。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：風営法、警察庁「風営法の解釈運用基準」、警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」「性風俗関連特殊営業（様式一覧）」「変更届出書（様式一覧）」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
