export type FuelType = 'GASOLINA' | 'ETANOL'
export type PaymentType = 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS'
export type DeliveryType = 'RETIRADA' | 'COLACADO'

export type SupplierPricesModel = {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  purchasePrice: Number
  salesPrice: Number
  supplierId: Number
}