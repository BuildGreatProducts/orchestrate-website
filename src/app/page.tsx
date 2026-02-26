import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FeatureGrid } from "@/components/sections/FeatureGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <FeatureGrid />
    </>
  );
}
