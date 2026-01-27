import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Lifetime from "./components/Lifetime";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import SideNavigation from "./components/SideNavigation";
import RightSideNavigation from "./components/RightSideNavigation";

export default function Home() {
  return (
    <main className="mb-4 relative">
      <Navigation />
      <SideNavigation />
      <RightSideNavigation />
      <section className="container mx-auto">
        <Banner />
        <Lifetime />
        <Skills />
        <Portfolio />
        <Blog />
        <Pricing />
        <Contact />
      </section>
    </main>
  );
}
