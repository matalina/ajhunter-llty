import { Handler } from '@netlify/functions';
import { createPost, Post } from '../helpers/wordpress';
import { getRandomPrompt } from '../helpers/random';

const handler: Handler = async (event, context) => {
  const prompt = await getRandomPrompt() as any;
  const post = {
    title: `Writing Exercise (${(new Date()).toDateString()})`,
    content: `<p>Today's writing exercise is: "${prompt.prompt}".</p>${(prompt?.example) ? "<p><strong>Example:</strong> " + prompt.example + "</p>": ''}<p><em>If you use a WordPress, pingbacks should automatically track back to this page if you put in a link. If you use another blogging system, post your link in the comments so others can follow your work. Spam will be deleted.</em></p>`,
    date: (new Date()).toISOString(),
    status: 'publish',
    tags: ['Daily Prompt', 'postaday', 'Exercise of the Day', 'Write Every Day', 'Daily Post'],
    categories: ['Writing Exercise']
  } as Post;

  await createPost('147347238', post);

  return {
    statusCode: 200,
  }
}

export { handler };
