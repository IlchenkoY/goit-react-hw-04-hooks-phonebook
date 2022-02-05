import styled from 'styled-components';

const List = styled.ul`
  background-color: #e6d8b4;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-end;
`;

export { List, ListItem };
