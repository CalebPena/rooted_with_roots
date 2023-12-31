import type { BaseTranslation } from '../i18n-types';

const en = {
	header: {
		story: 'Story',
		mission: 'Mission',
		give: 'Why Give',
		resources: 'Resources'
	},
	donate: 'DONATE',
	landingPage: {
		story: {
			header: 'Our Story',
			bodyP1:
				'On December 4th, 2022, 60 homeless and jobless Venezuelan migrants arrived at the doors of our church building. We had no idea they were coming that day, but we instantly knew that we were looking at a great opportunity - an opportunity to love and serve them! Without knowing how much time it would take or the financial cost, we committed to helping those 60 find work, housing, and, most of all, community.',
			bodyP2:
				'At the time of that promise, we had no idea that this was just the beginning of the wave of migrants coming into Denver. Over the past year, thousands have come to settle in Denver, and our original promise was not only met but grew.',
			bodyP3:
				'Our approach has been simple. First of all, we want to help people feel rooted in the community. This has involved helping with a lot of different things: transportation, job applications, translation, and, most of all, connecting them with other recent arrivals, who are often the source of both practical and social support. Then we have worked to help them obtain roofs over their heads through helping with apartment applications, security deposits, furnishings, and fees. We have attempted to say yes as often as we can, even when the resources have been depleted. Through the whole process, we have learned that saying yes to simple things results in big things. This is evident in the fact that we now have helped over 300 migrants settle into 60 different apartments throughout the metro area… and the need continues…'
		},
		mission: {
			header: 'Our Mission',
			body: 'Our mission is to empower and support recent migrants in Denver by providing employment opportunities and sustainable housing. We aim to create a supportive community environment that helps each family unit integrate smoothly into their new community, ensuring they have the resources for long-term stability and success.'
		},
		action: {
			header: 'Why Give?',
			bodyP1:
				'Imagine arriving in a new country, with hope in your heart but uncertainty at your doorstep. This has been the reality for thousands of Venezuelan migrants who have come to Denver, seeking a fresh start and a brighter future.',
			bodyP2:
				'But the need continues to grow. As more families arrive, the challenges multiply. The city of Denver, while supportive, cannot meet all the needs, especially in areas of employment and long-term housing. This is where we step in, and where we need your help.',
			bodyP3:
				"Our mission is clear: To empower and support these new arrivals by providing them with employment opportunities, sustainable housing, and a community that welcomes them with open arms. We've seen how simple acts of support can lead to transformative changes. Every job application, every translation, every connection made, it all adds up to a life rebuilt.",
			bodyP4:
				'Our vision has evolved into a robust employment-to-housing model, already aiding hundreds. But to continue to reach families in need, we need your support.',
			bodyP5:
				'Consider this: With just $3,000, we can help a family transition from uncertainty to stability. This amount covers everything from employment support to furnishing their first apartment with essential items, including furniture and kitchen essentials. Our goal for the upcoming year is both ambitious and vital – we aim to provide housing for hundreds of immigrants by securing 60 additional apartments, a goal that requires $180,000.',
			bodyP6:
				"Your donation, no matter how small, can spark generational change. It's not just about the money; it's about the message it sends - that these families are not alone, that their hopes and dreams are valid, and that together, we can build a community where everyone thrives.",
			bodyP7: `So we invite you, be a part of this journey. Donate today, and join us in turning hopes into homes, and dreams into realities. Together, we can ensure that every migrant family in Denver finds the stability, support, and success they deserve. Your contribution to "Rooted with Roofs" is more than just a donation; it's a lifeline to those in need, a foundation for new beginnings.`,
			bodyP8: 'Be the change. Donate now.'
		},
		resources: {
			header: 'Resources',
			descriptionP1: 'The ',
			descriptionP2:
				' details ways to assist migrants, including essential item donations, financial contributions to the Newcomers Fund, and information on integration opportunities. Additionally, it features a ',
			descriptionP3:
				" showing current and historical data on the city's migrant support efforts, including the number of migrants arriving in Denver, those served, and the current number in city and non-city facilities.",
			website: "City and County of Denver's Migrant Support webpage",
			websiteLink: 'https://www.denvergov.org/Community/Assistance-Programs/Migrant-Support',
			dashboard: 'dashboard',
			dashboardLink:
				'https://app.powerbigov.us/view?r=eyJrIjoiNWQ4YjcwZDctODkwNy00YjA4LThlMTktMjM3YjU2NmIwZTRjIiwidCI6IjM5Yzg3YWIzLTY2MTItNDJjMC05NjIwLWE2OTZkMTJkZjgwMyJ9'
		},
		mailList: {
			header: 'Mail List',
			description: 'Join our mail list for updates',
			name: 'Name',
			email: 'Email',
			button: 'Submit'
		}
	},
	donatePage: {
		header: {
			header: 'Ways to Give to Rooted with Roofs',
			subheader:
				'Rooted With Roofs, operating under Providence Bible Church, is recognized as a tax-exempt organization under section 501(c)(3) of the Internal Revenue Code. All donations are 100% tax deductible. We offer three convenient methods for making a donation:'
		},
		creditCard: {
			header: 'Credit Card',
			p1: 'For a quick and secure way to donate, you can use your credit card. Click the button bellow to donate with your credit/debit card.',
			button: 'DONATE WITH CARD'
		},
		check: {
			header: 'Check',
			p1: 'If you prefer to donate by check, please follow these steps:',
			step1: 'Make check payable to "Rooted With Roofs"',
			step2: 'Mail to:',
			ps: 'Please ensure your check is payable to "Rooted with Roofs", as this helps us process your donation efficiently.'
		},
		donorAdvising: {
			header: 'Donor-Advised Fund (DAF)',
			p1: "Giving through a Donor-Advised Fund is an efficient and flexible way to manage your charitable giving. Here's how you can donate through a DAF:",
			step1: {
				label: 'Contact Your DAF Manager',
				description:
					'Reach out to the financial institution or foundation that oversees your Donor-Advised Fund.'
			},
			step2: {
				label: 'Recommend a Grant',
				description:
					"When recommending a grant, please remember that Rooted with Roofs is a DBA of Providence Bible Church. You can usually make this recommendation online via your DAF's portal, by phone, or through a form provided by your DAF sponsor."
			},
			step3: {
				label: 'Provide Necessary Details',
				details: {
					detail1: { name: 'Legal Name of Charity', detail: 'Providence Bible Church' },
					detail2: { name: 'Address', detail: 'PO Box 13946, Denver, CO 80201' },
					detail3: { name: 'Tax ID/EIN', detail: '20-8596948' },
					detail4: {
						name: 'Purpose',
						detail:
							'Specify that the grant is for "Rooted with Roofs" to ensure the correct allocation of funds.'
					}
				}
			}
		},
		ending:
			'Your support and contributions to Rooted with Roofs are greatly appreciated and play a vital role in our mission. Should you have any questions or need assistance with your donation, please do not hesitate to contact us at slanzen@providencedenver.org.'
	}
} satisfies BaseTranslation;

export default en;
