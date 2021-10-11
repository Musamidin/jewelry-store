export interface IUser {
  email: string
  password: string
  returnSecureToken?: boolean
}
export interface IAuthResponse {
  token: string
  expToken: string
  refreshToken: string
}
