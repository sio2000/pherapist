import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--lavender)] via-[var(--dusty-rose)] to-[var(--peach-glow)] origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
