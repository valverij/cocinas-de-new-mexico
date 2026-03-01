import type { EntryGenerator, PageServerLoad } from './$types';
import { marked } from "marked";
import markedFootnote from "marked-footnote";
import type { Recipe } from '$lib/models/recipe';
import path from 'path';
import { readdirSync, readFileSync } from 'fs';

const baseDir = path.join(process.cwd(), "/src/lib/server/recipes");

export const prerender = true; // Enable prerendering

export const entries: EntryGenerator = () => {
	const files = readdirSync(baseDir);
	
	return files
		.filter(file => file.endsWith('.md'))
		.map(file => ({
			section: file.replace('.md', '')
		}));
};

export const load: PageServerLoad = async ({ params }) => {
	
	const sectionPath = path.join(baseDir, params.section);
	const files = readdirSync(sectionPath);

	const recipes: Recipe[] = [];
	
	let i = 1;
	let title = params.section;
	for (const file of files) {
		const md = readFileSync(path.join(sectionPath, file), "utf8");

		const html = await marked.use(
			markedFootnote({
				prefixId: `${i++}-`,
				sectionClass: "",
				headingClass: "",
				description: ""
			})
		)
		.parse(md);

		recipes.push({
			title: file.replaceAll(".md", ""),
			file: file,
			html,
			divId: file.replaceAll(".md", "")
				.toLocaleLowerCase()
				.replace(/[()]/g, "")
				.replace(/[ ]/g, "-")
		});
	}

	return {
		title: params.section,
		recipes
	};
};