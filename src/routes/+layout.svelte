<script lang="ts">
	import Donate from '$lib/Donate.svelte';
</script>

<nav>
	<!-- <a href="/" class="logo">Roots</a> -->
	<div class="links">
		<a href="/#story">Story</a>
		<a href="/#mission">Mission</a>
		<a href="/#resources">Resources</a>
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
		scroll-padding-top: 5em;
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
	}

	.links > a {
		color: var(--secondary-color);
		font-weight: bold;
		text-decoration: none;
	}

	.links > a:hover {
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		nav {
			flex-direction: column;
			height: 7em;
		}

		:global(body, html) {
			scroll-padding-top: 8em;
		}

		main {
			margin-top: 7em;
			padding: 0 5%;
		}
	}

	@media (max-width: 650px) {
		nav {
			align-items: baseline;
			position: unset;
			gap: 1em;
			height: auto;
		}

		.links {
			flex-direction: column;
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
