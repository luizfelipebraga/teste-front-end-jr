import styled from 'styled-components';

export const Section = styled.section`
  max-width: 80rem;
  min-height: 50rem;
  margin-inline: auto;

  padding: 3rem 0;
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
  
  color: var(--red);
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

  font-weight: 700;
`;