import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'node:fs';

const GEMINI_API_KEY = "AIzaSyBxpB719NyDOal2APMauD9UD2vUqlH03dU";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const prompt = "Predict how many calories are in this meal.";
const imagePart = fileToGenerativePart("/Users/timot/Downloads/pizzaa.jpg", "image/jpg");

const result = await model.generateContent([prompt, imagePart]);
console.log(result.response.text());