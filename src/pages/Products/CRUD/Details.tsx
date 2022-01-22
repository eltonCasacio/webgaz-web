import View from "./View";
import { Produto } from "../../../mocks/Produto";

const Details: React.FC = () => (
  <View
    type="details"
    data={Produto}
    title="Produtos"
    subtitle={"Detalhes do Produto"}
  />
);

export default Details;
