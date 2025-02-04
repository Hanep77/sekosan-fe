import About from "./sections/about";
import FAQSection from "./sections/faq";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Testimony from "./sections/testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimony />
      <FAQSection />
      <Footer />
    </>
  );
}
