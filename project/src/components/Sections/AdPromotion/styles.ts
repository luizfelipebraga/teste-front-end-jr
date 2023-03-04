import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80rem;
  margin-inline: auto;
`;

export const Section = styled.section`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 8rem;
  position: relative;
`;