<script>
	import { Link } from 'svelement';
	import MetaHead from '$pages/MetaHead.svelte';
	import Article from '$pages/Article.svelte';
	import Disclaimer from '$components/Disclaimer.svelte';
</script>

<MetaHead
	canonical="disclaimer"
	title="Disclaimer"
	description="Disclaimer page for all the content in this website." />

<Article>
	<Disclaimer>
		<h2>Reviews</h2>
		<p>
			Purely done as a hobby of mine as well as to express my gratitude, with the intent of
			supporting the authors and the team behind all those creative content. The reviews is solely
			made as a guide to help decide for yourself whether you choose to consume the content or not.
		</p>
	</Disclaimer>

	<p>
		All of that being said, I hope that we can move past blaming or hating what I said. If you
		disagree with something, I would welcome a discussion. It would be my privilege to learn from
		what you have to teach me. Direct contributions are also welcome at this
		<Link href="https://github.com/ignatiusmb/mauss">GitHub repository</Link>
	</p>
</Article>

<style>
	h2 {
		margin-top: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: bold;
	}
</style>
