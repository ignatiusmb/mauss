<script context="module">
	export async function preload() {
		const articles = await this.fetch('about.json').then((r) => r.json());
		return {
			post: articles['index'],
			sections: Object.keys(articles).filter((e) => e !== 'index'),
		};
	}
</script>

<script>
	export let post, sections;
	import { Link, WeavedImage } from 'svelement';
	import MetaHead from '$pages/MetaHead.svelte';
	import Article from '$pages/Article.svelte';
	import { capitalize } from 'mauss/utils';
</script>

<MetaHead
	{post}
	canonical="about"
	title="About"
	description="Get to know Ignatius Bagussuputra from his About page." />

<Article {post}>
	<WeavedImage src="assets/profile/mauss.jpeg" alt="DevMauss Profile" />

	<section>
		{#each sections as section}
			<Link href="about/{section}">
				<h2>{capitalize(section)}</h2>
			</Link>
		{/each}
	</section>

	{@html post.content}
</Article>

<style>
	section:first-of-type {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-flow: row;
		border: 0.1em solid var(--fg-surface);
		border-radius: var(--b-radius);
	}
	section:first-of-type :global(a) {
		padding: 0 0.5em;
		border: 0.1em solid var(--fg-surface);
	}
	section:first-of-type h2 {
		margin-top: 0;
		text-align: center;
	}
</style>
