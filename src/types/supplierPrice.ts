import { FuelType, PaymentType, DeliveryType } from "."

export type SupplierPricesType = {
  id: number
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  purchasePrice: Number
  salesPrice: Number
  supplierId: Number
}