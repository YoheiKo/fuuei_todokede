"use client";
import { useState } from "react";

export default function PricingCards() {
  const [hovered, setHovered] = useState<"plan01" | "plan02" | null>(null);

  const highlighted = hovered === "plan01" ? "plan01" : "plan02";

  const activeClass =
    "border-2 border-violet-600 shadow-lg ring-2 ring-violet-100";
  const inactiveClass =
    "border-2 border-gray-100 shadow-sm";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* プラン1 */}
      <div
        className={`bg-white rounded-2xl p-8 transition-all duration-200 ${highlighted === "plan01" ? activeClass : inactiveClass}`}
        onMouseEnter={() => setHovered("plan01")}
        onMouseLeave={() => setHovered(null)}
      >
        <p className="text-xs text-violet-500 font-bold tracking-widest uppercase mb-2">PLAN 01</p>
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
          届出書類の作成プラン
        </h3>
        <p className="text-center my-6">
          <span className="text-4xl font-bold text-violet-700">50,000</span>
          <span className="text-base text-gray-500 ml-1">円（税抜）</span>
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          届出書類（申請書類）の作成と、届出に向けた助言を行うプランです。
          警察署への届出はお客様自身で行っていただきます。
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "届出書類（申請書類）一式の作成",
            "届出に向けた助言・要件確認",
            "提出前の書類チェック",
          ].map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-violet-400 mt-0.5" aria-hidden="true">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* プラン2 */}
      <div
        className={`bg-white rounded-2xl p-8 transition-all duration-200 ${highlighted === "plan02" ? activeClass : inactiveClass}`}
        onMouseEnter={() => setHovered("plan02")}
        onMouseLeave={() => setHovered(null)}
      >
        <p className="text-xs text-violet-600 font-bold tracking-widest uppercase mb-2">PLAN 02</p>
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
          書類作成＋警察署への届出代理プラン
        </h3>
        <p className="text-center my-6">
          <span className="text-4xl font-bold text-violet-700">70,000</span>
          <span className="text-base text-gray-500 ml-1">円（税抜）</span>
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          書類作成・助言に加え、警察署への届出（申請）の代理まで対応するプランです。
          届出手続き全体をお任せいただけます。<br />
          <span className="text-violet-600 font-medium">※ 関東地方のみ対応</span>
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "届出書類（申請書類）一式の作成",
            "届出に向けた助言・要件確認",
            "警察署への届出（申請）の代理",
            "補正・追加書類への対応",
          ].map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-violet-500 mt-0.5" aria-hidden="true">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
