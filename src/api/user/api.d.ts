export interface getLoginParam {
   code: string
}
export interface getLoginData {
   access_token: string
   expires_in: string
   refresh_token: string
   token_type: string
}
export interface UserIndexData {
   address: string
   avatarUrl: string
   commission: string
   name: string
   sex: string
   total_commission: string
}