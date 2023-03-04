import styled from "styled-components";

export const Section = styled.section`
  width: 80rem;
  max-height: 50rem;
  margin-inline: auto;

  padding-top: 3rem;

  .ReactModal__Overlay .ReactModal__Overlay--after-open {
    background: #000;
  }
`;

export const WrapperTabs = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: var(--primary-color);
  white-space: nowrap;
  font-size: 1.875rem;
  line-height: 2.8125rem;

  position: relative;

  &:before {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    right: 10px;
    width: 500px;
    height: 1px;
    background-color: rgb(104, 104, 104);
  }

  &:after {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    left: 15px;
    width: 500px;
    height: 1px;
    background-color: rgb(104, 104, 104);
  }
`;

export const SeeAll = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const BoxCloseIcon = styled.div`
  width: 100%;
  text-align: right;
`;

export const ContentModal = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImageProduct = styled.img`
  height: 18rem;
`;

export const InfosModal = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  h2 {
    color: #041e50;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
`;

export const PriceProduct = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #041e50;
`;

export const DescriptionProduct = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.05em;

  color: #041e50;
`;

export const DetailsProduct = styled.a`
  text-decoration: underline;
  color: #041e50;
`;
