// app/components/RelatedArticles.tsx
import Link from "next/link";

type RelatedArticle = {
  slug: string;
  title: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <p className="text-sm font-bold text-gray-700 mb-3">関連記事</p>
      <ul className="space-y-2">
        {articles.map((a) => (
          <li key={a.slug} className="flex items-start gap-2 text-sm">
            <span className="text-violet-600 mt-0.5" aria-hidden="true">▶</span>
            <Link
              href={`/blog/${a.slug}`}
              className="text-violet-700 hover:underline leading-relaxed"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
