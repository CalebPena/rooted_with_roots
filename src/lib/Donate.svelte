<script lang="ts">
	import _ from '$lib/i18n/i18n-svelte';

	export let text: string;
	export let link = '/donate';
	export let newTab = false;
</script>

<a
	href={link}
	target={newTab ? '_blank' : ''}
	rel={newTab ? 'noreferrer noopener' : ''}
	data-sveltekit-preload-data="hover"
>
	{text}
</a>

<style>
	a {
		color: var(--primary-color);
		background-color: var(--action-color);
		padding: 0.5em;
		border-radius: 1em;
		text-decoration: none;
		font-weight: bold;
		border: 0.1em solid var(--primary-color);
		transition: transform 100ms linear;
		display: inline-block;
	}

	a:hover,
	a:focus,
	a:focus-visible {
		transform: scale(1.15);
		outline: 0.1em solid var(--secondary-color);
	}
</style>
