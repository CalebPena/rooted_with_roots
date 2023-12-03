<script lang="ts">
	import ChangeLang from '$lib/ChangeLang.svelte';
	import Donate from '$lib/Donate.svelte';

	import translations from '$lib/i18n/i18n-svelte';

	let _ = $translations.donatePage;
	$: _ = $translations.donatePage;
</script>

<h1>{_.header.header()}</h1>
<p>
	{_.header.subheader()}
</p>
<div class="center"><ChangeLang /></div>

<div class="spacer"></div>

<section>
	<h2>{_.creditCard.header()}</h2>
	<p>
		{_.creditCard.p1()}
	</p>
	<div class="center">
		<Donate
			text={_.creditCard.button()}
			link="https://providencedenver.churchcenter.com/giving/to/rooted-with-roofs"
			newTab={true}
		/>
	</div>
</section>

<div class="spacer"></div>

<section>
	<h2>{_.check.header()}</h2>
	<p>{_.check.p1()}</p>
	<ol>
		<li>{_.check.step1()}</li>
		<li>
			{_.check.step2()}
			<div class="indented">
				<address>
					<div>Rooted with Roofs</div>
					<div>Attn: Accounting</div>
					<div>PO Box 13946</div>
					<div>Denver, CO 80201</div>
				</address>
			</div>
		</li>
	</ol>
	<p>{_.check.ps()}</p>
</section>

<div class="spacer"></div>

<section>
	<h2>{_.donorAdvising.header()}</h2>
	<p>
		{_.donorAdvising.p1()}
	</p>
	<ol>
		<li><b>{_.donorAdvising.step1.label()}:</b> {_.donorAdvising.step1.description()}</li>
		<li><b>{_.donorAdvising.step2.label()}:</b> {_.donorAdvising.step2.description()}</li>
		<li>
			<b>{_.donorAdvising.step3.label()}:</b>
			<div class="indented">
				<div>
					<b>{_.donorAdvising.step3.details.detail1.name()}:</b>
					{_.donorAdvising.step3.details.detail1.detail()}
				</div>
				<div>
					<b>{_.donorAdvising.step3.details.detail2.name()}:</b>
					{_.donorAdvising.step3.details.detail2.detail()}
				</div>
				<div>
					<b>{_.donorAdvising.step3.details.detail3.name()}:</b>
					{_.donorAdvising.step3.details.detail3.detail()}
				</div>
			</div>
		</li>
	</ol>
</section>

<div class="spacer"></div>

<p>{_.ending()}</p>

<style>
	.spacer {
		height: 3em;
	}

	.center {
		display: flex;
		justify-content: center;
	}

	.indented {
		padding-left: 1em;
	}
</style>
