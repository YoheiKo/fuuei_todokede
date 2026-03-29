// app/components/Breadcrumb.tsx
import Link from "next/link";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-violet-600 transition">
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">›</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-violet-600 transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 truncate max-w-[200px] md:max-w-xs">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
