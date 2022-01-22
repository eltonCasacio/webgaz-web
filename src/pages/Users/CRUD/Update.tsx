import View from "./View";
import { User } from "../../../mocks/User";

const Update: React.FC = () => (
  <View
    type="update"
    data={User}
    title="User"
    subtitle={`Atualizar Informações do Usuário`}
  />
);

export default Update;
