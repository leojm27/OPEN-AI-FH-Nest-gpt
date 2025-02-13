import { Module } from '@nestjs/common';
import { GptService } from './gpt.service';
import { GptController } from './gpt.controller';


// Agrupa la logica relacionada al modulo.
@Module({
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
