interface BillItem {
  id: string
  billId: string
  description: string
  unit: string
  quantity: number
  total: number
  createAt: string
  updateAt: string
}

export interface Bill {
  id: string
  customerCode: string
  customerName: string
  customerAddress: string
  installationCode: string
  reference: string
  dueDate: string
  total: number
  accessKey: string
  fileName: string
  createAt: string
  updateAt: string
  items: BillItem[]
}