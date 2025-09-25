import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "企業研修",
  description:
    "商談・接客などビジネスシーンに特化したCoeraの企業研修。対面／オンラインに対応し、全国で実施可能です。",
};

const objectives = [
  "商談やプレゼンで伝わる第一声と話し方を身につけたい",
  "カスタマーサポートや窓口対応で安定した声を届けたい",
  "オンライン研修やウェビナーで、聞きやすい話し方を整えたい",
];

const formats = [
  "対面（香川県を中心に全国対応）",
  "オンライン（Zoom等を利用）",
  "ハイブリッド実施も相談可能",
];

export default function CorporatePage() {
  return (
    <Container className="space-y-16 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
          企業研修
        </p>
        <h1 className="text-3xl font-bold text-brand-text">
          ビジネスで伝わる声をチームに。
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-brand-text/80">
          部署やチームの課題に合わせて、話し出し・滑舌・語尾・オンラインでの伝わり方などを磨きます。録音・測定の可視化には頼らず、実務のシーンを想定したフィードバックで身につけていきます。
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>目的</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm text-brand-text/80">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-brand-card">
          <CardHeader>
            <CardTitle>対象</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-brand-text/80">
              営業、カスタマーサポート、研修講師、管理職、新人研修など、ビジネスで声を使うすべての職種に対応します。
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>実施形式</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm text-brand-text/80">
              {formats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>料金</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-brand-text/80">
            <p>
              80,000円〜（税込）。内容・人数・時間に応じて個別にお見積りします。香川県以外は交通費実費＋出張料10,000円を申し受けます。
            </p>
            <Button asChild variant="outline">
              <Link href="/pricing">料金の詳細を見る</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-brand-primary-light">
          <CardHeader>
            <CardTitle>ご相談・資料請求</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-brand-text/80">
            <p>研修目的や課題を伺い、最適な内容をご提案します。お気軽にご相談ください。</p>
            <Button
              asChild
              data-analytics="cta_click"
              aria-label="企業研修の相談をする"
            >
              <Link href="/contact?type=corp">資料請求・相談する</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
