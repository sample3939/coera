import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "受講生の声",
  description:
    "Coeraボイストレーニングスクールの受講生から寄せられた声をご紹介します。",
};

const testimonials = [
  {
    quote:
      "営業先での第一声が安定し、提案内容に集中してもらえるようになりました。社内の会議でも意見が通りやすくなっています。",
    role: "製造業・営業職",
  },
  {
    quote:
      "オンライン研修で話す際の声量と間の取り方を整えてもらい、受講者からのアンケートでも「聞きやすい」と評価されました。",
    role: "教育サービス・研修担当",
  },
  {
    quote:
      "面接で緊張しても声が震えず、落ち着いて話せました。実践的なフィードバックで、短期間でも変化を実感しました。",
    role: "IT企業・転職活動中",
  },
];

export default function VoicesPage() {
  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">受講生の声</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          受講生の声の一部を抜粋しています。録音や数値ではなく、現場での手応えとして届いた変化です。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.quote} className="h-full bg-white">
            <CardContent className="flex h-full flex-col gap-4">
              <p className="text-base leading-relaxed text-brand-text/90">“{item.quote}”</p>
              <span className="mt-auto text-sm font-semibold text-brand-primary">{item.role}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
