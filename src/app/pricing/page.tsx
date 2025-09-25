import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";

const personalPlans = [
  {
    name: "月2回プラン",
    price: "13,000円（税込）",
    description: "各40分のレッスンを月2回。定期的に整えたい方向け。",
  },
  {
    name: "月3回プラン",
    price: "17,000円（税込）",
    description: "各40分を月3回。スピード感を持って変化を出したい方に。",
  },
  {
    name: "月4回プラン",
    price: "22,000円（税込）",
    description: "各40分を月4回。継続的な改善・定着を目指す方へ。",
  },
];

export const metadata: Metadata = {
  title: "料金・プラン",
  description:
    "Coeraボイストレーニングスクールの料金プラン。個人レッスンと企業研修の料金をご案内します。",
};

export default function PricingPage() {
  return (
    <Container className="space-y-16 py-16">
      <header className="space-y-4" aria-labelledby="pricing-heading">
        <h1 id="pricing-heading" className="text-3xl font-bold text-brand-text">
          料金プラン
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          個人レッスン（対面・オンライン共通）は明瞭な3つのプラン。体験は無料・40分です。企業研修は内容・回数に応じてお見積りします。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3" aria-label="個人プラン">
        {personalPlans.map((plan) => (
          <Card key={plan.name} className="h-full bg-white" role="article">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-brand-primary">{plan.price}</p>
                <p className="text-sm text-brand-text/60">対面・オンライン同一料金</p>
              </div>
              <p className="text-sm text-brand-text/80">{plan.description}</p>
              <Button
                asChild
                className="w-full"
                data-analytics="cta_click"
                aria-label={`${plan.name}の体験レッスンを予約する`}
              >
                <Link href="/trial">体験を予約（無料・40分）</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2" aria-label="企業研修">
        <Card className="bg-brand-card">
          <CardHeader>
            <CardTitle>企業研修</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-brand-text/80">
            <p>
              料金目安：<span className="font-semibold text-brand-primary">80,000円〜（税込）</span>
            </p>
            <p>香川県以外での実施は、交通費実費＋出張料10,000円を頂戴します。</p>
            <p>
              商談、カスタマーサポート、研修講師など、業務に合わせたトレーニングを柔軟に設計。対面／オンラインのいずれでも対応します。
            </p>
            <Button asChild variant="outline">
              <Link href="/corporate">企業研修の詳細を見る</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>備考</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-brand-text/80">
            <ul className="list-disc space-y-2 pl-5">
              <li>歌唱レッスンは不可、発声トレーニングは可。</li>
              <li>体験レッスンは無料・40分。ご希望に合わせて対面／オンラインを選べます。</li>
              <li>お支払いは月謝制。法人の場合は請求書払いも対応可能です。</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
