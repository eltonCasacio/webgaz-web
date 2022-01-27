import View from "./View";
import { Produto } from "../../../mocks/Product";

const Details: React.FC = () => (
  <View
    type="details"
    data={Produto}
    title="Produtos"
    subtitle={"Detalhes do Produto"}
  />
);

export default Details;
