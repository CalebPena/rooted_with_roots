import { detectLocale } from '$lib/i18n/i18n-util';

const langParam = 'lang';

export const load = async (event) => {
	const newLocale = event.url.searchParams.get(langParam);
	if (newLocale) {
		event.cookies.set(langParam, newLocale, { path: '/' });
		event.url.searchParams.delete(langParam);
	}

	const locale = detectLocale(() => [event.cookies.get(langParam) ?? '']);
	return { locale };
};
