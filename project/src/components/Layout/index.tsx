import { ReactNode } from "react";
import { Header } from "@components/Header";
import { Container, Content } from "./styles";
import { Footer } from "@components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>

      <Footer />
    </Container>
  );
}
