<script lang="ts">
	import { goto } from '$app/navigation';
	import _, { locale } from '$lib/i18n/i18n-svelte';

	let selectLocale = $locale;
	function changeLocale() {
		goto(`?lang=${selectLocale}`);
	}
</script>

<select name="language" id="language-select" bind:value={selectLocale} on:change={changeLocale}>
	<option value="en">English</option>
	<option value="es">Español</option>
</select>
