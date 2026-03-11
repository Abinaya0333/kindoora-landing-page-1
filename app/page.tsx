"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X, Shield, Leaf, Zap, Package, Heart, Home, Award, Clock, Check, Star, Droplets, Scissors, Calendar } from "lucide-react"

// Product Images
const PRODUCT_IMAGE_1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%201-tlw7NYIBzYK9B6AjnS7NnBv6GuCHML.jpg"
const PRODUCT_IMAGE_2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%202-ut8Gs1QcH0E3pp6WWbnDiagFkmw5mw.jpg"
const LOGO_IMAGE = "/images/kindoora-logo.png"

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/98 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand Name - Left */}
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-sage rounded-full flex items-center justify-center shadow-md">
              <Image 
                src={LOGO_IMAGE} 
                alt="Kindoora Logo" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">Kindoora</span>
          </a>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-center">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sage transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Gentle Safety for Growing Homes
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Protect your little explorers from sharp furniture edges while keeping your home warm, comfortable, and beautifully designed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors text-lg"
              >
                Contact Us
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-foreground font-medium rounded-full border border-border hover:bg-cream-dark transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-sage/10 px-4 py-2.5 rounded-full border border-sage/20 hover:bg-sage/15 transition-colors">
                <Shield className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium text-sage-dark">Kid Safe</span>
              </div>
              <div className="flex items-center gap-2 bg-sage/10 px-4 py-2.5 rounded-full border border-sage/20 hover:bg-sage/15 transition-colors">
                <Leaf className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium text-sage-dark">Non-Toxic</span>
              </div>
              <div className="flex items-center gap-2 bg-sage/10 px-4 py-2.5 rounded-full border border-sage/20 hover:bg-sage/15 transition-colors">
                <Zap className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium text-sage-dark">Soft Protection</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-sage/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-baby.jpg"
                  alt="Happy toddler safely playing in a protected home"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/problem-sharp-edges.jpg"
                alt="Toddler exploring near sharp furniture edges"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
              Understanding the Need
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              Your Little One&apos;s World of Discovery
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As your toddler begins to explore, every corner of your home becomes part of their adventure. Coffee tables, shelves, and furniture edges that once seemed harmless now present potential bumps and bruises.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We understand this journey. That&apos;s why we created a solution that lets your child explore freely while you enjoy peace of mind—without compromising on the warmth and beauty of your home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-foreground">Parent Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
                <Home className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-foreground">Home Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Solution Section
function SolutionSection() {
  const features = [
    {
      icon: Package,
      title: "Soft Cushioning",
      description: "Gentle padding protects your toddler from bumps and falls"
    },
    {
      icon: Leaf,
      title: "Non-Toxic Material",
      description: "Child-safe materials that are completely non-toxic"
    },
    {
      icon: Home,
      title: "Strong Adhesive",
      description: "Durable installation that holds firmly over time"
    },
    {
      icon: Zap,
      title: "Easy Installation",
      description: "Simple peel-and-stick application takes seconds"
    }
  ]

  return (
    <section id="solution" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-4 text-balance">
          The Kindoora Edge Protector
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Premium corner protection designed with your family&apos;s safety in mind
        </p>
        
        {/* Product Image */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-sage/10 rounded-3xl transform -rotate-2"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg">
              <Image
                src={PRODUCT_IMAGE_1}
                alt="Kindoora Edge Protector"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Rest easy knowing your home is prepared for your little explorer's adventures."
    },
    {
      icon: Home,
      title: "Blends with Furniture",
      description: "Designed to complement your home décor without standing out or looking clinical."
    },
    {
      icon: Award,
      title: "Durable Protection",
      description: "Built to last through years of use while maintaining its protective qualities."
    }
  ]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white text-sage-dark rounded-full text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Why Parents Love Kindoora
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            More than just protection—it&apos;s about creating a nurturing environment where your family can thrive.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Section
function WhyChooseSection() {
  const reasons = [
    { icon: Award, text: "Premium Quality" },
    { icon: Shield, text: "Child-Safe Materials" },
    { icon: Zap, text: "Easy Installation" },
    { icon: Check, text: "Warranty Included" }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
              Why Kindoora
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              Trusted by Thousands of Caring Parents
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe every child deserves to explore safely, and every parent deserves peace of mind. That&apos;s why we&apos;ve crafted our products with the utmost care and attention to detail.
            </p>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3"
                >
                  <reason.icon className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{reason.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/trusted-parents.jpg"
                alt="Caring parents with their baby in a safe home"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Social Proof Section
function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 2",
      content: "As a first-time mom, I was constantly worried about my toddler bumping into furniture. Kindoora gave me the peace of mind I needed. The quality is exceptional and it blends perfectly with our furniture.",
      rating: 5
    },
    {
      name: "Anita Reddy",
      role: "Mother of 1",
      content: "I love how easy it was to install. Within 10 minutes, our entire living room was baby-proofed. My husband was impressed with how secure the adhesive is. Highly recommend!",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Mother of 3",
      content: "After trying several brands, Kindoora stands out for its premium quality. The soft cushioning has already saved us from numerous potential bumps. Worth every penny!",
      rating: 5
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            What Parents Are Saying
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Join thousands of families who trust Kindoora for their baby-proofing needs.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-sage">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-sage w-8' : 'bg-sage/30 hover:bg-sage/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Clean the Surface",
      description: "Wipe the furniture edge with a clean, dry cloth to remove dust and debris."
    },
    {
      number: "02",
      title: "Peel Off the Protective Film",
      description: "Carefully remove the backing to expose the adhesive strip."
    },
    {
      number: "03",
      title: "Align and Press Firmly",
      description: "Position the protector along the edge and press firmly for 30 seconds."
    },
    {
      number: "04",
      title: "Safe and Secure",
      description: "Your furniture is now baby-proofed and ready for safe exploration."
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Simple Installation in Minutes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            No tools required. Just peel, stick, and enjoy peace of mind.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/solution-installation.jpg"
              alt="Installation process demonstration"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-cream rounded-2xl p-6 md:p-8">
                <div className="text-4xl font-bold text-sage/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is the material safe for babies?",
      answer: "Absolutely! Our edge protectors are made from premium, non-toxic materials that are completely safe for babies and toddlers. They are BPA-free, phthalate-free, and meet all international safety standards."
    },
    {
      question: "Will it damage my furniture?",
      answer: "No, our specially formulated adhesive is designed to be strong enough to stay in place but gentle enough not to damage furniture surfaces. When removed properly, it leaves no marks or residue."
    },
    {
      question: "How long does installation take?",
      answer: "Installation is quick and easy—most parents complete their entire living room in under 10 minutes. Simply clean the surface, peel off the backing, and press firmly."
    },
    {
      question: "Can it be used on glass tables?",
      answer: "Yes! Kindoora Edge Protector works excellently on glass surfaces. The adhesive is designed to bond well with smooth surfaces while still being removable without damage."
    },
    {
      question: "Does it leave residue when removed?",
      answer: "When removed carefully according to our instructions, the protector comes off cleanly without leaving residue. We recommend using a hair dryer on low heat to soften the adhesive for easier removal."
    },
    {
      question: "Is it waterproof?",
      answer: "Yes, our edge protectors are water-resistant and can withstand regular cleaning. They're perfect for use in kitchens and areas where occasional spills might occur."
    },
    {
      question: "Can it be trimmed to size?",
      answer: "Absolutely! The protector can be easily cut with regular scissors to fit any furniture edge length. We recommend measuring before cutting for the best fit."
    },
    {
      question: "How long does the adhesive last?",
      answer: "With proper installation, our adhesive maintains its strength for 2+ years under normal conditions. We offer a 2-year warranty on all our products."
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about Kindoora Edge Protector.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-cream/50 transition-colors"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
// Contact Form Section
function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Log the form data (in production, this would be sent to a server)
    console.log("[v0] Contact form submitted:", formData)
    
    // Show success message
    setSubmitMessage("Thank you! We've received your message. We'll get back to you within 24 hours.")
    setFormData({ fullName: "", email: "", phone: "", message: "" })
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(""), 5000)
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Contact Us
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.includes("Thank you") ? "bg-sage/10 text-sage-dark" : "bg-red-50 text-red-700"}`}>
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-terracotta text-white font-medium rounded-lg hover:bg-terracotta-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center">
              <Image 
                src={LOGO_IMAGE} 
                alt="Kindoora Logo" 
                width={16} 
                height={16}
                className="object-contain"
              />
            </div>
            <span className="text-white font-medium">Kindoora</span>
          </div>
          <p className="text-white/60 text-sm text-center">
            © 2026 Kindoora — Gentle Safety for Growing Homes.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function KindooraLandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <WhyChooseSection />
      <SocialProofSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
        <Footer />
    </main>
  )
}
