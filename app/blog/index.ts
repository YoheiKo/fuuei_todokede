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
} from "./video-fuuei-business";

import NonstoreSexBusinessContent, {
  meta as nonstoreSexBusiness,
} from "./nonstore-fuuei-business";

import VideoFuueiNotificationContent, {
  meta as videoFuueiNotification,
} from "./video-fuuei-notification";

import NonstoreFuueiNotificationContent, {
  meta as nonstoreFuueiNotification,
} from "./nonstore-fuuei-notification";

// ─── posts レコード（slug → PostModule） ─────────────────────────────────────
export const posts: Record<string, PostModule> = {
  "video-fuuei-business": {
    meta: videoSexBusiness,
    Content: VideoSexBusinessContent,
  },
  "nonstore-fuuei-business": {
    meta: nonstoreSexBusiness,
    Content: NonstoreSexBusinessContent,
  },
  "video-fuuei-notification": {
    meta: videoFuueiNotification,
    Content: VideoFuueiNotificationContent,
  },
  "nonstore-fuuei-notification": {
    meta: nonstoreFuueiNotification,
    Content: NonstoreFuueiNotificationContent,
  },
};

// ─── postList（ブログ一覧・サイトマップ用） ───────────────────────────────────
export const postList: PostMeta[] = Object.values(posts).map((p) => p.meta);
