<script type="ts">
let email: string;

async function signUp() {
  console.log('sign up');
  const url = '/.netlify/functions/newsletter';
  const response =  await fetch(url, {
    method: 'post',
    body: JSON.stringify({ email }),
  });
}
</script>

<div id="newsletter">
  <h3 class="text-center">Escape from Reality</h3>
  <p class="mb-4">Join our collective as Nox escapes into reality as AJ keeps us updated and Nox provides exclusive content for your eyes only in our newsletter.</p>
  <form on:submit|preventDefault={signUp}>
    <input type="email" bind:value={email} name="email" placeholder="Email Address"/>
    <button type="submit">Sign Up</button>
  </form>
</div>


<style lang="postcss">
#newsletter {
  @apply mx-auto w-1/3;
}
form, label {
  @apply w-full flex;
}
input {
  @apply border rounded-md border-orange-600 p-2 rounded-tl-md rounded-r-none;
  @apply grow;
  @apply bg-orange-50;
}
button {
  @apply rounded-md bg-orange-600 text-orange-100 p-2 rounded-l-none;
}
</style>