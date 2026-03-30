// app/blog/index.ts
import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  keywords?: readonly string[];
  robots?: string;
  publishedTime?: string;
  modifiedTime?: string;
  ogImage?: string;
  isPublished: boolean;
  cat: string;
  img?: string;
  date?: string;
  faqs?: readonly { question: string; answer: string }[];
};

export type PostModule = {
  meta: PostMeta;
  Content: ComponentType;
};

// ─── 記事インポート ───────────────────────────────────────────────────────────
import VideoSexBusinessContent, {
  meta as videoSexBusiness,
} from "./video-sex-business";

import NonstoreSexBusinessContent, {
  meta as nonstoreSexBusiness,
} from "./nonstore-sex-business";

// ─── posts レコード（slug → PostModule） ─────────────────────────────────────
export const posts: Record<string, PostModule> = {
  "video-sex-business": {
    meta: videoSexBusiness,
    Content: VideoSexBusinessContent,
  },
  "nonstore-sex-business": {
    meta: nonstoreSexBusiness,
    Content: NonstoreSexBusinessContent,
  },
};

// ─── postList（ブログ一覧・サイトマップ用） ───────────────────────────────────
export const postList: PostMeta[] = Object.values(posts).map((p) => p.meta);
