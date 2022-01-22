import View from "./View";
import { Suppliers } from "../../../mocks/Suppliers";

const Update: React.FC = () => (
  <View
    type="update"
    data={Suppliers}
    title="Fornecedores"
    subtitle={`Atualizar Informações do Fornecedores`}
  />
);

export default Update;
