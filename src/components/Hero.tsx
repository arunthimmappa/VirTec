"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Award,
  Factory,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

// Hero slides with Virtec products and content
const heroSlides = [
  {
    src: "https://virtec.us/images/EM700%20Basic%20HVAC%20Inverter.jpeg",
    alt: "EM700 Series Mini Inverter",
    badge: "Advanced HVAC Solutions",
    title: "EM700 Series Mini Inverter",
    subtitle: "Intelligent Motor Control for Ventilation Systems",
    description:
      "Advanced HVAC inverter technology delivering energy-efficient motor control with precision and reliability for modern ventilation systems.",
    icon: Zap,
    features: [
      "Energy Efficient",
      "Intelligent Control",
      "Precision Performance",
      "HVAC Optimized",
    ],
    ctaText: "View Product",
    ctaLink: "#products",
  },
  {
    src: "https://virtec.us/images/Virtec-Website_-1_edited.png",
    alt: "Electromagnetic Flow Meter",
    badge: "Precision Flow Measurement",
    title: "Electromagnetic Flow Meter - VIR EM",
    subtitle: "High-Precision Measurement (Range 6mm to 1000mm)",
    description:
      "State-of-the-art electromagnetic flow measurement technology delivering exceptional accuracy for water and HVAC applications worldwide.",
    icon: Factory,
    features: [
      "Wide Range Coverage",
      "99.7% Accuracy",
      "Low Maintenance",
      "Global Standards",
    ],
    ctaText: "Explore Flow Meters",
    ctaLink: "#flow-meters",
  },
  {
    src: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390842903fd056ef75182c_IMAGRE%20-1_%20(1).png",
    alt: "Ultrasonic Heat Meter",
    badge: "Thermal Energy Excellence",
    title: "Ultrasonic Heat Meter - VIR UF",
    subtitle: "District Heating & Cooling Solutions (Range 125mm to 800mm)",
    description:
      "Accurate thermal energy measurement for district heating and cooling systems, ensuring optimal energy management and sustainability.",
    icon: Award,
    features: [
      "District Energy Ready",
      "Long-Term Stability",
      "Low Power Consumption",
      "ISO Certified",
    ],
    ctaText: "View Heat Meters",
    ctaLink: "#heat-meters",
  },
  {
    src: "https://virtec.us/images/VIR-832-CLAMPONflowmeter.png",
    alt: "Clamp-On Flow Meter",
    badge: "Non-Invasive Technology",
    title: "VIR-832 Clamp-On Flow Meter",
    subtitle: "Non-Invasive Ultrasonic Measurement Solution",
    description:
      "Revolutionary clamp-on ultrasonic flow measurement technology that requires no pipe modification, ideal for retrofit installations.",
    icon: CheckCircle,
    features: [
      "Non-Invasive Installation",
      "No Pipe Modification",
      "Easy Retrofit",
      "Accurate Measurement",
    ],
    ctaText: "Learn More",
    ctaLink: "#products",
  },
  {
    src: "https://uploads-ssl.webflow.com/6438d84d995878788d71027c/64390ac59cb66255c49ac27d_Virtec%20Ultrasonic%20Water%20Meter_edited%20(1).png",
    alt: "Ultrasonic Electronic Flow Meter",
    badge: "Global Leadership",
    title: "Ultrasonic Electronic Flow Meter - LXC Series",
    subtitle: "Precision Water Flow Measurement Technology",
    description:
      "Premium ultrasonic flow measurement solutions trusted in 40+ countries, delivering exceptional accuracy and reliability for water applications.",
    icon: Globe,
    features: [
      "40+ Countries",
      "Premium Quality",
      "Advanced Technology",
      "Export Ready",
    ],
    ctaText: "Explore Products",
    ctaLink: "#products",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isInteracting = useRef(false);
  const AUTOPLAY_DELAY = 8000;

  // Slide change handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay function
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isInteracting.current) {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_DELAY);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  // Sync Autoplay & Interaction
  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();
    emblaApi.on("select", onSelect);

    // Pause on interaction
    const onPointerDown = () => {
      isInteracting.current = true;
      stopAutoplay();
    };
    const onPointerUp = () => {
      isInteracting.current = false;
      startAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  // Navigation
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollPrev();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollNext();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay, stopAutoplay]);
  const scrollTo = useCallback(
    (idx: number) => emblaApi && emblaApi.scrollTo(idx),
    [emblaApi]
  );

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex flex-col min-h-[100dvh] sm:min-h-[700px] md:h-screen md:max-h-screen md:overflow-hidden lg:h-screen">
      {/* Embla Carousel */}
      <div
        className="flex-1 w-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] relative h-full select-none"
              style={{ minWidth: "100%" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent md:hidden" />
              </div>

              {/* Content with Text Transitions */}
              <div className="relative z-10 flex items-center h-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-24 sm:pt-28 md:pt-20 lg:pt-24 xl:pt-32 pb-24 sm:pb-20 md:pb-12 lg:pb-16 xl:pb-20">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={index}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-5 sm:space-y-6 md:space-y-5 lg:space-y-7 xl:space-y-8"
                        >
                          {/* Badge with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 bg-primary-yellow/20 rounded-full text-white text-xs sm:text-sm md:text-sm lg:text-base uppercase tracking-[0.2em] backdrop-blur border border-primary-yellow/30"
                          >
                            <slide.icon size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-yellow" />
                            <span>{slide.badge}</span>
                          </motion.div>

                          {/* Main Heading with staggered animation */}
                          <div className="space-y-3 sm:space-y-4 md:space-y-3 lg:space-y-4 xl:space-y-5">
                            <motion.h1
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-white leading-[1.1] sm:leading-tight"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.h2
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-primary-yellow leading-tight"
                            >
                              {slide.subtitle}
                            </motion.h2>
                          </div>

                          {/* Description with transition */}
                          <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-white/90 leading-relaxed max-w-2xl lg:max-w-3xl"
                          >
                            {slide.description}
                          </motion.p>

                          {/* Features List with staggered animation */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5"
                          >
                            {slide.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.6 + featureIndex * 0.1,
                                }}
                                className="flex items-center gap-2 text-white"
                              >
                                <CheckCircle
                                  size={16}
                                  className="sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary-yellow flex-shrink-0"
                                />
                                <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* CTA Buttons with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 pt-6 sm:pt-6 md:pt-4 lg:pt-6 xl:pt-8"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full sm:w-auto"
                            >
                              <Link
                                href={slide.ctaLink || "#products"}
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary-yellow px-6 py-3.5 sm:px-6 sm:py-2.5 md:px-7 md:py-2.5 lg:px-8 lg:py-3 xl:px-9 xl:py-3.5 2xl:px-10 2xl:py-4 text-base sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95 font-semibold"
                              >
                                {slide.ctaText || "Explore Products"}
                                <ArrowRight size={18} className="sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 ml-2" />
                              </Link>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full sm:w-auto"
                            >
                              <Link
                                href="#contact"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-6 py-3.5 sm:px-6 sm:py-2.5 md:px-7 md:py-2.5 lg:px-8 lg:py-3 xl:px-9 xl:py-3.5 2xl:px-10 2xl:py-4 text-base sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-white transition hover:bg-white/20 hover:border-white/50 font-semibold"
                              >
                                <Phone size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                <span>Talk to an Engineer</span>
                              </Link>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="hidden md:flex absolute inset-y-0 left-4 lg:left-6 xl:left-8 z-40 items-center">
        <button
          onClick={scrollPrev}
          className="group relative inline-flex h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px] min-w-[48px] lg:min-h-[56px] lg:min-w-[56px]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-4 lg:right-6 xl:right-8 z-40 items-center">
        <button
          onClick={scrollNext}
          className="group relative inline-flex h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px] min-w-[48px] lg:min-h-[56px] lg:min-w-[56px]"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-6 lg:bottom-8 xl:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent ${selectedIndex === index
              ? "w-6 sm:w-7 md:w-8 lg:w-10 xl:w-12 bg-primary-yellow"
              : "bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
