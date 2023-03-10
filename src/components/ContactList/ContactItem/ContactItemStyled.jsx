import styled from '@emotion/styled';

export const ContactItemStyled = styled.li`
  margin-bottom: 10px;
`;

export const ContactNameItemStyled = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

export const ButtonItemStyled = styled.button`
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
  &:hover,
  &:focus {
    background-color: tomato;
    color: white;
    outline: 0;
  }
`;

export default ContactItemStyled;
