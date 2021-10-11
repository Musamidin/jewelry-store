export interface IAutocomplete {
  id: number;
  fio: string;
}
export interface IAutocompleteResponse {
  data: [];
  status: number;
  message: string;
}
export interface IAutocompleteData {
  id: number;
  userId: number;
  mainListId: number;
  fio: string;
  passportId: string;
  dateOfIssue: string;
  passportIssued: string;
  address: string;
  phone: string;
  email: string;
  sysDate: string;
  lastUpDate: string;
}
export interface ISupplier {
  id: number;
  fio: string;
  address: string;
  phone: string;
  passportId: string;
}
