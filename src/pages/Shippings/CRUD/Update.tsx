import View from "./View";
import { Shipping } from "../../../mocks/Shipping";

const Update: React.FC = () => (
  <View
    type="update"
    data={Shipping}
    title="Transportadora"
    subtitle={`Atualizar Informações do Transportadora`}
  />
);

export default Update;
