import Cards from "./component/cards";
import HeroSection from "./component/hero-section";

export default function Home(){
  return(
    <main className="h-screen">
      <HeroSection/>
      <Cards/>
    </main>
  );
}
