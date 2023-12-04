import fetch from 'node-fetch';
import { words } from './words';
import { prompts, randomPromptByMonth } from './prompts';

const WORD = process.env.WORD_API;

const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

export function getRandomPrompt() {
  const month = (new Date()).getMonth();
  const date = (new Date()).getDate();

  return prompts[randomPromptByMonth[MONTHS[month - 1]][date - 1]];
}

export async function getRandomWord() {
  const index = Math.floor((Math.random() * words.length) + 1);
  return { word: words[index] };
}

export async function getRandomWord_api() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': WORD,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  } as any;
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const parts = ['verb', 'noun', 'adjective', 'adverb'];
  const letter = alpha[Math.floor(Math.random() * alpha.length) + 1];
  const part = parts[Math.floor(Math.random() * parts.length) + 1];
  try {
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true&letterPattern=%5E${letter}.*&partofspeech=${part}&lettersmin=3&lettersMax=10&syllablesMax=5&limit=1&page=1`, options)
    const data = await response.json() as any;
    const length = data.results?.length;
    if (!length) {
      return getRandomWord();
    }
    return data;
  }
  catch (e) {
    console.log(e);
  }
}

const UNSPLASH = process.env.UNSPLASH_KEY;
const headers = {
  'Accept-Version': 'v1',
  Authorization: `Client-ID ${UNSPLASH}`,
  'Content-Type': 'application/json'
};

export async function getRandomPicture() {
  const url = `https://api.unsplash.com/photos/random`
  try {
    const response = await fetch(url, {
      method: 'get',
      headers,
    });
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.log(e);
  }
}
