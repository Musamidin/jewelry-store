export interface ILogListResp {
  status: number;
  message: string;
  data: ILogListData;
}
export interface ILogListData {
  barCode: number;
  buyCurrency: number;
  coefficient: number;
  dateOfArrival: string;
  dateOfSale: string;
  description: string;
  discount: number;
  exchangeRate: number;
  groupBy: number;
  id: number;
  insertion: number;
  mainListId: number;
  priceBuy: number;
  pricePerGram: number;
  priceSale: number;
  priceSold: number;
  punishment: number;
  saleCurrency: number;
  sample: number;
  size: number;
  status: number;
  sysDate: string;
  title: string;
  typeOfDelivery: number;
  userId: number;
  weightGram: number;
}
