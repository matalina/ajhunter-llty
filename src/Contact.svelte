<script type="ts">
let name = '';
let email = '';
let message = '';

let success = '';
let error = '';

async function sendEmail() {
  const url = '/.netlify/functions/contact';
  clearMessages();
  const response =  await fetch(url, {
    method: 'post',
    body: JSON.stringify({ email, name, message }),
  });
  if(response.status === 200) {
    email = '';
    name = '';
    message = '';
    success = 'Your message has been sent.';
    return;
  }
  let output = await response.json();
  error = output.message;
}

function clearMessages() {
  error = '';
  success = '';
}

</script>

<div id="contact">
  <h3>Contact AJ</h3>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  {#if success}
    <div class="success">{success}</div>
  {/if}
  <form on:submit|preventDefault={sendEmail}>
    <input type="text" bind:value={name} name="name" placeholder="Name"/>
    <input type="email" bind:value={email} name="email" placeholder="Email"/>
    <textarea type="message" bind:value={message} name="message" rows="6" placeholder="Message"></textarea>
    <button type="submit">Send Email</button>
  </form>
</div>

<style lang="postcss">
#contact form {
  @apply flex flex-col;
}
input, textarea {
  @apply rounded-md mb-3 bg-gray-100 border-gray-400;
}
button {
  @apply bg-gray-400 text-gray-50 rounded-md;
}
</style>