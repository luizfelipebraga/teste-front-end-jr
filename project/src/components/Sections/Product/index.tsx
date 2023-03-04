import { Carousel } from "@components/Carousel";
import { useQuery } from "@tanstack/react-query";
import { tabsData } from "@utils/tabsData";
import { getProducts } from "@services/api";
import { ProductCard } from "./Card";
import {
  BoxCloseIcon,
  ContentModal,
  DescriptionProduct,
  DetailsProduct,
  ImageProduct,
  InfosModal,
  PriceProduct,
  Section,
  SeeAll,
  Title,
  WrapperTabs,
} from "./styles";
import { Tabs } from "./Tabs";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { convertPrice } from "@utils/convertPrice";

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
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["getProducts"],
    getProducts,
    {
      staleTime: 60 * 1000 * 5,
    }
  );

  const customStyles = {
    overlay: {
      background: " #00000089",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minHeight: "22rem",
      width: "60rem",
      padding: "2rem",
      borderRadio: "2rem",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const productData: ProductDataProps = data;

  function openModal(productId: number) {
    const getProductById = productData?.products[productId];
    const priceFormatted = convertPrice(getProductById.price);
    setProductName(getProductById.productName);
    setPrice(priceFormatted);
    setPhoto(getProductById.photo);
    setDescription(getProductById.descriptionShort);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const renderTabs = tabsData.map((tab) => {
    return (
      <Tabs key={tab.id} isFirstIndex={tab.isFirstIndex} name={tab.title} />
    );
  });

  return (
    <Section>
      <Title>Produtos relacionados</Title>
      {tabs ? (
        <WrapperTabs>{renderTabs}</WrapperTabs>
      ) : (
        <SeeAll>Ver Todos</SeeAll>
      )}
      {isLoading && <span>Loading</span>}
      {isError && <span>Error getting productInfo</span>}
      {isSuccess && !!data && (
        <Carousel>
          {productData?.products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                photo={product.photo}
                productName={product.productName}
                price={product.price}
                handleClick={() => openModal(index)}
              />
            );
          })}
        </Carousel>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById("root") || undefined}
        style={customStyles}
        contentLabel="Modal de Produto"
      >
        <BoxCloseIcon>
          <AiOutlineClose
            onClick={closeModal}
            size={30}
            style={{ cursor: "pointer", textAlign: "right" }}
          />
        </BoxCloseIcon>
        <ContentModal>
          <ImageProduct src={photo} alt={productName} />
          <InfosModal>
            <h2>{productName}</h2>
            <PriceProduct>{price}</PriceProduct>
            <DescriptionProduct>{description}</DescriptionProduct>
            <DetailsProduct href="#">
              Veja mais Detalhe do Produto &gt;{" "}
            </DetailsProduct>
          </InfosModal>
        </ContentModal>
      </Modal>
    </Section>
  );
}
