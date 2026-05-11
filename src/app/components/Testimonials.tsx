import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Μαρία Κ.',
    role: 'Ατομική Θεραπεία',
    quote:
      'Η Παόλα με βοήθησε να κατανοήσω τον εαυτό μου και τις σχέσεις μου με έναν τρόπο που ποτέ δεν φανταζόμουν. Νιώθω πιο δυνατή και πιο ολοκληρωμένη.',
  },
  {
    name: 'Γιάννης & Ελένη',
    role: 'Συμβουλευτική Ζευγαριών',
    quote:
      'Η συστημική προσέγγιση μας έδωσε νέα εργαλεία επικοινωνίας. Νιώθουμε πιο κοντά και πιο συνδεδεμένοι από ποτέ.',
  },
  {
    name: 'Σοφία Π.',
    role: 'Οικογενειακή Θεραπεία',
    quote:
      'Ένας ασφαλής χώρος όπου όλη η οικογένεια μπορεί να εκφραστεί και να νιώσει κατανοημένη. Η Παόλα είναι εξαιρετική στο να δημιουργεί αυτή την ατμόσφαιρα.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--background)] to-[var(--cream)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            Μαρτυρίες
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ιστορίες ανθρώπων που εμπιστεύτηκαν τη διαδικασία
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative p-12 md:p-16 rounded-3xl bg-white/60 backdrop-blur-sm border border-[var(--border)] shadow-xl"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--lavender)] to-[var(--dusty-rose)] flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <p
                className="text-2xl md:text-3xl text-[var(--foreground)] leading-relaxed italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="pt-6">
                <div
                  className="text-xl text-[var(--foreground)] mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-[var(--muted-foreground)]">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[var(--peach-glow)]/10 to-transparent rounded-3xl" />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[var(--lavender)] w-8'
                      : 'bg-[var(--muted-foreground)]/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--lavender)] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
