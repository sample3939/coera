export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const primaryNavigation: NavItem[] = [
  {
    label: "レッスン",
    children: [
      { label: "個人レッスン", href: "/lesson/personal" },
      { label: "オンライン受講", href: "/lesson/online" },
    ],
  },
  { label: "料金", href: "/pricing" },
  { label: "企業研修", href: "/corporate" },
  { label: "受講生の声", href: "/voices" },
  { label: "FAQ", href: "/faq" },
  {
    label: "スクール情報",
    children: [
      { label: "講師紹介", href: "/about/instructor" },
      { label: "スクール概要", href: "/about" },
      { label: "アクセス", href: "/about/access" },
    ],
  },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerLinks = {
  pricing: { label: "料金", href: "/pricing" },
  access: { label: "アクセス", href: "/about/access" },
  privacy: { label: "プライバシーポリシー", href: "/privacy" },
  terms: { label: "利用規約", href: "/terms" },
  legal: { label: "特定商取引法に基づく表記", href: "/legal" },
};
