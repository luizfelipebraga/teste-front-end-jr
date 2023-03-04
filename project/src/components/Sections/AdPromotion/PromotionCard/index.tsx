import {
  Button,
  Container,
  Description,
  BackgroundImage,
  Title,
  Content,
} from "./styles";

type PromotionCardProps = {
  name: string;
}

export function PromotionCard({ name }: PromotionCardProps) {
  return (
    <Container>
      <BackgroundImage>
        <Content>
          <Title>{name}</Title>

          <Description>Lorem ipsum dolor sit amet, consectetur</Description>

          <Button>Confira</Button>
        </Content>
      </BackgroundImage>
    </Container>
  );
}
