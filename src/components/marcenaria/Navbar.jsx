import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection, scrollToSection, scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("inicio")}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SR</span>
              </div>
              <div>
                <h1 className={`font-bold text-xl leading-tight ${
                  scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                }`}>
                  Marcenaria do
                </h1>
                <p className={`text-sm font-medium ${
                  scrolled ? "text-amber-700" : "text-amber-100"
                }`}>
                  Sr. Raimundo
                </p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-all ${
                    activeSection === item.id
                      ? scrolled 
                        ? "text-amber-700 bg-amber-50" 
                        : "text-white bg-white/20"
                      : scrolled
                        ? "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("contato")}
                className="ml-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-20 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`justify-start text-lg ${
                    activeSection === item.id
                      ? "text-amber-700 bg-amber-50 font-semibold"
                      : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("contato");
                  setMobileMenuOpen(false);
                }}
                className="mt-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}