import {  Button, Container, Content, DarkBackground, Image } from "./styles";

export function Banner() {
  return (
    <Container>
        <Image>
          <DarkBackground>
            <Content>
              <p>Venha conhecer nossas promoções</p>
              <p>50% Off nos produtos</p>
              <Button href="#">Ver produto</Button>
            </Content>
          </DarkBackground>
        </Image>
    </Container>
  );
}
