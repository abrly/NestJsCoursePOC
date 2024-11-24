import { Injectable } from '@nestjs/common'

/**
  Posts service to handle all posts related api calls
*/
@Injectable()
export class PostsService {


  /**
  Get Posts service to handle all posts related api calls
*/
  GetPosts() {
    return [
      {
        postId: '1',
        content: '1 post',
      },
      {
        postId: '2',
        content: '2nd post',
      },
    ]
  }
}
