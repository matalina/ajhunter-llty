<script type="ts">
/* https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/ */
import { onMount } from 'svelte';

let posts = [];

onMount(async () => {
  const url = '/.netlify/functions/feed';
  const response =  await fetch(url);
  posts = await response.json();
  console.log(posts);
});
</script>

<div id="logo">
  <a href="https://themindofnox.com" class="border-0">
    <img src="./images/nox-logo.png" alt="The Mind of Nox"/>
  </a>
</div>
<div class="p-5" id="blog">
  {#each posts as post}
  <div class="post">
    <img src={post.post_thumbnail.URL} alt="" />
    <h3><a href={post.URL}>{post.title}</a></h3>
    <div class="date">{(new Date(post.date)).toDateString()}</div>
    {@html post.excerpt}
    <div class="meta">
      {#each Object.keys(post.categories) as cat}
        <div class="category">{post.categories[cat].name}</div>
      {/each}
      {#each Object.keys(post.tags) as tag}
        <div class="tag">{post.tags[tag].name}</div>
      {/each}
    </div>
  </div>
  {/each}
</div>

<style lang="postcss">
.meta {
  @apply flex flex-wrap mt-2;
}
.meta > div  {
  @apply mr-2 mb-2 py-1 px-2 text-xs;
}
.category {
  @apply bg-slate-300 text-gray-700;
}
.tag {
  @apply bg-orange-300 text-gray-900;
}
.date {
  @apply text-gray-500 text-sm text-right pb-2;
}
#logo {
  @apply mt-3;
}
#blog {
  @apply md:flex;
}
#blog > div {
  @apply md:w-1/3 p-3;
}
.post img {
  @apply w-full;
}
.post h3 {
  @apply my-3 text-lg;
}
</style>