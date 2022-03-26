import { DeliveryType, FuelType, PaymentType, IsActive } from ".";

export interface CustomPriceType {
  id: number
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  price: Number
  isActive?: IsActive
  fuelStationId: Number
  createDate: string
}