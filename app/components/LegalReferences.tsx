// app/components/LegalReferences.tsx

const references = [
  "風俗営業等の規制及び業務の適正化等に関する法律（風営法）",
  "警視庁「性風俗関連特殊営業、深夜酒類提供飲食店営業の届出」",
  "風俗営業等の規制及び業務の適正化等に関する法律等の解釈運用基準について（令和4年4月）",
  "警視庁「性風俗関連特殊営業（様式一覧）」",
  "AV出演被害防止・救済法",
];

export default function LegalReferences() {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-10 mb-4">
      <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
        <p className="text-sm font-bold text-gray-500 mb-3">参考法令・資料</p>
        <ul className="space-y-1.5">
          {references.map((ref) => (
            <li key={ref} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
              <span>{ref}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
