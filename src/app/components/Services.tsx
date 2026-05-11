import { motion } from 'motion/react';
import { Heart, Users, Video, Shield, Sparkles, Home } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Ατομική Θεραπεία',
    description: 'Προσωπική υποστήριξη για συναισθηματική ενδυνάμωση και ψυχική ευεξία.',
  },
  {
    icon: Users,
    title: 'Συμβουλευτική Ζευγαριών',
    description: 'Ενίσχυση της σχέσης σας μέσα από τη συστημική προσέγγιση.',
  },
  {
    icon: Home,
    title: 'Οικογενειακή Θεραπεία',
    description: 'Κατανόηση και βελτίωση των οικογενειακών δυναμικών.',
  },
  {
    icon: Video,
    title: 'Online Συνεδρίες',
    description: 'Ευέλικτη θεραπεία από την άνεση του χώρου σου.',
  },
  {
    icon: Shield,
    title: 'Υποστήριξη Ενδοοικογενειακής Βίας',
    description: 'Ειδική στήριξη και καθοδήγηση σε περιπτώσεις βίας.',
  },
  {
    icon: Sparkles,
    title: 'Συναισθηματική Ενδυνάμωση',
    description: 'Ανάπτυξη συναισθηματικής νοημοσύνης και αυτογνωσίας.',
  },
];

export default function Services() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            Υπηρεσίες
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Πώς μπορώ να σε υποστηρίξω
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Μια ολοκληρωμένη προσέγγιση για τις ανάγκες σου
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[var(--border)] hover:border-[var(--lavender)] transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--lavender)]/5 via-[var(--peach-glow)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--lavender)] to-[var(--dusty-rose)] flex items-center justify-center"
                  >
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>

                  <h3
                    className="text-2xl text-[var(--foreground)]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="text-[var(--lavender)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Μάθε περισσότερα →
                  </motion.div>
                </div>

                {/* Floating ambient glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[var(--lavender)] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
