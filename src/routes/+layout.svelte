<script lang="ts">
	import Donate from '$lib/Donate.svelte';
</script>

<nav>
	<a href="/" class="logo">Roots</a>
	<div class="links">hello</div>
	<Donate />
</nav>

<main>
	<slot />
</main>

<style>
	:global(:root) {
		--primary-color: #000000;
		--secondary-color: #ffffff;
		--accent-color: #32cd32;
		font-size: 22px;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background-color: #eeeeee;
	}

	main {
		padding: 0 15%;
		margin-top: 4em;
	}

	nav {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		height: 4em;
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
</style>
