<script type="ts">
let email = '';
let error = '';
let success = '';

async function signUp() {
  const url = '/.netlify/functions/newsletter';
  clearMessages();
  const response =  await fetch(url, {
    method: 'post',
    body: JSON.stringify({ email }),
  });
  if(response.status === 200) {
    email = '';
    success = 'A confirmation email has been sent to your email address.';
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

<div id="newsletter">
  <h3 class="text-center">Escape from Reality</h3>
  <p class="mb-4">Join our collective as Nox escapes into reality as AJ keeps us updated and Nox provides exclusive content for your eyes only in our newsletter.</p>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  {#if success}
    <div class="success">{success}</div>
  {/if}
  <form on:submit|preventDefault={signUp}>
    <input 
      type="email" 
      bind:value={email} 
      name="email" 
      placeholder="Email Address"
      on:keyup={clearMessages}
    />
    <button type="submit">Sign Up</button>
  </form>
</div>


<style lang="postcss">
#newsletter {
  @apply mx-auto md:w-1/3;
}
form {
  @apply w-full flex;
}
button {
  @apply bg-orange-500;
}
</style>