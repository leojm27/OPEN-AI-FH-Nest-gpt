import OpenAI from "openai";

interface Options {
    prompt: string;
    maxTokens?: number;
}

export const orthographyCheckUseCase = async (openai: OpenAI, options: Options) => {

    const { prompt } = options

    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system",
            content: prompt
        }],
        model: "gpt-4o"
    })

    console.log(prompt)
    console.log(completion)

    return {
        completion: completion.choices[0], 
    }

}
