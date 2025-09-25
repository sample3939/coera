import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "個人レッスン",
  description:
    "理論にもとづき、あなたに合わせたビジネスボイストレーニングの個人レッスン。香川県・オンライン対応。",
};

const faqs = [
  {
    question: "歌唱レッスンは受けられますか？",
    answer:
      "歌唱レッスンは行っていませんが、発声トレーニングを通じてビジネスシーンで伝わる声づくりを行います。",
  },
  {
    question: "録音や測定による分析はしますか？",
    answer:
      "録音・測定による可視化は行いません。対話とフィードバックを中心に、話す場面に直結するトレーニングを重視しています。",
  },
];

const flow = [
  "無料体験でヒアリングと現状の声をチェック",
  "目的に合わせたレッスンプランをご提案",
  "対面またはオンラインで月2〜4回のレッスン",
  "毎回の振り返りで定着をサポート",
];

export default function PersonalLessonPage() {
  return (
    <Container className="space-y-16 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
          個人レッスン
        </p>
        <h1 className="text-3xl font-bold text-brand-text">
          理論にもとづき、あなたに合わせたレッスン。
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          商談、会議、面接など、ビジネスで成果を出すための声を磨きます。Coeraでは録音や測定の数値に頼らず、体感と実践のフィードバックを重ねることで、安定した話し始めと聞き取りやすさを獲得します。
        </p>
        <Button
          asChild
          size="lg"
          data-analytics="cta_click"
          aria-label="個人レッスンの体験を予約する"
        >
          <Link href="/trial">体験を予約（無料・40分）</Link>
        </Button>
      </header>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Card className="h-full bg-white">
          <CardHeader>
            <CardTitle>レッスンの方針</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-brand-text/80">
            <p>
              発声の土台、呼吸、語尾の処理など、課題に合わせてプログラムを設計します。録音や測定の可視化は行わず、日常で使える声づくりに集中します。
            </p>
            <p>
              ビジネスボイストレーニングに特化しており、歌唱レッスンは行っていません。発声トレーニングは目的に応じて実施可能です。
            </p>
            <p>
              毎回のセッションでフィードバックシートを共有し、話し方の安定感を定着させます。
            </p>
          </CardContent>
        </Card>
        <Card className="bg-brand-card">
          <CardHeader>
            <CardTitle>対応シーンの例</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-brand-text/80">
            <ul className="list-disc space-y-2 pl-5">
              <li>商談・営業プレゼン</li>
              <li>社内会議・オンラインミーティング</li>
              <li>面接・面談・採用説明</li>
              <li>電話応対・窓口対応</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-text">受講フロー</h2>
        <ol className="grid gap-4 md:grid-cols-2">
          {flow.map((item, index) => (
            <li key={item} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-brand-primary">STEP {index + 1}</p>
              <p className="mt-2 text-base text-brand-text/80">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-text">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-brand-primary/20 bg-white p-4">
              <summary className="cursor-pointer text-lg font-semibold text-brand-text">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-brand-text/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Container>
  );
}
