import styled from "styled-components";

type LiProps = {
  red?: boolean;
};

export const Ul = styled.div`
  width: 100%;
  text-align: center;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 0px;

  padding: 0.8rem 1.5rem 0.5rem 1.5rem;
`;

export const Li = styled.li<LiProps>`
  list-style: none;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-out;
    &:hover {
      span {
        color: var(--primary-color);
      }
    }
  }
  span {
    line-height: 1rem;
    font-size: 1rem;
    color: ${({ red }) => (red ? "var(--primary-color)" : "#3B3B3B")};
    text-transform: uppercase;
    margin: 0 2rem;
    font-weight: ${({ red }) => (red ? "700" : "400")};
  }
`;
