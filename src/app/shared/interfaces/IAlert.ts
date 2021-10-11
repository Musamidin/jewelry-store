export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface IAlert {
  type: AlertType;
  text: string;
}
