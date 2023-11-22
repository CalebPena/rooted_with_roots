import { SPREADSHEET_ID } from '$env/static/private';
import { sheets, auth } from '$lib/server/googleSheets.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const time = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });

		await sheets.spreadsheets.values.append({
			auth,
			spreadsheetId: SPREADSHEET_ID,
			range: 'Contacts!A:C',
			valueInputOption: 'RAW',
			requestBody: {
				values: [[name, email, time]]
			}
		});

		throw redirect(302, '/#mail-list');
	}
};

export function load() {
	throw redirect(308, '/');
}
