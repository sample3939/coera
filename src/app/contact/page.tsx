import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Coeraボイストレーニングスクールへのお問い合わせフォーム。体験・企業研修のご相談はこちらから。",
};

export default function ContactPage() {
  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">お問い合わせ</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          体験レッスンのご相談、企業研修のご依頼、その他のご質問はこちらからお送りください。内容を確認のうえ、24時間以内を目安にご連絡いたします。
        </p>
      </header>

      <ContactForm />

      <section className="space-y-2 text-sm text-brand-text/80">
        <p>メール：info@coera.jp</p>
        <p>営業時間：【営業時間】</p>
      </section>
    </Container>
  );
}
