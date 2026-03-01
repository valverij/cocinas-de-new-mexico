<script lang="ts">
    import Button from "./Button.svelte";
    import { ReturnToTopIcon } from "./icons";

    const jumpToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    };
</script>

<Button
    class="fixed bottom-4 border-2 border-gray-700 dark:border-gray-300 dark:hover:bg-gray-700 rounded-md right-2 p-2"
    onclick={jumpToTop}>
    <ReturnToTopIcon></ReturnToTopIcon>
</Button>