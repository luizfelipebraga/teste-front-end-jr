import { NavBar } from "./Nav";
import { Container } from "./styles";
import { TopHeader } from "./TopHeader";

export function Header() {
  return (
    <Container>
      <TopHeader />
      <NavBar />
    </Container>
  );
}
