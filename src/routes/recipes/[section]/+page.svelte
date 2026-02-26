<script lang="ts">
    import { onMount } from 'svelte';

    const { data  } = $props();

    onMount(() => {
        const footnotes = document.querySelectorAll('a[href^="#"][href*="-ref-"]');
        for (const footnote of footnotes) {
            footnote.classList.add("footnote-ref");
            console.log(footnote);
        }
    })
</script>

<!-- svelte-ignore css_unused_selector -->
<style>
    :global(.no-title h1) {
        display: none;
    }

    .footnote-ref::after {
        /* content: '\ue5d9'; */
        content: 'aksjbkads';
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