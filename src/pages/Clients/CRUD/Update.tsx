import View from "./View";
import { Client } from "../../../mocks/Client";

const Update: React.FC = () => (
  <View
    type="update"
    data={Client}
    title="Atualizar"
    subtitle={` Dados do Cliente ${Client.name}`}
  />
);

export default Update;
