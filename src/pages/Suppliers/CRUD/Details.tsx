import View from "./View";
import { Supplier } from "../../../mocks/Suppliers";

const Details: React.FC = () => (
  <View
    type="details"
    data={Supplier}
    title="Fornecedores"
    subtitle={"Detalhes do Fornecedores"}
  />
);

export default Details;
