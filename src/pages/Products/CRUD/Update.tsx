import View from "./View";
import { Produto } from "../../../mocks/Product";

const Update: React.FC = () => (
  <View
    type="update"
    data={Produto}
    title="Produto"
    subtitle={`Atualizar Informações do Produto`}
  />
);

export default Update;
