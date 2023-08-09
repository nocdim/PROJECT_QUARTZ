import { Module } from '@nestjs/common';
import { ProgLanguageController } from './prog-language.controller';
import { ProgLanguageService } from './prog-language.service';

@Module({
  controllers: [ProgLanguageController],
  providers: [ProgLanguageService]
})
export class ProgLanguageModule {}
