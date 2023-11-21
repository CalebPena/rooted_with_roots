import { browser } from '$app/environment';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import { sessionStorageDetector, navigatorDetector } from 'typesafe-i18n/detectors';
import { loadAllLocales } from '$lib/i18n/i18n-util.sync';

export const load = (event) => {
	const deafultLocale = 'en';
	if (browser) {
		const locale =
			detectLocale(sessionStorageDetector) || detectLocale(navigatorDetector) || deafultLocale;

		loadAllLocales();
		setLocale(locale);
	} else {
		loadAllLocales();
		setLocale(deafultLocale);
	}

	return event.data;
};
