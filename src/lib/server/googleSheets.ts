import { GOOGLE_SERVICE } from '$env/static/private';
import { google } from 'googleapis';

const scope = 'https://www.googleapis.com/auth/spreadsheets';

export const auth = new google.auth.GoogleAuth({
	credentials: JSON.parse(GOOGLE_SERVICE),
	scopes: [scope]
});

export const sheets = google.sheets('v4');
