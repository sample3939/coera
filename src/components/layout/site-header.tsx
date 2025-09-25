"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { primaryNavigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const trialCta = (
  <Button
    asChild
    data-analytics="cta_click"
    aria-label="体験レッスンを予約する"
  >
    <Link href="/trial">体験を予約（無料・40分）</Link>
  </Button>
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-primary/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link
          href="/"
          className="flex flex-col text-brand-text"
          aria-label="Coera ボイストレーニングスクールのホームへ"
        >
          <span className="text-sm font-semibold tracking-wide text-brand-primary">
            Coera Voice Training
          </span>
          <span className="text-lg font-bold">Coeraボイストレーニングスクール</span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-semibold text-brand-text lg:flex"
          aria-label="メインメニュー"
        >
          {primaryNavigation.map((item) => {
            if (item.children) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full px-3 py-2 text-brand-text transition-colors hover:bg-brand-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden>▾</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className={cn(
                  "rounded-full px-3 py-2 transition-colors hover:bg-brand-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                  pathname === item.href && "bg-brand-primary text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">{trialCta}</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="メニューを開く"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/30 text-brand-text lg:hidden"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-white">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-lg font-semibold text-brand-primary"
                onClick={() => setOpen(false)}
              >
                Coera
              </Link>
              <SheetClose asChild>
                <button type="button" className="text-sm text-brand-text underline">
                  閉じる
                </button>
              </SheetClose>
            </div>
            <div className="mt-6 flex flex-col gap-4" aria-label="モバイルメニュー">
              {primaryNavigation.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      href={item.href ?? item.children?.[0]?.href ?? "#"}
                      className="text-base font-semibold text-brand-text"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                  {item.children && (
                    <div className="ml-3 flex flex-col gap-2 text-sm text-brand-text/80">
                      {item.children.map((child) => (
                        <SheetClose asChild key={child.href}>
                          <Link href={child.href}>{child.label}</Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">{trialCta}</div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
