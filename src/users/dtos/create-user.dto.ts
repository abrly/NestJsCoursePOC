import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {


  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10, { message: 'please enter max length 10' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(10)
  lastName: string;


  @IsEmail()
  @IsNotEmpty()
  email: string;


  @IsString()
  @IsNotEmpty()
  password: string;
}
