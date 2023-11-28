import { browser } from '$app/environment';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { baseLocale, detectLocale } from '$lib/i18n/i18n-util';
import {
	navigatorDetector,
	localStorageDetector,
	queryStringDetector
} from 'typesafe-i18n/detectors';
import { loadAllLocales } from '$lib/i18n/i18n-util.sync';

export const load = (event) => {
	loadAllLocales();
	if (browser) {
		const locale = detectLocale(queryStringDetector, localStorageDetector, navigatorDetector);

		setLocale(locale);
	} else {
		setLocale(baseLocale);
	}

	return event.data;
};
