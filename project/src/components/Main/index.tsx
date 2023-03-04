import { Banner } from "@components/Banner";
import { IconsCarousel } from "@components/IconsCarousel";
import { Layout } from "@components/Layout";
import { ProductSection } from "@components/Sections/Product";

export function MainComponent() {
  return (
    <Layout>
      <Banner />
      <IconsCarousel />
      <ProductSection tabs />
      <ProductSection />
    </Layout>
  );
}
