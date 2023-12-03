<script lang="ts">
	import _ from '$lib/i18n/i18n-svelte';
	import type { LocalizedString } from 'typesafe-i18n';

	export let link: string = '/donate';
	export let text: () => LocalizedString = $_.donate;

	// https://providencedenver.churchcenter.com/giving/to/rooted-with-roofs
</script>

<a href={link} target="_blank" rel="noreferrer noopener">
	{text()}
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
