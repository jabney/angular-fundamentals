import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
  public currentUser: IUser

  constructor() { }

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'Jimmy',
      lastName: 'James',
      userName: 'jimmy'
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUser
  }
}
