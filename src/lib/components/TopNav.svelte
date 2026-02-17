<script lang="ts">
    import logo from "$lib/assets/logo.png";
    import { fade, slide } from "svelte/transition";
    import MenuIcon from "./icons/MenuIcon.svelte";

    const { children }: { children: any } = $props();

    let hideMenu = $state(true);
</script>

<div class="bg-gray-600 text-gray-300">
    <!-- <nav class="flex flex-row h-16 bg-gray-600 text-gray-300"> -->
     <nav class="flex flex-row h-16 border-b border-b-gray-700">
        <div class="max-h-full">
            <a href="/" title="Home">
                <img class="max-h-full" alt="Cocinas de New Mexico" src={logo} />
            </a>
        </div>
        <div class="hidden sm:inline-flex flex-row justify-end">
            {@render children()}
        </div>
        <div class="flex flex-row justify-end grow sm:hidden">
            <button class="flex h-full items-center hover:bg-gray-800 px-4 font-semibold" onclick={() => hideMenu = !hideMenu}>
                <MenuIcon></MenuIcon>
            </button>
        </div>
    </nav>
    {#if hideMenu}
    <div
        class={["flex", "flex-col", "absolute", "bg-gray-600", "w-full"]}
        transition:slide={{ duration: 100}}
    >
        {@render children()}
    </div>
    {/if}
</div>
