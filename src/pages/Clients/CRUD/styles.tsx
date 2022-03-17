import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 13vh 100%;
`;

export const Form = styled.form`
  padding: 15px;
  margin: 37px 0;
  background-color: ${theme.colors.table};
  border-radius: 2px;
  box-shadow: 0 0 5px 0.5px ${theme.colors.border};
`;

export const Input = styled.input`
  border: solid 1px #bdbdbe;
  border-radius: 3px;
  padding: 5px;
`;

type LabelProps = {
  align?: "left" | "right";
};
export const Label = styled.label<LabelProps>`
  ${({ align = "left" }) => css`
    text-align: ${align};
  `}
`;

export const Sintegra = styled.nav`
  text-align: right;
  a {
    border-bottom: solid 1px #00000040;
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    color: ${theme.colors.title};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
`;

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

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 5px;
  }
`;

export const ContentHeader = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;
