import { OpenAI } from "langchain/llms/openai";
const OPENAI_API_KEY = "";

export const lang = async (userinput) => {
    const llm = new OpenAI({
        openAIApiKey: OPENAI_API_KEY,
    });
    try {
        const res = await llm.predict(userinput);
        console.log(res)
        return res;
    } catch (error) {
        console.error("LangChain API error:", error);
        return { text: "죄송합니다. API에서 문제가 있습니다.", isUser: false };
    }
}
