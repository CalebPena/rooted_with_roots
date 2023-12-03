import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import { loadAllLocalesAsync } from '$lib/i18n/i18n-util.async';
import { navigatorDetector } from 'typesafe-i18n/detectors';

export const load = (async (event) => {
	const locale = detectLocale(() => [event.data.locale], navigatorDetector);
	await loadAllLocalesAsync();
	setLocale(locale);

	return event.data;
}) satisfies LayoutLoad;
