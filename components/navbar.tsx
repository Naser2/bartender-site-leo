"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroUINavbar
      className="glass-morphism"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <div className="w-10 h-10 rounded-full overflow-hidden border-b border-mboa-gold/30">
              <Image
                alt="MBOA-NYC Logo"
                className="w-full h-full object-cover"
                height={40}
                src="/MBOA_LOGO.jpg"
                width={40}
              />
            </div>
            <div>
              <p
                className="font-bold  text-xl !text-white"
                id="mboa-navbar-title"
              >
                MBOA-NYC
              </p>
              <p className="text-xs text-white" id="mboa-navbar-subtitle">
                by Leo Dassie
              </p>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-white data-[active=true]:text-white data-[active=true]:font-medium hover:text-white transition-colors duration-300",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            isExternal
            aria-label="Instagram"
            className="!text-white hover:text-white transition-colors duration-300"
            href={siteConfig.links.instagram}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link
            isExternal
            aria-label="Twitter"
            className="!text-white hover:text-white transition-colors duration-300"
            href={siteConfig.links.twitter}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            isExternal
            aria-label="TikTok"
            className="!text-white hover:text-white transition-colors duration-300"
            href={siteConfig.links.tiktok}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="bg-gradient-to-r from-mboa-gold to-mboa-gold-dark text-black font-semibold hover:shadow-lg hover:shadow-mboa-gold/25 transition-all duration-300"
            href="/contact?booking=true"
            size="sm"
          >
            📅 Book Event
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Instagram"
          className=" !text-white"
          href={siteConfig.links.instagram}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle
          className="!text-white  [&>span]:text-white  [&>span]:before:!text-white [&>span]:after:!text-white"
          id="mboa-navbar-menu-toggle"
        />
      </NavbarContent>

      <NavbarMenu className="bg-white dark:bg-gray-900">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  "w-full block py-3 px-2 transition-colors duration-300 dark:!text-white",
                  "hover:text-mboa-gold dark:hover:text-mboa-gold",
                )}
                href={item.href}
                style={{
                  color: "black",
                  fontSize: "0.9125rem",
                  fontWeight: 600,
                  letterSpacing: "0.0125em",
                  textTransform: "uppercase",
                }}
                onClick={handleMenuItemClick}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}

          {/* Sidebar Image */}
          <div className="mt-6 mx-2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                alt="MBOA-NYC Creative Experience"
                className="w-full h-auto object-cover"
                height={500}
                src="/325484665_2233914083457650_8836665483194425914_n.jpg"
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold mb-2">
                    It&apos;s Time to Get Creative.
                  </h3>
                  <div className="inline-block bg-mboa-gold text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    100% ORGANIC
                  </div>
                  <div>
                    <Link
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                      href="/contact"
                      onClick={handleMenuItemClick}
                    >
                      BOOK EXPERIENCE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
