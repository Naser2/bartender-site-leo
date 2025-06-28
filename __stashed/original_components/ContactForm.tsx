'use client'

import { motion } from 'framer-motion'
import { useState, useTransition } from 'react'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Textarea } from '@heroui/input'
import { Select, SelectItem } from '@heroui/select'
import { Card, CardBody } from '@heroui/card'

interface ContactFormProps {
  isBooking?: boolean
}

const eventTypes = [
  { key: 'private-party', label: 'Private Party' },
  { key: 'corporate-event', label: 'Corporate Event' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'birthday', label: 'Birthday Celebration' },
  { key: 'cocktail-workshop', label: 'Cocktail Workshop' },
  { key: 'other', label: 'Other' }
]

const guestCounts = [
  { key: '10-25', label: '10-25 guests' },
  { key: '25-50', label: '25-50 guests' },
  { key: '50-100', label: '50-100 guests' },
  { key: '100-200', label: '100-200 guests' },
  { key: '200+', label: '200+ guests' }
]

export function ContactForm({ isBooking = false }: ContactFormProps) {
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    location: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(() => {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true)
        console.log('Form submitted:', formData)
      }, 1500)
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center p-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Thank You for Reaching Out!
        </h3>
        <p className="text-gray-300 mb-6">
          I&apos;ve received your {isBooking ? 'booking request' : 'message'} and will get back to you within 24 hours.
          Get ready for an unforgettable experience!
        </p>
        <Button
          onPress={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventType: '',
              guestCount: '',
              eventDate: '',
              location: '',
              message: ''
            })
          }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Basic Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInVariants}>
          <Input
            label="Full Name"
            placeholder="Enter your name"
            value={formData.name}
            onValueChange={(value) => handleInputChange('name', value)}
            isRequired
            className="glass-morphism"
            labelPlacement="outside"
          />
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <Input
            type="email"
            label="Email Address"
            placeholder="your.email@example.com"
            value={formData.email}
            onValueChange={(value) => handleInputChange('email', value)}
            isRequired
            className="glass-morphism"
            labelPlacement="outside"
          />
        </motion.div>
      </div>

      <motion.div variants={fadeInVariants}>
        <Input
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onValueChange={(value) => handleInputChange('phone', value)}
          className="glass-morphism"
          labelPlacement="outside"
        />
      </motion.div>

      {/* Event Details (for bookings) */}
      {isBooking && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInVariants}>
              <Select
                label="Event Type"
                placeholder="Select event type"
                value={formData.eventType}
                onSelectionChange={(value) => handleInputChange('eventType', String(value))}
                className="glass-morphism"
                labelPlacement="outside"
              >
                                 {eventTypes.map((type) => (
                   <SelectItem key={type.key}>
                     {type.label}
                   </SelectItem>
                 ))}
              </Select>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Select
                label="Guest Count"
                placeholder="Expected number of guests"
                value={formData.guestCount}
                onSelectionChange={(value) => handleInputChange('guestCount', String(value))}
                className="glass-morphism"
                labelPlacement="outside"
              >
                                 {guestCounts.map((count) => (
                   <SelectItem key={count.key}>
                     {count.label}
                   </SelectItem>
                 ))}
              </Select>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInVariants}>
              <Input
                type="date"
                label="Event Date"
                value={formData.eventDate}
                onValueChange={(value) => handleInputChange('eventDate', value)}
                className="glass-morphism"
                labelPlacement="outside"
              />
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Input
                label="Event Location"
                placeholder="City, State or Venue"
                value={formData.location}
                onValueChange={(value) => handleInputChange('location', value)}
                className="glass-morphism"
                labelPlacement="outside"
              />
            </motion.div>
          </div>
        </>
      )}

      {/* Message */}
      <motion.div variants={fadeInVariants}>
        <Textarea
          label={isBooking ? "Event Details & Special Requests" : "Message"}
          placeholder={
            isBooking 
              ? "Tell me more about your event, special requests, preferred drinks, theme, etc..."
              : "How can I help you create an amazing experience?"
          }
          value={formData.message}
          onValueChange={(value) => handleInputChange('message', value)}
          minRows={4}
          className="glass-morphism"
          labelPlacement="outside"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeInVariants} className="text-center">
        <Button
          type="submit"
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-12 py-3 rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
          isLoading={isPending}
          disabled={!formData.name || !formData.email}
        >
          {isPending ? 'Sending...' : isBooking ? '📅 Send Booking Request' : '📨 Send Message'}
        </Button>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        variants={fadeInVariants}
        className="text-center pt-4"
      >
        <Card className="glass-morphism">
          <CardBody className="text-center p-6">
            <p className="text-sm text-gray-400 mb-2">
              💡 <strong>Pro Tip:</strong> The more details you provide, the better I can customize your experience!
            </p>
            <p className="text-xs text-gray-500">
              Average response time: 4-8 hours | Available for events nationwide
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </motion.form>
  )
} 