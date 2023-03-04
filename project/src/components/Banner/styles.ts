import styled from "styled-components";
import Banner from "@assets/banner.png";

export const Container = styled.div`
  width: 100%;
  font-size: 3em;
`;

export const Button = styled.a`
  background: var(--red);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 4rem;
  margin-top: 2rem;
  color: var(--white-text);
  border-radius: 0.3125rem;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Image = styled.div`
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  
  height: 30rem;
  width: 100%;
`;

export const DarkBackground = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121212 100.04%);
  height: 100%;
  width: 100%;
`;

export const Content = styled.main`
  max-width: 700px;
  margin-left: 7rem;
  padding-top: 5rem;

  p {
    color: #fff;
    font-weight: 600;
    font-size: clamp(1.5rem, 4vw, 3rem);
    &:nth-child(2) {
      font-size: clamp(1.5rem, 4vw, 2.25rem);
      margin-bottom: 1rem;
    }
  }
`;
