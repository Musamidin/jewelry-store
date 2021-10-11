export interface IResponse {
  status: number;
  message: string;
  data?: [];
  rowCount?: number;
  total?: ITotalSum;
}
export interface IResponseKassa {
  status?: number;
  kgs: number;
  usd: number;
  cash?: ICash[];
  cashData?: ICash;
}
export interface ICash {
  sum: number;
  currency: number;
}
export interface ISetLogs {
  status: number;
  sum: number;
  currency: number;
  description: string;

}
export interface ITotalSum {
  kgsPr: number;
  kgsRh: number;
  usdPr: number;
  usdRh: number;
}
export interface IStartEndCash {
  startCashKgs: number;
  startCashUsd: number;
  endCashKgs: number;
  endCashUsd: number;
  status: number;
  message: string;
}
export interface IUserList {
  email: string;
  id: number;
  name: string;
  normalizedName: string;
  phoneNumber: string;
  roleId: number;
  userName: string;
}
export interface IUserRoles {
  id: number;
  concurrencyStamp: string;
  name: string;
  normalizedName: string;
}
export interface ISetUser {
  userId: number;
  email: string;
  password: string;
  roleId: Array<number>;
}
