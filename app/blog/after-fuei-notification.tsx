// app/blog/after-fuei-notification.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "after-fuei-notification",
  title: "映像送信型性風俗特殊営業の届出後にやるべきこと【営業開始チェックリスト】",
  description:
    "映像送信型性風俗特殊営業の届出後にやるべきことを行政書士がわかりやすく解説。営業開始後に確認すべきチェックリスト、変更届・廃止届が必要になる場面、営業ページや事務所の見直しポイントを整理します。",
  keywords: [
    "映像送信型性風俗特殊営業 届出後",
    "映像送信型性風俗特殊営業 変更届",
    "映像送信型性風俗特殊営業 廃止届",
    "風営法 届出後 チェックリスト",
    "行政書士",
  ],
  ogImage: "/after-fuei-notification-eyecatch.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-07T00:00:00+09:00",
  modifiedTime: "2026-05-07T00:00:00+09:00",
  isPublished: true,
  cat: "Q&A",
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
          <li>届出後も届出内容と営業実態を一致させ続ける必要がある理由</li>
          <li>営業開始直後・継続運営中に確認すべきポイント</li>
          <li>変更届・廃止届が必要になる場面の考え方</li>
          <li>実務で使える営業開始チェックリスト</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li><a href="#sec1" className="hover:underline">基本整理</a></li>
          <li><a href="#sec2" className="hover:underline">営業開始直後に確認すべきこと</a></li>
          <li><a href="#sec3" className="hover:underline">営業開始後に継続して確認すべきこと</a></li>
          <li><a href="#sec4" className="hover:underline">変更が起きたときに確認すべきこと</a></li>
          <li><a href="#sec5" className="hover:underline">廃止する場合に確認すべきこと</a></li>
          <li><a href="#sec6" className="hover:underline">紛失やき損が起きたときに確認すべきこと</a></li>
          <li><a href="#sec7" className="hover:underline">営業開始後に見直しが必要になりやすい具体例</a></li>
          <li><a href="#sec8" className="hover:underline">営業開始チェックリスト</a></li>
          <li><a href="#sec9" className="hover:underline">行政書士に相談した方がよいケース</a></li>
          <li><a href="#sec10" className="hover:underline">まとめ</a></li>
        </ol>
      </div>

      {/* リード文 */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
        <p>
          映像送信型性風俗特殊営業の届出を終えると、多くの事業者が「これで手続は完了した」と考えやすいです。たしかに、営業開始届出書や必要書類を整えて警察署へ提出することは大きな節目ですが、実務上はそこが終点ではありません。むしろ、届出後に何を維持し、何が変わったらどの手続を取り、どの書類や情報を見直すべきかを理解していないと、後から変更届や廃止届の漏れ、営業実態との不整合といった問題が起きやすくなります。
        </p>
        <p>
          警視庁は、映像送信型性風俗特殊営業について、営業開始届出だけでなく、届出書記載事項の変更届、営業廃止届、営業届出確認書の再交付などの手続も公表しており、この営業が「提出して完了」ではなく、「変更や継続管理を前提とした制度」であることが分かります。
        </p>
        <p>
          また、風営法とその解釈運用基準は、映像送信型性風俗特殊営業を、性的映像を電気通信設備を用いて客に見せる営業として整理しており、営業ごとに届出を行うこととなり、通常はインターネット利用型であればホームページ単位で行うことになると説明しています。つまり、営業開始後にページ構成、呼称、営業方法、事務所、営業主体が変われば、届出との整合を見直す必要が出てきます。
        </p>
        <p>
          そこで本記事では、映像送信型性風俗特殊営業の届出後に確認すべきことを、営業開始直後に確認すべきこと、運営中に維持すべきこと、変更が起きたときの考え方、廃止時の手続まで含めて、個人事業主や法人にも分かりやすいチェックリスト形式で整理して解説します。
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">

        {/* sec1 */}
        <section id="sec1" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            1. 基本整理
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">1-1. 届出後も「営業実態」と「届出内容」を一致させ続ける必要がある</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業の届出で重要なのは、提出時点だけ整っていればよいわけではない、という点です。警視庁が変更届出書と廃止届出書の様式を別に公表していることからも明らかなように、この制度は営業開始後の変化を当然に予定しています。つまり、届出時の内容と営業実態が変わってきたら、そのまま放置するのではなく、必要な手続を取る前提の制度です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">1-2. 「届出確認書」まわりも意識しておく</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              営業開始後に見落とされやすいのが、届出確認書の存在です。警察庁の標準処理期間資料では、映像送信型性風俗特殊営業届出確認書の再交付手続が明示されており、施行規則でも再交付や返納の規定が準用されています。つまり、届出確認書は単なる一時的な控えではなく、制度上意味のある書類として扱われています。紛失やき損が起きた場合の対応まで含めて理解しておくべきです。
            </p>
          </div>
        </section>

        {/* sec2 */}
        <section id="sec2" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            2. 営業開始直後に確認すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">2-1. 届出内容の控えを整理して保管する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              届出が終わったら最初に確認すべきなのは、提出した内容を整理して残しておくことです。営業開始届出書、営業の方法を記載した書類、事務所資料、住民票や法人資料など、提出時に使った内容は、その後の変更届や廃止届の基準になります。何をどのように届け出たかを把握していないと、後から「どこが変わったのか」が分からなくなります。警視庁が開始、変更、廃止をそれぞれ分けて案内していることからも、開始時点の内容を基準資料として持っておく意味は大きいです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-2. 営業ページの一覧を確定する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              映像送信型性風俗特殊営業は通常、ホームページ単位で届出する考え方です。そのため、営業開始後は「どのページを届出対象としているのか」を明確にしておく必要があります。独自サイト、会員ページ、サブドメイン、外部プラットフォーム上の販売ページなど、営業導線が複数ある場合は、開始時点でどこまでを営業ページとして整理したのかを一覧化しておくと、その後の変更判断がしやすくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">2-3. 営業主体と事務所の情報を社内で共有する</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              個人であれば本人が把握していればよい面もありますが、法人やチーム運営では、営業主体、事務所所在地、使用名義、提出先管轄などを関係者間で共有しておくべきです。事務所所在地は届出先の基礎であり、必要書類にも事務所の使用権原資料が入っています。運営担当、サイト担当、顧客対応担当がそれぞれ異なる理解をしていると、後の変更時に整合が取りづらくなります。
            </p>
          </div>
        </section>

        {/* sec3 */}
        <section id="sec3" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            3. 営業開始後に継続して確認すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">3-1. 実際に運営しているページが届出範囲から外れていないか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              運営を続けると、初期には想定していなかったページや導線が増えることがあります。告知用の別ページを作る、ブランドを増やす、外部サービスに販売ページを追加するといった変化が起きたときに、届出済みの営業ページの範囲から外れていないかを確認する必要があります。映像送信型性風俗特殊営業はホームページ単位で整理されるため、サイト追加を軽視すると後から説明が難しくなります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-2. 呼称やブランドが変わっていないか</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              届出確認書様式には、広告又は宣伝をする場合に使用する呼称が記載される構造があります。つまり、ブランド名、サービス名、広告上の名称は制度上無関係ではありません。営業開始後に名称を変えたり、別ブランドとして運営したりする場合は、単なるマーケティング上の変更ではなく、届出との整合も意識する必要があります。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">3-3. 営業方法が開始時と異なっていないか</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              営業の方法を記載した書類は、開始時の重要資料です。会員制の仕組み、課金方法、販売方法、提供形態などが大きく変わった場合は、開始時点の整理との不整合が生じます。映像送信型性風俗特殊営業は、営業実態が制度の中核にあるため、営業方法が変わったにもかかわらず放置することは避けるべきです。警視庁が変更届の制度を用意していることからも、この部分は継続して見直すべき対象です。
            </p>
          </div>
        </section>

        {/* sec4 */}
        <section id="sec4" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            4. 変更が起きたときに確認すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">4-1. まず「変更届の対象か」を確認する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              営業開始後に何かが変わったら、最初に考えるべきなのは「これは変更届の対象か」という点です。警視庁は、映像送信型性風俗特殊営業を含む性風俗関連特殊営業について、変更届出書の様式を公表しています。つまり、制度上、一定の変更は届け出る前提になっています。何が変わったかを曖昧にせず、届出書記載事項との関係で整理することが重要です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-2. サイト追加は単純な「軽微変更」と考えない</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              実務で誤解が生じやすいのが、営業ページやサイトを増やした場合です。ホームページごとの届出という考え方からすると、別ページの追加は単純な軽微変更では済まないことがあります。既存サイトの一部改修なのか、新たな営業ページの開始なのかで考え方が変わるため、安易に「後でまとめて変更届で提出すればよい」と考えない方が安全です。これは解釈運用基準が営業ごとの届出を予定していることからも妥当です。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">4-3. 事務所変更は管轄にも影響する</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              事務所所在地は届出制度の基礎です。風営法施行規則上、届出書は事務所所在地の所轄警察署長を経由して提出する建て付けになっているため、事務所が変われば、届出先の管轄にも関わります。したがって、引っ越し、オフィス移転、自宅からレンタルオフィスへの変更などは、営業実態だけでなく警察署の整理にも影響する重要事項です。
            </p>
          </div>
        </section>

        {/* sec5 */}
        <section id="sec5" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            5. 廃止する場合に確認すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">5-1. 営業をやめたら廃止届を検討する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              営業をやめた場合は、そのまま放置するのではなく、廃止届の制度を確認する必要があります。警視庁は、映像送信型性風俗特殊営業を含む性風俗関連特殊営業について、廃止届出書の様式を公表しています。営業開始後に終了を想定した手続まで用意されているということは、制度上、開始・変更・廃止が一続きで考えられているということです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">5-2. 休止と廃止を混同しない</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              短期間更新しないだけなのか、事業として終了するのかは整理が必要です。サイトを閉じる、会員募集を止める、ブランドを終了するなど、外部から見て終了が明らかな状態であれば、廃止届の検討を後回しにしない方がよいでしょう。制度上、廃止の手続がある以上、「黙って閉じる」という発想は避けるべきです。これは警視庁が廃止届様式を独立して設けていることからも明らかです。
            </p>
          </div>
        </section>

        {/* sec6 */}
        <section id="sec6" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            6. 紛失やき損が起きたときに確認すべきこと
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">6-1. 届出確認書の再交付を確認する</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              営業届出確認書を紛失したり、き損したりした場合は、再交付の制度を確認すべきです。警視庁の性風俗関連特殊営業の様式一覧でも、営業届出確認書の再交付を求める場合の案内があり、警察庁の資料では再交付の標準処理期間も整理されています。つまり、確認書はなくしてもよい単なる控えではなく、制度上の文書として位置付けられています。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">6-2. 書類管理体制を整える</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              個人であっても法人であっても、届出関係書類は一か所で管理する方が安全です。開始届、変更届、廃止届、確認書、事務所資料、住民票や法人資料の控えなどを散在させると、必要時に再確認が難しくなります。制度が継続管理型である以上、営業開始後こそ書類管理のルールを持つ意味があります。これは公的資料の様式構造を踏まえた実務上のポイントです。
            </p>
          </div>
        </section>

        {/* sec7 */}
        <section id="sec7" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            7. 営業開始後に見直しが必要になりやすい具体例
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">7-1. 新しい会員ページを作った</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              既存ブランド内でも、新しい有料会員ページや成人向け上位プランのページを作った場合は注意が必要です。ホームページごとの届出という整理との関係で、既存届出の範囲なのか、別途整理が必要なのかを確認すべきです。後から増やすページほど、開始時点の届出との不整合が起きやすいです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-2. 法人化した、または役員が変わった</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              個人で始めて途中から法人化した場合や、既存法人で役員が変わった場合は、営業主体に関する整理が必要です。警視庁は法人案件で定款、登記事項証明書、役員全員の住民票を必要書類としている以上、法人情報の変更は軽視できません。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">7-3. 自宅から別オフィスへ移転した</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              自宅開業からレンタルオフィスや賃貸事務所へ移る場合、単なる住所変更ではなく、事務所に関する届出整理が必要になります。事務所所在地は管轄警察署にも関わるため、営業開始後の変更の中でも特に重要度が高いです。
            </p>
          </div>
        </section>

        {/* sec8 */}
        <section id="sec8" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            8. 営業開始チェックリスト
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-3">8-1. 開始直後に確認すること</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  提出した届出書類一式の控えを保管した
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  営業届出確認書の保管場所を決めた
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  届出対象の営業ページ一覧を作成した
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  営業主体、事務所所在地、使用呼称を社内または内部メモで整理した
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-3">8-2. 継続運営で確認すること</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  新しいサイトや会員ページを追加していないか
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  使用するブランド名や呼称が変わっていないか
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  料金体系や営業方法が開始時から変わっていないか
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  事務所や運営拠点に変更がないか
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-3">8-3. 変更・終了時に確認すること</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  変更届の対象かを確認した
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  廃止する場合は廃止届を検討した
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-violet-500 font-bold">✓</span>
                  確認書の紛失・き損時は再交付を確認した
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* sec9 */}
        <section id="sec9" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-violet-600 pl-3 mb-6">
            9. 行政書士に相談した方がよいケース
          </h2>

          <h3 className="font-bold text-gray-900 mb-2">9-1. 変更が「変更届で足りるか」判断しにくいとき</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              相談の必要性が高いのは、営業開始後の変化が、単なる記載事項変更なのか、新たな営業ページの開始なのか判断しにくいときです。特に複数サイト運営では、この点が曖昧になりやすいです。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-2">9-2. 法人化・移転・ブランド追加が重なっているとき</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              法人化、役員変更、事務所移転、ブランド追加が同時に起きると、何をどの順番で整理すべきか複雑になります。このような案件は早めに専門家に相談することで、手戻りを防ぎやすくなります。
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
              映像送信型性風俗特殊営業の届出後に確認すべきことは、単に営業を開始することではなく、届出内容と営業実態を一致させ続けることです。警視庁が営業開始届だけでなく、変更届、廃止届、確認書再交付まで公表していることからも、この制度が継続管理型であることは明らかです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特に重要なのは、営業ページ、使用呼称、営業方法、事務所所在地、営業主体に変化があったときに、そのまま放置しないことです。映像送信型性風俗特殊営業は営業ごと、通常はホームページ単位で届出する考え方が示されているため、サイト追加や別ページ展開は軽視しない方が安全です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              届出後の運営で少しでも迷いがある場合は、開始時の控えを見返し、何が変わったのかを整理したうえで、必要に応じて行政書士へ相談することが現実的です。開始時点だけ整えて終わりにしないことが、後から無届状態や変更漏れで困らないための基本となります。
            </p>
            <p className="text-sm text-gray-500 leading-relaxed pt-2 border-t border-gray-200">
              参照：警視庁「性風俗関連特殊営業（様式一覧）」「変更届出書（様式一覧）」、警視庁「生活安全警察・電子申請」、警察庁「風営法の解釈運用基準」「標準処理期間資料」、e-Gov法令検索「風営法」「風営法施行規則」。
            </p>
          </div>
        </section>

      </div>

      <AuthorBlock />
    </article>
  );
}
