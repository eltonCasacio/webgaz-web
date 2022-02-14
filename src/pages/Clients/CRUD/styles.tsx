import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  position: relative;
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
  margin-bottom: 35px;
  a {
    font-size: ${theme.font.sizes.xxsmall};
    text-decoration: none;
    color: ${theme.colors.black};
  }
`;

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

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 5px;
  }
`;
