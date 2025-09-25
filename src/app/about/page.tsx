import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "スクール概要",
  description:
    "Coeraボイストレーニングスクールの概要。香川県を拠点に、理論にもとづくビジネスボイストレーニングを提供しています。",
};

const features = [
  "ビジネスの現場で使える声づくりに特化",
  "録音や測定に頼らない実践中心のレッスン",
  "香川県を拠点にオンラインでも対応",
];

const info = [
  { label: "名称", value: "Coeraボイストレーニングスクール" },
  { label: "拠点", value: "香川県【市区町村】" },
  { label: "対応", value: "対面・オンライン" },
  { label: "営業時間", value: "【営業時間】" },
  { label: "連絡先メール", value: "info@coera.jp" },
  { label: "講師", value: "山田太郎（/about/instructor）" },
  { label: "料金", value: "個人：月2回13,000円〜／企業研修80,000円〜" },
  { label: "体験", value: "無料・40分（/trial）" },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Coeraボイストレーニングスクール',
    description:
      '香川県を拠点に理論にもとづき、ビジネス特化のボイストレーニングを提供しています。',
    address: {
      '@type': 'PostalAddress',
      addressRegion: '香川県',
      addressLocality: '【市区町村】',
      streetAddress: '【丁目・番地・建物】',
    },
    email: 'info@coera.jp',
    areaServed: 'Japan',
    url: 'https://www.coera-example.jp',
  };

  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">スクール概要</h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          Coeraは、香川県を拠点に理論にもとづき、あなたに合わせたレッスンを行うボイストレーニングスクールです。録音や測定による可視化には頼らず、日常と仕事に直結する声の土台づくりを大切にしています。
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-text">特長</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-brand-text/80">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-text">スクール情報</h2>
        <div className="overflow-hidden rounded-2xl border border-brand-primary/20 bg-white">
          <dl className="divide-y divide-brand-primary/10">
            {info.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 px-6 py-4 sm:grid-cols-[160px_1fr]"
              >
                <dt className="font-semibold text-brand-text/80">{item.label}</dt>
                <dd className="text-sm text-brand-text/80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* LocalBusiness JSON-LD。住所など確定後に更新してください。 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
