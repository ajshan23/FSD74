import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("");
const main = async() => {

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = "give me a poem of 3 lines";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

main();