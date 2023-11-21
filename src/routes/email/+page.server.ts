import { SPREADSHEET_ID } from '$env/static/private';
import { sheets, auth } from '$lib/googleSheets.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');

		await sheets.spreadsheets.values.append({
			auth,
			spreadsheetId: SPREADSHEET_ID,
			range: 'Contacts!A:B',
			valueInputOption: 'RAW',
			requestBody: {
				values: [[name, email]]
			}
		});

		throw redirect(302, '/#mail-list');
	}
};
