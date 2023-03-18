import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  padding: 1rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

export const BoxInput = styled.div`
  width: 55%;
  background-color: #f7f5f2;

  display: flex;
  align-items: center;
  border-radius: 10px;

  padding: .8rem .8rem .8rem 2rem;

  a {
    color: #9f9f9f;
  }
`;

export const BoxUserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Image = styled.img`
  cursor: pointer;
  object-fit: cover;
`;

export const Input = styled.input`
  background-color: #f7f5f2;
`;