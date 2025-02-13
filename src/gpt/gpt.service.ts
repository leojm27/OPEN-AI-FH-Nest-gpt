import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use.cases';
import { OrthographyDto } from './dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {

    private readonly openai = new OpenAI({
        apiKey: process.env.API_KEY_OPEN_AI
    })

    // Solo va a llamar casos de uso
    async orthographyCheck(orthographyDto: OrthographyDto) {
        return await orthographyCheckUseCase(this.openai, {
            prompt: orthographyDto.prompt
        });
    }


}
