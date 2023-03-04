import { convertPrice } from "@utils/convertPrice";
import { Button, Container, Description, Image, Price } from "./styles";

type ProductProps = {
  productName: string;
  photo: string;
  price: number;
};

export function ProductCard({ productName, photo, price }: ProductProps) {
  const priceFormated = convertPrice(price);
  const halfpriceFormated = convertPrice(price/2);

  return (
    <Container>
      <Image src={photo} alt="phone photo" />
      <Description>{productName}</Description>
      <Price> {priceFormated}</Price>
      <p>ou 2x de {halfpriceFormated} sem juros</p>
      <Button>Comprar</Button>
    </Container>
  );
}
