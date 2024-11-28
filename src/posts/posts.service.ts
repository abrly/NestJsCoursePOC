import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Post } from './post.entity'
import { MetaOption } from 'src/meta-options/meta-option.entity'
import { UsersService } from 'src/users/users.service'
import { CreatePostDto } from './dtos/create-post.dto'
import { catchError } from 'rxjs'

/**
  Posts service to handle all posts related api calls
*/
@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */

    private readonly usersService: UsersService,

    /**
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>
  ) {}

  public async create(createPostDto: CreatePostDto) {

    /*
    
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions)
    }

    
    const post = this.postsRepository.create({
      ...createPostDto,
    })

    // If meta options exist add them to post
    if (metaOptions) {
      post.metaOptions = metaOptions
    } */

    try{

      const post = this.postsRepository.create({
        ...createPostDto,
      });
  
      return await this.postsRepository.save(post);

    }catch(err){

      console.log('what hga');
      console.log(err);

    }
      

    


  }

  /**
  Get Posts service to handle all posts related api calls
*/
  

  public GetPosts(userId: number) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }


}
