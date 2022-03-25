import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomPriceType, FuelStationType } from "../../../domain/types";
import { getMessageError } from "../../../domain/clientError";
import { toast } from "../../../components/Toast";
import { useUpdateCustomPrice } from "../hooks/customPrice.hook";
import { useListFuelStations } from "../../FuelStation/hooks/fuelstation.hook";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [customPrice, setCustomPrice] = useState({} as CustomPriceType);
  const [fuelStationList, setFuelStationList] = useState<FuelStationType[]>();
  const updateCustomPrice = useUpdateCustomPrice();
  const listFuelStations = useListFuelStations();

  useEffect(() => {
    setCustomPrice(location.state);
  }, [location]);

  useEffect(() => {
    listFuelStations().then((fuelStations) => {
      setFuelStationList(fuelStations);
    })
    .catch(() => {
      toast.error("Error ao carregar os postos.")
    });
  }, []);

  function cancel() {
    navigate("/customPrice");
  }

  function confirm() {
    updateCustomPrice(customPrice)
    .then(() => {
      toast.success("Preço atualizado com sucesso.")
      navigate("/customprice");
    })
    .catch((error) => {
      toast.error(getMessageError(error));
    })
  }   

  function updateFields(name: string, value: string) {
    setCustomPrice({ ...customPrice, [name]: value });
  }

  return (
    <View
      type="update"
      customPrice={customPrice}
      fuelStation={fuelStationList}
      title="Atualizar"
      subtitle={customPrice?.fuelType}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
