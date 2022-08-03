<script lang="ts">
import Blog from "./Blog.svelte";
import Contact from "./Contact.svelte";
import Newsletter from "./Newsletter.svelte";
import Social from "./Social.svelte";

  let year = new Date().getFullYear();
</script>

<div class="hero flex justify-center items-center relative">
  <img src="/images/aj-hunter.png" alt="aj hunter"/>
  <div class="absolute bottom-0 left-1/2 text-9xl -ml-16 text-orange-500">
    <a href="#header">
      <i class="fad fa-arrow-circle-down"></i>
    </a>
  </div>
</div>
<header id="header" class="sticky top-0 md:flex md:justify-between items-center bg-white border-b-4 border-orange-500 z-50">
  <!-- logo after scroll past header -->
  <a href="https://aj-hunter.com">
    <img src="/images/aj-hunter-long.png" alt="aj hunter" class="h-16"/>
  </a>
  <!-- social media icons -->
  <div class="text-3xl p-3">
    <Social location={'header'} />
  </div>
</header>
<main>
  <Blog />
  <div class="bg-orange-200 p-10">
    <Newsletter />
  </div>
  
  <!-- Published Materials -->
  <div class="p-5">
    <h1>Published Material</h1>
  
    <div class="flex flex-col md:flex-row mt-5">
      <div class="md:w-1/2 relative">
        <img src="./images/aaron-burden-xG8IQMqMITM-unsplash.jpg" alt="" class="rounded"/>
        <div class="unsplash-credit absolute bottom-1 left-1 p-2 bg-orange-100 rounded text-xs">
          Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/s/photos/write?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    
        </div>
      </div>
      <div class="md:w-1/2 md:ml-5">
        <h2>Kindle Vella</h2>
        <a href="https://www.amazon.com/kindle-vella/story/B0B2J8NC15">The Call of the Dragon</a>
        <h2>Contest Entries</h2>
        <a href="https://shortfictionbreak.com/apple-pie/">Apple Pie <small>(Aug 2016)</small></a>
        <a href="https://shortfictionbreak.com/guardian-angel/">Guardian Angel <small>(Jun 2017)</small></a>
        <a href="https://shortfictionbreak.com/why-i-dont-remember/">Why I Don't Remember <small>(Sep 2018)</small></a>
        <a href="https://shortfictionbreak.com/behind-the-orange-door/">Behind the Orange Door <small>(Jun 2020)</small></a>
      </div>
    </div>
  </div>

</main>
<footer class="p-5">
  <div class="footer">
    <div class="md:w-1/3 md:order-2">
      <Contact />
    </div>
    <div id="about" class="text-center md:w-2/3 md:order-1">
      <h3>AJ Hunter</h3>
      <p class="text-gray-500">Developer by day, Parent by night, Writer in between</p>
      <div class="text-center p-5 text-3xl">
        <Social location={'footer'} />
      </div>
    </div>
  </div>

  <p class="text-xs text-center mt-5">Copyright &copy; 2011-{year} All Rights Reserved</p>
</footer>

<style lang="postcss">
footer {
  @apply bg-gray-50 text-gray-400;
}
.footer {
  @apply md:flex;
}
footer :global(h3) {
  @apply pb-3 text-gray-900;
}
small {
  @apply text-sm text-gray-800;
}
.unsplash-credit a{
  @apply inline p-0 border-0;
}

.hero a, .footer a{
  @apply text-orange-300 border-0;
}
header a {
  @apply text-black border-0;
}
.footer a:hover, .footer a:focus, .footer a:active, 
.hero a:hover, .hero a:focus, .hero a:active,
header a:hover, header a:focus, header a:active {
  @apply text-orange-500 bg-transparent;
}
</style>