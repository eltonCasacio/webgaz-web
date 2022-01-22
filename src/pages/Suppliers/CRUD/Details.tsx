import View from "./View";
import { Suppliers } from "../../../mocks/Suppliers";

const Details: React.FC = () => (
  <View
    type="details"
    data={Suppliers}
    title="Fornecedores"
    subtitle={"Detalhes do Fornecedores"}
  />
);

export default Details;
