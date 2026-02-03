import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'Shop', href: '#shop' },
  { name: 'Story', href: '#story' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div
          className={`
            container mx-auto max-w-5xl
            transition-all duration-500 ease-out
            ${isScrolled
              ? 'bg-background/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20 rounded-2xl'
              : 'bg-transparent border border-transparent'
            }
          `}
        >
          <div className="flex items-center justify-between h-14 px-4 md:px-6">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-xl md:text-2xl font-serif font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cutopia
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full
                    transition-colors duration-300
                    ${activeLink === link.href
                      ? 'text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href="https://instagram.com/cutopia26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/7071996737"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-green-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('#shop')}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl px-5 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-24 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`
                        flex items-center px-4 py-3 rounded-xl text-base font-medium
                        transition-all duration-300
                        ${activeLink === link.href
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-foreground hover:bg-secondary'
                        }
                      `}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="p-4 pt-0 flex gap-2">
                  <motion.a
                    href="https://instagram.com/cutopia26"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/7071996737"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </motion.a>
                </div>

                <div className="p-4 pt-2 border-t border-border/50">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={() => scrollToSection('#shop')}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl py-6 shadow-lg shadow-primary/20"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Shop Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
