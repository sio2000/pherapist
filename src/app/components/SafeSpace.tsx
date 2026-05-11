import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function SafeSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Ambient background gradient */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--lavender)]/10 via-[var(--dusty-rose)]/10 to-[var(--peach-glow)]/10"
      />

      {/* Floating orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--lavender)] opacity-10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[var(--peach-glow)] opacity-10 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-7xl text-[var(--foreground)] leading-tight px-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Κάθε άνθρωπος αξίζει έναν χώρο όπου μπορεί να ακουστεί{' '}
              <span className="text-[var(--lavender)] italic">χωρίς φόβο</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed max-w-3xl mx-auto px-4"
          >
            Στη θεραπεία, δημιουργούμε έναν ασφαλή χώρο όπου μπορείς να εκφραστείς
            ελεύθερα, να νιώσεις κατανοημένος/η και να ανακαλύψεις τη δύναμή σου.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[var(--border)]">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                🤝
              </div>
              <h3
                className="text-2xl text-[var(--foreground)] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Εμπιστοσύνη
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Ένας χώρος απόλυτης εμπιστευτικότητας και σεβασμού
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[var(--border)]">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                💙
              </div>
              <h3
                className="text-2xl text-[var(--foreground)] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ενσυναίσθηση
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Βαθιά κατανόηση και συναισθηματική παρουσία
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[var(--border)]">
              <div
                className="text-5xl mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                ✨
              </div>
              <h3
                className="text-2xl text-[var(--foreground)] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ενδυνάμωση
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Υποστήριξη για να βρεις την εσωτερική σου δύναμη
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-gradient-to-r from-[var(--lavender)] to-[var(--dusty-rose)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ξεκίνα τη Διαδρομή σου
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
