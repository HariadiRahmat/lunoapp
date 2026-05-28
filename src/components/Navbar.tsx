import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Layanan", href: "#layanan" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Harga", href: "#harga" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleCtaClick = () => {
    window.open("https://wa.me/6285710300560", "_blank", "referrer");
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Desktop Navbar: 3-Column Layout */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            
            {/* Column 1: Left Navigation Items (Oval Pills) */}
            <div className="flex items-center gap-1.5 justify-start">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-1.5 border border-neutral-300/80 rounded-full text-[11px] font-bold text-neutral-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 bg-white/50 backdrop-blur-xs select-none"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Column 2: Centered Brand Logo */}
            <div className="flex items-center justify-center">
              <a href="#" className="flex items-center gap-2 group">
                <span className="font-extrabold text-xl tracking-tight text-neutral-900 group-hover:opacity-85 transition-opacity">
                   Luno<span className="text-blue-600">App</span>
                </span>
              </a>
            </div>

            {/* Column 3: Right CTA Buttons */}
            <div className="flex items-center justify-end gap-2.5">
              <a
                href="#harga"
                className="px-4 py-1.5 border border-neutral-300/80 rounded-full text-[11px] font-bold text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 select-none text-center"
              >
                Harga
              </a>
              <button
                id="nav-cta-desktop"
                onClick={handleCtaClick}
                className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 flex items-center gap-1 shadow-sm cursor-pointer group hover:shadow-md"
              >
                Konsultasi
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Mobile Navbar: Simple Row Layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-extrabold text-xl tracking-tight text-neutral-900">
                Luno<span className="text-blue-600">App</span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-45 bg-white border-b border-neutral-200 shadow-lg md:hidden py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-neutral-700 hover:text-blue-600 transition-colors py-1 border-b border-neutral-100/60 pb-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href="#harga"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  Harga
                </a>
                <button
                  id="nav-cta-mobile"
                  onClick={() => {
                    setIsOpen(false);
                    handleCtaClick();
                  }}
                  className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Konsultasi Gratis
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
