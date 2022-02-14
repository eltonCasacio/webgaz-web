import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { Client } from "../../../mocks/Client";
import { useEffect } from "react";
import { useState } from "react";

export type ClientProps = typeof Client;

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState();

  function cancel() {
    navigate("/clients");
  }

  function confirm() {}

  useEffect(() => {
    console.log("Merda", location.state);
    setClient(location.state)

    // if(state){
    //   setClient(JSON.parse(state));
    // }
  }, []);

  return (
    <View
      type="details"
      client={client}
      title="Detalhes"
      subtitle={Client.name}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Details;
