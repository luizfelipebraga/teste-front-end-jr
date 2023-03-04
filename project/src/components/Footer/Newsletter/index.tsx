import { Title, Container, BoxInput, Input, Button } from "./styles";

export function Newsletter() {
  return (
    <Container>
      <Title>
        cadastre-se e receba nossas <strong>novidades e promoções</strong>
      </Title>

      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <BoxInput>
        <Input placeholder="SEU E-MAIL" />
        <Button>OK</Button>
      </BoxInput>
    </Container>
  );
}
