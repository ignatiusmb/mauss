<script>
	export let post;
	import { Image, ButtonLink } from 'svelement';
	import Verdict from './Verdict.svelte';

	import { capitalize } from 'mauss/utils';
	const verdict = +post.verdict;
	const disabled = !post.rating || verdict === -2;
</script>

<section>
	<Image src={post.image.en} alt={post.title.en} lazy overlay ratio={3 / 2}>
		<h3>{post.released.split('-')[0]}</h3>
		{#if post.title.short}
			<h3>{post.title.short}</h3>
		{:else if post.title.jp}
			<h3>{post.title.jp}</h3>
		{:else}
			<h3>{post.title.en}</h3>
		{/if}
	</Image>

	<aside>
		<small>
			<span>{capitalize(post.category)}</span>
			<span>⭐ {post.rating || '~'}</span>
		</small>
		<Verdict {verdict} />
		<ButtonLink href="reviews/{post.slug}" {disabled}>
			{disabled ? 'Work-in-Progress' : 'read'}
		</ButtonLink>
	</aside>
</section>

<style>
	section {
		position: relative;
		display: grid;
		grid-template-rows: auto 1fr;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}
	section > :global(.lmns-image) {
		cursor: pointer;
	}
	aside {
		display: grid;
		gap: 0.5em;
		padding: 0.5em;
		border-radius: var(--b-radius);
		text-align: center;
	}
	aside small:first-child {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>

<svelte:options immutable />
