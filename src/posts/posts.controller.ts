import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
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
  @Get('/:userId?')
  @ApiOperation({
    summary: 'get all the posts',
  })
  @ApiResponse({
    status: 200,
    description: 'Posts fetched successfully',
  })
  getPosts(@Param('userId') userId: string) {
    return this.postsSevice.GetPosts(parseInt(userId));
  }


  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsSevice.create(createPostDto);
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
