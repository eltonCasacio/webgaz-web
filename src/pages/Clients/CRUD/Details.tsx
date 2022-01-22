import View from "./View";
import { User } from "../../../mocks/User";

const Details: React.FC = () => (
  <View type="details" data={User} title="Detalhes" subtitle={User.name} />
);

export default Details;
