import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return (
    <Container className="space-y-8 py-16 text-sm leading-relaxed text-brand-text/80">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-text">利用規約</h1>
        <p>本利用規約（以下、「本規約」といいます。）は、Coeraボイストレーニングスクール（以下、「当スクール」といいます。）が提供するサービスの利用条件を定めるものです。</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第1条（適用）</h2>
        <p>
          本規約は、当スクールと利用者との間のサービス利用契約に関する一切の関係に適用されます。当スクールは、本規約のほか、サービスごとに利用条件を定める場合があります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第2条（利用登録）</h2>
        <p>
          利用希望者が当スクールの定める方法によって利用登録を申請し、当スクールが承認することで利用登録が完了します。当スクールは、申請者が以下の事由に該当すると判断した場合、利用登録を拒否することがあります。
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
          <li>本規約に違反したことがある者からの申請である場合</li>
          <li>その他、当スクールが利用登録を相当でないと判断した場合</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第3条（禁止事項）</h2>
        <p>利用者は、サービスの利用に際して以下の行為をしてはなりません。</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当スクール、他の利用者、または第三者の権利を侵害する行為</li>
          <li>不正アクセスやコンピュータウイルスを含む情報の送信</li>
          <li>その他、当スクールが不適切と判断する行為</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第4条（サービスの提供の停止等）</h2>
        <p>
          当スクールは、メンテナンスややむを得ない事由により、利用者への事前の通知なくサービスの提供を一時的に停止することがあります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第5条（利用者の責任）</h2>
        <p>
          利用者は、自己の責任においてサービスを利用するものとし、利用に関連して第三者との間に生じたトラブルについて、自らの費用と責任で解決するものとします。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第6条（免責事項）</h2>
        <p>
          当スクールは、サービスの利用により利用者に生じた損害について、当スクールの故意または重大な過失による場合を除き、一切の責任を負いません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第7条（規約の変更）</h2>
        <p>
          当スクールは、必要と判断した場合には、利用者に通知することなく本規約を変更することができます。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-brand-text">第8条（準拠法・裁判管轄）</h2>
        <p>
          本規約の解釈および適用は日本法に準拠します。本サービスに関して紛争が生じた場合、当スクールの本店所在地を管轄する裁判所を専属的合意管轄とします。
        </p>
      </section>

      <section>
        <p>付則：本規約は【施行日】から施行します。</p>
      </section>
    </Container>
  );
}
