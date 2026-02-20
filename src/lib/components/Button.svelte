<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    type ButtonProps = {
        children: any;
    } & HTMLButtonAttributes;

    const { children, ...rest }: ButtonProps = $props();
</script>

<button {...rest} class={["cursor-pointer", "flex", "items-center", "px-4", rest.class]}>
    {@render children()}
</button>