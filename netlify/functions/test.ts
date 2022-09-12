import { Handler } from "@netlify/functions";
import { getRandomWord } from "../helpers/random";

const handler: Handler = async (event, context) => {
  const start = new Date().getTime();
  const word = await getRandomWord();
  const end = new Date().getTime();
  return {
    statusCode: 200,
    body: `<html><body><strong>Time spent:</strong> ${end - start}ms\n<script>console.log(${JSON.stringify(word)});</script></body></html>`,
    'content-type': 'text/html'
  };
};

export { handler };