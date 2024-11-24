import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description:"get users with a specific id",
    example:224
  })
  @IsOptional()
  @IsInt()
  @Type(()=>Number)
  id?: number;
}
