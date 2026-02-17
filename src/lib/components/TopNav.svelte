<script lang="ts">
    import logo from "$lib/assets/logo.png";
    import { slide } from "svelte/transition";
    import MenuIcon from "./icons/MenuIcon.svelte";

    const { children }: { children: any } = $props();

    let showMenu = $state(false);
    let windowInnerWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowInnerWidth}></svelte:window>

<div class="bg-gray-700 text-gray-300 w-full">
     <nav class="flex flex-row h-16 border-b border-b-gray-900">
        <div class="max-h-full">
            <a href="/" title="Home">
                <img class="max-h-full" alt="Cocinas de New Mexico" src={logo} />
            </a>
        </div>
        <div class="hidden sm:inline-flex flex-row justify-end">
            {@render children()}
        </div>
        <div class="flex flex-row justify-end grow sm:hidden">
            <button class="flex h-full items-center hover:bg-gray-800 px-4 font-semibold" onclick={() => showMenu = !showMenu}>
                <MenuIcon></MenuIcon>
            </button>
        </div>
    </nav>
    {#if showMenu && windowInnerWidth < 640}
    <div
        class="flex flex-col absolute bg-gray-700 w-full border-b border-b-gray-900"
        transition:slide={{ duration: 100}}
    >
        {@render children()}
    </div>
    {/if}
</div>
