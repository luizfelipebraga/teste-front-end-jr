import { Box, Container, Image } from "./styles";
import ShieldCheck from "@assets/ShieldCheck.png";
import Truck from "@assets/Truck.png";
import CreditCard from "@assets/CreditCard.png";

export function TopHeader() {
  return (
    <Container>
      <Box>
        <Image src={ShieldCheck} alt={"Shield Check"} height={20} width={20} />
        <span>
          Compra <strong>100% segura</strong>
        </span>
      </Box>

      <Box>
        <Image src={Truck} alt={"Truck"} height={20} width={20} />
        <span>
          <strong>Frete Grátis</strong> acima de R$ 200
        </span>
      </Box>

      <Box>
        <Image src={CreditCard} alt={"CreditCard"} height={20} width={20} />
        <span>
          <strong>Parcele</strong> suas compras
        </span>
      </Box>
    </Container>
  );
}
