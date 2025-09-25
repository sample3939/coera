import Link from "next/link";

import { footerLinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-brand-primary-light/70 text-sm text-brand-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-lg font-bold text-brand-primary">Coeraボイストレーニングスクール</p>
          <p>香川県（高松市）を拠点に、オンラインにも対応しています。</p>
          <p>
            メール：
            <a className="font-semibold text-brand-primary" href="mailto:info@coera.jp">
              info@coera.jp
            </a>
          </p>
        </div>
        <div className="grid gap-2 text-sm font-medium sm:grid-cols-2">
          <Link className="hover:underline" href={footerLinks.pricing.href}>
            {footerLinks.pricing.label}
          </Link>
          <Link className="hover:underline" href={footerLinks.access.href}>
            {footerLinks.access.label}
          </Link>
          <Link className="hover:underline" href={footerLinks.privacy.href}>
            {footerLinks.privacy.label}
          </Link>
          <Link className="hover:underline" href={footerLinks.terms.href}>
            {footerLinks.terms.label}
          </Link>
          <Link className="hover:underline" href={footerLinks.legal.href}>
            {footerLinks.legal.label}
          </Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button
            asChild
            data-analytics="cta_click"
            aria-label="体験レッスンを予約する"
          >
            <Link href="/trial">体験を予約（無料・40分）</Link>
          </Button>
          <p className="text-xs text-brand-text/70">© {year} Coera Voice Training</p>
        </div>
      </div>
    </footer>
  );
}
