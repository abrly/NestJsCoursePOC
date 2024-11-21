import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
  ValidationPipe
} from '@nestjs/common';



import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe('10'), ParseIntPipe)
    limit: number | undefined,
    @Query('page', new DefaultValuePipe('1'), ParseIntPipe)
    page: number | undefined,
  ) {

    console.log(getUsersParamDto);

    console.log(typeof getUsersParamDto);

    console.log(limit);

    console.log(page);

    return 'this is users get request';
  }



  @Post()
  public addUser(@Body() createUserDto: CreateUserDto) {

    console.log(createUserDto instanceof CreateUserDto);
    console.log(createUserDto);
    return 'this is users post request';

  }

  @Delete()
  public deleteUser() {
    return 'this is users post delete request';
  }

  @Put()
  public updateUser() {
    return 'this is users post put request';
  }

  @Patch()
  public updateUserInfo(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'this is users post patch request';
  }
}