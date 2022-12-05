import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  list-style: none;
`;

export const ContactListItemStyle = styled.li`
  margin-bottom: 15px;
  display: flex;
`;

export const DeleteButton = styled.button`
  margin-left: 15px;
  background-color: lightcoral;
  border-style: none;
  border-radius: 10px;
  :hover {
    background-color: orange;
  }
`;
