import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 8px 10px;
  margin-top: 10px;
  margin-left: auto;
  background-color: #f44336;
  color: white;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-2px);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
