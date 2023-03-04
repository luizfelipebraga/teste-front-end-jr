import { Container } from "./styles";
import { ReactNode } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowPrev from "@assets/arrowPrev.svg";
import ArrowNext from '@assets/arrowNext.svg';

type CarouselProps = {
  children: ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowNext}
        className={className}
        style={{ ...style, width: "2rem", height: "2rem" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowPrev}
        className={className}
        style={{ ...style, width: '2rem', height: '2rem' }}
        onClick={onClick}
      />
    );
  }

  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}
