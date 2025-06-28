'use client'

import { motion } from 'framer-motion'
import { Card, CardBody } from '@heroui/card'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import { PageWrapper } from '@/components/PageWrapper'
import { ContactForm } from '@/components/ContactForm'
import { SocialIcons } from '@/components/SocialIcons'
import { siteConfig } from '@/config/site'
import { Suspense } from 'react'

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const contactOptions = [
  {
    icon: '📱',
    title: 'WhatsApp',
    description: 'Quick response for urgent inquiries',
    action: 'Message Now',
    href: siteConfig.links.whatsapp,
    color: 'from-green-400 to-green-600'
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'Detailed inquiries and proposals',
    action: 'Send Email',
    href: siteConfig.links.email,
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: '📸',
    title: 'Instagram',
    description: 'See latest creations and events',
    action: 'Follow Me',
    href: siteConfig.links.instagram,
    color: 'from-pink-400 to-purple-600'
  }
]

function ContactContent() {
  const isBooking = typeof window !== 'undefined' && 
    new URLSearchParams(window.location.search).get('booking') === 'true'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Let&apos;s </span>
              <span className="cocktail-shimmer bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your event with Afro Pop mixology? 
              Let&apos;s discuss how we can create an unforgettable experience for you and your guests.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <Card className="glass-morphism">
                <CardBody className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {isBooking ? '📅 Book Your Event' : '💬 Send a Message'}
                  </h2>
                  <ContactForm isBooking={isBooking} />
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Quick Contact Options */}
              <motion.div variants={fadeInVariants}>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  {contactOptions.map((option) => (
                    <motion.div
                      key={option.title}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card className="glass-morphism hover:border-yellow-400/50 transition-all duration-300">
                        <CardBody className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="text-3xl">{option.icon}</div>
                              <div>
                                <h4 className="font-semibold text-white text-lg">{option.title}</h4>
                                <p className="text-gray-400 text-sm">{option.description}</p>
                              </div>
                            </div>
                            <Button
                              as={Link}
                              href={option.href}
                              isExternal
                              size="sm"
                              className={`bg-gradient-to-r ${option.color} text-white font-semibold`}
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
              <motion.div variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-bold afro-gold mb-4">📋 Event Information</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span>Booking Notice</span>
                        <span className="afro-green">2+ weeks preferred</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span>Service Area</span>
                        <span className="afro-green">Nationwide</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span>Event Duration</span>
                        <span className="afro-green">4-8 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span>Starting Rate</span>
                        <span className="afro-gold font-semibold">Contact for quote</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Services Offered */}
              <motion.div variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-bold afro-violet mb-4">🍹 Services Offered</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Custom Cocktail Menu',
                        'Interactive Bartending',
                        'Cocktail Workshops',
                        'Premium Bar Setup',
                        'DJ Services',
                        'Event Consultation',
                        'Signature Drink Creation',
                        'Bar Staff Training'
                      ].map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 p-2 rounded bg-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                          <span className="text-sm text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInVariants}>
                <Card className="glass-morphism">
                  <CardBody className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Follow the Journey</h3>
                    <p className="text-gray-400 mb-6">
                      Stay updated with latest cocktail creations, events, and behind-the-scenes content
                    </p>
                    <SocialIcons className="justify-center" />
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonials Preview */}
          <motion.div
            className="mt-20"
            initial="hidden"
            animate="visible"
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
                      author: "Sarah M., Event Planner"
                    },
                    {
                      text: "Best bartender we've ever hired. The Afrobeat Sunset was a hit with all our wedding guests!",
                      author: "Michael & Jessica, Newlyweds"
                    },
                    {
                      text: "Professional, creative, and knows how to read the crowd. Highly recommend for any event!",
                      author: "David L., Private Client"
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-white/5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-gray-300 italic mb-3">&quot;{testimonial.text}&quot;</p>
                      <p className="text-yellow-400 font-semibold text-sm">- {testimonial.author}</p>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="cocktail-shimmer w-16 h-16 rounded-full mx-auto mb-4"></div>
              <p className="text-white">Preparing to connect...</p>
            </div>
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </PageWrapper>
  )
} 