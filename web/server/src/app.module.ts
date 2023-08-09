import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgLanguageModule } from './prog-language/prog-language.module';

@Module({
  imports: [
    ProgLanguageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
