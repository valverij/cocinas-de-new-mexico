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

<div class="flex h-full items-center navbar-item px-4 font-semibold">
    <a class="text-md" {href} {title}>{@render children()}</a>
</div>