"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X, Shield, Leaf, Zap, Package, Heart, Home, Award, Clock, Check, Star, Droplets, Scissors, Calendar } from "lucide-react"

// Product Images
const PRODUCT_IMAGE_1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%201-tlw7NYIBzYK9B6AjnS7NnBv6GuCHML.jpg"
const PRODUCT_IMAGE_2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageArtboard%202-ut8Gs1QcH0E3pp6WWbnDiagFkmw5mw.jpg"
const LOGO_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20png-OIyVg9FYmNoNOv5RWpkHo1EDfCMN3G.png"

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center">
              <Image 
                src={LOGO_IMAGE} 
                alt="Kindoora Logo" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-semibold text-foreground">Kindoora</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#shop"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
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
                href="#shop"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
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
                href="#shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors text-lg"
              >
                Shop Now
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-foreground font-medium rounded-full border border-border hover:bg-cream-dark transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sage" />
                <span className="text-sm text-muted-foreground">Child-Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-sage" />
                <span className="text-sm text-muted-foreground">Non-Toxic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-sage" />
                <span className="text-sm text-muted-foreground">Premium Quality</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-sage/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg">
                <Image
                  src={PRODUCT_IMAGE_1}
                  alt="Kindoora Edge Protector"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
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
            <div className="bg-cream-dark rounded-3xl p-8 md:p-12">
              <Image
                src={PRODUCT_IMAGE_2}
                alt="Kindoora Edge Protector Detail"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
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
      icon: Shield,
      title: "Soft Cushioning",
      description: "Premium foam material that absorbs impact and protects from sharp corners."
    },
    {
      icon: Leaf,
      title: "Non-Toxic Material",
      description: "Made with baby-safe, eco-friendly materials free from harmful chemicals."
    },
    {
      icon: Zap,
      title: "Strong Adhesive",
      description: "Industrial-grade adhesive that stays secure without damaging furniture."
    },
    {
      icon: Clock,
      title: "Easy Installation",
      description: "Simple peel-and-stick application that takes just minutes to complete."
    }
  ]

  return (
    <section id="solution" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Introducing Kindoora Edge Protector
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Thoughtfully designed protection that blends seamlessly with your home while keeping your little ones safe.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
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
    { icon: Check, text: "Warranty Included" },
    { icon: Package, text: "Premium Packaging" }
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
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-sage">10K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Families</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-sage">4.9</div>
                  <div className="text-sm text-muted-foreground mt-1">Star Rating</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-sage">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Safe Materials</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-sage">2 Year</div>
                  <div className="text-sm text-muted-foreground mt-1">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Social Proof Section
function SocialProofSection() {
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

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center">
                  <span className="text-sage font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-cream rounded-2xl p-6 md:p-8 h-full">
                <div className="text-4xl font-bold text-sage/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronDown className="w-8 h-8 text-sage/30 rotate-[-90deg]" />
                </div>
              )}
            </div>
          ))}
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
function CTASection() {
  return (
    <section id="shop" className="py-16 md:py-24 bg-sage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-balance">
          Ready to Baby-Proof Your Home?
        </h2>
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Join thousands of parents who trust Kindoora to keep their little ones safe. Free shipping on all orders.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-sage-dark font-medium rounded-full hover:bg-cream transition-colors text-lg"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-medium rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
          >
            Contact Us
          </a>
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
      <CTASection />
      <Footer />
    </main>
  )
}
