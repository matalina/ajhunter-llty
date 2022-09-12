import { Handler } from '@netlify/functions';
import type { Post } from '../helpers/wordpress';
import { getRandomWord } from '../helpers/random';

const handler: Handler = async (event, context) => {
  const word = await getRandomWord() as any;
  const post = {
    title: word.word,
    content: `<p>Today's word is ${word.word}. Get the definition from <a href="http://www.dictionary.com/browse/${word.word}">dictionary.com</a> or from the <a href="https://www.urbandictionary.com/define.php?term=${word.word}">urban dictionary</a>.</p><p><em>If you use a WordPress, pingbacks should automatically track back to this page if you put in a link. If you use another blogging system, post your link in the comments so others can follow your work. Spam will be deleted.</em></p>`,
    date: (new Date()).toISOString(),
    status: 'publish',
    tags: ['Daily Prompt', 'postaday', 'Word of the Day', 'Write Every Day', 'Daily Post'],
    categories: ['Word Prompt']
  } as Post;

  //await createPost('147347238', post);

  return {
    statusCode: 200,
  }
}

export { handler };