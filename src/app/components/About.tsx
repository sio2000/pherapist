import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bioImg from '../../assets/bio.png';

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--cream)] to-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Portrait placeholder */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[var(--border)] bg-[var(--sand)]">
                <ImageWithFallback
                  src={bioImg}
                  alt="Παόλα Ισμαήλη — ψυχολόγος"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>

              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-[var(--border)] max-w-xs shadow-xl"
              >
                <p
                  className="text-lg text-[var(--foreground)] italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "Η ενσυναίσθηση και η κατανόηση είναι το θεμέλιο κάθε θεραπευτικής σχέσης."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
                Γνώρισέ με
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Παόλα Ισμαήλη
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Είμαι ψυχολόγος με εξειδίκευση στη Συστημική Ψυχοθεραπεία και Συμβουλευτική,
                με βαθιά πίστη στη δύναμη των σχέσεων και της συναισθηματικής νοημοσύνης.
              </p>

              <p>
                Η προσέγγισή μου επικεντρώνεται στον άνθρωπο ως μέρος ενός ευρύτερου
                συστήματος—στην οικογένεια, στις σχέσεις, στο περιβάλλον. Πιστεύω ότι
                η θεραπεία δεν αφορά μόνο το άτομο, αλλά και τις δυναμικές που το διαμορφώνουν.
              </p>

              <p>
                Εργάζομαι με άτομα, ζευγάρια και οικογένειες, παρέχοντας έναν ασφαλή χώρο
                όπου μπορούν να εξερευνήσουν τα συναισθήματά τους, να κατανοήσουν τις σχέσεις
                τους και να βρουν την εσωτερική τους δύναμη.
              </p>

              <p>
                Παράλληλα, είμαι συγγραφέας παιδικών ιστοριών—ένα μέρος της ταυτότητάς μου
                που με συνδέει με τη φαντασία, τη συναισθηματική έκφραση και τον εσωτερικό
                κόσμο των παιδιών.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <div
                  className="text-4xl text-[var(--lavender)] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  8+
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Χρόνια Εμπειρίας
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <div
                  className="text-4xl text-[var(--dusty-rose)] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  500+
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Συνεδρίες
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <div
                  className="text-4xl text-[var(--peach-glow)] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  100%
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Εμπιστοσύνη
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
