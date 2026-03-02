<script lang="ts">
    import { type TocItem } from '$lib/components/FloatingToc.svelte';
    import { FloatingToc, JumpToTopButton } from '$lib/components';
    import RecipeSection from './RecipeSection.svelte';

    const { data } = $props();

    const tocItems = $derived(data.recipes.map((recipe, i) => ({
        elementId: recipe.divId,
        title: recipe.title,
        active: i === 0
    } as TocItem)));

    $effect(() => console.log(tocItems));
</script>

<style>
    :global(.no-title h1) {
        display: none;
    }

    :global(section[data-footnotes] li p a[aria-label~='Back']) {
        font-family: "Material Symbols Outlined";
        content: "\ue5d9";
    }
</style>

<div class="flex flex-row gap-2">
    <div class="flex flex-col">
        <h1 class="text-3xl pl-2">{data.title}</h1>
        <div class="no-title">
            {#each data.recipes as recipe (recipe.divId)}
                <RecipeSection {recipe}></RecipeSection>
                <hr class="mt-2 mx-6" />
            {/each}
        </div>
    </div>
    <div class="hidden flex-col w-1/3 border-l top-0 pl-2 md:block">
        <FloatingToc items={tocItems}></FloatingToc>
        <JumpToTopButton></JumpToTopButton>
    </div>
</div>