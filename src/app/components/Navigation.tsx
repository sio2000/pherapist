import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(250, 248, 246, 0)', 'rgba(250, 248, 246, 0.95)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Αρχική', href: '#hero' },
    { label: 'Σχετικά', href: '#about' },
    { label: 'Υπηρεσίες', href: '#services' },
    { label: 'Προσέγγιση', href: '#approach' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          borderBottomColor: borderOpacity,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-[var(--foreground)] hover:text-[var(--lavender)] transition-colors"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Παόλα Ισμαήλη
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-[var(--foreground)] hover:text-[var(--lavender)] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--lavender)] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-[var(--lavender)] to-[var(--dusty-rose)] text-white rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Κλείσε Συνεδρία
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--muted)] transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[var(--foreground)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--foreground)]" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 md:hidden bg-[var(--background)] backdrop-blur-lg"
        style={{ top: '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: isOpen ? 0.1 * index : 0 }}
              onClick={() => setIsOpen(false)}
              className="text-3xl text-[var(--foreground)] hover:text-[var(--lavender)] transition-colors"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: isOpen ? 0.5 : 0 }}
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 bg-gradient-to-r from-[var(--lavender)] to-[var(--dusty-rose)] text-white rounded-full shadow-lg text-lg"
          >
            Κλείσε Συνεδρία
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
