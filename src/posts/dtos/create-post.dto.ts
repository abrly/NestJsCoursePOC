import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator'
import { postStatus } from '../enums/post-status.enum'
import { postType } from '../enums/post-type.enum'
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePostDto {

  @ApiProperty({
    description:"this is title description of post tile",
    example:"this is title"
  })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  title: string

  @ApiProperty({
    description:"this is type of the post page etc etc",
    example:"post"
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType

  @ApiProperty({
    description:"this is slug",
    example:"new-post"
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug should be proper format , small letters and hypens only',
  })
  slug: string

  @ApiProperty({
    description:"this is post status",
    example:"draft"
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus

  @ApiPropertyOptional({
    description:"this is content",
    example:"content"
  })
  @IsString()
  @IsOptional()
  content: string

  @ApiPropertyOptional({
    description:"this is schma json string",
    example:"{\r\n    \"@context\": \"https:\/\/schema.org\",\r\n    \"@type\": \"Person\"\r\n  }"
  })
  @IsOptional()
  @IsJSON()
  schema: string

  @ApiPropertyOptional({
    description:"this is URL",
    example:"www.yahoo.com"
  })
  @IsUrl()
  @IsOptional()
  featuredImageUrl: string

  @ApiPropertyOptional({
    description:"this is date",
    example:"2024-03-16T07:46:32+0000"
  })
  @IsISO8601()
  @IsOptional()
  publishOn: Date

  @ApiPropertyOptional({
    description:"this is tags",
    example:[
        "nestJS",
        "typescript"
    ]
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: ['typescript', 'nestjs']

  // metaOptions: [{ key: 'sidebarEnabled'; value: false }]

 
  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metavalue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example: '{"sidebarEnabled": true,}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto | null;

}
