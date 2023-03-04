import styled from 'styled-components';

export const Container = styled.div`
  min-height: 28rem;
  padding: 1rem;

  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.p``;

export const Price = styled.span`
`;

export const Button = styled.a`
  padding: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--red);

  color: #ffffff;
`;