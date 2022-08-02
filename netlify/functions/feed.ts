import fetch from 'node-fetch';
import { Handler } from "@netlify/functions";

 /* event
  {
    "path": "Path parameter (original URL encoding)",
    "httpMethod": "Incoming request’s method name",
    "headers": {Incoming request headers},
    "queryStringParameters": {Query string parameters},
    "body": "A JSON string of the request payload",
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
  }

  return response
  {
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
    "body": "..."
  }
*/

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}

const handler: Handler = async (event, context) => {
  const response = await fetch(
    //'https://themindofnox.com/feed',
    'https://public-api.wordpress.com/rest/v1.1/sites/themindofnox.com/posts/?number=3',
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      }
    });
  const json: any = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(json.posts),
    headers: {
      ...CORS_HEADERS
    },
  };
};

export { handler };