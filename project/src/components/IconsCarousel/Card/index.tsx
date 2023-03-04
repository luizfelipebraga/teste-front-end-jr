import { Box, Container, Title } from "./styles";

type IconProps = {
  name: string;
  Icon: string;
  isFirstIndex?: boolean;
};

export function IconCard({ name, Icon, isFirstIndex }: IconProps) {
  return (
    <Container>
      <a href="#">
        <Box isFirstIndex={isFirstIndex}>
          <img src={Icon} alt={"icon"} />
        </Box>
      </a>
      <Title isFirstIndex={isFirstIndex}>{name}</Title>
    </Container>
  );
}
