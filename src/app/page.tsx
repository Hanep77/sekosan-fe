import About from "./sections/about";
import FAQSection from "./sections/faq";
import Hero from "./sections/hero";
import Testimony from "./sections/testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimony />
      <FAQSection />
      <section className="min-h-screen"></section>
    </>
  );
}
