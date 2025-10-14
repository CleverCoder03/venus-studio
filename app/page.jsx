import Hero from "./components/Hero";
import HomeMade from "./components/HomeMade";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="font-mona">
      <Navbar />
      <Hero />
      <HomeMade />
      <div className="h-dvh"></div>
    </main>
  );
}
