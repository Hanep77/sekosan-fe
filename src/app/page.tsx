import About from "./sections/about";
import FAQSection from "./sections/faq";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FAQSection />
      <section className="min-h-screen"></section>
    </>
  );
}
