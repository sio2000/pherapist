import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function SystemicApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const connections = [
    { from: { x: 30, y: 30 }, to: { x: 70, y: 40 }, delay: 0 },
    { from: { x: 70, y: 40 }, to: { x: 50, y: 70 }, delay: 0.2 },
    { from: { x: 50, y: 70 }, to: { x: 20, y: 60 }, delay: 0.4 },
    { from: { x: 20, y: 60 }, to: { x: 30, y: 30 }, delay: 0.6 },
    { from: { x: 30, y: 30 }, to: { x: 50, y: 70 }, delay: 0.8 },
    { from: { x: 70, y: 40 }, to: { x: 20, y: 60 }, delay: 1 },
  ];

  const nodes = [
    { x: 30, y: 30, label: 'Άτομο', delay: 0 },
    { x: 70, y: 40, label: 'Οικογένεια', delay: 0.2 },
    { x: 50, y: 70, label: 'Σχέσεις', delay: 0.4 },
    { x: 20, y: 60, label: 'Περιβάλλον', delay: 0.6 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[var(--background)] via-[var(--cream)] to-[var(--background)] overflow-hidden"
    >
      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            Η Προσέγγισή μου
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Συστημική Ψυχοθεραπεία
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Η συστημική προσέγγιση εστιάζει στις σχέσεις και τις αλληλεπιδράσεις.
            Δεν βλέπουμε το άτομο μεμονωμένα, αλλά ως μέρος ενός ευρύτερου συστήματος
            που περιλαμβάνει την οικογένεια, τις σχέσεις και το περιβάλλον.
          </p>
        </motion.div>

        {/* Interactive System Visualization */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(196, 181, 203, 0.2))' }}
            >
              {/* Connection Lines */}
              <g>
                {connections.map((connection, i) => (
                  <motion.line
                    key={i}
                    x1={connection.from.x}
                    y1={connection.from.y}
                    x2={connection.to.x}
                    y2={connection.to.y}
                    stroke="url(#gradient)"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: connection.delay,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </g>

              {/* Nodes */}
              <g>
                {nodes.map((node, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      fill="white"
                      stroke="url(#gradient)"
                      strokeWidth="0.5"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: node.delay + 0.5,
                        type: 'spring',
                        stiffness: 200,
                      }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="4"
                      fill="url(#gradient)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: node.delay + 0.7,
                      }}
                    />
                    <motion.text
                      x={node.x}
                      y={node.y + 14}
                      textAnchor="middle"
                      className="text-[3px] fill-[var(--foreground)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: node.delay + 0.9,
                      }}
                    >
                      {node.label}
                    </motion.text>
                  </g>
                ))}
              </g>

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C4B5CB" />
                  <stop offset="50%" stopColor="#D4B5B5" />
                  <stop offset="100%" stopColor="#F2D4C7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--lavender)]/10 via-transparent to-[var(--peach-glow)]/10 blur-3xl rounded-full" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <h3
                  className="text-2xl text-[var(--foreground)] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Ολιστική Θεώρηση
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Κατανοούμε το άτομο μέσα στο πλαίσιο των σχέσεών του,
                  αναγνωρίζοντας πώς οι οικογενειακές δυναμικές επηρεάζουν
                  τη συναισθηματική μας κατάσταση.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <h3
                  className="text-2xl text-[var(--foreground)] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Συνδέσεις & Αλληλεπιδράσεις
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Εξερευνούμε τις σχέσεις μας και τον τρόπο που επικοινωνούμε,
                  δημιουργώντας νέες, υγιέστερες δυναμικές.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border)]"
              >
                <h3
                  className="text-2xl text-[var(--foreground)] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Ενδυνάμωση & Αλλαγή
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Στόχος μας είναι η συναισθηματική ενδυνάμωση και η δημιουργία
                  ενός ασφαλούς χώρου για προσωπική ανάπτυξη.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
