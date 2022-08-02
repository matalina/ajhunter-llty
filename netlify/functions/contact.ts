import fetch from 'node-fetch';
import { Handler } from "@netlify/functions";

const URL = 'https://api.mailerlite.com/api/v2/';
const KEY = process.env.MAILERLITE_API;

const handler: Handler = async (event, context) => {
  const response = await fetch(
    'https://public-api.wordpress.com/rest/v1.1/sites/themindofnox.com/posts/?number=3', {
      headers: {
        'content-type': 'application/json',
        'X-MailerLite-ApiKey': KEY,
      } as any,
    });
  const json: any = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(json.posts),
  };
};

export { handler };