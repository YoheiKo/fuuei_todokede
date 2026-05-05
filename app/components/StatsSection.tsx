import Image from "next/image";

const stats = [
  {
    icon: "/images/100_icon.svg",
    iconSize: 80,
    value: "100",
    unit: "件+",
    label: "届出支援実績",
  },
  {
    icon: "/images/japan_icon.svg",
    iconSize: 76,
    value: "全国",
    unit: null,
    label: "対応エリア",
  },
  {
    icon: "/images/free_icon.svg",
    iconSize: 75,
    value: "無料",
    unit: null,
    label: "初回相談",
  },
];

export default function StatsSection() {
  return (
    <section className="relative z-10 -mt-8 pb-0">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100/80">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-4 px-8 py-7"
              >
                <div className="flex-shrink-0">
                  <Image src={stat.icon} alt="" width={stat.iconSize} height={stat.iconSize} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                    {stat.value}
                    {stat.unit && (
                      <span className="text-xl md:text-2xl">{stat.unit}</span>
                    )}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
