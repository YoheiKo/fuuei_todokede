// app/blog/fuei-service.tsx
import type { PostMeta } from "./index";
import AuthorBlock from "../components/AuthorBlock";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";

export const meta: PostMeta = {
  slug: "fuei-service",
  title: "風営法届出の代行は行政書士へ｜申請書作成から警察署提出までサポート",
  description:
    "風営法届出の代行を行政書士へ依頼するメリットをわかりやすく解説。申請書作成から警察署提出までのサポート内容、自分で進める場合との違い、依頼した方がよいケース、費用相場の目安を整理します。",
  keywords: [
    "風営法届出 代行 行政書士",
    "風営法 申請書作成",
    "映像送信型性風俗特殊営業 届出 代行",
    "風営法 行政書士 費用",
    "警察署 届出 サポート",
    "行政書士",
  ],
  ogImage: "/todokede_gyosei_eye.jpg",
  robots: "index, follow",
  publishedTime: "2026-05-04T00:00:00+09:00",
  modifiedTime: "2026-05-04T00:00:00+09:00",
  isPublished: true,
  cat: "開業・依頼",
  date: "2026-05-04",
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
          src="/todokede_gyosei_eye.jpg"
          alt="風営法届出の代行は行政書士へ｜申請書作成から警察署提出までサポート"
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
          <li>行政書士が風営法届出を代行できる法令上の根拠</li>
          <li>申請書作成から警察署提出までのサポート内容</li>
          <li>自分で進める場合との違いとリスク</li>
          <li>依頼した方がよいケースと費用相場の目安</li>
        </ul>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl mb-8 p-4 md:p-6">
        <h2 className="font-bold text-base mb-3">目次</h2>
        <ol className="space-y-1.5 text-sm text-violet-800 list-decimal pl-5">
          <li>風営法届出の代行を行政書士に依頼できる理由</li>
          <li>行政書士に依頼した場合のサポート内容</li>
          <li>自分で進める場合との違い</li>
          <li>行政書士へ依頼した方がよいケース</li>
          <li>費用相場の考え方</li>
          <li>行政書士へ依頼する価値はどこにあるか</li>
          <li>まとめ</li>
        </ol>
      </div>

      {/* リード文 */}
      <p className="text-gray-700 leading-relaxed mb-4">
        風営法に関する届出をしようとしたとき、「書類は自分でも作れそうだが、本当にこれで足りるのか」「警察署に出す前に何を整理すべきか分からない」と悩む方は少なくありません。特に、性風俗関連特殊営業や映像送信型性風俗特殊営業、無店舗型性風俗特殊営業のように、営業の実態と書類の整合が重視される分野では、単に様式を埋めるだけでは足りないことがあります。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        警視庁は、映像送信型性風俗特殊営業について「ホームページごとの届出」と案内し、必要書類として営業開始届出書、営業の方法を記載した書類、事務所の使用権原を示す書類、住民票、法人の場合の定款や登記事項証明書などを挙げています。また、行政書士法では、行政書士の業務として、官公署に提出する書類の作成、その内容に関する相談、そして提出手続の代理を行うことが規定されています。警察署も官公署に含まれるため、風営法届出のような警察署提出書類について、行政書士が申請書作成から提出手続まで関与することには制度上の根拠があります。
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        本記事では、風営法届出の代行を行政書士へ依頼する意味、申請書作成から警察署提出までどのようなサポートを受けられるのか、自分で進める場合との違い、依頼した方がよいケースを、行政書士の視点から解説します。
      </p>

      {/* sec1 */}
      <section id="sec1" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          1. 風営法届出の代行を行政書士に依頼できる理由
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-1. 行政書士は官公署提出書類の作成と提出手続代理を行う資格者
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          行政書士は、法令上、官公署に提出する書類の作成、その相談、そして提出手続の代理を業とする国家資格者と規定されます。警察署も官公署です。つまり、風営法に基づいて警察署へ提出する届出書類は、まさに行政書士業務の中心にある業務のひとつです。行政書士以外の第三者が届出に関与することは違法です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          1-2. 風営法届出は"書類作成だけ"では終わらない
        </h3>
        <p className="text-gray-700 leading-relaxed">
          風営法届出の難しさは、それば単なる書類の作成代筆ではなく、要件の整理が必要になる点です。どのように広告するのか、どこを事務所にするのか、風営法上のどの事業に該当するのかが定まっていないと、様式だけあっても実際には書き進められません。行政書士に依頼する価値は、まさにこの要件の整理にあります。何をどう書くべきか、どの資料で裏付けるべきかを整理できる点が大きな意味を持ちます。
        </p>
      </section>

      {/* sec2 */}
      <section id="sec2" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          2. 行政書士に依頼した場合のサポート内容
        </h2>

        <div className="space-y-4">
          {[
            {
              step: "STEP 1",
              title: "申請前のヒアリングと営業類型の整理",
              body: "最初に行うのは、どの営業類型に当たるのかの整理です。風営法には複数の営業類型があり、映像送信型性風俗特殊営業、無店舗型性風俗特殊営業などで必要書類も着眼点も違います。ネット上で成人向け映像を見せる営業なのか、人を派遣する営業なのか、ページ単位で整理すべき営業なのかによって届出の方向性は変わります。入口での誤りを防ぐうえで最も重要なステップです。",
            },
            {
              step: "STEP 2",
              title: "必要書類の洗い出しと収集案内",
              body: "映像送信型性風俗特殊営業の届出に必要な書類として、警視庁は営業開始届出書、営業の方法を記載した書類、事務所の使用権原を示す書類、住民票、法人の場合は定款・法人登記事項証明書・役員全員の住民票を示しています。実務では「どの書類が必要か」は分かっても、「この賃貸契約書で足りるか」「使用承諾書が必要か」といった判断で止まりやすく、依頼者の状況に合わせた案内が役立ちます。",
            },
            {
              step: "STEP 3",
              title: "申請書・営業方法書類の作成",
              body: "警視庁は様式と記載例を公開していますが、どのように記載するかは個別事情に左右されます。特に「ホームページごとの届出」が前提になる類型では、どのページを営業単位として記載するか、広告や呼称をどう整理するかが重要になるため、実務的な差が出やすい部分です。",
            },
            {
              step: "STEP 4",
              title: "警察署提出までのサポート",
              body: "法令上、行政書士の業務として官公署に提出する手続について代理することは明示されています。提出の場面では、様式が整っているだけではなく、営業実態や必要資料について説明が求められることもあります。そうした場面まで見据えて準備できることが、申請書作成から警察署提出まで一貫サポートの実務上の価値です。",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 bg-gray-50 rounded-xl p-4 md:p-5">
              <div className="shrink-0 w-20 text-center bg-violet-600 text-white text-xs font-bold rounded-lg py-2 flex items-center justify-center">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec3 */}
      <section id="sec3" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          3. 自分で進める場合との違い
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-1. 様式入手はできても、前提整理で止まりやすい
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          自分で進める場合でも、警視庁が公開している様式や記載例を入手すること自体はできます。制度上「必ず行政書士に頼まないとできない」という話ではありません。ただし、実際に詰まりやすいのは様式の入手ではなく、営業の単位、事務所、名義、必要書類の整合です。特に、ネット営業、複数ページ運営、外部プラットフォーム利用、法人案件では、自分で調べながら正確に整理するハードルが高くなります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          3-2. コストは抑えやすいが、時間と手戻りが増えやすい
        </h3>
        <p className="text-gray-700 leading-relaxed">
          自力で進める最大の利点は、行政書士報酬がかからないことです。一方で、警察署提出に至るまでの調査、資料確認、契約内容の読み込み、ページ単位の整理などは自分で行う必要があります。風営法分野は「書類枚数」より「整理論点」の方が多いため、時間コストや手戻りリスクを軽く見ない方が安全です。特に公開日や営業開始日が決まっている人ほど、書類不備による遅れは大きなダメージになります。
        </p>
      </section>

      {/* sec4 */}
      <section id="sec4" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          4. 行政書士へ依頼した方がよいケース
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-1. 届出が必要かどうかの線引きで迷っている
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          一番依頼メリットが大きいのは、「そもそも届出が必要かどうか」の線引きで迷っているケースです。一般向けと成人向けが混在していたり、画像と動画が混ざっていたり、外部プラットフォームを併用していたりすると、自分だけで正確に判断するのは難しくなります。この段階で誤ると、その後の申請書類もすべてズレるため、入口の判断に不安があるなら最初から行政書士へ相談した方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-2. 複数ページ・複数ブランドで運営する
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          警視庁が「ホームページごとの届出」としている以上、複数ページや複数ブランドを運営する案件は、単純な一ページ案件より難易度が上がります。どこまでを一体の営業とし、どこから別整理にするかを自分だけで決めると後でズレやすいため、申請書作成より前の設計段階に専門家を入れた方が安全です。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-3. 事務所や物件に不安がある
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          事務所資料は、警視庁が明示的に求めている重要書類です。使用承諾書、賃貸契約書の写し、建物資料などのどれで説明するか、レンタルオフィスで足りるか、自宅を使ってよいかなどは、物件ごとに論点が違います。物件契約後に「この形では届出説明がしにくい」と気づくより、事前に行政書士へ確認した方が手戻りも減ります。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          4-4. 法人案件や将来の拡大を見込んでいる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          法人で始める場合は、定款、法人登記事項証明書、役員全員の住民票が必要です。既存法人を使う場合には定款目的や役員構成の整合も確認した方がよく、将来的に複数ページや別ブランド展開を見込んでいるなら、最初から行政書士を入れておいた方が設計しやすくなります。
        </p>
      </section>

      {/* sec5 */}
      <section id="sec5" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          5. 費用相場の考え方
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-1. 日行連の統計では5万〜10万円帯が中心
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          日本行政書士会連合会の令和2年度報酬額統計調査では、「性風俗特殊営業営業開始届出（映像送信型）」の報酬額について、最小値5万円、平均7万5,132円、最大値15万円、最頻値5万円とされています。この数字から見ると、映像送信型性風俗特殊営業の届出サポートは、おおむね5万円から10万円台前半あたりが一つの目安と考えやすいです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          5-2. 実際の費用は対応範囲で変わる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          実際の報酬額は、単なる申請書作成のみか、必要書類案内、事務所確認、警察署提出まで含むかで大きく変わります。「相場より安いか高いか」だけではなく、「何が含まれているか」を確認することが大切です。特に、申請書作成から警察署提出まで一貫してサポートしてもらえるかどうかは、比較の重要ポイントになります。
        </p>
      </section>

      {/* sec6 */}
      <section id="sec6" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          6. 行政書士へ依頼する価値はどこにあるか
        </h2>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-1. 一番の価値は"正確な整理"
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          風営法届出の代行を行政書士へ依頼する価値は、単に書類作成を外注することではなく、営業実態を正確に整理して、警察署提出書類に整理できることにあります。警視庁の必要書類を見ても、営業方法、事務所、名義、法人資料など、整理の質がそのまま申請の質に直結する構造です。特に、ネット営業や成人向け配信分野では、見た目はシンプルでも法務論点が多く、最初の整理に専門家が入る意味は大きいです。
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">
          6-2. 開業初期の不安を減らせる
        </h3>
        <p className="text-gray-700 leading-relaxed">
          もう一つの価値は、依頼者が営業準備に集中しやすくなることです。配信ビジネスや性風俗関連特殊営業の立ち上げでは、ページ制作、顧客導線、契約、決済、広告など、同時に進めることが多いです。法務を自分だけで抱え込むより、申請書作成から警察署提出までを行政書士に任せる方が、全体の進行管理がしやすくなります。
        </p>
      </section>

      {/* sec7 まとめ */}
      <section id="sec7" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-violet-200 pb-2 mb-6">
          7. まとめ
        </h2>
        <div className="bg-gray-50 rounded-xl p-5 md:p-7 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            風営法届出の代行を行政書士へ依頼するメリットは、官公署提出書類の作成と提出手続代理が制度上の業務範囲にあることに加え、営業類型の整理、営業ページの単位整理、事務所資料の確認、法人案件の整合確認まで含めてサポートを受けやすい点にあります。日本行政書士会連合会も、行政書士は警察署を含む官公署に提出する書類の作成と提出手続代理を行うと案内しています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、警視庁は映像送信型性風俗特殊営業について、ホームページごとの届出と必要書類を明示しており、この分野が単純な代書ではなく、営業実態の整理を要する手続であることが分かります。だからこそ、申請書作成から警察署提出まで一貫してサポートを受けられる価値があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            費用相場は、日行連の統計ベースでおおむね5万円から10万円台前半が目安ですが、実際には対応範囲で変動します。届出が必要かの線引きに迷う人、複数ページ運営の人、物件や事務所に不安がある人、法人案件の人ほど、行政書士へ依頼するメリットは大きいです。開業をスムーズに進めたいなら、早い段階で相談し、最初の整理を正確に行うことが大切です。
          </p>
        </div>
      </section>

      <AuthorBlock />
    </article>
  );
}
