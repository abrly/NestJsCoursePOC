import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {

  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  /**
   * Swagger Documentation
   */

  const config = new DocumentBuilder()
  .setTitle('NestJS POC')
  .setDescription('This is just sample demo api')
  .setTermsOfService('www.yahoo.com')
  .setLicense('MIT License','yahoo.com')
  .addServer('http://localhost:3000')
  .setVersion('1.0').build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
