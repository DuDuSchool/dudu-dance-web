export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "DuDu FitDance",
  description: "舞蹈收集列表",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "跳舞",
      href: "/dance",
    },
  ],

  links: {
    github: "https://github.com/DuDuSchool/dudu-dance-web",
  },
}
