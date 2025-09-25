import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";

const painPoints = [
  "商談や打ち合わせで、最初の一言が弱くなる",
  "早口・語尾が曖昧で、伝わり切らない",
  "オンライン会議で聞き返されることがある",
  "電話対応やプレゼンで、声が揺れる／通らない",
  "面接・面談で落ち着いて話したい",
];

const outcomes = [
  "話し始めが安定し、要点を落ち着いて切り出せる",
  "早口・語尾落ちを整え、伝えたい内容が届きやすくなる",
  "オンライン／電話でも聞き取りやすい出し方が身につく",
];

const strengths = [
  {
    title: "個別最適",
    description:
      "目的・課題に合わせてレッスンを設計。録音やスコアに頼らず、実践で使える声を磨きます。",
  },
  {
    title: "ビジネス特化",
    description:
      "商談・会議・面接など、ビジネスシーンを想定したフィードバックで成果まで伴走します。",
  },
  {
    title: "シンプル運用",
    description:
      "通いやすいスケジュールと明快な料金プラン。体験後に納得いただいてから継続をご案内します。",
  },
];

const voices = [
  {
    quote:
      "初回で声の出し方が変わり、翌日のプレゼンで「すごく聞き取りやすかった」と言われました。",
    name: "30代・営業職",
  },
  {
    quote:
      "会議での第一声が安定し、自信を持って説明できるようになりました。オンラインでも伝わります。",
    name: "40代・マネージャー",
  },
  {
    quote:
      "面接本番で落ち着いて話せる声づくりを支援いただき、志望企業から内定を獲得できました。",
    name: "20代・転職希望者",
  },
];

const flow = [
  {
    title: "体験レッスン",
    description: "無料・40分。課題や目標をヒアリングしながら、現状の声を確認します。",
  },
  {
    title: "カウンセリング",
    description: "ビジネスシーンに合わせて、必要なトレーニング要素と進め方をご提案。",
  },
  {
    title: "ご提案",
    description: "レッスンプランとスケジュールをご案内。ご不明点はお気軽にご相談ください。",
  },
  {
    title: "レッスン開始",
    description: "対面／オンラインのいずれでもOK。毎回の振り返りで声の定着をサポートします。",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-voicecoaching-standing-01.webp"
            alt="会議室でボイストレーナーが受講者に立位で発声指導をする様子"
            fill
            priority
            className="object-cover object-[30%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#006c8fcc_0%,#006c8f66_30%,transparent_60%)]" />
        </div>
        <Container className="relative flex min-h-[600px] flex-col justify-center py-24 text-white">
          <FadeIn className="max-w-2xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
              香川県・オンライン対応
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              声で人生を変える。Coera ボイストレーニング
            </h1>
            <p className="text-lg text-white/90">
              理論にもとづき、あなたに合わせたレッスン。
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                data-analytics="cta_click"
                aria-label="体験レッスンを予約する"
              >
                <Link href="/trial">体験を予約（無料・40分）</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/pricing">料金を見る</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container className="space-y-16">
        <FadeIn className="grid gap-10 lg:grid-cols-2" delay={0.1}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-brand-text">
              こんなお悩みはありませんか？
            </h2>
            <ul className="space-y-3 text-lg">
              {painPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 text-brand-callout">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-brand-text">Coeraでできること</h3>
            <ul className="space-y-3 text-lg">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 text-brand-primary">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl bg-brand-primary-light p-4 text-sm text-brand-text/80">
              録音や測定の可視化ではなく、実務で活きる声の安定感を重視。仕事ですぐに活かせる「話し出し」「伝え方」を身につけます。
            </p>
          </div>
        </FadeIn>

        <FadeIn className="grid gap-6 md:grid-cols-3" delay={0.2}>
          {strengths.map((item) => (
            <Card key={item.title} className="h-full bg-brand-card">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-brand-text/80">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </FadeIn>

        <FadeIn className="space-y-6" delay={0.25}>
          <h2 className="text-3xl font-bold text-brand-text">受講生の声</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {voices.map((voice) => (
              <Card key={voice.quote} className="h-full">
                <CardContent className="flex h-full flex-col gap-4">
                  <p className="text-base leading-relaxed text-brand-text/90">
                    “{voice.quote}”
                  </p>
                  <span className="mt-auto text-sm font-semibold text-brand-primary">
                    {voice.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="grid gap-10 lg:grid-cols-[3fr_2fr]" delay={0.3}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">講師紹介</h2>
            <p className="text-base leading-relaxed text-brand-text/80">
              山田 太郎（やまだ たろう）。ビジネスボイスの研究と現場でのフィードバックを重ね、香川県を中心に講師活動を行っています。理論にもとづき、一人ひとりの目的に合わせたレッスンで成果を引き出します。
            </p>
            <Button variant="ghost" asChild className="px-0 text-brand-primary">
              <Link href="/about/instructor">詳しく見る</Link>
            </Button>
          </div>
          <Card className="overflow-hidden">
            <Image
              src="/images/instructor.jpg"
              alt="講師 山田太郎の胸上ポートレート写真"
              width={640}
              height={800}
              className="h-full w-full object-cover"
            />
          </Card>
        </FadeIn>

        <FadeIn className="space-y-6" delay={0.35}>
          <h2 className="text-3xl font-bold">受講までの流れ</h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {flow.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-brand-text">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-text/80">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn className="space-y-6" delay={0.4}>
          <h2 className="text-3xl font-bold">よくある質問</h2>
          <div className="space-y-4">
            <details className="rounded-2xl border border-brand-primary/20 bg-white p-4">
              <summary className="cursor-pointer text-lg font-semibold text-brand-text">
                歌はしてないのですか？
              </summary>
              <p className="mt-2 text-sm text-brand-text/80">
                歌唱レッスンは行っていません。発声トレーニングは可能で、ビジネスシーンに必要な声の安定と伝わりやすさを重視しています。
              </p>
            </details>
            <details className="rounded-2xl border border-brand-primary/20 bg-white p-4">
              <summary className="cursor-pointer text-lg font-semibold text-brand-text">
                体験レッスンから継続まで、どのように進みますか？
              </summary>
              <p className="mt-2 text-sm text-brand-text/80">
                まずは無料体験で課題や目的を確認。その後カウンセリングでプランをご提案し、納得いただいてから本レッスンをスタートします。
              </p>
            </details>
          </div>
          <Button
            asChild
            size="lg"
            data-analytics="cta_click"
            aria-label="体験レッスンを予約する"
          >
            <Link href="/trial">体験を予約（無料・40分）</Link>
          </Button>
        </FadeIn>
      </Container>
    </div>
  );
}
