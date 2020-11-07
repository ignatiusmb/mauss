<script context="module">
	const pages = ['about', 'curated', 'help', 'posts', 'reviews', 'uses'];
	export async function preload({ params, query }) {
		if (!pages.includes(params.page)) return this.error(404, 'Page not found');
		const res = await this.fetch(`${params.page}.json`);
		if (res.status !== 200) return this.error(404, 'Data not found');
		const data = await res.json();

		const meta = { page: params.page, params: query };
		const search = {};
		if (params.page === 'posts') {
			meta.description = 'Get the latest most recent posts here.';
			search.categories = Array.from(new Set(data.map((p) => p.tags[0]))).sort();
			search.tags = Array.from(new Set(data.flatMap((p) => p.tags))).sort();
		} else if (params.page === 'reviews') {
			meta.description = 'Personalized reviews for all kinds of anime, books, movies, shows, etc.';
			search.categories = Array.from(new Set(data.map((p) => p.category)));
			search.genres = Array.from(new Set(data.flatMap((p) => p.genres))).sort();
			search.verdict = Array.from(new Set(data.map((d) => d.verdict)));
		}

		return { meta, data, search };
	}
</script>

<script>
	export let meta, data, search;
	let { query } = meta.params;
	let { verdict, ...unique } = search;

	import { flip } from 'svelte/animate';
	import { scale } from 'svelte/transition';
	import { stores } from '@sapper/app';
	const { preloading } = stores();
	const duration = 100;

	import { Feather, SearchBar, Pagination } from '@ignatiusmb/elements';
	import MetaHead from '../../pages/MetaHead.svelte';
	import LayoutPicker from '../../pages/LayoutPicker.svelte';
	import PostCard from '../../components/PostCard.svelte';
	import ReviewCard from '../../components/ReviewCard.svelte';
	import PerspectiveCarousel from '../../components/PerspectiveCarousel.svelte';

	import * as localStores from '../../stores';
	import { sieve, filter } from '../../utils/search';
	import { capitalize } from '../../utils/helper';
	let store = localStores[`${meta.page[0]}Slice`];
	$: store = $preloading ? localStores[`${meta.page[0]}Slice`] : store;

	let filtered, sieved;
	let view = 'grid';
	let filters = { categories: [], tags: [], sort: 'updated' };
	$: itemSize = meta.page === 'posts' ? '21em' : '12em';

	$: bound = meta.page === 'posts' ? 6 : view === 'grid' ? 12 : 3;
	$: increment = view === 'carousel' ? 1 : bound;

	$: count = $store * increment;
	$: filtered = filter(filters, data);
	$: sieved = query ? sieve(query, filtered) : filtered;
	$: total = sieved.length;
</script>

<MetaHead canonical={meta.page} title={capitalize(meta.page)} description={meta.description}>
	<link rel="alternate" href="rss.xml" type="application/rss+xml" />
</MetaHead>

<LayoutPicker header {view} {itemSize}>
	<header slot="header">
		{#if meta.page === 'posts'}
			<h1>Posts by DevMauss</h1>
		{:else if meta.page === 'reviews'}
			<h1>DevMauss Reviews</h1>
		{/if}

		<SearchBar bind:query bind:filters {unique}>
			{#if meta.page === 'reviews'}
				<section>
					<h3>Verdict</h3>
					{#each verdict as rec}
						<label>
							<input type="checkbox" bind:group={filters.verdict} value={rec || '-2'} />
							{#if rec === '2'}
								<span>Must-watch!</span>
							{:else if rec === '1'}
								<span>Recommended</span>
							{:else if rec === '0'}
								<span>Contextual</span>
							{:else if rec === '-1'}
								<span>Not recommended</span>
							{:else}
								<span>Pending</span>
							{/if}
						</label>
					{/each}
				</section>
			{/if}

			<section>
				<h3>Sort by</h3>
				<label>
					<input type="radio" bind:group={filters.sort} value="updated" />
					<span>Last updated</span>
				</label>
				<label>
					<input type="radio" bind:group={filters.sort} value="published" />
					<span>Date published</span>
				</label>
				{#if meta.page === 'reviews'}
					<label>
						<input type="radio" bind:group={filters.sort} value="year" />
						<span>Year released</span>
					</label>
					<label>
						<input type="radio" bind:group={filters.sort} value="seen" />
						<span>Last seen</span>
					</label>
					<label>
						<input type="radio" bind:group={filters.sort} value="rating" />
						<span>Rating</span>
					</label>
				{/if}
			</section>
		</SearchBar>

		{#if view !== 'scrollsnap'}
			<Pagination {store} {total} {bound} />
		{/if}
	</header>

	<aside slot="picker">
		<button class:active={view === 'grid'} on:click={() => (view = 'grid')}>
			<Feather.Grid />
		</button>
		{#if meta.page === 'reviews'}
			<button class:active={view === 'carousel'} on:click={() => (view = 'carousel')}>
				<Feather.Layers />
			</button>
			<button class:active={view === 'scrollsnap'} on:click={() => (view = 'scrollsnap')}>
				<Feather.Columns />
			</button>
		{/if}
	</aside>

	{#if meta.page === 'posts'}
		{#each sieved.slice(count, count + bound) as post (post.slug)}
			<div animate:flip={{ duration }} transition:scale|local={{ duration }}>
				<PostCard {post} />
			</div>
		{/each}
	{:else if meta.page === 'reviews'}
		{#if view === 'grid'}
			{#each sieved.slice(count, count + bound) as post (post.slug)}
				<div animate:flip={{ duration }} transition:scale|local={{ duration }}>
					<ReviewCard {post} />
				</div>
			{:else}
				<h2>There are no matching {query ? 'titles' : 'filters'}</h2>
			{/each}
		{:else if view === 'carousel'}
			<PerspectiveCarousel>
				{#each sieved.slice(count, count + bound) as post, idx (post.slug)}
					<div class:translate-left={idx === 0} class:translate-right={idx === 2}>
						<ReviewCard {post} />
					</div>
				{/each}
			</PerspectiveCarousel>
		{:else if view === 'scrollsnap'}
			<div class="empty" />
			{#each sieved as post (post.slug)}
				<div animate:flip={{ duration }}>
					<ReviewCard {post} />
				</div>
			{/each}
			<div class="empty" />
		{/if}
	{/if}
</LayoutPicker>

<style>
	h1 {
		text-align: center;
	}
	div {
		display: grid;
	}
	div:not(.empty) {
		border-radius: var(--b-radius);
		box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
			0 1px 3px 0 rgba(0, 0, 0, 0.12);
		background-color: var(--bg-overlay);
	}
	h2 {
		position: absolute;
		width: 100%;
		text-align: center;
		word-break: break-word;
	}
</style>
