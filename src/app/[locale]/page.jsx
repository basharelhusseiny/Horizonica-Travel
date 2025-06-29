import { getDictionary } from "@/dictionaries";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import HighlightsSection from "@/components/home/HighlightsSection";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <HeroSection dictionary={dict.hero} />
      <AboutSection />
      <HighlightsSection />
    </main>
  );
}
