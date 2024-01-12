import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [PrismaModule, BlogPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
