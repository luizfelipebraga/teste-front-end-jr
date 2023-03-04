import { PromotionCard } from "./PromotionCard";
import { Container, Section } from "./styles";

type AdPromotionProps = {
  name: string;
};

export function AdPromotionSection({ name }: AdPromotionProps) {
  return (
    <Container>
      <Section>
        <PromotionCard name={name} />
        <PromotionCard name={name}/>
      </Section>
    </Container>
  );
}
