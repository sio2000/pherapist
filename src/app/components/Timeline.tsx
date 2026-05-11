import { motion } from 'motion/react';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    year: '2015',
    title: 'Πτυχίο Ψυχολογίας',
    organization: 'University of East London',
    description: 'Ολοκλήρωση σπουδών στην Ψυχολογία με εξειδίκευση στη συστημική προσέγγιση.',
  },
  {
    icon: Award,
    year: '2018',
    title: 'Εξειδίκευση EFTA',
    organization: 'European Family Therapy Association',
    description: 'Πιστοποίηση στη Συστημική Οικογενειακή Θεραπεία.',
  },
  {
    icon: Heart,
    year: '2019',
    title: 'Εκπαίδευση Παιδικής Θεραπείας',
    organization: 'Εξειδικευμένη Κατάρτιση',
    description: 'Εμβάθυνση στην ψυχοθεραπεία παιδιών και εφήβων.',
  },
  {
    icon: Users,
    year: '2020 - Σήμερα',
    title: 'Εθελοντική Δράση & Ιδιωτικό Ιατρείο',
    organization: 'DIOTIMA, Μιλάμου & Ιδιωτική Πράξη',
    description: 'Υποστήριξη γυναικών θυμάτων βίας και παροχή ψυχοθεραπείας σε ιδιώτες.',
  },
];

export default function Timeline() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            Εμπειρία & Εκπαίδευση
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Η διαδρομή μου
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Μια συνεχής πορεία μάθησης και ανθρωπιάς
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--lavender)] to-transparent" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-12 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Left content (desktop) */}
                <div
                  className={`${
                    index % 2 === 0 ? 'md:text-right' : 'md:order-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)] hover:border-[var(--lavender)] transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--lavender)] to-[var(--dusty-rose)] flex items-center justify-center"
                      >
                        <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <div className="text-2xl font-medium text-[var(--lavender)]">
                        {item.year}
                      </div>
                    </div>

                    <h3
                      className="text-2xl md:text-3xl text-[var(--foreground)] mb-2"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.title}
                    </h3>

                    <div className="text-[var(--muted-foreground)] font-medium mb-3">
                      {item.organization}
                    </div>

                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-[var(--lavender)]" />
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 rounded-full bg-[var(--lavender)]"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right spacer (desktop) */}
                <div className={index % 2 === 0 ? 'md:order-2' : ''} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
