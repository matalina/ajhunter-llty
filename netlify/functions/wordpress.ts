import { Handler } from '@netlify/functions';
const WPOAuth = require('wpcom-oauth');

const KEY = process.env.WORDPRESS_SECRET

const handler: Handler = async (event, context) => { 
  const wpAuth = WPOAuth({
    'client_id': '80300',
    'client_secret': KEY,
    'url': {
      'redirect': 'https://aj-hunter.com/.netlify/functions/wordpress'
    },
    'site': 'https://thedailyspur.wordpress.com'
  });

  if (!event.queryStringParameters?.code) {
    const startUrl = wpAuth.urlToConnect();
    return {
      statusCode: 200,
      body: `<html><script>window.location = '${startUrl}';</script></html>`
    };
  }

  const code = event.queryStringParameters.code;
  wpAuth.code(code);

  let token = 'empty';
  const out = wpAuth.requestAccessToken((err, data) => {
    token = data;
    console.log(token);
  });

  return {
    statusCode: 200,
    body: `Check Console`
  };
  
};

export { handler };