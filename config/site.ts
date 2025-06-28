export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MBOA-NYC",
  description: "MBOA-NYC Curated Cultured Libations and Experiences by LEO. Premium cocktail experiences and mixology services.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Drinks",
      href: "/drinks",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Drinks",
      href: "/drinks",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Book Event",
      href: "/contact?booking=true",
    },
  ],
  links: {
    instagram: "https://instagram.com/mboa_nyc",
    twitter: "https://twitter.com/mboa_nyc",
    tiktok: "https://tiktok.com/@mboa_nyc",
    whatsapp: "https://wa.me/1234567890",
    email: "mailto:hello@mboa-nyc.com",
  },
};
