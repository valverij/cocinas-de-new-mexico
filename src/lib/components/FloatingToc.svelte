<script lang="ts">
    export interface TocItem {
        elementId: string;
        title: string;
        active?: boolean;
    }

    const { items } : { items: TocItem[] } = $props();

    class ReactiveItem implements TocItem {
        elementId: string;
        title: string;
        active?: boolean;

        constructor(item: TocItem) {
            this.elementId = item.elementId;
            this.title = item.title;
            this.active = $state(item.active);
        }
    }

    const reactiveItems = $derived(items.map(item => new ReactiveItem(item)));

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        console.log('fired!');
        for(const entry of entries) {
            const match = reactiveItems.find(item => item.elementId === entry.target.id)!;
            match.active = entry.isIntersecting;
        }
    };

    $effect(() =>{
        const observerOptions : IntersectionObserverInit = {
            root: document.getElementById("main-content"),
            rootMargin: "-20% 0px -80% 0px",
            threshold: 0
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        for (const { elementId } of items) {
            console.log('subscribed: ', elementId)
            observer.observe(document.getElementById(elementId)!);
        }

        return () => {
            observer.disconnect();
        };
    });

</script>

<style>
    .active {
        font-weight: 700;
    }
</style>

<div class="sticky top-5 border border-gray-700 bg-white dark:border-blue-700 rounded-md right-4 p-4">
    <ul>
        {#each reactiveItems as { title, elementId, active} }
        <li class="hover:text-blue-500">
            <a class={["hover:text-blue-500", active && "active"]} href="#{elementId}" aria-label="Jump to {title}">{title}</a>
        </li>
        {/each}
    </ul>
</div>