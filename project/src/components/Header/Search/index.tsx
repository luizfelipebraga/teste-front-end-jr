import { BoxInput, BoxUserActions, Container, Image, Input } from "./styles";
import logo from "@assets/logo-vtex.png";
import heart from "@assets/heart.png";
import box from "@assets/BoxVector.png";
import userCircle from "@assets/UserCircle.png";
import shoppingCart from "@assets/ShoppingCart.png";
import { BsSearch } from "react-icons/bs";

export function SearchComponent() {
  return (
    <Container>
      <Image src={logo} alt="logo" width={139} height={51} />

      <BoxInput>
        <Input placeholder="O que você está buscando?" />
        <a href="#" aria-label="Search for a product">
          <BsSearch size={25} />
        </a>
      </BoxInput>

      <BoxUserActions>
        <Image src={box} alt="box" width={26} height={26} />
        <Image src={heart} alt="heart" width={28} height={24} />
        <Image src={userCircle} alt="userCircle" width={28} height={24} />
        <Image src={shoppingCart} alt="shoppingCart" width={32} height={32} />
      </BoxUserActions>
    </Container>
  );
}
