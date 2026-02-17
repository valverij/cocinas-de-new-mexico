<script lang="ts">
	import './layout.css';
	import '../styles/material-icons.css'
	import favicon from '$lib/assets/favicon_alt.png';
	import TopNav from "$lib/components/TopNav.svelte";
    import TopNavLink from "$lib/components/TopNavLink.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<TopNav>
    <TopNavLink href="/recipes/Apetitos (Appetizers)" title="Apetitos (Appetizers)">Apetitos (Appetizers)</TopNavLink>
</TopNav>

{@render children()}
