import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 8rem;
  width: 100%;
  min-height: 40vh;
  background: #2a2a2a;
`;

export const Box = styled.div`
  display: flex;
  gap: 5rem;

  max-width: 80rem;
  margin-inline: auto;

  padding: 5rem 0 5rem 5rem;
`;

export const About = styled.div`
  ul {
    cursor: pointer;
    list-style: none;
    li {
      font-weight: 300;
      font-size: 12px;
      line-height: 32px;
      /* or 267% */

      text-transform: uppercase;

      color: #ffffff;

      &.f-title {
        color: #ffffff;
        font-weight: 700;
        font-size: 0.8125rem;
        line-height: 1.25rem;
        margin-bottom: 32px;
        list-style: none;
      }
    }
  }
`;

export const WrapperImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  max-width: 11rem;
`;