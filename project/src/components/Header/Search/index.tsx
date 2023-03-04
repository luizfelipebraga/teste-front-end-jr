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
      <Image src={logo} alt="logo" />

      <BoxInput>
        <Input placeholder="O que você está buscando?" />
        <a href="#">
          <BsSearch size={25}/>
        </a>
      </BoxInput>

      <BoxUserActions>
        <Image src={box} alt="box" />
        <Image src={heart} alt="heart" />
        <Image src={userCircle} alt="userCircle" />
        <Image src={shoppingCart} alt="shoppingCart" />
      </BoxUserActions>
    </Container>
  );
}
