<script>
	import Donate from '$lib/Donate.svelte';
	import ImageGallary from '$lib/ImageGallary.svelte';

	import _, { locale, setLocale } from '$lib/i18n/i18n-svelte';

	let selectLocale = $locale;
	function changeLocale() {
		setLocale(selectLocale);
		localStorage.setItem('lang', selectLocale);
	}
</script>

<h1>Rooted With Roofs</h1>

<ImageGallary />
<div class="donate">
	<select name="language" id="language-select" bind:value={selectLocale} on:change={changeLocale}>
		<option value="en">English</option>
		<option value="es">Español</option>
	</select>
</div>

<div class="spacer"></div>

<section class="story-section">
	<h2 id="story">{$_.story.header()}</h2>
	<p class="story">{$_.story.bodyP1()}</p>
	<p class="story">{$_.story.bodyP2()}</p>
	<p class="story">{$_.story.bodyP3()}</p>
</section>

<div class="spacer"></div>

<section class="mission-section">
	<h2 id="mission">{$_.mission.header()}</h2>
	<p class="mission">{$_.mission.body()}</p>
</section>

<div class="spacer"></div>

<section class="why-give">
	<h2 id="why-give">{$_.action.header()}</h2>
	<p class="why-give">{$_.action.bodyP1()}</p>
	<p class="why-give">{$_.action.bodyP2()}</p>
	<p class="why-give">{$_.action.bodyP3()}</p>
	<p class="why-give">{$_.action.bodyP4()}</p>
	<p class="why-give">{$_.action.bodyP5()}</p>
	<p class="why-give">{$_.action.bodyP6()}</p>
	<p class="why-give">{$_.action.bodyP7()}</p>
	<p class="why-give">{$_.action.bodyP8()}</p>
</section>

<div class="donate">
	<Donate />
</div>

<div class="spacer"></div>

<section class="resources-section">
	<p>
		{$_.resources.descriptionP1()}
		<a href={$_.resources.websiteLink()} class="gov-link" target="_blank">
			{$_.resources.website()}
		</a>
		{$_.resources.descriptionP2()}
		<a href={$_.resources.dashboardLink()} class="gov-link" target="_blank">
			{$_.resources.dashboard()}
		</a>
		{$_.resources.descriptionP3()}
	</p>
</section>

<div class="spacer"></div>

<section class="mail-section">
	<h2 id="mail-list">{$_.mailList.header()}</h2>
	<p class="mail-description">
		{$_.mailList.description()}
	</p>
	<form action="/email" method="POST" class="email-form">
		<label for="name">{$_.mailList.name()}</label>
		<input type="text" id="name" name="name" required />
		<label for="email">{$_.mailList.email()}</label>
		<input type="email" id="email" name="email" required />
		<button type="submit">{$_.mailList.button()}</button>
	</form>
</section>

<style>
	h1 {
		text-align: center;
		padding-top: 1em;
	}

	.donate {
		text-align: center;
	}

	select {
		font-size: 1em;
	}

	.spacer {
		padding: 2em;
	}

	h2 {
		text-align: center;
	}

	.gov-link {
		color: #00247d;
		font-weight: bold;
	}

	.mail-section {
		height: 20em;
	}

	.mail-description {
		text-align: center;
	}

	.email-form {
		display: flex;
		justify-content: center;
		gap: 0.3em;
		font-size: 1.5em;
	}

	.email-form > input {
		font-size: 1em;
		margin-bottom: 0.5em;
	}

	.email-form > button {
		font-size: 1em;
		height: 100%;
		background-color: var(--primary-color);
		color: var(--secondary-color);
		cursor: pointer;
	}

	.email-form > button:hover {
		color: var(--action-color);
		box-shadow: 0.05em 0.05em 0em 0.05em var(--action-color);
	}

	@media (max-width: 1600px) {
		.email-form {
			flex-direction: column;
		}

		.mail-section {
			height: 40em;
		}
	}
</style>
