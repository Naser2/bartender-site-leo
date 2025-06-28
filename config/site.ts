export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DJ Pourmaster",
  description: "Master of cocktails, curator of vibes. Afro Pop bartender bringing liquid artistry to life.",
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
    instagram: "https://instagram.com/djpourmaster",
    twitter: "https://twitter.com/djpourmaster",
    tiktok: "https://tiktok.com/@djpourmaster",
    whatsapp: "https://wa.me/1234567890",
    email: "mailto:hello@djpourmaster.com",
  },
};
