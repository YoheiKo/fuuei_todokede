// app/components/ContactFormCTA.tsx
import LINECTA from "./LINECTA";

export default function ContactFormCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-16 pb-20 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            お問い合わせ・お申込み
          </h2>
          <p className="text-gray-600 mt-4">
            以下のフォームまたはLINEよりお気軽にご連絡ください。
            <br />
            原則24時間以内にご返信いたします（全国対応／無料相談／土日祝日可）。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://gyosei-fujiwara.com/1573-2/"
            width="100%"
            height={1474}
            title="お問い合わせフォーム"
            className="w-full"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-same-origin allow-scripts allow-popups"
          />
        </div>
      </div>

      <LINECTA />
    </section>
  );
}
