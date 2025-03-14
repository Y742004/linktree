"use client";

import dynamic from "next/dynamic";

export const DynamicEditor = dynamic(
  () => import("@/app/ui/components/block-node/BlockNodeRichTextEditor"),
  { ssr: false }
);
