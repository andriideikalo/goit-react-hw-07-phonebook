import styled from '@emotion/styled';

export const InputFilterStyled = styled.input`
  display: block;
  margin-bottom: 20px;
  &:hover,
  &:focus,
  &:active,
  &:focus-visible {
    outline: 0;
    border-color: aquamarine;
  }
`;

export const FilterLabelStyled = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export default InputFilterStyled;
