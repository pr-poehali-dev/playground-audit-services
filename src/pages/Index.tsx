import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PlaygroundMap from "@/components/PlaygroundMap";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PlaygroundMap />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
