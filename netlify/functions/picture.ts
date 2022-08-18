import { Handler } from '@netlify/functions';
import { createPost } from '../helpers/wordpress';
import type { Post } from '../helpers/wordpress';
import fetch from 'node-fetch';

const KEY = process.env.UNSPLASH_KEY;

const headers = {
  'Accept-Version': 'v1',
  Authorization: `Client-ID ${KEY}`,
  'Content-Type': 'application/json'
};

async function getRandomPicture() {
  const url = `https://api.unsplash.com/photos/random`
  try {
    const response = await fetch(url, {
      method: 'get',
      headers,
    });
    const data = await response.json();
    console.log(data.urls);
    return data;
  }
  catch (e) {
    console.log(e);
  }
}


const handler: Handler = async (event, context) => {
  const picture = await getRandomPicture() as any;
  const post = {
    title: picture.description || 'Photo Prompt',
    content: `<img src="${picture.urls.full}" alt="" /><p>Photo by <a href="${picture.user.links.html}">${picture.user.name} (${picture.user.username})</a> on <a href="https://unsplash.com">Unsplash</a><p>`,
    date: (new Date()).toISOString(),
    status: 'publish',
    tags: ['Daily Prompt', 'postaday', 'Photo of the Day', 'Write Every Day', 'Daily Post'],
    categories: ['Word Prompt']
  } as Post;

  createPost('147347238', post);

  return {
    statusCode: 200,
  }
}

export { handler };