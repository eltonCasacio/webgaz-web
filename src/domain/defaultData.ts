import { DeliveryType, FuelType, IsActive, PaymentType } from "./types";

export const FuelTypeList: FuelType[] = [
  "ETANOL",
  "GASOLINA"
];

export const PaymentTypeList: PaymentType[] = [
  "AVISTA",
  "ANTECIPADO",
  "7DIAS",
  "10DIAS"
];

export const DeliveryTypeList: DeliveryType[] = [
  "COLOCADO",
  "RETIRADA"
];

export const IsActiveList: IsActive[] = [
  "NÃO",
  "SIM"
]