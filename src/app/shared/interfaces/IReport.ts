import {ITotalSum} from './IResponse';

export interface IReport {
  bkgs: IReportList[];
  busd: IReportList[];
  kgstokgs: IReportList[];
  usdtousd: IReportList[];
  kgstousd: IReportList[];
  usdtokgs: IReportList[];
  logKgsIn: ILogsView[];
  logKgsOut: ILogsView[];
  logUsdIn: ILogsView[];
  logUsdOut: ILogsView[];
  total: ITotalSum;
  status: number;
  message: string;
}
export interface IReportList {
  id: number;
  mainListId: number;
  userId: number;
  barCode: number;
  realize: string;
  category: string;
  sample: string;
  supplier: string;
  size: number;
  weightGram: number;
  exchangeRate: number;
  priceBuy: number;
  buyCurrency: number;
  priceSold: number;
  soldCurrency: number;
  dateOfSale: string;
  profit: number;
}
export interface IStorage {
  status: number;
  message: string;
  showcaseKgs: IStorageView[];
  showcaseUsd: IStorageView[];
  storageKgs: IStorageView[];
  storageUsd: IStorageView[];
  statKgs: IStorageView[];
  statUsd: IStorageView[];
}
export interface IStorageView {
  category: string;
  sample: string;
  countitem: number;
  weightgram: number;
  punishment: number;
  pricesold?: number;
  pricebuy?: number;
}
export interface ILogsView {
  currency: number;
  description: string;
  id: number;
  status: number;
  sum: number;
  sysDate: string;
  userId: number;
}
export interface IRealize{
  realizerKgs: IRealizeView[];
  realizerUsd: IRealizeView[];
}
export interface IRealizeView {
  id: number;
  userId: number;
  barCode: number;
  realize: string;
  category: string;
  sample: string;
  supplier: string;
  size: number;
  weightGram: number;
  exchangeRate: number;
  priceBuy: number;
  buyCurrency: number;
  priceSold: number;
  ostatok: number;
  soldCurrency: number;
  dateOfSale: string;
  dateOfArrival: string;
  status: number;
  partPay: IPartPay[];
  expand?: boolean;
}
export interface IPartPay {
  id: number;
  uid: number;
  mainListId: number;
  clientId: number;
  partSum: number;
  status: number;
  currency: number;
  sysDate: string;
}
