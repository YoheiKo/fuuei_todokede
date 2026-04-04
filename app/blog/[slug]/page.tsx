// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "../index";
import ContactFormCTA from "../../components/ContactFormCTA";
import Breadcrumb from "../../components/Breadcrumb";

const SITE_URL = "https://www.fuuei-todokede.com";
const SITE_NAME = "なないろ風営届出サポート";
const DEFAULT_OG_IMAGE = "/fuuei_hero.jpg";

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = posts[slug];
  if (!entry) return {};

  const { meta } = entry;
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords ? [...meta.keywords] : undefined,
    robots: meta.robots ?? "index, follow",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      locale: "ja_JP",
      url: canonicalUrl,
      siteName: SITE_NAME,
      publishedTime: meta.publishedTime,
      modifiedTime: meta.modifiedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

function buildJsonLd(slug: string, meta: (typeof posts)[string]["meta"]) {
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description ?? "",
    image: imageUrl,
    datePublished: meta.publishedTime ?? meta.date ?? "",
    dateModified: meta.modifiedTime ?? meta.date ?? "",
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "実務コラム",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: canonicalUrl,
      },
    ],
  };

  const schemas: object[] = [article, breadcrumb];

  const faqs = meta.faqs;
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = posts[slug];
  if (!entry) return notFound();

  const { Content, meta } = entry;
  const jsonLdSchemas = buildJsonLd(slug, meta);

  return (
    <>
      {jsonLdSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="pt-4">
        <Content />
        <ContactFormCTA />
      </div>
    </>
  );
}
