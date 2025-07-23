import { HeroSection, HomepageCards, QuoteSection } from "./(components)";
import { useConfigQuery } from "@/hooks/api";

export const DefaultLandingPage = () => {
  const { data: config, isLoading } = useConfigQuery();

  if (isLoading || !config) return null;

  return (
    <>
      <HeroSection />
      <HomepageCards />
      <QuoteSection />
    </>
  );
};
