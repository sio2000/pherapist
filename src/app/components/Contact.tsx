import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
            Επικοινωνία
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Μπορείς να κάνεις το πρώτο βήμα με τον δικό σου ρυθμό
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Επικοινώνησε μαζί μου για περισσότερες πληροφορίες ή για να κλείσεις συνεδρία
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="text-3xl text-[var(--foreground)] mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Στοιχεία Επικοινωνίας
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:paola@example.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--lavender)] to-[var(--dusty-rose)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)] mb-1">Email</div>
                    <div className="text-[var(--foreground)] group-hover:text-[var(--lavender)] transition-colors">
                      paola.ismaili@example.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+306912345678"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--dusty-rose)] to-[var(--peach-glow)] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)] mb-1">Τηλέφωνο</div>
                    <div className="text-[var(--foreground)] group-hover:text-[var(--lavender)] transition-colors">
                      +30 691 234 5678
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--peach-glow)] to-[var(--warm-amber)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)] mb-1">Τοποθεσία</div>
                    <div className="text-[var(--foreground)]">
                      Θεσσαλονίκη & Online
                    </div>
                  </div>
                </motion.div>

                <motion.a
                  href="https://instagram.com/ismaili_psychotherapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--lavender)] to-[var(--peach-glow)] flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)] mb-1">Instagram</div>
                    <div className="text-[var(--foreground)] group-hover:text-[var(--lavender)] transition-colors">
                      @ismaili_psychotherapy
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--lavender)]/10 to-[var(--peach-glow)]/10 border border-[var(--border)]">
              <h4 className="text-lg font-medium text-[var(--foreground)] mb-2">
                Ώρες Λειτουργίας
              </h4>
              <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <div className="flex justify-between">
                  <span>Δευτέρα - Παρασκευή</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Σάββατο</span>
                  <span>10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Κυριακή</span>
                  <span>Κλειστά</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[var(--muted-foreground)]">
                    Όνομα *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)] focus:border-[var(--lavender)] focus:outline-none transition-colors"
                    placeholder="Το όνομά σου"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[var(--muted-foreground)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)] focus:border-[var(--lavender)] focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[var(--muted-foreground)]">
                  Τηλέφωνο
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)] focus:border-[var(--lavender)] focus:outline-none transition-colors"
                  placeholder="+30 691 234 5678"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[var(--muted-foreground)]">
                  Μήνυμα *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)] focus:border-[var(--lavender)] focus:outline-none transition-colors resize-none"
                  placeholder="Μοιράσου λίγα λόγια για το πώς μπορώ να σε βοηθήσω..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[var(--lavender)] to-[var(--dusty-rose)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Αποστολή Μηνύματος
                <Send className="w-4 h-4" />
              </motion.button>

              <p className="text-sm text-[var(--muted-foreground)] italic">
                * Όλες οι επικοινωνίες είναι απολύτως εμπιστευτικές
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
