// app/blog/fuei-multiple-sites.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-multiple-sites",
  title: "複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルール",
  description:
    "複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルールを行政書士がわかりやすく解説。ホームページごとの届出の考え方、追加届出と変更届の違い、独自サイト・外部プラットフォーム併用時の注意点を整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 複数サイト",
    "映像送信型性風俗特殊営業 ホームページ 届出",
    "風営法 複数サイト 届出",
    "映像送信型 変更届",
    "行政書士",
  ],
  ogImage: "/fuei-multiple-sites-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-11T00:00:00+09:00",
  modifiedTime: "2026-05-11T00:00:00+09:00",
  isPublished: true,
  cat: "プラットフォーム",
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
          <li>「ホームページごとの届出」という考え方の意味と実務上の整理</li>
          <li>複数サイト運営で追加届出を意識すべきケース</li>
          <li>変更届で足りる場合と新規届出が必要になる場合の違い</li>
          <li>独自サイト・外部プラットフォーム併用時の注意点</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理</a></li>
          <li><a href="#sec2" className="hover:underline">そもそも映像送信型性風俗特殊営業とは何か</a></li>
          <li><a href="#sec3" className="hover:underline">「複数サイト」とはどこまでを指すのか</a></li>
          <li><a href="#sec4" className="hover:underline">どのようなときに追加の届出を意識すべきか</a></li>
          <li><a href="#sec5" className="hover:underline">変更届で済むのか、新規届出が必要なのか</a></li>
          <li><a href="#sec6" className="hover:underline">事務所が同じ場合はどう考えるか</a></li>
          <li><a href="#sec7" className="hover:underline">実務でよくある誤解</a></li>
          <li><a href="#sec8" className="hover:underline">複数サイト運営で先に整理すべきこと</a></li>
          <li><a href="#sec9" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec10" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業の届出を検討している事業者にとって、特に判断に迷いやすい論点が「サイトが複数ある場合は、届出も複数必要なのか」という点です。成人向けサイトを一つだけ運営するケースであれば比較的整理しやすいですが、実務では、ブランドごとにサイトを分ける、会員ページと告知ページを分ける、独自サイトと外部プラットフォームを併用する、サブドメインを使い分ける、といった形態も少なくありません。このような場合、「法人として一つ届出をすれば足りるのか」「事務所が同じなら一件でよいのか」「追加でサイトを作ったら変更届で済むのか」と迷うケースが出てきます。
        </p>
        <p>
          警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内しています。つまり、法人単位や事務所単位だけで一括して処理する発想ではなく、どのホームページを営業の単位として扱うかが重要です。一方で、提出先の管轄は事務所所在地を基準に考える制度になっているため、「届出の単位」と「届出先の警察署」は分けて整理する必要があります。
        </p>
        <p>
          そこで本記事では、複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルールについて、何を一件として考えるのか、どのようなケースで追加届出を検討すべきか、変更届との違いをどう整理するかを、行政書士の視点から解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 基本は「ホームページごと」に考える</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警視庁の案内では、映像送信型性風俗特殊営業は「ホームページごとの届出」とされています。この点は非常に重要です。営業主体が同じであっても、複数のホームページを運営している場合には、それぞれが届出単位として問題になり得ます。つまり、「法人が一つだから届出も一つ」とは限りません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. ただし、提出先は事務所所在地で決まる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              一方で、風営法施行規則では、届出書は事務所所在地の所轄警察署長を経由して提出する建て付けです。したがって、届出単位がホームページごとであっても、提出先の警察署は事務所所在地を基準に考えます。この点を混同すると、「サイトが二つあるから警察署も二か所に提出するのか」といった誤解が生じやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-3. サイト数の問題は「営業実態の整理」が先</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              複数サイト運営では、単にURLの数だけを見るのではなく、どのページが営業の中心なのか、どこで有料コンテンツを見せているのか、どのブランドが独立して営業しているのかを整理する必要があります。警察庁の解釈運用基準も、映像送信型性風俗特殊営業を営業実態ベースで捉える構造になっており、形式だけで判断する制度ではありません。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. そもそも映像送信型性風俗特殊営業とは何か
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 風営法上の定義</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              風営法は、映像送信型性風俗特殊営業を、専ら性的好奇心をそそるため、性的な行為を表す場面又は衣服を脱いだ人の姿態の映像を見せる営業で、電気通信設備を用いてその映像を伝達するものと定義しています。警察庁の解釈では、静止画も動画も含まれます。したがって、成人向けライブ配信、会員制サイト、成人向け動画・画像の販売ページなどが問題になりやすい類型です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 法人単位ではなく営業ページ単位の整理が必要</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              一般的な事業感覚では、「法人が一つであれば事業も一つ」と考えやすいです。しかし、この類型では、どのホームページを通じて客に性的映像を見せているかが重視されます。そのため、複数の成人向けサイトを運営している場合は、法人単位の感覚ではなく、営業ページ単位で整理する必要があります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 「複数サイト」とはどこまでを指すのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. ブランド違いの独立サイト</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              分かりやすい例は、サイト名、デザイン、内容が異なる、独立した複数ブランドのサイトを持っているケースです。この場合、それぞれが別の営業ページとして見られやすく、「ホームページごと」の考え方からすると、別個に検討する必要性が高くなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 同一ブランド内の会員ページ・告知ページ</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              次に迷いやすいケースが、同一ブランドの中で、トップページ、告知用ページ、会員ログイン後の有料ページなどが分かれている場合です。このような場合は、単なる入口ページなのか、実際に性的映像を見せる営業ページなのかを分けて考える必要があります。形式的にページ数が多くても、実質的に一つの営業サイトとして整理できる場合もあります。一方で、別プランや別構造として独立性が強い場合には、別途検討が必要になることがあります。これは公的資料の「ホームページごと」という建て付けから導かれる実務上の整理です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-3. 外部プラットフォームの併用</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              独自サイトに加え、外部プラットフォーム上の会員ページや販売ページを併用するケースもあります。この場合も、「外部サービスだから数えなくてよい」とは言えません。警視庁の案内は独自ドメインに限定しておらず、どのホームページが営業単位かを問題にしているため、実質的な営業ページとして機能しているなら整理対象になります。
            </p>
          </div>
          <Image
            src="/images/sample/hukusu_1.png"
            alt="映像送信型性風俗特殊営業の複数サイト運営時の届出の基本整理（ホームページごとの届出・提出先管轄・外部プラットフォーム含む営業ページ単位の考え方）"
            width={1672}
            height={941}
            className="w-[85%] mx-auto h-auto rounded-lg my-10"
          />
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. どのようなときに追加の届出を意識すべきか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. 新しい営業用ホームページを立ち上げたとき</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              既存の届出済みサイトとは別に、新たなブランドや新たな営業ページを立ち上げる場合は、追加の届出を意識すべき場面です。特に、名称、ページ構成、集客導線、会員導線が独立している場合は、単なる一部改修ではなく、新たなホームページとして整理する方が自然なことがあります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. 既存サイトとは異なる呼称・構成で運営するとき</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              届出確認書の様式には「広告又は宣伝をする場合に使用する呼称」が記載されるため、呼称の独立性は重要です。既存サイトと別の名称で集客し、別の導線で顧客を集める場合には、営業単位としての独立性が強まります。サイト数の判断では、URLだけでなく、呼称やブランドの分離も確認すべきです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 有料コンテンツ提供の中核が別サイトに移るとき</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              当初は一つのサイトだけで運営していても、後から別ページで主たる有料販売を始めることがあります。この場合、単なる情報追加なのか、新しい営業ページの開始なのかを整理し直す必要があります。営業の中心が変わると、届出の考え方も変わり得ます。これは解釈運用基準が営業実態を重視することからも妥当です。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 変更届で済むのか、新規届出が必要なのか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 変更届の制度はある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              警視庁は、映像送信型性風俗特殊営業などの変更届出書様式を公表しています。つまり、届出後に一定事項が変わること自体は制度上想定されています。事務所所在地、氏名又は名称、営業の方法などの変更が起きた場合には、変更届の問題が出てきます。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. ただし「別ホームページの追加」は単純な変更とは限らない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              注意すべき点は、変更届の制度があるからといって、複数サイトの追加がすべて変更届で済むとは限らないことです。警視庁が制度を「ホームページごとの届出」としている以上、別の営業ページを増やす行為は、単なる既存事項の変更ではなく、新たな営業ページの開始として整理すべき場合があります。この点は機械的に判断せず、既存サイトとの連続性や独立性を見て判断する必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-3. 実務では事前整理が重要</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              実際には、「これは変更で足りるのか」「別途の届出が必要か」で迷うケースが多くあります。このようなときに、ページの役割、ブランド、呼称、課金導線、会員導線を整理しておくと判断しやすくなります。反対に、方針を定めないままページだけ増やすと、後で整合が取りづらくなります。
            </p>
          </div>
          <Image
            src="/images/sample/hukusu_2.png"
            alt="映像送信型性風俗特殊営業の複数サイト追加時における追加届出と変更届の考え方（ページの独立性・呼称・ブランド分離・連続性による判断）"
            width={1672}
            height={941}
            className="w-[85%] mx-auto h-auto rounded-lg my-10"
          />
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 事務所が同じ場合はどう考えるか
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 事務所が一つでもサイト単位の検討は必要</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              事務所が同じであっても、ホームページごとの届出という原則がなくなるわけではありません。つまり、「同じ事務所だから一件にまとめられる」とは直ちに言えません。事務所は提出先管轄を決める基準であり、営業単位を決める基準とは別です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. ただし管轄警察署は同じになりやすい</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              複数サイトを同じ事務所から運営している場合、提出先の管轄警察署は通常同じ方向になります。したがって、「サイトが増えたら別の警察署に提出する」というより、「同じ警察署管轄で、営業ページ単位の整理を増やす」という理解の方が近いです。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 実務でよくある誤解
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. URLが違うだけなら一件で済むと考えてしまう</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              たしかに、URLが違っても実体として一つの営業ページに近い場合はあります。しかし、URLの違いを軽視して増設を繰り返すと、後で説明しにくくなることがあります。特に、別ブランド化や別会員導線がある場合は注意が必要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 外部プラットフォームは数に入れなくてよいと考えてしまう</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              独自サイトだけを届出対象と考え、外部プラットフォームの有料ページを除外してしまうケースもあります。しかし、営業実態の中心が外部プラットフォーム上のページにある場合、そのページも無視できません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 法人が一つなら届出も一つで済むと考えてしまう</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              法人運営では特に生じやすい誤解です。しかし、法人単位ではなくホームページごとという整理である以上、法人が一つでもサイトが複数なら検討は複数発生し得ます。法人の存在は営業主体の整理には重要ですが、ホームページ単位の考え方を消すものではありません。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. 複数サイト運営で先に整理すべきこと
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">8-1. 営業ページ一覧を作る</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                まず、自社で運営している成人向けページを洗い出し、独自サイト、会員ページ、外部プラットフォーム、サブブランドごとに一覧化することが重要です。口頭のイメージだけでは整理しきれません。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">8-2. それぞれの役割を分ける</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                次に、各ページが告知だけなのか、有料会員誘導なのか、実際に映像を見せているページなのかを分けて整理します。これにより、営業の中心がどこにあるかが見えやすくなります。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">8-3. 呼称とブランドの独立性を見る</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                呼称が違う、会員導線が別、広告導線が別という場合は、独立した営業ページとしての性格が強くなりやすいです。届出確認書様式に呼称欄があることからも、この点は軽視しない方が安全です。
              </p>
            </div>
          </div>
        </section>

        {/* sec9 */}
        <section id="sec9" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            9. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">9-1. 独自サイトと外部プラットフォームを併用している</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              このタイプは整理が特に難しくなりやすいです。どこまでを一つの営業と見るか、どこから別ページと見るかで迷いやすいため、早めに専門家へ相談することで手戻りを防ぎやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">9-2. 既存サイトに加えて新ブランドを立ち上げる</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              新ブランドの開始は、変更届で足りるのか、新規届出を意識すべきかが分かれやすい場面です。ブランド分離が強いほど、事前整理が重要になります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">9-3. 法人で複数サイト展開を予定している</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              法人案件は、営業主体、事務所、ページ整理、将来の拡張性まで見た設計が必要です。後からサイトを増やす前提がある場合は、初期段階から全体像を確認しておく方が安全です。
            </p>
          </div>
        </section>

        {/* sec10 */}
        <section id="sec10" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            10. まとめ
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              複数サイトを運営する場合の映像送信型性風俗特殊営業の届出ルールで特に重要な点は、警視庁が「ホームページごとの届出」と案内していることです。つまり、法人や事務所が一つでも、営業ページが複数あれば、それぞれが届出単位として問題になり得ます。
            </p>
            <p className="text-gray-700 leading-relaxed">
              一方で、提出先の管轄は事務所所在地を基準にします。したがって、「届出の単位はホームページごと」「提出先は事務所所在地の所轄警察署」と二段階で整理することが有効です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              新しいサイトを追加する場合に、常に変更届で済むとも、必ず新規届出が必要とも一律には言えません。既存サイトとの連続性、呼称、会員導線、営業実態の独立性を見て判断する必要があります。複数サイト運営では、URLの数だけで考えず、営業実態を整理することが重要です。判断に迷う場合は、営業ページ一覧を作成し、事前に行政書士へ相談してから進めることが現実的です。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：警視庁「性風俗関連特殊営業、深夜における酒類提供飲食店営業の届出」「性風俗関連特殊営業（様式一覧）」「変更届出書（様式一覧）」、e-Gov法令検索「風営法」「風営法施行規則」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
