import styled from 'styled-components';
import ParterBanner from '@assets/partnerBanner.jpg';

export const Container = styled.div`
  width: 100%;
  border-radius: 0px 0px 20px 20px;
`;

export const BackgroundImage = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100.04%
    ),
    url(${ParterBanner});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  border-radius: 1.25rem;
  padding: 2rem 0;
`;

export const Content = styled.main`
  margin: 1rem 2rem;
  max-width: 20rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  /* identical to box height */

  /* WHITE */

  color: #ffffff;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0 2rem 0;
  color: #ffffff;
`;

export const Button = styled.a`
  color: #fff;
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-color);
  border-radius: 10px;

  font-weight: 900;
  font-size: 1rem;
  line-height: 1.5rem;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;