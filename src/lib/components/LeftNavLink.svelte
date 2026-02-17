<script lang="ts">
    const {
        href,
        title,
        children
    }: {
        href: string,
        title: string,
        children: any
    } = $props();
</script>

<div class="flex w-full items-center hover:bg-gray-800 p-4 font-semibold">
    <a class="text-md" {href} {title}>{@render children()}</a>
</div>