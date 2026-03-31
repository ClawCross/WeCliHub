"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy, Github } from "lucide-react";
import { useState } from "react";

import { SiteHeader } from "@/components/teamclawhub/site-header";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type IntroCard = {
  emoji: string;
  title: string;
  body: string;
};

type IntroStep = {
  number: string;
  title: string;
  body: string;
};

type IntroCopy = {
  eyebrow: string;
  title: string;
  body: string;
  bridgeLine: string;
  hubLabel: string;
  loopBody: string;
  primaryCta: string;
  secondaryCta: string;
  videoCta: string;
  trustPills: string[];
  loopTitle: string;
  loopCards: IntroCard[];
  installTitle: string;
  installBody: string;
  installPrompt: string;
  copyPrompt: string;
  copiedPrompt: string;
  mediaEyebrow: string;
  mediaTitle: string;
  mediaBody: string;
  videoCardTitle: string;
  videoCardBody: string;
  posterCardTitle: string;
  posterCardBody: string;
  featureEyebrow: string;
  featureTitle: string;
  featureBody: string;
  featureCards: IntroCard[];
  evidenceEyebrow: string;
  evidenceTitle: string;
  evidenceBody: string;
  evidenceCards: IntroCard[];
  howEyebrow: string;
  howTitle: string;
  howSteps: IntroStep[];
  audienceEyebrow: string;
  audienceTitle: string;
  audienceCards: IntroCard[];
  guardrailsEyebrow: string;
  guardrailsTitle: string;
  guardrails: string[];
  footerEyebrow: string;
  footerTitle: string;
  footerBody: string;
  footerPrimaryCta: string;
  footerSecondaryCta: string;
};

const INTRO_COPY: Record<Locale, IntroCopy> = {
  en: {
    eyebrow: "Local-first AI workspace",
    title: "Run AI teams locally. Design workflows visually. Share flows through TeamClawHub.",
    body:
      "TeamClaw combines a local OpenAI-compatible API, a web UI, Teams and expert personas, OASIS orchestration, OASIS Town, living GraphRAG memory, Team Creator, and a Claude-Code-style TeamBot runtime. TeamClawHub is the flow distribution platform that helps those reusable flows travel.",
    bridgeLine: "Discover flows on TeamClawHub. Run them in TeamClaw locally.",
    hubLabel: "Flow distribution platform for TeamClaw",
    loopBody: "TeamClaw is the runtime and operating model. TeamClawHub is the distribution surface for reusable flows.",
    primaryCta: "Explore Workflows",
    secondaryCta: "Get TeamClaw",
    videoCta: "Watch Demo",
    trustPills: [
      "OpenAI-compatible API",
      "OASIS workflows",
      "OASIS Town",
      "GraphRAG memory",
      "Team Creator",
      "TeamBot subagents"
    ],
    loopTitle: "Two surfaces, one workflow loop",
    loopCards: [
      {
        emoji: "🧩",
        title: "TeamClaw runtime",
        body: "Local workspace, Teams, personas, orchestration, memory, bots, and operator tooling."
      },
      {
        emoji: "📦",
        title: "TeamClawHub distribution",
        body: "Browse, publish, and share reusable TeamClaw flows as portable workflow artifacts."
      },
      {
        emoji: "🔁",
        title: "One connected loop",
        body: "Build and run locally in TeamClaw, then package and distribute flows through the Hub."
      }
    ],
    installTitle: "Install via any AI coding assistant",
    installBody:
      "README and SKILL.md are written so Codex, Cursor, Claude Code, and similar assistants can set TeamClaw up with the documented flow instead of a hand-written checklist.",
    installPrompt: "Clone https://github.com/Teamclaw-hub/TeamClaw.git, read SKILL.md, and install TeamClaw.",
    copyPrompt: "Copy install prompt",
    copiedPrompt: "Copied",
    mediaEyebrow: "Media",
    mediaTitle: "See the real product surfaces",
    mediaBody: "These are the actual TeamClaw media assets from the main repository: the demo video and the README poster.",
    videoCardTitle: "TeamClaw demo video",
    videoCardBody: "A quick product walkthrough showing the runtime, UI, and orchestration story in motion.",
    posterCardTitle: "README poster",
    posterCardBody: "The core visual from the TeamClaw README, carried directly into TeamClawHub for consistent product storytelling.",
    featureEyebrow: "Core product",
    featureTitle: "Why TeamClaw feels different",
    featureBody:
      "The differentiation is not one isolated feature. It is the combination of local control, visual orchestration, live observability, sharable Team artifacts, and an agent-friendly operating model.",
    featureCards: [
      {
        emoji: "👥",
        title: "Teams and expert personas",
        body: "Combine internal agents, external APIs, OpenClaw members, personas, and reusable workflows inside one Team."
      },
      {
        emoji: "🔀",
        title: "OASIS orchestration",
        body: "Run sequential, parallel, conditional, selector, and DAG-style workflows instead of a single chat thread."
      },
      {
        emoji: "🏘️",
        title: "OASIS Town + ReportAgent",
        body: "Watch a live pixel-town and swarm graph, then ask ReportAgent for graph-backed explanations."
      },
      {
        emoji: "🧠",
        title: "Living GraphRAG memory",
        body: "Persist topic memory in local SQLite with optional Zep mirroring for external retrieval."
      },
      {
        emoji: "🛠️",
        title: "Team Creator",
        body: "Turn a task description or discovered SOP pages into editable roles, personas, and workflows."
      },
      {
        emoji: "🤖",
        title: "TeamBot runtime",
        body: "Use a Claude-Code-style delegated runtime with profiles, approvals, plans, verifications, and isolated child workspaces."
      }
    ],
    evidenceEyebrow: "Evidence",
    evidenceTitle: "Real product surfaces, not a marketing wishlist",
    evidenceBody: "These capabilities already exist in the TeamClaw repository today.",
    evidenceCards: [
      {
        emoji: "🖥️",
        title: "OpenAI-compatible local API",
        body: "Expose a local /v1/chat/completions endpoint so standard clients and tools can talk to TeamClaw."
      },
      {
        emoji: "📡",
        title: "Bots, voice, and remote access",
        body: "Telegram, QQ, TTS/STT, login tokens, and Cloudflare Tunnel push TeamClaw beyond a desktop-only tool."
      },
      {
        emoji: "📈",
        title: "TinyFish monitoring",
        body: "Track competitor pricing pages, store snapshots, and detect changes over time as part of the operator stack."
      },
      {
        emoji: "📦",
        title: "Team snapshots and imports",
        body: "Share Teams, YAML workflows, and snapshots as portable artifacts that can move between environments."
      }
    ],
    howEyebrow: "Workflow loop",
    howTitle: "How the loop works",
    howSteps: [
      {
        number: "01",
        title: "Install and start",
        body: "Run setup -> configure --init -> start, or hand the repository to an AI coding assistant with SKILL.md."
      },
      {
        number: "02",
        title: "Configure the model",
        body: "Use the first-login setup wizard to detect models or import settings from OpenClaw or Antigravity."
      },
      {
        number: "03",
        title: "Browse, build, and share flows",
        body: "Discover flows on TeamClawHub, then import, adapt, or recreate them inside TeamClaw."
      }
    ],
    audienceEyebrow: "Audience",
    audienceTitle: "Built for builders, operators, and AI coding agents",
    audienceCards: [
      {
        emoji: "🚀",
        title: "Founders and small teams",
        body: "Spin up reusable experts for product, engineering, marketing, research, support, and testing."
      },
      {
        emoji: "🧭",
        title: "Local-first AI operators",
        body: "Keep the runtime near your machine while still exposing a standard API and optional remote access."
      },
      {
        emoji: "🧑‍💻",
        title: "AI coding assistants",
        body: "TeamClaw is documented so coding agents can install, operate, and extend it with progressive disclosure."
      }
    ],
    guardrailsEyebrow: "Guardrails",
    guardrailsTitle: "Truthful constraints",
    guardrails: [
      "Python 3.11+ is required.",
      "An LLM provider is required for the core chat and OASIS value.",
      "OpenClaw is optional, not mandatory onboarding.",
      "Remote access still requires login even when localhost can be passwordless."
    ],
    footerEyebrow: "Call to action",
    footerTitle: "Start on the Hub. Run it locally in TeamClaw.",
    footerBody:
      "TeamClawHub is where flows are discovered and distributed. TeamClaw is where the runtime, teams, orchestration, and memory actually execute.",
    footerPrimaryCta: "Browse TeamClawHub",
    footerSecondaryCta: "Open TeamClaw GitHub"
  },
  zh: {
    eyebrow: "本地优先的 AI 工作空间",
    title: "在本地运行 AI 团队，可视化设计工作流，并通过 TeamClawHub 分发分享。",
    body:
      "TeamClaw 把本地 OpenAI 兼容 API、网页 UI、团队与专家 persona、OASIS 编排、OASIS Town、持续演化的 GraphRAG 记忆、Team Creator，以及类 Claude Code 的 TeamBot 运行时放进同一个系统里。TeamClawHub 则负责这些可复用 flow 的发现、分发与分享。",
    bridgeLine: "在 TeamClawHub 发现 flow，在 TeamClaw 本地运行它们。",
    hubLabel: "TeamClaw 的 flow 分发平台",
    loopBody: "TeamClaw 是真正执行的运行时与操作模型，TeamClawHub 则是可复用 flow 的分发与发现表面。",
    primaryCta: "浏览工作流",
    secondaryCta: "获取 TeamClaw",
    videoCta: "观看演示",
    trustPills: ["OpenAI 兼容 API", "OASIS 工作流", "OASIS Town", "GraphRAG 记忆", "Team Creator", "TeamBot 子代理"],
    loopTitle: "两个产品表面，一条完整工作流闭环",
    loopCards: [
      {
        emoji: "🧩",
        title: "TeamClaw 运行时",
        body: "负责本地工作空间、Teams、persona、编排、记忆、机器人和操作台能力。"
      },
      {
        emoji: "📦",
        title: "TeamClawHub 分发层",
        body: "负责浏览、发布、分享可复用的 TeamClaw flow，把工作流做成可携带的资产。"
      },
      {
        emoji: "🔁",
        title: "同一条闭环",
        body: "先在 TeamClaw 本地构建与运行，再通过 Hub 打包和分发 flow。"
      }
    ],
    installTitle: "通过任意 AI 编程助手安装",
    installBody:
      "README 和 SKILL.md 已经按 AI agent 可执行的方式组织好了。Codex、Cursor、Claude Code 这类工具可以直接按文档流程完成 TeamClaw 安装，而不是照着一串手写步骤逐项点点点。",
    installPrompt: "Clone https://github.com/Teamclaw-hub/TeamClaw.git，读取 SKILL.md，然后安装 TeamClaw。",
    copyPrompt: "复制安装提示词",
    copiedPrompt: "已复制",
    mediaEyebrow: "媒体资产",
    mediaTitle: "直接展示真实产品物料",
    mediaBody: "下面使用的就是 TeamClaw 主仓库里的真实媒体资产：演示视频和 README 海报。",
    videoCardTitle: "TeamClaw 演示视频",
    videoCardBody: "用一段实际演示快速说明运行时、UI 和编排能力是如何联动工作的。",
    posterCardTitle: "README 海报",
    posterCardBody: "直接延续 TeamClaw README 的核心视觉，让 TeamClawHub 的宣传页和主仓库叙事保持一致。",
    featureEyebrow: "核心产品",
    featureTitle: "为什么 TeamClaw 不一样",
    featureBody:
      "它的差异不在某一个孤立功能，而在于本地控制、可视化编排、实时可观测性、可分享的 Team 资产，以及 agent-friendly 的操作模型被放进了同一个系统。",
    featureCards: [
      {
        emoji: "👥",
        title: "Teams 与专家 persona",
        body: "把内部代理、外部 API、OpenClaw 成员、persona 和可复用工作流放进同一个 Team。"
      },
      {
        emoji: "🔀",
        title: "OASIS 编排",
        body: "支持顺序、并行、条件、selector 和 DAG 风格工作流，而不只是单线程聊天。"
      },
      {
        emoji: "🏘️",
        title: "OASIS Town + ReportAgent",
        body: "可以实时观察像素小镇与 swarm graph，并通过 ReportAgent 获取图谱证据驱动的解释。"
      },
      {
        emoji: "🧠",
        title: "持续演化的 GraphRAG 记忆",
        body: "把 topic 记忆存进本地 SQLite，并可选镜像到 Zep 做外部检索。"
      },
      {
        emoji: "🛠️",
        title: "Team Creator",
        body: "把任务描述或 SOP 页面直接转成可编辑的角色、persona 和 workflow。"
      },
      {
        emoji: "🤖",
        title: "TeamBot 运行时",
        body: "提供类 Claude Code 的委派式运行时，具备 profile、审批、plan、verification 和隔离子工作区。"
      }
    ],
    evidenceEyebrow: "真实能力",
    evidenceTitle: "不是营销空话，而是真实的产品表面",
    evidenceBody: "下面这些能力都已经在 TeamClaw 仓库中落地存在。",
    evidenceCards: [
      {
        emoji: "🖥️",
        title: "本地 OpenAI 兼容 API",
        body: "暴露本地 /v1/chat/completions，让标准客户端和工具直接接入 TeamClaw。"
      },
      {
        emoji: "📡",
        title: "机器人、语音与远程访问",
        body: "Telegram、QQ、TTS/STT、登录令牌与 Cloudflare Tunnel，让它不止是桌面本地玩具。"
      },
      {
        emoji: "📈",
        title: "TinyFish 监控",
        body: "可抓取竞品定价页面、保存快照，并持续检测变化，成为真正可操作的运营能力。"
      },
      {
        emoji: "📦",
        title: "Team 快照与导入导出",
        body: "可以把 Team、YAML 工作流和快照打包成可迁移资产，在不同环境之间流动。"
      }
    ],
    howEyebrow: "闭环流程",
    howTitle: "这条闭环如何工作",
    howSteps: [
      {
        number: "01",
        title: "安装并启动",
        body: "执行 setup -> configure --init -> start，或者把仓库连同 SKILL.md 一起交给 AI 编程助手。"
      },
      {
        number: "02",
        title: "配置模型",
        body: "首次登录时通过向导自动探测模型，或从 OpenClaw / Antigravity 导入配置。"
      },
      {
        number: "03",
        title: "浏览、构建并分发 flow",
        body: "先在 TeamClawHub 发现 flow，再把它们导入、改造或在 TeamClaw 里重新生成运行。"
      }
    ],
    audienceEyebrow: "适用人群",
    audienceTitle: "为构建者、操作者和 AI 编程代理而设计",
    audienceCards: [
      {
        emoji: "🚀",
        title: "创业者与小团队",
        body: "可快速拉起面向产品、工程、营销、研究、支持和测试的可复用专家组合。"
      },
      {
        emoji: "🧭",
        title: "本地优先的 AI 操作者",
        body: "把运行时留在本机附近，同时保留标准 API 和可选的远程访问能力。"
      },
      {
        emoji: "🧑‍💻",
        title: "AI 编程助手",
        body: "TeamClaw 的文档采用 progressive disclosure，方便编码代理安装、运维和继续扩展。"
      }
    ],
    guardrailsEyebrow: "真实约束",
    guardrailsTitle: "需要明确的真实约束",
    guardrails: [
      "需要 Python 3.11 及以上版本。",
      "若想获得核心聊天与 OASIS 价值，仍需要配置 LLM 提供商。",
      "OpenClaw 是可选集成，不是强制安装前提。",
      "即使 localhost 可以免密，远程访问仍然需要登录。"
    ],
    footerEyebrow: "行动入口",
    footerTitle: "从 Hub 开始，在 TeamClaw 本地运行。",
    footerBody:
      "TeamClawHub 负责 flow 的发现与分发，TeamClaw 负责真正的运行时、团队、编排与记忆执行。两者是一条完整闭环，不是同一个产品表面。",
    footerPrimaryCta: "浏览 TeamClawHub",
    footerSecondaryCta: "打开 TeamClaw GitHub"
  }
};

export function IntroPage() {
  const { locale } = useI18n();
  const [copied, setCopied] = useState(false);
  const content = INTRO_COPY[locale];

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(content.installPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen intro-shell">
      <SiteHeader activePage="intro" />

      <main>
        <section className="intro-grid border-b border-border/60">
          <div className="container py-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
              <div>
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary">
                  {content.eyebrow}
                </Badge>

                <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {content.title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {content.body}
                </p>

                <p className="mt-4 max-w-3xl text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">
                  {content.bridgeLine}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/" className={buttonVariants({ variant: "default" })}>
                    {content.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://github.com/Teamclaw-hub/TeamClaw.git"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    <Github className="h-4 w-4" />
                    {content.secondaryCta}
                  </a>
                  <a
                    href="https://youtu.be/amg87hiLRW0"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {content.videoCta}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {content.trustPills.map((pill) => (
                    <Badge
                      key={pill}
                      variant="outline"
                      className="rounded-full border-border/80 bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-sm"
                    >
                      {pill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="intro-panel overflow-hidden rounded-[28px] border border-primary/15 p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.45)]">
                  <div className="flex items-start gap-4">
                    <div className="intro-logo-badge rounded-3xl border border-primary/15 p-3 shadow-sm">
                      <Image
                        src="/icon.svg"
                        alt="TeamClawHub icon"
                        width={80}
                        height={80}
                        className="h-14 w-14 sm:h-16 sm:w-16"
                        priority
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">{content.hubLabel}</p>
                      <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">{content.loopTitle}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {content.loopBody}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {content.loopCards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm"
                      >
                        <div className="text-2xl">{card.emoji}</div>
                        <h3 className="mt-3 text-sm font-semibold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="intro-panel rounded-[28px] border border-border/70 p-6 shadow-[0_20px_48px_-30px_rgba(15,23,42,0.4)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">{content.installTitle}</p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{content.installBody}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "shrink-0 rounded-full",
                        copied ? "border-emerald-500/40 text-emerald-600 dark:text-emerald-400" : ""
                      )}
                      onClick={copyPrompt}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copied ? content.copiedPrompt : content.copyPrompt}
                    </Button>
                  </div>

                  <div className="intro-code-block mt-4 overflow-x-auto rounded-2xl border border-border/70 p-4 text-sm shadow-inner">
                    <pre className="whitespace-pre-wrap break-words font-mono leading-6">{content.installPrompt}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.mediaEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.mediaTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{content.mediaBody}</p>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="overflow-hidden rounded-[32px] border border-border/70 bg-background/90 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.5)]">
              <div className="intro-media-frame aspect-video">
                <video
                  controls
                  preload="metadata"
                  poster="/teamclaw/teamclaw-demo-poster.jpg"
                  className="h-full w-full object-cover"
                >
                  <source src="/teamclaw/teamclaw-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{content.videoCardTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{content.videoCardBody}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-border/70 bg-background/90 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.5)]">
              <div className="relative aspect-[5/6] w-full">
                <Image
                  src="/teamclaw/poster.png"
                  alt="TeamClaw poster"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="border-t border-border/70 p-6">
                <h3 className="text-xl font-semibold text-foreground">{content.posterCardTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{content.posterCardBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.featureEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.featureTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{content.featureBody}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.featureCards.map((card) => (
              <Card key={card.title} className="intro-panel border-border/70 bg-background/80">
                <CardHeader>
                  <div className="text-3xl">{card.emoji}</div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-6 text-muted-foreground">{card.body}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/30">
          <div className="container py-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.evidenceEyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.evidenceTitle}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{content.evidenceBody}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {content.evidenceCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-border/70 bg-background/90 p-5 shadow-sm">
                    <div className="text-3xl">{card.emoji}</div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.howEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.howTitle}</h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.howSteps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/20">
          <div className="container py-14 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.audienceEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.audienceTitle}</h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.audienceCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-border/70 bg-background/90 p-5 shadow-sm">
                  <div className="text-3xl">{card.emoji}</div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="rounded-[32px] border border-primary/15 bg-primary/5 p-7 shadow-[0_24px_60px_-36px_rgba(59,130,246,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.guardrailsEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{content.guardrailsTitle}</h2>
              <div className="mt-6 space-y-3">
                {content.guardrails.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/80 p-4">
                    <span className="mt-1 text-sm text-primary">•</span>
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="intro-panel rounded-[32px] border border-border/70 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{content.footerEyebrow}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {content.footerTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{content.footerBody}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/" className={buttonVariants({ variant: "default" })}>
                  {content.footerPrimaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://github.com/Teamclaw-hub/TeamClaw.git"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  <Github className="h-4 w-4" />
                  {content.footerSecondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
