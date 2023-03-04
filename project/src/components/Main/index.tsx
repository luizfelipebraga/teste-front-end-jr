import { Banner } from "@components/Banner";
import { IconsCarousel } from "@components/IconsCarousel";
import { Layout } from "@components/Layout";
import { AdPromotionSection } from "@components/Sections/AdPromotion";
import { BrandsSection } from "@components/Sections/Brands";
import { ProductSection } from "@components/Sections/Product";

export function MainComponent() {
  return (
    <Layout>
      <Banner />
      <IconsCarousel />
      <ProductSection tabs />
      <AdPromotionSection name="Parceiros" />
      <ProductSection />
      <AdPromotionSection name="Produtos" />
      <BrandsSection />
      <ProductSection />
    </Layout>
  );
}
