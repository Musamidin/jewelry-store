export interface IMainListView {
  buycurrency: number;
  dateofarrival: string;
  dateofsale: string;
  description: string;
  dlvname: string;
  dlvoptid: number;
  id: number;
  barcode: number;
  isertionname: string;
  pricebuy: number;
  pricesale: number;
  productgroupname: string;
  salecurrency: number;
  soldcurrency: number;
  pricesold: number;
  samplename: number;
  size?: number;
  punishment?: number;
  status: number;
  weightgram: number;
  debt: number;
}
export  interface IMainListViewMod {
  status: number;
  message: string;
  countRows: number;
  data: [];
}
export interface IMainListViewMin {
  id: number;
  soldCurr: number;
  priceSold: number;
  debt: number;
}
