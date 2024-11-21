import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getUsers() {
    return 'Hello Users';
  }
}
