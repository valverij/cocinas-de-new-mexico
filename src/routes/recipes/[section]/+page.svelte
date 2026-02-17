<script lang="ts">
    const { data  } = $props();

</script>

<!-- svelte-ignore css_unused_selector -->
<style>
    :global(.no-title h1) {
        display: none;
    }
</style>

<h1 class="text-3xl pl-2">{data.title}</h1>
<div class="no-title">
    {#each data.recipes as recipe (recipe)}
        <div class="markdown-recipe">
            {@html recipe.html}
        </div>
        <hr class="mt-2 mx-6" />
    {/each}
</div>