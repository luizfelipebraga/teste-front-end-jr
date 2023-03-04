import styled from "styled-components";

type TitleProps = {
  isFirstIndex?: boolean;
};

export const Title = styled.span<TitleProps>`
  margin-top: 1rem;
  font-weight: 500;
  color: ${({ isFirstIndex }) => (isFirstIndex ? "var(--red)" : "#4E4E4E")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    a {
      filter: brightness(1.2);
    }

    span {
      color: var(--red);
    }
  }

  img {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const Box = styled.div<TitleProps>`
  background: ${({ isFirstIndex }) => (isFirstIndex ? "#fff" : "#F4F4F4")};
  padding: 2rem;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;
