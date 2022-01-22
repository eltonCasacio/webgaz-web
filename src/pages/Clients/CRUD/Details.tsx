import View from "./View";
import { Client } from "../../../mocks/Client";

const Details: React.FC = () => (
  <View type="details" data={Client} title="Detalhes" subtitle={Client.name} />
);

export default Details;
