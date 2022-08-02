<script type="ts">
  export let location;
</script>

<div 
  class="flex justify-center w-100" 
  class:header={location === 'header'}
  class:footer={location === 'footer'}
>
  <a href="https://patreon.com/ajhunter"><i class="fab fa-patreon fa-fw"></i></a>
  <a href="https://www.facebook.com/ajs.voices"><i class="fab fa-facebook fa-fw"></i></a>
  <a href="https://twitter.com/ajs_voices"><i class="fab fa-twitter fa-fw"></i></a>
  <a href="https://themindofnox.com"><i class="fab fa-wordpress-simple fa-fw"></i></a>
  <a href="https://nanowrimo.org/participants/aj-hunter" class="inline-block"><img src="./images/nanowrimo_logo.svg" alt="" class="h-8"/></a>
  <a href="https://archiveofourown.org/users/AJHunter" class="inline-block"><img src="./images/ao3_logo.svg" alt="" class="h-7
    "/></a>
  <!--a href="">Dabble</a-->
</div>

<style lang="postcss">
a {
  @apply border-none;
}
a:hover, a:focus, a:active {
  @apply text-orange-500 bg-transparent;
}
.header a {
  @apply text-gray-800;
}
.footer a {
  @apply text-gray-400;
}
</style>