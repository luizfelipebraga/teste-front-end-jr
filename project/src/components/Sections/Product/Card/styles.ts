import styled from "styled-components";

export const Container = styled.div`
  min-height: 30rem;
  height: 30rem;

  max-width: 18rem;
  padding: 1rem;

  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1.5rem;
  cursor: pointer;

  &:hover {
    img {
      transform: translateY(-5px);
    }
  }
`;

export const Image = styled.img`
  width: 15rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Content = styled.div`
  p {
    margin: .2rem 0;
  }

  span {
    margin: .3rem 0;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  color: #3f3f40;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #3f3f40;
`;

export const InstallmentsPrice = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;

  color: #3f3f40;
`;

export const OldPrice = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  text-decoration-line: line-through;

  color: #808080;
`;

export const FreeShipping = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;

  color: var(--primary-color);
`;

export const Button = styled.a`
  padding: 0.8rem 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--primary-color);
  border-radius: 4px;
  transition: filter .2s ease-out;
  color: #ffffff;

  &:hover {
    filter: brightness(.85); 
  }
`;
