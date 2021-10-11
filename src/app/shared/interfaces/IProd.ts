export interface IProd {
  id?: number;
  title: string;
  status: number;
}
export interface ISaleProd {
  mid: number;
  clientData: ISaleProdClientData;
  priceSold: number;
  partPay: number;
  saleCurrency: number;
  soldCurrency: number;
  status: number;
}
export interface ISaleProdClientData {
  cid: number;
  address: string;
  dateOfIssue: string;
  firstLastName: string;
  passportId: string;
  passportIssued: string;
  phone: string;
}
export interface ISetProdResponse {
  data: [];
  status: number;
  message: string;
  barcode: number;
}
export interface ILogs {
  id: number;
  userId: number;
  sum: number;
  currency: number;
  description?: string;
  status: number;
  sysDate: string;
}
