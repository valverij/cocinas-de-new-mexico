<script lang="ts">
	import './layout.css';
	import '../styles/material-icons.css'
	import favicon from '$lib/assets/favicon_alt.png';
    import { LeftNav, LeftNavLink, TopNav, TopNavLink } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<TopNav>
    <TopNavLink href="/recipes/Apetitos (Appetizers)" title="Apetitos (Appetizers)">Apetitos (Appetizers)</TopNavLink>
</TopNav>

<div class="flex flex-row h-full">
	<LeftNav>
		<LeftNavLink href="/recipes/Apetitos (Appetizers)" title="Apetitos (Appetizers)">Apetitos (Appetizers)</LeftNavLink>
		<LeftNavLink href="/recipes/Bebidas (Beverages)" title="Bebidas (Beverages)">Bebidas (Beverages)</LeftNavLink>
		<LeftNavLink href="/recipes/Caldos (Soups)" title="Caldos (Soups)">Caldos (Soups)</LeftNavLink>
		<LeftNavLink href="/recipes/Chile Colorado (Red Chile)" title="Chile Colorado (Red Chile)">Chile Colorado (Red Chile)</LeftNavLink>
		<LeftNavLink href="/recipes/Chile Verde (Green Chile)" title="Chile Verde (Green Chile)">Chile Verde (Green Chile)</LeftNavLink>
		<LeftNavLink href="/recipes/Ensaladas (Salads)" title="Ensaladas (Salads)">Ensaladas (Salads)</LeftNavLink>
		<LeftNavLink href="/recipes/Especialidades Estilo Nuevo Mexicanos (New Mexican Specialties)" title="Especialidades Estilo Nuevo Mexicanos (New Mexican Specialties)">Especialidades Estilo Nuevo Mexicanos (New Mexican Specialties)</LeftNavLink>
		<LeftNavLink href="/recipes/Galletas (Cookies)" title="Galletas (Cookies)">Galletas (Cookies)</LeftNavLink>
		<LeftNavLink href="/recipes/Glossary of New Mexican Foods" title="Glossary of New Mexican Foods">Glossary of New Mexican Foods</LeftNavLink>
		<LeftNavLink href="/recipes/Modo de Tostar Semillas y Nuezes del Pais (Roasting Native Nuts and Seeds)" title="Modo de Tostar Semillas y Nuezes del Pais (Roasting Native Nuts and Seeds)">Modo de Tostar Semillas y Nuezes del Pais (Roasting Native Nuts and Seeds)</LeftNavLink>
		<LeftNavLink href="/recipes/Panes (Breads)" title="Panes (Breads)">Panes (Breads)</LeftNavLink>
		<LeftNavLink href="/recipes/Platos Principales (Main Dishes)" title="Platos Principales (Main Dishes)">Platos Principales (Main Dishes)</LeftNavLink>
		<LeftNavLink href="/recipes/Postres (Desserts)" title="Postres (Desserts)">Postres (Desserts)</LeftNavLink>
		<LeftNavLink href="/recipes/Vegetales (Vegetables)" title="Vegetales (Vegetables)">Vegetales (Vegetables)</LeftNavLink>
	</LeftNav>
	<main class="flex flex-col p-4 dark:text-gray-300 dark:bg-gray-800">
		{@render children()}
	</main>
</div>