import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 10px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  background-color: ${theme.colors.table};
  border-radius: 2px;
  box-shadow: 0 0 5px 0.5px ${theme.colors.border};
  color: ${theme.colors.white};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  box-shadow: 0px 0 0.5px 0.5px rgb(170, 170, 170);
  border-radius: 3px;
  padding: 5px;
  background-color: #e8f0fd;
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
  margin: 10px;
  margin-top: 53px;
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
  outline: none;
  box-shadow: 0px 0 0.5px 0.2px rgb(170, 170, 170);
  border-radius: 3px;
  padding: 5px;
  background-color: #e8f0fd;
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
  align-self: flex-end;
  button {
    margin-left: 5px;
  }
`;

export const List = styled.div`
  max-height: 25vh;
  margin-top: 30px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(170, 170, 170);
  }
`;
