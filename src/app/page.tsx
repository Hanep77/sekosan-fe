import About from "./sections/about";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <section className="min-h-screen"></section>
    </>
  );
}
