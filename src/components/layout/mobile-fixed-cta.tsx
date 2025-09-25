"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const hiddenPaths = ["/trial", "/trial/thanks"];

export function MobileFixedCta() {
  const pathname = usePathname();

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-primary/20 bg-white/95 p-3 shadow-lg backdrop-blur lg:hidden">
      <Button
        asChild
        className="w-full"
        data-analytics="cta_click"
        aria-label="体験レッスンを予約する"
      >
        <Link href="/trial">体験を予約（無料・40分）</Link>
      </Button>
    </div>
  );
}
