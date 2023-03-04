import { NavBar } from "./Nav";
import { SearchComponent } from "./Search";
import { Container } from "./styles";
import { TopHeader } from "./TopHeader";

export function Header() {
  return (
    <Container>
      <TopHeader />
      <SearchComponent />
      <NavBar red/>
    </Container>
  );
}
