"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
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
        <div className="flex items-center justify-between h-28 md:h-40">
          {/* Logo - Left */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src={logoBlack}
              alt="Kindoora Logo"
              width={600}
              height={180}
              className="object-contain h-32 md:h-48 lg:h-64 w-auto"
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
  const heroSlides = [
    {
      tone: "Professional",
      headline: "Transform Dangerous Corners into Safe Edges in Seconds",
      subheadline:
        "Edge Protector is designed to cushion sharp furniture edges and help prevent accidental injuries, creating a safer home environment for children and families.",
      cta: "Make Your Home Safer Today",
    },
    {
      tone: "Emotional",
      headline: "Because One Sharp Corner Shouldn’t Hurt the People You Love",
      subheadline:
        "Edge Protector gently cushions dangerous furniture corners, helping protect your children from painful bumps while they explore and play.",
      cta: "Protect Your Family Today",
    },
    {
      tone: "Trust",
      headline: "A Simple Safety Solution for Every Home",
      subheadline:
        "Edge Protector uses soft, durable materials to cover sharp furniture edges and help reduce the risk of injuries at home.",
      cta: "Start Protecting Your Home",
    },
  ]

  const [heroSlide, setHeroSlide] = useState(0)
  const [heroTouchStart, setHeroTouchStart] = useState<number | null>(null)

  const heroNext = () => setHeroSlide((prev) => (prev + 1) % heroSlides.length)
  const heroPrev = () => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const handleHeroTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setHeroTouchStart(e.touches[0].clientX)
  }

  const handleHeroTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (heroTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - heroTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      heroPrev()
    } else if (deltaX < -threshold) {
      heroNext()
    }
    setHeroTouchStart(null)
  }

  return (
    <section id="home" className="pt-32 md:pt-48 pb-16 md:pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div
              className="overflow-hidden"
              onTouchStart={handleHeroTouchStart}
              onTouchEnd={handleHeroTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${heroSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={slide.tone} className="w-full flex-shrink-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
                      {slide.headline}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                      {slide.subheadline}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta-dark transition-colors text-lg"
                      >
                        {slide.cta}
                      </a>
                      <a
                        href="#how-it-works"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-foreground font-medium rounded-full border border-border hover:bg-cream-dark transition-colors text-lg"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={heroPrev}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Previous hero slide"
              >
                ←
              </button>
              <div className="flex gap-2">
                {["Professional", "Emotional", "Trust"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setHeroSlide(index)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      heroSlide === index
                        ? "bg-sage text-sage-dark border-sage"
                        : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                    }`}
                    aria-label={`${label} hero slide`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={heroNext}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Next hero slide"
              >
                →
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto md:mx-0">
              <div className="flex items-center justify-center gap-2 bg-sage/10 px-3 py-3 rounded-2xl border border-sage/20 hover:bg-sage/15 transition-colors w-full h-full min-h-[64px] sm:min-h-0">
                <Shield className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm font-medium text-sage-dark text-center leading-tight">Kid Safe</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-sage/10 px-3 py-3 rounded-2xl border border-sage/20 hover:bg-sage/15 transition-colors w-full h-full min-h-[64px] sm:min-h-0">
                <Leaf className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm font-medium text-sage-dark text-center leading-tight">Non-Toxic</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-sage/10 px-3 py-3 rounded-2xl border border-sage/20 hover:bg-sage/15 transition-colors w-full h-full min-h-[64px] sm:min-h-0">
                <Zap className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm font-medium text-sage-dark text-center leading-tight">Soft Protection</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-sage/10 px-3 py-3 rounded-2xl border border-sage/20 hover:bg-sage/15 transition-colors w-full h-full min-h-[64px] sm:min-h-0">
                <Award className="w-4 h-4 text-sage flex-shrink-0" />
                <span className="text-sm font-medium text-sage-dark text-center leading-tight">Rounded Edge Safety</span>
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
  const problemSlides = [
    {
      tone: "Professional",
      body: [
        "Many homes contain furniture with sharp corners such as tables, cabinets, and countertops. These edges can pose a safety risk, especially for toddlers who are learning to walk or play around the house.",
        "Without proper protection, even a small accident can result in painful injuries.",
      ],
    },
    {
      tone: "Emotional",
      body: [
        "Children love to explore every part of the home. But while they run, play, and learn to walk, a simple table corner can suddenly turn a happy moment into a painful one.",
        "For parents, even a small bump can bring worry and stress.",
      ],
    },
    {
      tone: "Trust",
      body: [
        "Sharp furniture edges are one of the most common causes of minor home injuries. Parents often rely on constant supervision, but accidents can still happen.",
        "Without proper protection, these everyday corners can become unexpected hazards.",
      ],
    },
  ]

  const [problemSlide, setProblemSlide] = useState(0)
  const [problemTouchStart, setProblemTouchStart] = useState<number | null>(null)

  const problemNext = () => setProblemSlide((prev) => (prev + 1) % problemSlides.length)
  const problemPrev = () => setProblemSlide((prev) => (prev - 1 + problemSlides.length) % problemSlides.length)

  const handleProblemTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setProblemTouchStart(e.touches[0].clientX)
  }

  const handleProblemTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (problemTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - problemTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      problemPrev()
    } else if (deltaX < -threshold) {
      problemNext()
    }
    setProblemTouchStart(null)
  }

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

            <div
              className="mt-6 overflow-hidden"
              onTouchStart={handleProblemTouchStart}
              onTouchEnd={handleProblemTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${problemSlide * 100}%)` }}
              >
                {problemSlides.map((slide) => (
                  <div key={slide.tone} className="w-full flex-shrink-0">
                    {slide.body.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`text-lg text-muted-foreground leading-relaxed ${idx === 0 ? "mb-4" : ""}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={problemPrev}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Previous problem slide"
              >
                ←
              </button>
              <div className="flex flex-wrap gap-2">
                {["Professional", "Emotional", "Trust"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setProblemSlide(index)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      problemSlide === index
                        ? "bg-sage text-sage-dark border-sage"
                        : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                    }`}
                    aria-label={`${label} problem slide`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={problemNext}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Next problem slide"
              >
                →
              </button>
            </div>

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

  const solutionSlides = [
    {
      tone: "Professional",
      title: "The Kindoora Edge Protector",
      description:
        "Edge Protector offers a simple and effective way to reduce the risk of furniture-related injuries. By covering sharp corners with soft cushioning material, it helps create a safer environment for children and families.",
    },
    {
      tone: "Emotional",
      title: "The Kindoora Edge Protector",
      description:
        "Edge Protector adds a gentle layer of protection to the corners that matter most. It helps prevent painful bumps and allows children to play and explore freely while parents enjoy peace of mind.",
    },
    {
      tone: "Trust",
      title: "The Kindoora Edge Protector",
      description:
        "Edge Protector is designed with durable, shock-absorbing materials that safely cushion sharp furniture edges. With easy installation and reliable protection, it helps families reduce the risk of accidents at home.",
    },
  ]

  const [solutionSlide, setSolutionSlide] = useState(0)
  const [solutionTouchStart, setSolutionTouchStart] = useState<number | null>(null)

  const solutionNext = () => setSolutionSlide((prev) => (prev + 1) % solutionSlides.length)
  const solutionPrev = () => setSolutionSlide((prev) => (prev - 1 + solutionSlides.length) % solutionSlides.length)

  const handleSolutionTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setSolutionTouchStart(e.touches[0].clientX)
  }

  const handleSolutionTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (solutionTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - solutionTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      solutionPrev()
    } else if (deltaX < -threshold) {
      solutionNext()
    }
    setSolutionTouchStart(null)
  }

  return (
    <section id="solution" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto text-center overflow-hidden"
          onTouchStart={handleSolutionTouchStart}
          onTouchEnd={handleSolutionTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${solutionSlide * 100}%)` }}
          >
            {solutionSlides.map((slide) => (
              <div key={slide.tone} className="w-full flex-shrink-0 px-2">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
                  {slide.title}
                </h2>
                <p className="text-center text-muted-foreground text-lg mb-4 md:mb-6">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={solutionPrev}
            className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
            aria-label="Previous solution slide"
          >
            ←
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {["Professional", "Emotional", "Trust"].map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setSolutionSlide(index)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  solutionSlide === index
                    ? "bg-sage text-sage-dark border-sage"
                    : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                }`}
                aria-label={`${label} solution slide`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={solutionNext}
            className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
            aria-label="Next solution slide"
          >
            →
          </button>
        </div>

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
  const benefitSlides = [
    {
      tone: "Professional",
      sectionTitle: "Why Choose Kindoora",
      sectionDescription:
        "Reliable edge protection designed to make your home safer without affecting your furniture’s appearance.",
      items: [
        {
          icon: Heart,
          title: "Enhanced Safety",
          description: "Kindoora edge protectors help reduce the risk of bumps and injuries caused by sharp furniture edges.",
        },
        {
          icon: Home,
          title: "Seamless Design",
          description: "The transparent, low-profile design blends smoothly with your furniture without affecting your home décor.",
        },
        {
          icon: Award,
          title: "Durable Protection",
          description: "Made from high-quality silicone that absorbs impact and provides reliable, long-lasting protection.",
        },
      ],
    },
    {
      tone: "Emotional",
      sectionTitle: "Why Parents Love Kindoora",
      sectionDescription: "Create a safer home where your little ones can explore freely.",
      items: [
        {
          icon: Heart,
          title: "Peace of Mind",
          description: "Let your child crawl, walk, and explore while Kindoora cushions sharp furniture edges.",
        },
        {
          icon: Home,
          title: "Blends with Your Home",
          description: "The transparent design protects your child while keeping your furniture stylish.",
        },
        {
          icon: Award,
          title: "Soft Yet Strong Protection",
          description: "Flexible silicone gently absorbs impact during everyday play.",
        },
      ],
    },
    {
      tone: "Trust",
      sectionTitle: "Safe Protection Families Trust",
      sectionDescription: "Designed to help parents create a safer home environment with reliable materials.",
      items: [
        {
          icon: Heart,
          title: "Reliable Safety",
          description: "Kindoora edge protectors help reduce the risk of injuries caused by sharp furniture edges.",
        },
        {
          icon: Home,
          title: "Discreet Design",
          description: "The clear, low-profile design blends naturally with your furniture.",
        },
        {
          icon: Award,
          title: "Durable Materials",
          description: "High-quality silicone absorbs impact and stays securely in place.",
        },
      ],
    },
  ]

  const [benefitsSlide, setBenefitsSlide] = useState(0)
  const [benefitsTouchStart, setBenefitsTouchStart] = useState<number | null>(null)

  const benefitsNext = () => setBenefitsSlide((prev) => (prev + 1) % benefitSlides.length)
  const benefitsPrev = () => setBenefitsSlide((prev) => (prev - 1 + benefitSlides.length) % benefitSlides.length)

  const handleBenefitsTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setBenefitsTouchStart(e.touches[0].clientX)
  }

  const handleBenefitsTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (benefitsTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - benefitsTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      benefitsPrev()
    } else if (deltaX < -threshold) {
      benefitsNext()
    }
    setBenefitsTouchStart(null)
  }

  return (
    <section id="benefits" className="py-16 md:py-24 bg-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white text-sage-dark rounded-full text-sm font-medium mb-4">
            Benefits
          </span>

          <div
            className="overflow-hidden"
            onTouchStart={handleBenefitsTouchStart}
            onTouchEnd={handleBenefitsTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${benefitsSlide * 100}%)` }}
            >
              {benefitSlides.map((slide) => (
                <div key={slide.tone} className="w-full flex-shrink-0 px-2">
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
                    {slide.sectionTitle}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {slide.sectionDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={benefitsPrev}
              className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
              aria-label="Previous benefits slide"
            >
              ←
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {["Professional", "Emotional", "Trust"].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setBenefitsSlide(index)}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    benefitsSlide === index
                      ? "bg-sage text-sage-dark border-sage"
                      : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                  }`}
                  aria-label={`${label} benefits slide`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={benefitsNext}
              className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
              aria-label="Next benefits slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${benefitsSlide * 100}%)` }}
            >
              {benefitSlides.map((slide) => (
                <div key={slide.tone} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {slide.items.map((benefit, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Section
function WhyChooseSection() {
  const whySlides = [
    {
      tone: "Professional",
      title: "Designed for Safe and Modern Homes",
      description: "Practical safety solutions built with quality materials and easy installation.",
      body: "At Kindoora, we focus on creating simple and effective home safety products that help families protect their living spaces quickly and efficiently.",
      bullets: [
        "✔ Premium Quality Silicone",
        "✔ Child-Safe Materials",
        "✔ Strong and Reliable Adhesive",
        "✔ Quick and Easy Installation",
      ],
    },
    {
      tone: "Emotional",
      title: "Made for Families Who Care",
      description: "Simple protection designed to keep your home safe and comfortable.",
      body: "At Kindoora, we believe every child deserves a safe place to explore and grow.",
      bullets: [
        "✔ Designed with families in mind",
        "✔ Gentle protection for curious toddlers",
        "✔ Quick setup for busy parents",
        "✔ Safety without changing your home’s style",
      ],
    },
    {
      tone: "Trust",
      title: "A Brand Parents Can Depend On",
      description: "Focused on safety, quality, and dependable protection for families.",
      body: "At Kindoora, every product is designed with durable, child-safe materials to ensure reliable protection for everyday family life.",
      bullets: [
        "✔ Premium Quality Silicone",
        "✔ Child-Safe Materials",
        "✔ Strong Adhesive Hold",
        "✔ Easy Installation in Minutes",
      ],
    },
  ]

  const reasons = [
    { icon: Award, key: "Premium Quality" },
    { icon: Shield, key: "Child-Safe Materials" },
    { icon: Zap, key: "Easy Installation" },
    { icon: Package, key: "Premium Packaging" }
  ]

  const [whySlide, setWhySlide] = useState(0)
  const [whyTouchStart, setWhyTouchStart] = useState<number | null>(null)

  const whyNext = () => setWhySlide((prev) => (prev + 1) % whySlides.length)
  const whyPrev = () => setWhySlide((prev) => (prev - 1 + whySlides.length) % whySlides.length)

  const handleWhyTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setWhyTouchStart(e.touches[0].clientX)
  }

  const handleWhyTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (whyTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - whyTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      whyPrev()
    } else if (deltaX < -threshold) {
      whyNext()
    }
    setWhyTouchStart(null)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Image - Left side on desktop, top on mobile */}
          <div className="order-2 lg:order-1 relative w-full shadow-2xl rounded-3xl overflow-hidden ring-1 ring-black/5">
            <Image
              src="/images/trusted-parents.jpg"
              alt="Caring parents with their baby in a safe home"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content - Right side on desktop, bottom on mobile */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
              Why Kindoora
            </span>

            <div
              className="overflow-hidden"
              onTouchStart={handleWhyTouchStart}
              onTouchEnd={handleWhyTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${whySlide * 100}%)` }}
              >
                {whySlides.map((slide) => (
                  <div key={slide.tone} className="w-full flex-shrink-0 px-2">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
                      {slide.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {slide.body}
                    </p>
                    <div className="mt-6 space-y-1 text-sm md:text-base text-muted-foreground">
                      {slide.bullets.map((bullet) => (
                        <div key={bullet}>{bullet}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={whyPrev}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Previous why choose slide"
              >
                ←
              </button>
              <div className="flex flex-wrap gap-2">
                {["Professional", "Emotional", "Trust"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setWhySlide(index)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      whySlide === index
                        ? "bg-sage text-sage-dark border-sage"
                        : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                    }`}
                    aria-label={`${label} why choose slide`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={whyNext}
                className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
                aria-label="Next why choose slide"
              >
                →
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 bg-cream rounded-xl px-4 py-4 border border-sage/10 hover:border-sage/30 transition-colors"
                >
                  <reason.icon className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{reason.key}</span>
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
      name: "Nivi Vishwa",
      role: "Mother of 2",
      content: "As a first-time mom, I was constantly worried about my toddler bumping into furniture. Kindoora gave me the peace of mind I needed. The quality is exceptional and it blends perfectly with our furniture.",
      rating: 5
    },
    {
      name: "Ammu Sivakumar",
      role: "Mother of 1",
      content: "I love how easy it was to install. Within 10 minutes, our entire living room was baby-proofed. My husband was impressed with how secure the adhesive is. Highly recommend!",
      rating: 5
    },
    {
      name: "Meenakshi Arunachalam",
      role: "Mother of 3",
      content: "After trying several brands, Kindoora stands out for its premium quality. The soft cushioning has already saved us from numerous potential bumps. Worth every penny!",
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
  const howSlides = [
    {
      tone: "Professional",
      title: "Simple Installation in Minutes",
      subtitle: "No tools required. Just peel, stick, and secure your furniture edges.",
      steps: [
        {
          number: "01",
          title: "Clean the Surface",
          description: "Wipe the furniture edge to remove dust and ensure proper adhesion.",
        },
        {
          number: "02",
          title: "Peel the Adhesive Film",
          description: "Remove the protective backing from the edge protector.",
        },
        {
          number: "03",
          title: "Align and Press Firmly",
          description: "Position the protector along the edge and press for about 30 seconds.",
        },
        {
          number: "04",
          title: "Secure Protection",
          description: "Your furniture edges are now cushioned and protected for everyday use.",
        },
      ],
    },
    {
      tone: "Emotional",
      title: "Make Your Home Safer in Minutes",
      subtitle: "A quick and simple way to protect your furniture and your child.",
      steps: [
        {
          number: "01",
          title: "Clean the Surface",
          description: "A quick wipe helps the protector stick perfectly.",
        },
        {
          number: "02",
          title: "Peel the Backing",
          description: "Remove the film to reveal the adhesive strip.",
        },
        {
          number: "03",
          title: "Stick and Press",
          description: "Align the protector and press firmly.",
        },
        {
          number: "04",
          title: "Enjoy Peace of Mind",
          description: "Your home is now safer for curious little explorers.",
        },
      ],
    },
    {
      tone: "Trust",
      title: "A Simple and Reliable Process",
      subtitle: "Install protection quickly with a method designed for dependable results.",
      steps: [
        {
          number: "01",
          title: "Clean the Surface",
          description: "Remove dust and dirt to ensure strong adhesion.",
        },
        {
          number: "02",
          title: "Peel the Protective Film",
          description: "Expose the adhesive backing.",
        },
        {
          number: "03",
          title: "Apply and Press",
          description: "Align the protector and press firmly.",
        },
        {
          number: "04",
          title: "Safe and Secure",
          description: "Your furniture edges are now cushioned to help protect toddlers and pets.",
        },
      ],
    },
  ]

  const [howSlide, setHowSlide] = useState(0)
  const [howTouchStart, setHowTouchStart] = useState<number | null>(null)

  const howNext = () => setHowSlide((prev) => (prev + 1) % howSlides.length)
  const howPrev = () => setHowSlide((prev) => (prev - 1 + howSlides.length) % howSlides.length)

  const handleHowTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setHowTouchStart(e.touches[0].clientX)
  }

  const handleHowTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (howTouchStart === null) return
    const deltaX = e.changedTouches[0].clientX - howTouchStart
    const threshold = 40
    if (deltaX > threshold) {
      howPrev()
    } else if (deltaX < -threshold) {
      howNext()
    }
    setHowTouchStart(null)
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-4">
            How It Works
          </span>

          <div
            className="overflow-hidden"
            onTouchStart={handleHowTouchStart}
            onTouchEnd={handleHowTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${howSlide * 100}%)` }}
            >
              {howSlides.map((slide) => (
                <div key={slide.tone} className="w-full flex-shrink-0 px-2">
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
                    {slide.title}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={howPrev}
              className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
              aria-label="Previous how it works slide"
            >
              ←
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {["Professional", "Emotional", "Trust"].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setHowSlide(index)}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    howSlide === index
                      ? "bg-sage text-sage-dark border-sage"
                      : "bg-white text-muted-foreground border-border hover:bg-cream-dark"
                  }`}
                  aria-label={`${label} how it works slide`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={howNext}
              className="px-3 py-1 text-sm rounded-full border border-border bg-white hover:bg-cream-dark transition-colors"
              aria-label="Next how it works slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 bg-white">
            <Image
              src={newImage}
              alt="Installation process demonstration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${howSlide * 100}%)` }}
              >
                {howSlides.map((slide) => (
                  <div key={slide.tone} className="w-full flex-shrink-0 grid sm:grid-cols-2 gap-6">
                    {slide.steps.map((step, index) => (
                      <div key={index} className="bg-cream rounded-2xl p-6 md:p-8">
                        <div className="text-4xl font-bold text-sage/20 mb-4">{step.number}</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
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
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  const productLinks = [
    { label: "Explore", href: "#home" },
    { label: "Features", href: "#solution" },
    { label: "Pricing", href: "#contact" },
    { label: "Integrations", href: "#how-it-works" },
    { label: "Updates", href: "#" },
  ]

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Testimonials", href: "#faq" },
  ]

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ]

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "https://x.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:support@kindoora.com",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-20 md:pb-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 – Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <a href="#home" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0 mb-5">
              <Image
                src={logoWhite}
                alt="Kindoora Logo"
                width={600}
                height={180}
                className="object-contain h-32 md:h-48 lg:h-64 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed text-center lg:text-left max-w-xs">
              Kindoora helps creators, entrepreneurs, and communities build, launch, and scale digital experiences with powerful tools and simple workflows.
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

          {/* Column 2 – Product */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-white font-semibold text-base mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3 text-center lg:text-left">
              {productLinks.map((link) => (
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
          </div>

          {/* Column 3 – Company */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-white font-semibold text-base mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-center lg:text-left">
              {companyLinks.map((link) => (
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
          </div>

          {/* Column 4 – Legal */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-white font-semibold text-base mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-center lg:text-left">
              {legalLinks.map((link) => (
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
                href="mailto:support@kindoora.com"
                className="hover:text-white transition-colors duration-300"
              >
                support@kindoora.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10" />

        {/* Bottom Footer Bar */}
        <div className="mt-6 flex items-center justify-center">
          <p className="text-white/50 text-sm text-center">
            © 2026 Kindoora. All rights reserved.
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
