import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

export default function LegalPage() {
  return (
    <Container className="space-y-8 py-16 text-sm leading-relaxed text-brand-text/80">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">特定商取引法に基づく表記</h1>
      </header>

      <section className="space-y-2">
        <p>販売業者：Coeraボイストレーニングスクール</p>
        <p>運営責任者：【運営責任者】</p>
        <p>所在地：〒【郵便番号】 香川県【市区町村】【丁目・番地・建物】</p>
        <p>連絡先：info@coera.jp</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">販売価格</h2>
        <p>料金プランおよび企業研修の費用は、各ページに記載しています。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">商品代金以外の必要料金</h2>
        <p>銀行振込手数料、出張に伴う交通費・出張料（企業研修）。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">お支払い方法</h2>
        <p>銀行振込、その他当スクールが指定する方法。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">お支払い時期</h2>
        <p>レッスン開始前月末までにお支払いください。法人の場合は別途ご相談に応じます。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">サービスの提供時期</h2>
        <p>体験レッスン日または契約締結後、合意した日程に従い提供します。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">キャンセル・返金について</h2>
        <p>ご予約のキャンセルは【キャンセルポリシー】をご確認ください。提供済みのサービスについての返金はお受けしておりません。</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-brand-text">動作環境</h2>
        <p>オンラインレッスンは、Zoom等のビデオ会議ツールが利用できる通信環境が必要です。</p>
      </section>
    </Container>
  );
}
