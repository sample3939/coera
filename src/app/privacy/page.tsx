import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <Container className="space-y-8 py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">プライバシーポリシー</h1>
        <p className="text-sm text-brand-text/70">制定日：【制定日】</p>
      </header>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <p>
          Coeraボイストレーニングスクール（以下、「当スクール」といいます。）は、お客様の個人情報を保護するために、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定め、適切な管理と利用に努めます。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">1. 個人情報の取得</h2>
        <p>
          当スクールは、体験予約・お問い合わせ・レッスン提供に際し、必要な範囲で個人情報を適正に取得します。取得する主な情報は、氏名、メールアドレス、電話番号、その他サービス提供に必要な項目です。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">2. 個人情報の利用目的</h2>
        <p>取得した個人情報は、以下の目的で利用します。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>体験予約・レッスンに関するご連絡</li>
          <li>お問い合わせへの回答</li>
          <li>サービスの品質向上やご案内</li>
          <li>法令に基づく対応</li>
        </ul>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">3. 個人情報の第三者提供</h2>
        <p>
          当スクールは、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">4. 個人情報の管理</h2>
        <p>
          当スクールは、個人情報を正確かつ最新の状態に保ち、安全管理のために必要かつ適切な措置を講じます。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">5. 個人情報の開示・訂正・利用停止</h2>
        <p>
          本人からの求めに応じて、保有個人データの開示・訂正・利用停止等を適切に対応します。お問い合わせ窓口までご連絡ください。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">6. Cookieおよびアクセス解析について</h2>
        <p>
          当スクールは、ウェブサイトの利用状況を把握するためにCookieを使用し、Google Analyticsなどのアクセス解析ツールで統計情報を収集する場合があります。ブラウザ設定によりCookieの受け入れを拒否することができます。
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">7. お問い合わせ窓口</h2>
        <p>
          本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
        </p>
        <p>メール：info@coera.jp</p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-brand-text/80">
        <h2 className="text-xl font-semibold text-brand-text">8. プライバシーポリシーの改定</h2>
        <p>
          本ポリシーの内容は、必要に応じて改定することがあります。改定後の内容は当サイトに掲載し、お知らせします。
        </p>
      </section>

      <section className="text-sm leading-relaxed text-brand-text/80">
        <p>代表者名：【代表者名】</p>
      </section>
    </Container>
  );
}
