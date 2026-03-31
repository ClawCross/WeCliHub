import type { Metadata } from "next";

import { IntroPage } from "@/components/teamclawhub/intro-page";

export const metadata: Metadata = {
  title: "TeamClaw — Local AI Workspace | TeamClawHub",
  description:
    "Meet TeamClaw: a local-first AI workspace with OASIS workflows, OASIS Town, GraphRAG memory, Team Creator, and TeamClawHub as the flow distribution layer.",
  alternates: {
    canonical: "/intro"
  },
  openGraph: {
    url: "https://teamclawhub.com/intro",
    title: "TeamClaw — Local AI Workspace | TeamClawHub",
    description:
      "Run AI teams locally, design workflows visually, and share reusable flows through TeamClawHub."
  }
};

export default function Page() {
  return <IntroPage />;
}
