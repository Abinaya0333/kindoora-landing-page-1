"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { send } from '@emailjs/browser'
import { ChevronDown, Menu, X, Shield, Leaf, Zap, Package, Heart, Home, Award, Clock, Check, Star, Droplets, Scissors, Calendar } from "lucide-react"

import logoBlack from "./logo-black.png"
import logoWhite from "./logo-white.png"
import newImage from "./iml.jpeg"

// Product Images
const PRODUCT_IMAGE_1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%201-tlw7NYIBzYK9B6AjnS7NnBv6GuCHML.jpg"
const PRODUCT_IMAGE_2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%202-ut8Gs1QcH0E3pp6WWbnDiagFkmw5mw.jpg"

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
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo - Left */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src={logoBlack}
              alt="Kindoora Logo"
              width={600}
              height={180}
              className="object-contain w-[140px] md:w-[180px] lg:w-[200px] h-auto"
              priority
            />
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
    <section id="home" className="pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-left pt-4 md:pt-0 min-w-0 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              A Safer Home Starts with Protecting Every Corner
            </h1>
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg md:mx-0">
              Edge Protector uses durable, child-safe materials to cushion sharp furniture edges and help prevent accidental injuries at home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-3.5 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-dark transition-colors text-base sm:text-lg"
              >
                Contact Us
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-3.5 bg-white text-foreground font-semibold rounded-full border border-border hover:bg-cream-dark transition-colors text-base sm:text-lg"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-10 max-w-3xl mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sage flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Child-Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-sage flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Non-Toxic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-sage flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 flex justify-center w-full mt-4 md:mt-0 pb-4 md:pb-0">
            <div className="relative max-w-[366px] w-full aspect-square sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-sage/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-full h-full">
                <Image
                  src="/images/hero-baby.jpg"
                  alt="Happy toddler safely playing in a protected home"
                  fill
                  sizes="(max-width: 640px) 366px, (max-width: 768px) 100vw, 50vw"
                  className="object-cover"
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

// ProblemSection code simplified
// Problem Section
function ProblemSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-1 flex justify-center w-full">
            <div className="relative max-w-[366px] w-full aspect-square sm:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-lg w-full h-full relative">
                <Image
                  src="/images/problem-sharp-edges.jpg"
                  alt="Toddler exploring near sharp furniture edges"
                  fill
                  sizes="(max-width: 640px) 366px, (max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-2 text-left">
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
              Understanding the Need
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              Your Little One&apos;s World of Discovery
            </h2>

            <div className="mt-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Even in well-organized homes, furniture edges can pose hidden safety risks. Without proper protection, accidental contact with sharp corners can result in unnecessary injuries for children and family members.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
              <div className="flex items-center gap-2 bg-cream px-4 py-2.5 rounded-full">
                <Heart className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-sm text-foreground whitespace-nowrap">Parent Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-cream px-4 py-2.5 rounded-full">
                <Home className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-sm text-foreground whitespace-nowrap">Home Friendly</span>
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
    <section id="solution" className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="relative max-w-[366px] w-full sm:max-w-md">
            <div className="absolute inset-0 bg-sage/10 rounded-3xl transform -rotate-2"></div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg aspect-square flex items-center justify-center">
              <Image
                src={PRODUCT_IMAGE_1}
                alt="Kindoora Edge Protector"
                fill
                sizes="(max-width: 640px) 366px, (max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-left md:text-center">
          <div className="w-full px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
              The Kindoora Edge Protector
            </h2>
            <p className="text-left md:text-center text-muted-foreground text-base sm:text-lg mb-4 md:mb-6">
              Edge Protector helps families create a safer living space by transforming sharp corners into soft, protected edges. With easy installation and long-lasting performance, it provides trusted protection for your home.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
  const items = [
    {
      icon: Shield,
      title: "Trusted Safety",
      description: "Kindoora edge protectors help reduce the risk of bumps and injuries caused by sharp furniture edges.",
    },
    {
      icon: Home,
      title: "Seamless Design",
      description: "The transparent, low-profile design blends naturally with your furniture and home décor.",
    },
    {
      icon: Award,
      title: "Durable Protection",
      description: "High-quality silicone absorbs impact and stays securely attached for everyday use.",
    },
  ]

  return (
    <section id="benefits" className="py-12 md:py-24 bg-sage/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white text-sage-dark rounded-full text-sm font-medium mb-4">
            Benefits
          </span>

          <div className="w-full px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
              Why Families Trust Kindoora
            </h2>
            <p className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Reliable edge protection designed to make homes safer without changing the look of your furniture.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-terracotta" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Section
function WhyChooseSection() {
  const reasons = [
    { icon: Award, key: "Premium Quality" },
    { icon: Shield, key: "Child-Safe Materials" },
    { icon: Zap, key: "Easy Installation" },
    { icon: Package, key: "Premium Packaging" }
  ]

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Image - Now at the top for all screen sizes */}
          <div className="flex justify-center w-full">
            <div className="relative max-w-[366px] w-full aspect-square sm:max-w-4xl sm:aspect-video md:aspect-[2/1] mx-auto shadow-xl rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/5">
              <Image
                src="/images/trusted-parents.jpg"
                alt="Caring parents with their baby in a safe home"
                fill
                sizes="(max-width: 640px) 366px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl text-left md:text-center">
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
              Why Kindoora
            </span>

            <div className="px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
                Built with Safety and Quality in Mind
              </h2>
              <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Reliable home safety products designed for families
              </p>
              <p className="mt-3 md:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                At Kindoora, we combine thoughtful design with high-quality materials to create products parents can trust.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full px-2 sm:px-0">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-3 bg-cream rounded-xl px-4 py-3 md:py-4 border border-sage/10 hover:border-sage/30 transition-colors"
                >
                  <reason.icon className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{reason.key}</span>
                </div>
              ))}
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
      name: "Aaradhya M.",
      role: "",
      content: "As a first-time mother, every small risk feels overwhelming. Kindoora gave me a sense of calm I didn't realize I needed. Now, I can let my little one explore without constant worry.",
      rating: 5
    },
    {
      name: "Neha S.",
      role: "",
      content: "My toddler is always on the move, and sharp corners were a constant concern. Kindoora's edge protectors are soft, secure, and blend beautifully into our home. It feels like safety without compromise.",
      rating: 5
    },
    {
      name: "Priya K.",
      role: "",
      content: "What I appreciate most is the thoughtfulness behind the design. It's gentle, reliable, and truly made for children. I no longer feel the need to hover every second.",
      rating: 5
    },
    {
      name: "Ritika Sharma",
      role: "",
      content: "We've tried other safety products before, but nothing felt this dependable. Kindoora stays in place and does exactly what it promises — protects quietly and effectively.",
      rating: 5
    },
    {
      name: "Divya R.",
      role: "",
      content: "It's more than just a safety product. It's peace of mind for parents. Knowing my child is protected, even during those playful, unpredictable moments, makes all the difference.",
      rating: 5
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
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
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-0">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
                    <div className="flex justify-center sm:justify-start gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-terracotta text-terracotta" />
                      ))}
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-sage w-8' : 'bg-sage/30 hover:bg-sage/50'
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
      title: "Prepare the Surface",
      description: "Clean the furniture edge to ensure strong adhesion.",
    },
    {
      number: "02",
      title: "Remove the Backing",
      description: "Peel the protective film.",
    },
    {
      number: "03",
      title: "Apply the Protector",
      description: "Align and press along the furniture edge",
    },
    {
      number: "04",
      title: "Safe and Secure",
      description: "Your edges are now cushioned and protected.",
    },
  ]

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Image moved to the top */}
          <div className="flex justify-center w-full">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-border/50 bg-white relative aspect-square max-w-[366px] w-full sm:aspect-[4/3] sm:max-w-xl mx-auto">
              <Image
                src={newImage}
                alt="Installation process demonstration"
                fill
                sizes="(max-width: 640px) 366px, (max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 md:p-4"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="text-left w-full h-full flex flex-col justify-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
                  How It Works
                </span>
              </div>

              <div className="pr-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
                  Protection Installed in Minutes
                </h2>
                <p className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  A simple process designed for secure and reliable results.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 w-full h-full content-center">
              <div className="sm:col-span-2 overflow-hidden">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-cream rounded-2xl p-5 md:p-8 text-left">
                      <div className="text-3xl md:text-4xl font-bold text-sage/50 md:text-sage/20 mb-3 md:mb-4">{step.number}</div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      question: "Is the Kindoora edge protector safe for babies and pets?",
      answer: "Yes. It is made from soft, child-safe silicone that helps protect babies and pets from sharp edges."
    },
    {
      question: "Will the adhesive damage my furniture?",
      answer: "No. The adhesive holds well but can be removed carefully without damaging furniture."
    },
    {
      question: "Can it fit different types of furniture?",
      answer: "Yes. It is flexible and can be cut to size, so it fits tables, shelves, cabinets, beds, and more."
    },
    {
      question: "How long will it stay in place?",
      answer: "The strong adhesive keeps it firmly attached for a long time."
    },
    {
      question: "Will it change the look of my furniture?",
      answer: "No. The clear design blends with your furniture, so it is hardly noticeable."
    },
    {
      question: "Can I remove it easily?",
      answer: "Yes. You can peel it off slowly without leaving sticky marks"
    }
  ]

  return (
    <section id="faq" className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about Kindoora Edge Protector.
          </p>
        </div>

        <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between gap-3 md:gap-4 hover:bg-cream/50 transition-colors"
              >
                <span className="font-medium text-foreground text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 md:w-5 h-4 md:h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
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
  const formRef = useRef<HTMLFormElement>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone_number: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setIsSubmitting(true)

    try {
      const templateParams = {
        fullName: formData.from_name,       // Used in both templates
        from_name: formData.from_name,      // Repo variant
        emailAddress: formData.reply_to,    // Admin template variant
        reply_to: formData.reply_to,        // EmailJS standard
        phoneNumber: formData.phone_number, // Admin template variant
        phone_number: formData.phone_number, // User input name
        message: formData.message,         // Shared
      }

      // 1. Send to Admin Template
      const adminRes = await send(
        'service_cmiyrtz',
        'template_yiujdbr',
        templateParams,
        'hBqYv0Dxo3z3vm6uB'
      )
      console.log("Admin email sent successfully:", adminRes.status, adminRes.text)

      setShowSuccess(true)
      setFormData({ from_name: "", reply_to: "", phone_number: "", message: "" })
    } catch (error: any) {
      console.error("CRITICAL CONTACT FORM FAILURE:", error)
      const errorMsg = error?.text || error?.message || "Unknown error"
      alert(`Failed to send message: ${errorMsg}. Please check your EmailJS settings.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setShowSuccess(false)
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#FBF5F0] overflow-hidden font-['Outfit',_sans-serif]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#D2A478]/10 text-[#D2A478] rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333333] mb-4">
            Get in Touch
          </h2>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-transform duration-300">
          {!showSuccess ? (
            <form ref={formRef} onSubmit={handleSubmit} className="animate-in fade-in duration-500">
              <div className="flex flex-col sm:flex-row gap-5 mb-6">
                <div className="flex-1">
                  <label htmlFor="from_name" className="block text-sm font-medium text-[#333333] mb-2.5">Full Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 border border-[#EAEAEA] rounded-[12px] text-base focus:outline-none focus:border-[#D2A478] focus:ring-4 focus:ring-[#D2A478]/10 transition-all placeholder:text-[#BBBBBB]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="reply_to" className="block text-sm font-medium text-[#333333] mb-2.5">Email Address</label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 border border-[#EAEAEA] rounded-[12px] text-base focus:outline-none focus:border-[#D2A478] focus:ring-4 focus:ring-[#D2A478]/10 transition-all placeholder:text-[#BBBBBB]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone_number" className="block text-sm font-medium text-[#333333] mb-2.5">Phone Number</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 border border-[#EAEAEA] rounded-[12px] text-base focus:outline-none focus:border-[#D2A478] focus:ring-4 focus:ring-[#D2A478]/10 transition-all placeholder:text-[#BBBBBB]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-5 py-4 border border-[#EAEAEA] rounded-[12px] text-base focus:outline-none focus:border-[#D2A478] focus:ring-4 focus:ring-[#D2A478]/10 transition-all placeholder:text-[#BBBBBB] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 bg-[#D2A478] text-white font-medium rounded-[12px] text-lg hover:bg-[#C19368] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(210,_164,_120,_0.3)] active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="text-5xl text-[#D2A478] mb-5 flex justify-center">
                <Check className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2.5 text-[#333333]">Message Sent!</h3>
              <p className="text-[#666666] mb-8">We'll get back to you shortly.</p>
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-[#D2A478] text-[#D2A478] rounded-[12px] text-sm font-medium hover:bg-[#D2A478] hover:text-white transition-all"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/kindoora.in/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/message/M4QPJXKGCOZEC1",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:support@kindoora.in",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative bg-[#3D3D3D] text-white overflow-hidden">
      {/* Subtle gradient overlay to match landing page feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D3D3D] via-[#2F2F2F] to-[#3D3D3D] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          
          {/* Column 1 – Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0 -mt-2 -mb-6">
              <Image
                src={logoWhite}
                alt="Kindoora Logo"
                width={600}
                height={180}
                className="object-contain w-[140px] md:w-[180px] lg:w-[200px] h-auto"
              />
            </a>
            <p className="text-white/60 text-base leading-relaxed text-center md:text-left max-w-xs font-medium italic">
              Gentle safety for Growing homes
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/8 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white hover:border-white/25 transition-all duration-300"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full md:w-auto flex flex-col items-center md:items-start">
              <h4 className="text-white font-semibold text-base mb-5 tracking-wide">Quick Links</h4>
              <ul className="space-y-3 text-center md:text-left">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Support Email */}
              <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
                <span>📧</span>
                <a
                  href="mailto:support@kindoora.in"
                  className="hover:text-white transition-colors duration-300"
                >
                  support@kindoora.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Bottom Footer Bar */}
        <div className="mt-6 flex items-center justify-center">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Kindoora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function KindooraLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full flex flex-col">
      <Navbar />
      <div className="flex-1 w-full">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <WhyChooseSection />
        <SocialProofSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
