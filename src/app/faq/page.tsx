import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Coeraボイストレーニングスクールに寄せられるご質問に回答します。",
};

const faqs = [
  {
    question: "初心者でも受講できますか？",
    answer:
      "はい。話し方や発声トレーニングが初めての方でも、目的と現状に合わせてステップを組み立てます。",
  },
  {
    question: "オンラインでも受講できますか？",
    answer:
      "Zoomなどを使ったオンラインレッスンに対応しています。対面と同じ内容で受講できます。",
  },
  {
    question: "どれくらいで変化を感じられますか？",
    answer:
      "目的や課題によりますが、話し始めや語尾の安定は早い方で数回のレッスンから変化を感じる方が多いです。継続することで定着が進みます。",
  },
  {
    question: "歌はしてないのですか？",
    answer:
      "歌唱レッスンは行っていません。発声トレーニングは可能で、ビジネスシーンで伝わる声づくりを目的としています。",
  },
  {
    question: "レッスンの録音や測定はしますか？",
    answer:
      "録音や測定による可視化は行いません。実際の会話に近い形でのトレーニングを重ね、体感として身につけていきます。",
  },
];

export default function FaqPage() {
  return (
    <Container className="space-y-10 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">FAQ</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          レッスンや体験についてよくいただくご質問です。記載以外の内容はお問い合わせフォームからお気軽にご連絡ください。
        </p>
      </header>

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
    </Container>
  );
}
