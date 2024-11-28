import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto'
import { Injectable } from '@nestjs/common'
import { MetaOption } from './meta-option.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Injecting metaOptions repository
     */
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>
  ) {}

  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaOptionsRepository.create(
      createPostMetaOptionsDto
    )

    if (metaOption == null) {
      console.log('null')
    }

    return await this.metaOptionsRepository.save(metaOption)
  }
}
