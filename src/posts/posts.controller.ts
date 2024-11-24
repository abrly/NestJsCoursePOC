import { Body, Controller, Get, Patch, Post } from '@nestjs/common'
import { PostsService } from './posts.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { CreatePostDto } from './dtos/create-post.dto'
import { UpdatePostDto } from './dtos/update-post.dto'

/**
  Posts controller to handle all posts related api calls
*/

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsSevice: PostsService) {}

  /**
  get post api calls
*/
  @Get()
  @ApiOperation({
    summary: 'get all the posts',
  })
  @ApiResponse({
    status: 200,
    description: 'Posts fetched successfully',
  })
  getPosts() {
    return this.postsSevice.GetPosts()
  }


    /**
  post api calls
*/
  @Post()
  @ApiOperation({
    summary:"post new post info"
  })
  @ApiResponse({
    status:201,
    description:"Posts added successfully"
  })
  createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }


   /**
  update api calls
*/
  @Patch()
  @ApiOperation({
    summary:"update post info"
  })
  @ApiResponse({
    status:200,
    description:"Posts updated successfully"
  })
  updatePost(@Body() updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }
}
