import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Star, Menu, X, MessageCircle, Hammer, Ruler, Wrench, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../components/marcenaria/HeroSection";
import ServicesSection from "../components/marcenaria/ServicesSection";
import AboutSection from "../components/marcenaria/AboutSection";
import GallerySection from "../components/marcenaria/GallerySection";
import TestimonialsSection from "../components/marcenaria/TestimonialsSection";
import ContactSection from "../components/marcenaria/ContactSection";
import Navbar from "../components/marcenaria/Navbar";
import Footer from "../components/marcenaria/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        scrolled={scrolled}
      />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />

      {/* Botão WhatsApp Flutuante */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}