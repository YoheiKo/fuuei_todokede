// app/components/LINECTA.tsx
import React from "react";
import Image from "next/image";

const LINECTA: React.FC = () => {
  return (
    <div
      id="zoom"
      className="w-full mt-10 mb-10 scroll-mt-20 flex justify-center px-4"
    >
      {/* Centering wrapper */}
      <div className="w-full max-w-[54rem] flex flex-col items-center">
        <div className="mt-4 shadow-xl px-6 pt-10 pb-10 mb-6 border border-[whitesmoke] rounded w-full flex flex-col items-center">
          {/* QR Code for md and larger screens */}
          <div className="hidden md:flex flex-col items-center">
            <p className="mb-4 text-base md:text-lg">
              LINEでの問い合わせ・お申込みはこちらのQRより
            </p>
            <Image
              src="/m_line.png"
              alt="LINE友達追加QRコード"
              width={220}
              height={220}
            />
          </div>

          {/* "友達追加" Link for smaller screens */}
          <div className="md:hidden flex flex-col items-center">
            <a
              href="https://lin.ee/DMFJUvk"
              className="text-blue-500 underline text-sm md:text-lg text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEでの問い合わせ・お申込みはこちらをクリック
            </a>
            <Image
              src="/m_line.png"
              alt="LINE友達追加QRコード"
              width={150}
              height={150}
              className="mt-5"
            />
          </div>

          {/* ▼ 電話番号（下段） */}
          <div className="mt-8 pt-6 border-t border-gray-200 w-full flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-2">お電話でのお問い合わせはこちら</p>
            <a
              href="tel:+818016350773"
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600"
            >
              080-1635-0773
            </a>
            <p className="text-sm text-gray-600 my-4">メールでのお問い合わせ・お申込みはこちら</p>
            <a
              href="mailto:nanairo.law@gmail.com"
              className="text-xl font-semibold text-gray-900 hover:text-black hover:-translate-y-0.5 transition-all duration-200"
              aria-label="メールを送る"
            >
              nanairo.law@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LINECTA;
