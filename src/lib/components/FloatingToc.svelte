<script lang="ts">
    import type { RecipeData } from "$lib/models/recipe";

    const { items } : { items: RecipeData[] } = $props();

</script>

<style>
    .active {
        font-weight: 700;
    }
</style>

<div class="sticky top-5 border border-gray-700 bg-white dark:border-blue-700 rounded-md right-4 p-4">
    <ul>
        {#each items as { title, divId, active} }
        <li class="hover:text-blue-500">
            <a class={["hover:text-blue-500", active && "active"]} href="#{divId}" aria-label="Jump to {title}">{title}</a>
        </li>
        {/each}
    </ul>
</div>