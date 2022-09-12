import { Handler } from "@netlify/functions";
import { getRandomWord } from "../helpers/random";

const handler: Handler = async (event, context) => {
  const word = await getRandomWord();
  return {
    statusCode: 200,
    body: JSON.stringify(word),
  };
};

export { handler };