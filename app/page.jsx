import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeMade from "./components/HomeMade";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="font-mona">
      <Navbar />
      <Hero />
      <HomeMade />
      <Balance />
      <Services />
      <Footer />
      {/* <div className="h-dvh"></div> */}
    </main>
  );
}
