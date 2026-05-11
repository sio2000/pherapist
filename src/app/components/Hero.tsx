import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
              Συστημική Ψυχοθεραπεία
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--foreground)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ένας ασφαλής χώρος για να κατανοήσεις τον εαυτό σου και τις σχέσεις σου
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl leading-relaxed"
          >
            Συστημική ψυχοθεραπεία με επίκεντρο τον άνθρωπο, τις σχέσεις και την ψυχική ενδυνάμωση.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Κλείσε Συνεδρία
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[var(--soft-charcoal)]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] rounded-full hover:border-[var(--primary)] transition-all duration-300"
            >
              Γνώρισε την Προσέγγιση
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image/Portrait Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--lavender)] via-[var(--dusty-rose)] to-[var(--peach-glow)] opacity-20">
            {/* Placeholder for portrait - replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-[var(--cream)] to-[var(--sand)]" />
            </div>
          </div>

          {/* Floating accent elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[var(--lavender)] opacity-20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full bg-[var(--peach-glow)] opacity-20 blur-3xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[var(--muted-foreground)] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[var(--muted-foreground)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
