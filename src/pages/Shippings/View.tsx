import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch } from "../../components";

type ViewProps = {
  handleDelete?: () => void;
  handleDetails?: () => void;
  handleUpdate?: () => void;
  InputSearchChange: any;
  filter: string;
} & HeaderProps;

const View: React.FC<ViewProps> = ({
  title,
  subtitle,
  handleDelete,
  handleDetails,
  handleUpdate,
  InputSearchChange,
  filter,
}) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
    <S.Content>
      <S.ContentHeader>
        <InputSearch callback={InputSearchChange} filter={filter} />
      </S.ContentHeader>
      <Button children="Novo" size="small" callback={handleUpdate} />
    </S.Content>
  </S.Wrapper>
);

export default View;
