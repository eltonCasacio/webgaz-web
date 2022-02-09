import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;
export const Form = styled.form`
  position: relative;
  height: 85vh;
`;
export const Input = styled.input`
  border: solid 1px #bdbdbe;
  border-radius: 3px;
  padding: 5px;
`;
export const Label = styled.label``;
export const TextArea = styled.textarea``;

export const Line = styled.div<{ cols: string }>`
  ${({ cols }) => css`
    display: grid;
    grid-template-columns: ${cols};
    gap: 20px;
    margin-bottom: 20px;
  `}
`;
export const LineItem = styled.div`
  display: flex;
  flex-direction: column;
`;
