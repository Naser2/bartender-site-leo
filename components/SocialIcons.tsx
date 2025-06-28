"use client";

import { motion } from "framer-motion";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: siteConfig.links.tiktok,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
];

interface SocialIconsProps {
  variant?: "floating" | "horizontal";
  className?: string;
}

export function SocialIcons({
  variant = "horizontal",
  className = "",
}: SocialIconsProps) {
  if (variant === "floating") {
    return (
      <div
        className={`hidden lg:flex fixed right-6 xl:right-12 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-4 ${className}`}
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              isExternal
              aria-label={social.name}
              className="flex items-center justify-center w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 glass-morphism rounded-full text-neutral-100 hover:text-mboa-gold transition-colors duration-300"
              href={social.href}
            >
              <div className="w-4 h-4 md:w-5 lg:w-6 md:h-5 lg:h-6">
                {social.icon}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 md:space-x-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            isExternal
            aria-label={social.name}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 glass-morphism rounded-full text-neutral-100 hover:text-mboa-gold transition-colors duration-300"
            href={social.href}
          >
            <div className="w-4 h-4 md:w-5 md:h-5">
              {social.icon}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
