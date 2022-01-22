import View from "./View";
import { Shipping } from "../../../mocks/Shipping";

const Details: React.FC = () => (
  <View
    type="details"
    data={Shipping}
    title="Transportadora"
    subtitle={"Detalhes do Transportadora"}
  />
);

export default Details;
