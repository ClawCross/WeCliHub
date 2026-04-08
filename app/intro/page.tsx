import type { Metadata } from "next";

import { IntroPage } from "@/components/weclihub/intro-page";

export const metadata: Metadata = {
  title: "WeCli — Local AI Workspace | WeCliHub",
  description:
    "Meet WeCli: a local-first AI workspace with OASIS workflows, OASIS Town, GraphRAG memory, Team Creator, and WeCliHub as the flow distribution layer.",
  alternates: {
    canonical: "/intro"
  },
  openGraph: {
    url: "https://wecli.net/intro",
    title: "WeCli — Local AI Workspace | WeCliHub",
    description:
      "Run AI teams locally, design workflows visually, and share reusable flows through WeCliHub."
  }
};

export default function Page() {
  return <IntroPage />;
}
