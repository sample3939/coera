import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "アクセス",
  description: "Coeraボイストレーニングスクールの所在地とアクセス情報。",
};

export default function AccessPage() {
  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">アクセス</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          香川県【市区町村】にレッスンスペースを構えています。オンラインでも受講可能ですので、遠方の方もお気軽にご相談ください。
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-text">所在地</h2>
        <p className="text-sm text-brand-text/80">〒【郵便番号】 香川県【市区町村】【丁目・番地・建物】</p>
        <div className="overflow-hidden rounded-3xl border border-brand-primary/20">
          <iframe
            title="Coeraボイストレーニングスクールの地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0000000000005!2d134.0460!3d34.3400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3ACoera!2z44Ki44Or44Oq!5e0!3m2!1sja!2sjp!4v0000000000000!5m2!1sja!2sjp"
            width="100%"
            height="360"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-brand-text">最寄り</h2>
          <p className="text-sm text-brand-text/80">【最寄駅・バス停など】から徒歩【分数】分。</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-brand-text">駐車</h2>
          <p className="text-sm text-brand-text/80">【駐車場・駐輪場情報】</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-brand-text">連絡先</h2>
          <p className="mt-2 text-sm text-brand-text/80">info@coera.jp</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-text">営業時間</h2>
          <p className="mt-2 text-sm text-brand-text/80">【営業時間】</p>
        </div>
      </section>
    </Container>
  );
}
