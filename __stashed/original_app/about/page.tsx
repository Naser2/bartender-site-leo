"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { Suspense } from "react";

import { PageWrapper } from "@/components/PageWrapper";
import { SocialIcons } from "@/components/SocialIcons";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
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

function AboutContent() {
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
              <span className="text-white">About </span>
              <span className="cocktail-shimmer bg-clip-text text-transparent">
                DJ Pourmaster
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where Afro Pop rhythms meet liquid artistry, creating
              unforgettable experiences one cocktail at a time.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            variants={staggerContainer}
          >
            {/* Bio Section */}
            <motion.div className="space-y-6" variants={fadeInVariants}>
              <Card className="glass-morphism">
                <CardBody className="p-8">
                  <h2 className="text-3xl font-bold afro-gold mb-6">
                    The Story Behind the Pour
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Born from a passion for both music and mixology, DJ
                      Pourmaster has revolutionized the nightlife scene by
                      blending Afro Pop culture with sophisticated cocktail
                      craftsmanship.
                    </p>
                    <p>
                      With over 8 years of experience behind the bar and behind
                      the decks, I&apos;ve crafted signature drinks that tell
                      stories, evoke emotions, and create connections that last
                      long after the last sip.
                    </p>
                    <p>
                      My approach is simple: every cocktail should be a journey,
                      every event should be an experience, and every guest
                      should leave with a smile and a story to tell.
                    </p>
                  </div>
                </CardBody>
              </Card>
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
              {/* Skills/Specialties */}
              <Card className="glass-morphism">
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold afro-green mb-4">
                    Specialties
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Afro-inspired Cocktails",
                      "Event Bartending",
                      "Cocktail Workshops",
                      "Private Parties",
                      "Corporate Events",
                      "Signature Drinks",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="glass-morphism p-3 rounded-lg text-center"
                        transition={{ type: "spring", stiffness: 300 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-medium text-white">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Image Section */}
            <motion.div className="space-y-6" variants={fadeInVariants}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  alt="DJ Pourmaster in action"
                  className="w-full h-auto object-cover"
                  height={800}
                  src="/IMG_6824.JPG"
                  width={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    alt="Cocktail crafting"
                    className="w-full h-48 object-cover"
                    height={400}
                    src="/IMG_6827.JPG"
                    width={300}
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    alt="Bartending expertise"
                    className="w-full h-48 object-cover"
                    height={400}
                    src="/IMG_6829.JPG"
                    width={300}
                  />
                </motion.div>
              </div>
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
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            animate="visible"
            className="text-center mt-16"
            initial="hidden"
            variants={fadeInVariants}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready for an{" "}
                <span className="afro-gold">Unforgettable Experience?</span>
              </h3>
              <SocialIcons className="justify-center" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  as={Link}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                  href="/drinks"
                  size="lg"
                >
                  🍹 View Signature Drinks
                </Button>
                <Button
                  as={Link}
                  className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full"
                  href="/contact"
                  size="lg"
                  variant="bordered"
                >
                  📅 Book Your Event
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="cocktail-shimmer w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-white">Loading the story...</p>
            </div>
          </div>
        }
      >
        <AboutContent />
      </Suspense>
    </PageWrapper>
  );
}
