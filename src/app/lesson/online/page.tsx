import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "オンライン受講",
  description:
    "対面と同じ内容をオンライン（Zoom等）で受講できるCoeraのビジネスボイストレーニング。",
};

const highlights = [
  {
    title: "対面と同じ設計",
    description:
      "レッスンの流れ・フィードバックは対面と同じ。オンラインでも現場に直結する声の使い方を身につけます。",
  },
  {
    title: "柔軟なスケジュール",
    description:
      "移動時間が不要で、全国どこからでも受講可能。仕事の合間にも取り入れやすい40分レッスンです。",
  },
  {
    title: "必要機材は最小限",
    description:
      "Zoomなどのビデオ会議ツールと安定した通信環境があれば OK。特別な機材指定はありません。",
  },
];

export default function OnlineLessonPage() {
  return (
    <Container className="space-y-16 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
          オンライン受講
        </p>
        <h1 className="text-3xl font-bold text-brand-text">
          対面と同じ内容をオンラインで。
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          Zoomなどのオンライン会議ツールを使い、対面と同じ手順でレッスンを進めます。特別な最適化や機材指定はなく、落ち着いた環境で受講いただければ十分です。
        </p>
        <Button
          asChild
          size="lg"
          data-analytics="cta_click"
          aria-label="オンライン体験レッスンを予約する"
        >
          <Link href="/trial">体験を予約（無料・40分）</Link>
        </Button>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="h-full bg-white">
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
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-text">受講のポイント</h2>
        <ul className="space-y-2 text-sm text-brand-text/80">
          <li>・画面越しでも伝わる声の出し方や話し始めを重点的にトレーニングします。</li>
          <li>・オンライン会議での第一声、相手との間合い調整など、具体的なシーンを想定します。</li>
          <li>・体験レッスンから継続まで、すべてオンラインのみで完結可能です。</li>
        </ul>
      </section>
    </Container>
  );
}
