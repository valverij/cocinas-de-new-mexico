<script lang="ts">
    import FloatingToc from '$lib/components/FloatingToc.svelte';
    import RecipeSection from './RecipeSection.svelte';
    import { type Recipe, type RecipeData } from '$lib/models/recipe';

    const { data } = $props();
    
    class RecipeDataModel implements RecipeData {
        title: string;
        divId: string;
        html?: string;
        active: boolean = $state(false);

        constructor(recipe : Recipe) {
            this.title = recipe.title;
            this.divId = recipe.divId;
            this.html = recipe.html;
        }
    }

    const recipes = $derived(data.recipes.map(recipe => new RecipeDataModel(recipe)));
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
            {#each data.recipes as recipe, i (recipe.divId)}
                <RecipeSection recipe={recipes[i]}></RecipeSection>
                <hr class="mt-2 mx-6" />
            {/each}
        </div>
    </div>
    <div class="hidden flex-col min-w-1/3 border-l top-0 pl-2 md:block">
        <FloatingToc items={recipes}></FloatingToc>
    </div>
</div>