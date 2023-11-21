<script>
	import { enhance } from '$app/forms';
	import Donate from '$lib/Donate.svelte';
	import ImageGallary from '$lib/ImageGallary.svelte';
</script>

<h1>Rooted With Roofs</h1>

<ImageGallary />
<div class="donate">
	<Donate />
</div>

<div class="spacer"></div>

<section class="story-section">
	<h2 id="story">Our Story</h2>
	<p class="story">
		Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi
		repellendus expedita dolorem. Similique et temporibus velit repudiandae reprehenderit blanditiis
		tempora, minus qui eos nisi nobis aperiam adipisci voluptatem, ducimus delectus iste modi ullam
		amet dolor. Numquam quae ipsa dolorum dolor, quod mollitia molestias reprehenderit laudantium
		sapiente commodi facilis ipsum nulla perspiciatis eius nihil iste veritatis laborum nam,
		provident saepe neque facere doloremque nostrum consequuntur? Doloribus inventore similique,
		neque sequi molestias adipisci animi, ducimus aspernatur reiciendis molestiae officiis!
		Assumenda magni dignissimos quod, dolore quisquam accusamus voluptatibus hic voluptas, vero
		illum quasi repellat a adipisci eveniet, labore iste. Nisi, maiores laboriosam.
	</p>
</section>

<div class="spacer"></div>

<section class="mission-section">
	<h2 id="mission">Our Mission</h2>
	<p class="mission">
		Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi
		repellendus expedita dolorem. Similique et temporibus velit repudiandae reprehenderit blanditiis
		tempora, minus qui eos nisi nobis aperiam adipisci voluptatem, ducimus delectus iste modi ullam
		amet dolor. Numquam quae ipsa dolorum dolor, quod mollitia molestias reprehenderit laudantium
		sapiente commodi facilis ipsum nulla perspiciatis eius nihil iste veritatis laborum nam,
		provident saepe neque facere doloremque nostrum consequuntur? Doloribus inventore similique,
		neque sequi molestias adipisci animi, ducimus aspernatur reiciendis molestiae officiis!
		Assumenda magni dignissimos quod, dolore quisquam accusamus voluptatibus hic voluptas, vero
		illum quasi repellat a adipisci eveniet, labore iste. Nisi, maiores laboriosam.
	</p>
</section>

<div class="donate">
	<Donate />
</div>

<div class="spacer"></div>

<section class="resources-section">
	<h2 id="resources">Resources</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, et.</p>
	<address>
		<a href="https://maps.app.goo.gl/zcFBRHvjvhJsJp2t5" class="address">
			3815 Steele St, Denver, CO 80205
		</a>
	</address>
</section>

<div class="spacer"></div>

<section class="mail-section">
	<h2 id="mail-list">Mail List</h2>
	<p class="mail-description">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatem!
	</p>
	<form action="/email" method="POST" class="email-form">
		<label for="name">Name</label><input type="text" id="name" name="name" required />
		<label for="email">Email</label><input type="email" id="email" name="email" required />
		<button type="submit">Submit</button>
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

	.spacer {
		padding: 2em;
	}

	h2 {
		text-align: center;
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
