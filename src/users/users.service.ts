import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { Repository } from 'typeorm/repository/Repository'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dtos/create-user.dto'


@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User repository into UsersService
     * */
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  public getUsers() {
    return 'Hello Users'
  }

  public findOneById(userId: number) {    
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  public async createUser(createUserDto: CreateUserDto) {
    // Check if user with email exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    })

    if (existingUser == null) {
      console.log('user exists!')
    }

    /**
     * Handle exceptions if user exists later
     * */

    // Try to create a new user
    // - Handle Exceptions Later
    let newUser = this.usersRepository.create(createUserDto)
    newUser = await this.usersRepository.save(newUser)

    // Create the user
    return newUser
  }
}
