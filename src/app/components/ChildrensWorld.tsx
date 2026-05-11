import { motion } from 'motion/react';
import { BookOpen, Heart, Sparkles } from 'lucide-react';

export default function ChildrensWorld() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--cream)] to-[var(--background)] overflow-hidden">
      {/* Playful background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[var(--peach-glow)] opacity-10 blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[var(--lavender)] opacity-10 blur-2xl"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
                Η Δημιουργική Πλευρά
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ιστορίες για Παιδιά
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Εκτός από τη ψυχοθεραπεία, είμαι συγγραφέας παιδικών ιστοριών.
                Πιστεύω βαθιά στη δύναμη της φαντασίας και της συναισθηματικής έκφρασης
                μέσα από την τέχνη.
              </p>

              <p>
                Οι ιστορίες μου εξερευνούν τον εσωτερικό κόσμο των παιδιών, τα συναισθήματά
                τους, τις σχέσεις τους και την αίσθηση του ανήκειν. Είναι ιστορίες που
                μιλούν για ενσυναίσθηση, αυτοπεποίθηση και συναισθηματική νοημοσύνη.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[var(--lavender)] to-[var(--dusty-rose)] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-[var(--foreground)]">
                  Φαντασία
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[var(--dusty-rose)] to-[var(--peach-glow)] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-[var(--foreground)]">
                  Ενσυναίσθηση
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[var(--peach-glow)] to-[var(--warm-amber)] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-[var(--foreground)]">
                  Έκφραση
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--peach-glow)]/20 via-[var(--lavender)]/20 to-[var(--warm-amber)]/20 p-12 flex items-center justify-center">
              {/* Decorative illustration placeholder */}
              <div className="text-center space-y-6">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-8xl"
                >
                  📚
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.2,
                  }}
                  className="text-6xl"
                >
                  ✨
                </motion.div>
                <p
                  className="text-3xl text-[var(--foreground)] italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "Κάθε παιδί έχει μια ιστορία να πει"
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -left-4 text-5xl"
            >
              🎨
            </motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -right-4 text-5xl"
            >
              🌈
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
