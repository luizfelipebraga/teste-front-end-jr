import { formatPrice } from "@utils/formatPrice";
import {
  Button,
  Container,
  Content,
  Description,
  FreeShipping,
  Image,
  InstallmentsPrice,
  OldPrice,
  Price,
} from "./styles";

type ProductProps = {
  productName: string;
  photo: string;
  price: number;
  handleClick: () => void;
};

export function ProductCard({
  productName,
  photo,
  price,
  handleClick,
}: ProductProps) {
  const oldPrice = formatPrice(price + 200);
  const priceFormated = formatPrice(price);
  const halfPriceFormated = formatPrice(price / 2);

  const installmentPrice = `ou 2x de ${halfPriceFormated} sem juros`;
  const shipping = "Frete Grátis";

  return (
    <Container onClick={handleClick}>
      <Image src={photo} alt="phone photo" />
      <Description>{productName}</Description>
      <Content>
        <OldPrice>{oldPrice}</OldPrice>
        <Price> {priceFormated}</Price>
        <InstallmentsPrice>{installmentPrice}</InstallmentsPrice>
        <FreeShipping>{shipping}</FreeShipping>
      </Content>
      <Button onClick={handleClick}>Comprar</Button>
    </Container>
  );
}
