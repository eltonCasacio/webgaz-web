import View from "./View";
import { User } from "../../../mocks/User";

const Details: React.FC = () => (
  <View
    type="details"
    data={User}
    title="Users"
    subtitle={"Detalhes do User"}
  />
);

export default Details;
