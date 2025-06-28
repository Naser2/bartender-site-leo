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
      <section 
        className="relative py-12 md:py-20 px-4 md:px-8 lg:px-12 xl:px-16"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 15, 15, 0.6), rgba(15, 15, 15, 0.6)), url("/67-Orange-Street-Bar-Harlem-Leo-Dassie-Mixing-Up.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl 2xl:max-w-none 2xl:px-24 mx-auto">
          <motion.div
            animate="visible"
            className="text-center mb-16"
            initial="hidden"
            variants={fadeInVariants}
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-mboa-gold">
                MBOA-NYC
              </span>
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-gray-300 max-w-3xl xl:max-w-4xl mx-auto">
              Where curated cultured libations meet sophisticated experiences,
              creating unforgettable moments one cocktail at a time.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center"
            initial="hidden"
            variants={staggerContainer}
          >
            {/* Bio Section */}
            <motion.div className="space-y-6" variants={fadeInVariants}>
              <Card className="glass-morphism -mt-5">
                <CardBody className="p-6 md:p-8 xl:p-10">
                  <h2 className="text-3xl font-bold mboa-gold mb-6">
                    Meet Leo Dassie
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Master of cocktails, curator of vibes. Leo Dassie is an
                      Afro Pop bartender bringing liquid artistry to life
                      through MBOA-NYC&apos;s curated cultured libations and
                      experiences.
                    </p>
                    <p>
                      With over 8 years of experience behind the bar and behind
                      the decks, Leo has revolutionized the nightlife scene by
                      blending global cultural influences with sophisticated
                      cocktail craftsmanship through MBOA-NYC.
                    </p>
                    <p>
                      Every cocktail tells a story, every event becomes an
                      experience, and every guest leaves with memories that last
                      long after the final pour. This is the MBOA-NYC promise.
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Skills/Specialties */}
              <Card className="glass-morphism">
                <CardBody className="p-3 md:p-8">
                  <h3 className="text-2xl font-bold mboa-green mb-4">
                    MBOA-NYC Specialties
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Curated Cocktail Experiences",
                      "Cultural Libation Curation",
                      "Premium Event Bartending",
                      "Cocktail Workshops & Classes",
                      "Private Party Services",
                      "Corporate Event Excellence",
                      "Signature Drink Development",
                      "Mixology Consulting",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="glass-morphism p-2 md:p-3 rounded-lg text-center"
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
                  alt="Leo Dassie - MBOA-NYC in action"
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
                    alt="MBOA-NYC cocktail crafting"
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
                    alt="MBOA-NYC mixology expertise"
                    className="w-full h-48 object-cover"
                    height={400}
                    src="/IMG_6829.JPG"
                    width={300}
                  />
                </motion.div>
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
                <span className="mboa-gold">MBOA-NYC Experience?</span>
              </h3>
              <SocialIcons className="justify-center" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  as={Link}
                  className="bg-gradient-to-r from-mboa-gold to-mboa-gold-dark text-black font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-mboa-gold/25 transition-all duration-300"
                  href="/drinks"
                  size="lg"
                >
                  🍹 View Signature Cocktails
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
