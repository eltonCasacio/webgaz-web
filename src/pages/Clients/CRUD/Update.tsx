import View from "./View";
import { User } from "../../../mocks/User";

const Update: React.FC = () => (
  <View
    type="update"
    data={User}
    title="Atualizar"
    subtitle={` Dados do Cliente ${User.name}`}
  />
);

export default Update;
