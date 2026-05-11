import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';
import AmbientBackground from './components/AmbientBackground';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SystemicApproach from './components/SystemicApproach';
import Timeline from './components/Timeline';
import SafeSpace from './components/SafeSpace';
import ChildrensWorld from './components/ChildrensWorld';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Premium Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Back to Top Button */}
      <BackToTop />

      <div className="relative min-h-screen bg-[var(--background)] overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Three.js Ambient Background — αν αποτύχει το WebGL, το υπόλοιπο site φορτώνει κανονικά */}
        <ErrorBoundary fallback={null}>
          <AmbientBackground />
        </ErrorBoundary>

        {/* Main Content */}
        <main className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="approach">
            <SystemicApproach />
          </section>
          <Timeline />
          <SafeSpace />
          <ChildrensWorld />
          <Testimonials />
          <section id="gallery">
            <Gallery />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}