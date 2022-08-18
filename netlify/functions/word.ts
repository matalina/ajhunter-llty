import { Handler } from '@netlify/functions';
import { createPost } from '../helpers/wordpress';
import type { Post } from '../helpers/wordpress';
import fetch from 'node-fetch';

const KEY = process.env.WORD_API;

async function getRandomWord() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  } as any;
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const parts = ['verb', 'noun', 'adjective', 'adverb'];
  const letter = alpha[Math.floor(Math.random() * alpha.length) + 1];
  const part = parts[Math.floor(Math.random() * parts.length) + 1];
  try {
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true&letterPattern=%5E${letter}.*&partofspeech=${part}&lettersmin=3&lettersMax=15&syllablesMax=6&limit=1&page=1`, options)
    const data = await response.json() as any;
    return data;
  }
  catch (e) {
    console.log(e);
  }
}


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

  await createPost('147347238', post);

  return {
    statusCode: 200,
  }
}

export { handler };