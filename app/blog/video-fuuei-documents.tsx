// app/blog/video-fuuei-documents.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "video-fuuei-documents",
  title: "映像送信型性風俗特殊営業の届出に必要な書類一覧｜行政書士が解説",
  description:
    "映像送信型性風俗特殊営業の届出に必要な書類を行政書士が解説。住民票、営業開始届出書、営業方法を記載した書類、事務所資料、法人の場合の追加書類、誓約書の考え方まで開業前に必要な準備を整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 届出 必要書類",
    "映像送信型 住民票",
    "映像送信型 誓約書",
    "映像送信型 事務所 書類",
    "風営法 届出 書類一覧",
    "行政書士",
  ],
  ogImage: "/video-fuuei-documents-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-04-05T00:00:00+09:00",
  modifiedTime: "2026-04-05T00:00:00+09:00",
  isPublished: true,
  cat: "届出手続き",
  date: "2026-04-05",
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
          src="/video-fuuei-documents-eyecatch.jpg"
          alt="映像送信型性風俗特殊営業の届出に必要な書類一覧｜住民票・誓約書など全部まとめ"
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
          <li>映像送信型性風俗特殊営業の届出に必要な書類の全体像</li>
          <li>個人・法人それぞれに必要な書類の違い</li>
          <li>住民票・誓約書・事務所資料のポイントと注意点</li>
          <li>書類準備をスムーズに進める順番と実務上のつまずきポイント</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">まず押さえたい考え方</a></li>
          <li><a href="#sec2" className="hover:underline">基本となる必要書類一覧</a></li>
          <li><a href="#sec3" className="hover:underline">個人で届出する場合に必要な書類</a></li>
          <li><a href="#sec4" className="hover:underline">法人で届出する場合に必要な書類</a></li>
          <li><a href="#sec5" className="hover:underline">誓約書は必要なのか</a></li>
          <li><a href="#sec6" className="hover:underline">事務所関係で必要な書類</a></li>
          <li><a href="#sec7" className="hover:underline">実務でよくあるつまずきポイント</a></li>
          <li><a href="#sec8" className="hover:underline">書類準備をスムーズに進める順番</a></li>
          <li><a href="#sec9" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-10">
        映像送信型性風俗特殊営業の届出を進めようとしたとき、多くの方が最初に困るのが「結局、何の書類が必要なのか分かりにくい」という点です。営業開始届出書が必要なことは分かっても、住民票は本籍入りなのか、誓約書は必要なのか、事務所関係の資料はどこまで必要なのか、法人の場合は何が追加になるのかなど、細かい部分で手が止まりやすい分野です。届出にあたっては営業主体・事務所・営業方法・使用権原などをきちんと整理し、その内容を裏付ける書類をそろえる必要があります。本記事では、書類の種類・なぜその書類が必要なのか・どこでつまずきやすいのかまで含めて実務経験豊富な行政書士が丁寧に解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. まず押さえたい考え方
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 必要書類は「書式」だけではない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          映像送信型性風俗特殊営業の届出で必要になる書類というと、多くの方はまず届出書の様式を思い浮かべます。もちろん、営業開始届出書は中心となる書類です。しかし、実務ではそれだけで完結するわけではありません。届出書に書いた内容を裏付けるための添付資料が必要であり、その資料の整い方によって手続の進みやすさが大きく変わります。必要書類とは単なるフォームの集合ではなく、「営業実態を公的に説明するための一式」と考えた方が分かりやすいです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 都道府県や警察署ごとに運用差が出ることがある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          法令上の基本書類は共通でも、実務では都道府県や警察署ごとの案内や確認ポイントに差が出ることがあります。特に、事務所関係の資料・営業方法の説明資料・誓約書の扱いなどは、案内の仕方に違いが見られることがあります。ネット上の一般論だけを見て全部そろったと思い込むのは危険です。届出は、書類をただ集める作業ではなく、警察署に対して営業の全体像を分かりやすく示す作業でもあります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-3. 書類準備は順番が大事
        </h3>
        <p className="text-gray-700 leading-relaxed">
          思いついたものから書類を取得していく方も多いのですが、実際には順番が大切です。先に事務所を確定しないと集められない書類がありますし、個人か法人かを決めないと必要資料が変わることもあります。最初にやるべきことは住民票取得ではなく、営業主体と事務所・サイトの構成・営業方法の整理です。この土台が固まって初めて、必要書類の種類と内容が確定します。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 基本となる必要書類一覧
        </h2>
        <div className="my-10">
          <Image
            src="/images/sample/eizosho_1.jpg"
            alt="映像送信型性風俗特殊営業の届出に必要な書類一覧（住民票・営業開始届出書・事務所資料など）"
            width={984}
            height={487}
            className="w-[85%] mx-auto h-auto rounded-lg"
          />
        </div>

        <div className="space-y-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">① 営業開始届出書(様式31)</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              届出の中核となる書類。営業者の氏名または名称、事務所所在地、広告・宣伝に使用する呼称、営業の内容などを記載します。ここに記載した内容が他の添付書類・実際の営業実態と一致している必要があります。
            </p>
          </div>
          <div className="w-[65%] mx-auto">
            <Image
              src="/yoshiki31.jpg"
              alt="映像送信型性風俗特殊営業の開始届出書（様式31）の記載例"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">② 営業の方法を記載した書類(様式32)</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              どのような方法で映像を送信し、どのような形で営業を行うのかを整理して示す書類。どの媒体を使うのか、会員制なのか、単品販売なのかなど、営業の実態に合わせた記載が必要です。届出全体を理解してもらうための重要資料です。
            </p>
          </div>
          <div className="w-[65%] mx-auto">
            <Image
              src="/yoshiki32.jpg"
              alt="映像送信型性風俗特殊営業の営業方法記載書類（様式32）の記載例"
              width={1200}
              height={900}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">③ 住民票</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              個人で届出する場合に基本となる書類。本籍地の記載は必要です。外国籍の方であれば国籍等の記載が必要になることもあります。一方、マイナンバーの記載は不要と指示されることが多いです。漫然と取得すると提出先の求める記載事項と合わないことがあるため注意が必要です。
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="font-bold text-gray-800 mb-1">④ 事務所の使用権原を示す書類</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              賃貸借契約書の写し、使用承諾書、建物の登記事項証明書などが該当します。届出書に記載した事務所が営業上の本拠として適切に使用できることを示す書類群で、実務上もっとも慎重に確認すべき部分です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 個人で届出する場合に必要になる書類
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 個人案件の基本構成
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          個人で届出する場合の基本構成は、営業開始届出書・営業の方法を記載した書類・住民票・事務所関係資料が中心になります。法人に比べると書類の種類は少なく見えますが、事務所と営業方法の整理に悩むことが多いです。個人か法人か・自宅を事務所にするかどうかなど、最初の設計次第で必要書類の取り方が変わります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. 住民票の注意点
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          取得時に本籍地記載を省略してしまうと、後から取り直しになることがあります。また、マイナンバーの記載が不要な場面では、余計な情報が入らないよう注意した方がよいこともあります。必要な記載事項を確認したうえで取得することが大切です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-3. 自宅を事務所にする場合の書類
        </h3>
        <p className="text-gray-700 leading-relaxed">
          自宅が自己所有なのか賃貸なのかで必要書類の考え方が変わります。賃貸の場合は「居住用契約のまま事務所として届出できるのか」という問題にぶつかりやすく、契約関係まで含めて見直した方が安全です。個人案件で一番悩みやすいのは、まさにこの事務所まわりです。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 法人で届出する場合に必要になる書類
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. 法人案件では追加資料がある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          法人で届出する場合は、個人の基本書類に加え、定款・法人の登記事項証明書・役員全員の住民票が必要になります。役員が複数いる会社では住民票の収集だけでも時間がかかることがあります。開業直前にまとめて集めようとすると、そこで足が止まりやすいです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 定款の確認ポイント
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          会社はあるものの、定款の目的欄に風俗営業の記載がないことがあります。その場合は受理されないので、先に定款の事業目的の変更が必要です。
          別事業で使っていた法人を流用する場合に特に起きやすいです。届出準備の際は、会社が存在するかどうかだけでなく、定款内容も含めて確認した方がよいです。
          また、定款には代表者による定款原本に相違ない旨の証明が必要です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-3. 役員全員の住民票
        </h3>
        <p className="text-gray-700 leading-relaxed">
          代表者だけでなく役員全員分をそろえる必要があります。役員が遠方に住んでいる場合や手続への理解が薄い場合には、ここがボトルネックになることがあります。法人案件は、この点で個人案件より準備期間を長めに見ておくべきです。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 誓約書は必要なのか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-1. 「誓約書」という言い方で探しても分かりにくい
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          「誓約書は必要か」はよく検索されるポイントですが、実務では必ずしも「誓約書」という名称で案内されるとは限りません。都道府県警や警察署の案内・案件の内容によって、確認書面や補足資料の位置づけで求められることがあります。「誓約書が必要と書いていないから不要」とも、「ネットで見たから必ず必要」とも言い切れません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-2. 実務上は補足書類として求められることがある
        </h3>
        <p className="text-gray-700 leading-relaxed">
          案件によっては、営業実態・使用権原・運営体制などについての確認書面や申立書面のようなものを求められることがあります。誓約書という言葉だけで探すより、「追加で求められる補足資料があるかもしれない」と考えておく方が実務的です。書類一覧だけで完結しないことがある、という理解が大切です。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 事務所関係で必要な書類
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 賃貸借契約書の写し
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          賃貸物件を事務所として使う場合に基本となる書類です。契約当事者・所在地・用途などが見られます。
          個人で借りている物件を法人届出に使う場合などは、書類上の説明が難しくなることがあります。賃貸借契約書は単に住所確認のためだけではなく、使用権原の土台として見られる書類です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 使用承諾書
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          その物件を届出上の事務所として使用することについて、所有者や管理者の承諾があることを示す資料です。建物の所有者である賃貸人から次の使用承諾書を得ないと不備になります。
          居住用賃貸物件ではそもそも風営法の事務所としての利用が承諾されていないことが多いため、ここを曖昧にしたまま進めとうまくいきません。
          物件の所有である賃貸人から使用承諾書が取れない場合は、物件選び自体を見直す必要が出ることもあります。転貸の場合、建物が共有の場合は難易度が一層あがります。当事務所ではいずれの経験もありますので、ご相談ください。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-3. 建物の登記事項証明書
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          自己所有物件であれ、賃貸物件であれ不可欠の書類です。事務所資料の基礎となる書類です。
          営業の実態がネット上にある分、物理的な事務所に関する書類は、より慎重に見られやすいと考えた方がよいです。
        </p>
                <h3 className="text-base font-bold text-gray-800 mb-3">
          6-4. 図面
                  </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          映像送信型性風俗特殊営業の届出においても、他の風俗営業の届出同様に、事務所の図面の提出が必要です。
        </p>
                        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-5. 地番と住居表示が一致していることの証明書
                  </h3>
        <p className="text-gray-700 leading-relaxed mb-6 md:mb-10">
          警察署によっては、稀に提出を求められます。申請者がその旨を証明する任意様式の書類です。
        </p>
      </section>

      {/* sec7 */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. 実務でよくあるつまずきポイント
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-1. 書類はあるのに整合が取れていない
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          もっとも多いのは、書類自体はそろっているのに内容の整合が取れていないケースです。届出書上の事務所所在地と賃貸借契約書の関係が曖昧だったり、建物所有者と賃貸借契約の契約名義がずれていたり、サイト上の表記と届出書の呼称が違っていたりします。全体がぴったし整合していないと不備になり届出が受理されません。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-2. 住民票や法人書類を後回しにする
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          取得しやすそうに見えるため後回しにされがちですが、実務では意外とここで遅れます。役員が複数いる法人案件ではなおさらです。物件の調整や営業方法の整理と並行して、早めに取得準備を進めた方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          7-3. 追加資料の存在を想定していない
        </h3>
        <p className="text-gray-700 leading-relaxed">
          法定書類だけ見て準備すると、追加資料の可能性を考えていないことがあります。最初から「基本書類のほかに説明資料が必要になるかもしれない」と考えておく方が進めやすいです。警察署によって、運用に差があるので、管轄の警察署に提出書類を丁寧に確認します。
        </p>
      </section>

      {/* sec8 */}
      <section id="sec8" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          8. 書類準備をスムーズに進める順番
        </h2>
        <div className="my-10">
          <Image
            src="/images/sample/eizosho_2.jpg"
            alt="映像送信型性風俗特殊営業の届出書類準備をスムーズに進める8ステップの順番"
            width={1029}
            height={468}
            className="w-[85%] mx-auto h-auto rounded-lg"
          />
        </div>

        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "営業主体と事務所を決める",
              body: "個人か法人か、事務所をどこにするかを決める。この2点が固まらないと、必要書類の種類も内容も確定しません。",
            },
            {
              step: "STEP 2",
              title: "営業方法を整理する",
              body: "どのサイトで、どのような方法で営業するかを整理する。ここが明確になると、届出書と営業方法の書類が作りやすくなります。",
            },
            {
              step: "STEP 3",
              title: "住民票・法人書類・事務所資料を集める",
              body: "前提が固まった後で、住民票・法人資料・賃貸借契約書・使用承諾書などを集めていくと手戻りが少なくなります。順番を逆にすると、後で使えない資料を取ってしまうことがあります。",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex-shrink-0 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec9 まとめ */}
      <section id="sec9" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          9. まとめ
        </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            映像送信型性風俗特殊営業の届出に必要な書類は、営業開始届出書・営業の方法を記載した書類・住民票・事務所の使用権原を示す書類が基本です。法人の場合は、これに加えて定款・登記事項証明書・役員全員分の住民票などが必要になります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            「誓約書」という言葉でまとめられがちな補足書類についても、案件や提出先によって確認書面や補足資料が求められることがあります。一覧表だけを見て終わりにするのではなく、営業実態に合わせて何を用意すべきかを整理することが大切です。
          </p>
<<<<<<< HEAD
          <p>
            特に重要なのは書類の枚数ではなく全体の整合性です。個人か法人か、どの事務所を使うのか、どのような方法で営業するのかを先に固め、そのうえで必要書類を集めることで、届出準備は大幅に進めやすくなります。まず一覧を眺めるのではなく、営業の土台を整理するところから始めることを推奨します。
=======
          <p className="text-gray-700 leading-relaxed">
            特に重要なのは書類の枚数ではなく全体の整合性です。個人か法人か、どの事務所を使うのか、どのような方法で営業するのかを先に固め、そのうえで必要書類を集めることで、届出準備はかなり進めやすくなります。まず一覧を眺めるのではなく、営業の土台を整理するところから始めることをおすすめします。
>>>>>>> 622f8fe1697b716a66df032f69c84db83de123e4
          </p>
      </section>

      <AuthorBlock />
    </article>
  );
}
