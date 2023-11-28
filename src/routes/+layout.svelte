<script lang="ts">
	import Donate from '$lib/Donate.svelte';

	import _ from '$lib/i18n/i18n-svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<nav>
	<div class="links">
		<a href="/" class="logo"><img src="/logo.png" alt="Rooted With Roofs Logo" /></a>
		<a href="/#story">{$_.header.story()}</a>
		<a href="/#mission">{$_.header.mission()}</a>
		<a href="/#why-give">{$_.header.resources()}</a>
	</div>
	<Donate />
</nav>

<main>
	<slot />
</main>

<style>
	:global(:root) {
		--primary-color: #000000;
		--secondary-color: #ffffff;
		--action-color: #ffcc00;
		font-size: 22px;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body, html) {
		margin: 0;
		background-color: #eeeeee;
		scroll-padding-top: 6em;
	}

	main {
		padding: 0 15%;
		margin-top: 4em;
	}

	nav {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		height: 5em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em;
		position: fixed;
		width: 100%;
		top: 0px;
		box-shadow: 0px 0px 2em 0.1em #eeeeee;
		z-index: 999;
	}

	.links {
		display: flex;
		gap: 1em;
		font-size: 2em;
		align-items: center;
	}

	.links > a {
		color: var(--secondary-color);
		font-weight: bold;
		text-decoration: none;
	}

	.links > a:hover {
		text-decoration: underline;
	}

	img {
		width: 2em;
	}

	@media (max-width: 900px) {
		nav {
			flex-direction: column;
			height: 9em;
		}

		:global(body, html) {
			scroll-padding-top: 8em;
		}

		main {
			margin-top: 7em;
			padding: 0 5%;
		}
	}

	@media (max-width: 680px) {
		nav {
			align-items: baseline;
			position: unset;
			gap: 1em;
			height: auto;
		}

		.links {
			flex-direction: column;
			align-items: baseline;
			gap: 0.3em;
		}

		:global(body, html) {
			scroll-padding-top: 1em;
		}

		main {
			margin-top: 0;
			padding: 0 5%;
		}
	}
</style>
