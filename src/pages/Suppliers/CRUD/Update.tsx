import View from "./View";
import { Supplier } from "../../../mocks/Suppliers";

const Update: React.FC = () => (
  <View
    type="update"
    data={Supplier}
    title="Fornecedores"
    subtitle={`Atualizar Informações do Fornecedores`}
  />
);

export default Update;
