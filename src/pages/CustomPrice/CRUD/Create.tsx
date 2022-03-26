import { useEffect, useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { CustomPriceType, FuelStationType } from "../../../domain/types";
import { useCreateCustomPrice } from "../hooks/customPrice.hook";
import { getMessageError } from "../../../domain/clientError";
import { toast } from "../../../components/Toast";
import { useListFuelStations } from "../../FuelStation/hooks/fuelstation.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [customPrice, setCustomPrice] = useState({} as CustomPriceType);
  const [fuelStationList, setFuelStationList] = useState<FuelStationType[]>();
  const createCustomPrice = useCreateCustomPrice();
  const listFuelStations = useListFuelStations();

  useEffect(() => {
    listFuelStations().then((fuelStations) => {
      setFuelStationList(fuelStations);
    })
    .catch(() => {
      toast.error("Error ao carregar os postos.")
    });
  }, []);


  function cancel() {
    navigate("/customprice");
  }

  function confirm() {
    console.log('customPrice', customPrice);
    createCustomPrice(customPrice)
    .then(() => {
      toast.success("Preço cadastrado com sucesso.")
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
      fuelStation={fuelStationList}
      type="create"
      title="Dashboard - Preço Promocional"
      subtitle="Cadastro de Preço Promocional"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
