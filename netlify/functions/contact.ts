import fetch from 'node-fetch';
import { Handler } from "@netlify/functions";

const KEY = process.env.MAILERSEND_API;

const handler: Handler = async (event, context) => {
  if (event.httpMethod.toLowerCase() !== 'post') return {
    statusCode: 400,
    body: JSON.stringify({ message: 'unable to process' }),
  };
  const email = JSON.parse(event.body as any)?.email;
  if (!email) return {
    statusCode: 400,
    body: JSON.stringify({ message: 'email is required' }),
  };
  const name = JSON.parse(event.body as any)?.name;
  if (!name) return {
    statusCode: 400,
    body: JSON.stringify({ message: 'name is required' }),
  };
  const message = JSON.parse(event.body as any)?.message;
  if (!message) return {
    statusCode: 400,
    body: JSON.stringify({ message: 'message is required' }),
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'X-MailerLite-ApiDocs': 'true',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify({
      from: {
        email: 'aj@aj-hunter.com',
        name: 'AJ Hunter',
      },
      to: [
        {
          email: 'ajs.voices@gmail.com',
          name: 'AJ Hunter'
        }
      ],
      subject: '[via contact form] AJ Hunter',
      text: `${name}&lt;${email}&gt; sends =>\n\nmessage`,
      html: `<p>${name}&lt;${email}&gt;</p><pre>${message}</pre>`,
    })
  } as any;
  const response = await fetch('https://api.mailersend.com/v1/email', options);

  if (response.status === 202) {
    const json = { success: true, message: 'request accepted' };
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  }
  return {
    statusCode: 500,
    body: JSON.stringify({ message: 'something went wrong' }),
  }
}

export { handler };