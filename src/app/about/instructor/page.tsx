import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "講師紹介",
  description:
    "Coeraボイストレーニングスクール講師・山田太郎のプロフィールをご紹介します。",
};

const career = [
  "ビジネスボイスの研究・研修企画に従事",
  "IT企業での社内トレーニング講師を経て独立",
  "香川県を中心に企業研修・個人レッスンを実施",
];

export default function InstructorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '山田 太郎',
    jobTitle: 'ボイストレーナー',
    worksFor: {
      '@type': 'Organization',
      name: 'Coeraボイストレーニングスクール',
    },
    image: 'https://www.coera-example.jp/images/instructor.jpg',
    description:
      '理論にもとづき、ビジネスで伝わる声づくりをサポートするボイストレーナーです。',
  };

  return (
    <Container className="space-y-12 py-16">
      <header className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-brand-text">山田 太郎</h1>
          <p className="text-base font-semibold text-brand-primary">
            理論にもとづき、あなたに合わせたレッスンを行います。
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-brand-text/80">
            発声の理論とビジネス現場でのコミュニケーション経験を掛け合わせ、声の安定と伝わりやすさを磨くレッスンを提供しています。録音やスコアではなく、実際に伝わる感覚にこだわります。
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-white">
          <Image
            src="/images/instructor.jpg"
            alt="講師 山田太郎の胸上ポートレート写真"
            width={640}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-brand-text">経歴</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-brand-text/80">
          {career.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Person JSON-LD。各項目は実際の情報に更新してください。 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
