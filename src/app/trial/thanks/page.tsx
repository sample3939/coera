import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "体験予約ありがとうございます",
};

interface ThanksPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function TrialThanksPage({ searchParams }: ThanksPageProps) {
  const nameParam = searchParams.name;
  const displayName = Array.isArray(nameParam) ? nameParam[0] : nameParam;

  return (
    <Container className="space-y-8 py-20 text-center">
      <h1 className="text-3xl font-bold text-brand-text">体験予約を受け付けました</h1>
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-text/80">
        {displayName ? `${displayName}様、` : ""}
        お申し込みありがとうございます。24時間以内を目安に、日程調整のご案内メールをお送りいたします。
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/">トップへ戻る</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/faq">よくある質問を見る</Link>
        </Button>
      </div>
    </Container>
  );
}
