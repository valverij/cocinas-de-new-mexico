<script lang="ts">
    const { children }: { children?: any } = $props();
</script>

<div class="hidden bg-gray-600 text-gray-300 border-r-3 border-r-gray-700 w-50 md:block">
     <div class="flex flex-col">
        {#if children}
            {@render children()}
        {/if}
     </div>
</div>