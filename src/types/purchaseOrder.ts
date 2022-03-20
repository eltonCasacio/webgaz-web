export type IsActive = 'SIM' | 'NÃO'
export type FuelType = 'GASOLINA' | 'ETANOL'
export type PaymentType = 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS'
export type DeliveryType = 'RETIRADA' | 'COLACADO'
export type PurchaseOrderStatus = 'PENDENTE' | 'ENTREGUE' | 'CANCELADO'

export type PurchaseOrderType = {
  id: number
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  totalPrice: Number
  qtdLiters: Number
  status?: PurchaseOrderStatus
  fuelStationId: Number
  deliveryDate: string
  shippingName?: string
  shippingCnpj?: string
  shippingPlateNumber?: string
  shippingDriverName?: string
  shippingDriverCnh?: string
  createDate?: string
  
}
