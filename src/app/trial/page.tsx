import type { Metadata } from "next";

import { Container } from "@/components/container";
import { TrialForm } from "@/components/forms/trial-form";

export const metadata: Metadata = {
  title: "体験予約",
  description: "Coeraボイストレーニングスクールの無料体験（40分）予約フォーム。対面・オンラインに対応しています。",
};

export default function TrialPage() {
  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">体験予約（無料・40分）</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          体験レッスンは無料・40分、キャンセル料はかかりません。話したいシーンや課題を伺い、当日の流れと継続プランのご案内までを行います。
        </p>
      </header>

      <TrialForm />

      <section className="space-y-2 text-sm text-brand-text/70">
        <p>・対面とオンラインのどちらでもご参加いただけます。</p>
        <p>・日程は担当よりメールで調整いたします。</p>
        <p>・キャンセル料はかかりません。ご都合が悪くなった場合は日程変更をご相談ください。</p>
      </section>
    </Container>
  );
}
