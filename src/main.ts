import './hmr';
import './main.css';
import App from './App.svelte';

const app = new App({
  target: document.body
});

export default app;

export function validateEmail(email: string) {
  return true;
}