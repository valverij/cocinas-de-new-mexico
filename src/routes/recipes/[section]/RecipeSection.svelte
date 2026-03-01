<script lang="ts">
    import { type Recipe } from '$lib/models/recipe';

    const {
        recipe
    } : {
        recipe: Recipe
    } = $props();
</script>

<div id={recipe.divId} class="markdown-recipe">
    {@html recipe.html}
</div>