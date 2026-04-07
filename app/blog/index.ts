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

import OfficeRequirementContent, {
  meta as officeRequirement,
} from "./office-requirement";

import VideoFuueiDocumentsContent, {
  meta as videoFuueiDocuments,
} from "./video-fuuei-documents";

import AdultStreamingLawContent, {
  meta as adultStreamingLaw,
} from "./adult-streaming-law";

import AdultBusinessStartContent, {
  meta as adultBusinessStart,
} from "./adult-business-start";

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
  "office-requirement": {
    meta: officeRequirement,
    Content: OfficeRequirementContent,
  },
  "video-fuuei-documents": {
    meta: videoFuueiDocuments,
    Content: VideoFuueiDocumentsContent,
  },
  "adult-streaming-law": {
    meta: adultStreamingLaw,
    Content: AdultStreamingLawContent,
  },
  "adult-business-start": {
    meta: adultBusinessStart,
    Content: AdultBusinessStartContent,
  },
};

// ─── postList（ブログ一覧・サイトマップ用） ───────────────────────────────────
export const postList: PostMeta[] = Object.values(posts).map((p) => p.meta);
