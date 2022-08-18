/*
https://public-api.wordpress.com/rest/v1.2/sites/$site/posts/new
Client ID: 80300
Blog ID: 105714162 // the mind of nox
Blog ID: 147347238 // the daily spur
*/

import fetch from 'node-fetch';

const KEY = process.env.WP_TOKEN;

export interface Post {
  title: string;
  content: string;
  date: string;
  status: 'future' | 'publish';
  tags?: string[];
  categories?: string[];

}

const headers = {
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json'
};

export async function createPost(site: string, post: Post) {
  const url = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/new`;
  const body = JSON.stringify(post);

  await fetch(url, {
    method: 'post',
    headers,
    body,
  });
}