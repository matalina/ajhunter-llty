import fetch from 'node-fetch';
import { Handler } from '@netlify/functions';

const KEY = process.env.MAILERLITE_API;

const handler: Handler = async (event, context) => {
  if (event.httpMethod.toLowerCase() !== 'post') return {
    statusCode: 400,
    body: JSON.stringify({ message: 'unable to process' }),
  };
  const email = JSON.parse(event.body as any)?.email;
  if(!email) return {
    statusCode: 400,
    body: JSON.stringify({ message: 'email is required' }),
  };

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'X-MailerLite-ApiDocs': 'true',
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': KEY
    },
    body: JSON.stringify({
      email,
      resubscribe: true,
      type: 'unconfirmed',
    })
  } as any;
  const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', options)
  if (response.status === 200) {
    const json = { success: true, message: 'awaiting confirmation' };
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  }
  return {
    statusCode: 500,
    body: JSON.stringify({ message: 'something went wrong' }),
  }
};

export { handler };


