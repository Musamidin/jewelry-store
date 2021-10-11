export interface ILib {
  id?: number;
  title: string;
  status: number;
  libType: number;
  opt?: number;
}
export interface ILibList {
  id: number;
  opt: number;
  title: string;
  status: number;
  sysDate: string;
}
