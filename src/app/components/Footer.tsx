import { motion } from 'motion/react';
import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--background)] to-[var(--cream)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3
              className="text-3xl text-[var(--foreground)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Παόλα Ισμαήλη
            </h3>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Ψυχολόγος & Συστημική Ψυχοθεραπεύτρια
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/ismaili_psychotherapy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[var(--foreground)]" />
              </motion.a>
              <motion.a
                href="mailto:paola@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--foreground)]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-medium text-[var(--foreground)] mb-4">
              Γρήγορες Συνδέσεις
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#services"
                className="text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
              >
                Υπηρεσίες
              </a>
              <a
                href="#about"
                className="text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
              >
                Σχετικά με εμένα
              </a>
              <a
                href="#approach"
                className="text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
              >
                Η Προσέγγισή μου
              </a>
              <a
                href="#contact"
                className="text-[var(--muted-foreground)] hover:text-[var(--lavender)] transition-colors"
              >
                Επικοινωνία
              </a>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-medium text-[var(--foreground)] mb-4">
              Επικοινωνία
            </h4>
            <div className="space-y-3 text-[var(--muted-foreground)]">
              <p>Θεσσαλονίκη, Ελλάδα</p>
              <p>Online Συνεδρίες Διαθέσιμες</p>
              <a
                href="mailto:paola.ismaili@example.com"
                className="block hover:text-[var(--lavender)] transition-colors"
              >
                paola.ismaili@example.com
              </a>
              <a
                href="tel:+306912345678"
                className="block hover:text-[var(--lavender)] transition-colors"
              >
                +30 691 234 5678
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]"
        >
          <p>
            © {new Date().getFullYear()} Παόλα Ισμαήλη. Με αγάπη για την ψυχική υγεία.
          </p>
          <div className="flex items-center gap-2">
            <span>Δημιουργήθηκε με</span>
            <Heart className="w-4 h-4 text-[var(--dusty-rose)] fill-current" />
            <span>και ενσυναίσθηση</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
