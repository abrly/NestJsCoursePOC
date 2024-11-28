/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'
import { Post } from './post.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MetaOption } from 'src/meta-options/meta-option.entity'
import { MetaOptionsModule } from 'src/meta-options/meta-options.module'
import { UsersModule } from 'src/users/users.module'

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([Post,MetaOption]),MetaOptionsModule,UsersModule],
})
export class PostsModule {}
