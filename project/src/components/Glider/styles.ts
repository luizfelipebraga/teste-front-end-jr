import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .slick-next {
    right: -40px;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next:before {
    color: black;
  }

  .slick-prev:before {
    color: black;
  }
`;