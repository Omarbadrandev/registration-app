export interface LoginResponse {
  accessToken: string
  roles: any[]
}

// export type Role = "User" | "Editor" | "Admin"

export interface Auth {
  user: string
  pwd: string
  roles: number[]
  accessToken: string
}

export interface LocationState {
  from: {
    pathname: string
  }
}
//TODO: refactor type auth and user are the same
export interface User {
  username: string
  pwd: string
  roles: number[]
  accessToken: string
}
