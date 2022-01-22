import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button } from "../../components";

type ViewProps = {
  handleDelete?: () => void;
  handleDetails?: () => void;
  handleUpdate?: () => void;
} & HeaderProps;

const View: React.FC<ViewProps> = ({
  title,
  subtitle,
  handleDelete,
  handleDetails,
  handleUpdate,
}) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
    <Button children="Detalhes" size="small" callback={handleDetails} />
    <Button children="Alterar" size="small" callback={handleUpdate} />
    <Button children="Novo" size="small" callback={handleUpdate} />
    <Button children="Excluir" size="small" callback={handleDelete} />
  </S.Wrapper>
);

export default View;
