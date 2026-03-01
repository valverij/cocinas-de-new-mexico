<script lang="ts">
    import { type RecipeData } from '$lib/models/recipe';

    const {
        recipe
    } : {
        recipe: RecipeData
    } = $props();

</script>

<div id={recipe.divId} class="markdown-recipe">
    {@html recipe.html}
</div>