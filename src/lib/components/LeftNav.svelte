<script lang="ts">
    const { children }: { children?: any } = $props();
</script>

<div class="bg-gray-600 text-gray-300 border-r border-r-gray-900 h-full w-50">
     <div class="flex flex-col ">
        {#if children}
            {@render children()}
        {/if}
     </div>
</div>