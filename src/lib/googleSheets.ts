import { google } from 'googleapis';

const scope = 'https://www.googleapis.com/auth/spreadsheets';

export const auth = new google.auth.GoogleAuth({
	keyFile: 'googleCredentials.json',
	scopes: [scope]
});

export const sheets = google.sheets('v4');
