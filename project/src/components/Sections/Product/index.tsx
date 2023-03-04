import { Carousel } from "@components/Glider";
import { useQuery } from "@tanstack/react-query";
import { tabsData } from "@utils/tabsData";
import { getProducts } from "src/services/api";
import { ProductCard } from "./Card";
import { Section, SeeAll, Title, WrapperTabs } from "./styles";
import { Tabs } from "./Tabs";

type ProductProps = {
  tabs?: boolean;
};

type DataProps = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProductDataProps = {
  products: DataProps[];
};

export function ProductSection({ tabs }: ProductProps) {
  const renderTabs = tabsData.map((tab) => {
    return (
      <Tabs key={tab.id} isFirstIndex={tab.isFirstIndex} name={tab.title} />
    );
  });

  const { isLoading, isError, isSuccess, data } = useQuery<ProductDataProps>(
    ["getProducts"],
    getProducts,
    {
      staleTime: 60 * 1000 * 5,
    }
  );


  return (
    <Section>
      <Title>Produtos relacionados</Title>
      {tabs ? (
        <WrapperTabs>{renderTabs}</WrapperTabs>
      ) : (
        <SeeAll>Ver Todos</SeeAll>
      )}
      {isLoading && <span>Loading</span>}
      {!!data && (
        <Carousel>
          {data.products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                photo={product.photo}
                productName={product.productName}
                price={product.price}
              />
            );
          })}
        </Carousel>
      )}
    </Section>
  );
}
