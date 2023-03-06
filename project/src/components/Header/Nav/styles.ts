import styled from "styled-components";

type LiProps = {
  red?: boolean;
};

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(57, 48, 19, 0.12);
  border-radius: 0px;

  padding: 0.8rem 1rem 0.5rem 1rem;
`;

export const Li = styled.li<LiProps>`
  list-style: none;

  a {
    svg {
      margin-right: -1rem;
    }
    transition: all 0.2s ease-out;

    &:hover {
      path {
        stroke: var(--primary-color);
      }

      span {
        color: var(--primary-color);
      }
    }
    &:last-child {
      display: flex;
      align-items: center;
    }
  }
  span {
    line-height: 18px;
    font-size: 0.75rem;
    color: ${({ red }) => (red ? "var(--primary-color)" : "var(--text-gray)")};
    text-transform: uppercase;
    margin: 0 2rem;
    font-weight: 600;
  }
`;
