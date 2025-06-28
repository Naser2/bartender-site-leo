"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Suspense } from "react";

import { PageWrapper } from "@/components/PageWrapper";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcons } from "@/components/SocialIcons";
import { siteConfig } from "@/config/site";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contactOptions = [
  {
    icon: "📱",
    title: "WhatsApp",
    description: "Quick response for urgent inquiries",
    action: "Message Now",
    href: siteConfig.links.whatsapp,
    color: "from-mboa-gold to-mboa-gold-dark",
  },
  {
    icon: "📧",
    title: "Email",
    description: "Detailed inquiries and proposals",
    action: "Send Email",
    href: siteConfig.links.email,
    color: "from-mboa-gold to-mboa-gold-dark",
  },
  {
    icon: "📸",
    title: "Instagram",
    description: "See latest creations and events",
    action: "Follow Me",
    href: siteConfig.links.instagram,
    color: "from-mboa-gold to-mboa-gold-dark",
  },
];

function ContactContent() {
  const isBooking =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("booking") === "true";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            animate="visible"
            className="text-center mb-16"
            initial="hidden"
            variants={fadeInVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Let&apos;s </span>
              <span className="text-mboa-gold">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your event with Afro Pop mixology? Let&apos;s
              discuss how we can create an unforgettable experience for you and
              your guests.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              animate="visible"
              initial="hidden"
              variants={fadeInVariants}
            >
              <Card className="glass-morphism">
                <CardBody className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {isBooking ? "📅 Book Your Event" : "💬 Send a Message"}
                  </h2>
                  <ContactForm isBooking={isBooking} />
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              animate="visible"
              className="space-y-8"
              initial="hidden"
              variants={staggerContainer}
            >
              {/* Quick Contact Options */}
              <motion.div variants={fadeInVariants}>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  {contactOptions.map((option) => (
                    <motion.div
                      key={option.title}
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className="glass-morphism hover:border-mboa-gold/50 hover:shadow-mboa-glow transition-all duration-300 cursor-pointer">
                        <CardBody className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <motion.div
                                className="text-3xl"
                                transition={{ duration: 0.5 }}
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                              >
                                {option.icon}
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-neutral-100 text-lg">
                                  {option.title}
                                </h4>
                                <p className="text-neutral-400 text-sm">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                            <Button
                              isExternal
                              as={Link}
                              className={`bg-gradient-to-r ${option.color} text-black font-semibold hover:shadow-lg hover:shadow-mboa-gold/25`}
                              href={option.href}
                              size="sm"
                            >
                              {option.action}
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Availability & Pricing */}
              <motion.div className="mt-8" variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-bold mboa-gold mb-4">
                      📋 Event Information
                    </h3>
                    <div className="space-y-3 text-neutral-300">
                      <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                        <span>Booking Notice</span>
                        <span className="mboa-green">2+ weeks preferred</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                        <span>Service Area</span>
                        <span className="mboa-green">Nationwide</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                        <span>Event Duration</span>
                        <span className="mboa-green">4-8 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span>Starting Rate</span>
                        <span className="mboa-gold font-semibold">
                          Contact for quote
                        </span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Services Offered */}
              <motion.div variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-bold mboa-violet mb-4">
                      🍹 Services Offered
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Custom Cocktail Menu",
                        "Interactive Bartending",
                        "Cocktail Workshops",
                        "Premium Bar Setup",
                        "DJ Services",
                        "Event Consultation",
                        "Signature Drink Creation",
                        "Bar Staff Training",
                      ].map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 p-2 rounded bg-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-mboa-gold" />
                          <span className="text-sm text-neutral-300">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-20, -100],
                          opacity: [0, 1, 0],
                        }}
                        className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Follow the Journey
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Stay updated with latest cocktail creations, events, and
                      behind-the-scenes content
                    </p>
                    <SocialIcons className="justify-center" />
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonials Preview */}
          <motion.div
            animate="visible"
            className="mt-20"
            initial="hidden"
            variants={fadeInVariants}
          >
            <Card className="glass-morphism">
              <CardBody className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  What Clients Are Saying
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      text: "DJ Pourmaster turned our corporate event into an unforgettable experience. The cocktails were art!",
                      author: "Sarah M., Event Planner",
                    },
                    {
                      text: "Best bartender we've ever hired. The Afrobeat Sunset was a hit with all our wedding guests!",
                      author: "Michael & Jessica, Newlyweds",
                    },
                    {
                      text: "Professional, creative, and knows how to read the crowd. Highly recommend for any event!",
                      author: "David L., Private Client",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-white/5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-gray-300 italic mb-3">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <p className="text-yellow-400 font-semibold text-sm">
                        - {testimonial.author}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="cocktail-shimmer w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-white">Preparing to connect...</p>
            </div>
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </PageWrapper>
  );
}
