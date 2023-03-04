import styled from "styled-components";

export const Container = styled.div`
  max-width: 22rem;
  height: 100%;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 0.625rem;

  margin-left: 10rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 1.1875rem;

    text-align: center;

    color: #3f3f40;
  }
`;

export const Title = styled.h3`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.625rem;
  /* or 144% */

  text-transform: uppercase;

  color: #3f3f40;

  strong {
    font-weight: 700;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #2a2a2a;
  padding: .7rem;
  border-radius: 4px;

  &:focus {
    border: 1px solid #2a2a2a;
  }
`;

export const Button = styled.a`
  background: var(--primary-color);
  font-size: 1.125rem;
  font-weight: 600;
  padding: .7rem 1.2rem;
  color: var(--white-text);
  border-radius: 0.3125rem;
  transition: filter 0.2s ease-in-out 0s;
`;
