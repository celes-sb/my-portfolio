import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
    </MainLayout>
  );
}
