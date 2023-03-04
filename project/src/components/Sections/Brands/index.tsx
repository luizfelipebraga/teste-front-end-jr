import { Carousel } from "@components/Carousel";
import { AvatarBrand } from "./Avatar";
import { Container, Title } from "./styles";

export function BrandsSection() {
  return (
    <Container>
      <Title>Navegue por marcas</Title>

      <Carousel>
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
        <AvatarBrand />
      </Carousel>
    </Container>
  );
}
