import { About, Box, Container, WrapperImages } from "./styles";
import VisaIcon from "@assets/visa.png";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <Container>
      <Box>
        <About>
          <ul>
            <li className="f-title">Sobre nós</li>
            <li>Conheça</li>
            <li>Como comprar</li>
            <li>Indicação e Desconto</li>
          </ul>
        </About>

        <About>
          <ul>
            <li className="f-title">Informações Úteis</li>
            <li>Fale conosco</li>
            <li>Dúvidas</li>
            <li>Prazos de Entrega</li>
            <li>Formas de pagamento</li>
            <li>Política de Privacidade</li>
          </ul>
        </About>

        <About>
          <ul>
            <li className="f-title">Formas de Pagamento</li>
            <WrapperImages>
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
              <img src={VisaIcon} alt="visa icon" />
            </WrapperImages>
          </ul>
        </About>
        <Newsletter />
      </Box>
    </Container>
  );
}
