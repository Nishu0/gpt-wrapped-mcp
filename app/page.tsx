import {
  Navbar,
  HeroSection,
  FeaturesSection,
  SetupSection,
  UploadSection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SetupSection />
      <Footer />
    </div>
  );
}
