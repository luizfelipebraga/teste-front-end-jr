import { iconsData } from "@utils/iconCarouselData";
import { IconCard } from "./Card";
import { Container } from "./styles";

export function IconsCarousel() {
  const renderingCarousel = iconsData.map((icon) => {
    return (
      <IconCard
        key={icon.id}
        name={icon.title}
        isFirstIndex={icon.isFirstIndex}
        Icon={icon.icon}
      />
    );
  });

  return <Container>{renderingCarousel}</Container>;
}
