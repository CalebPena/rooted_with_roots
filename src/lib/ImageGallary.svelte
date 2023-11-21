<script lang="ts">
	import ImageGallery from '@react2svelte/image-gallery';
	const images = [
		'/images/IMG_0312.jpg',
		'/images/IMG_1120.jpg',
		'/images/IMG_1581.jpeg',
		'/images/IMG_4874.jpg',
		'/images/IMG_4315.jpg',
		'/images/IMG_4507.jpg',
		'/images/IMG_4611.jpg'
	];

	let styledImages = images.map((src) => {
		return {
			original: src,
			thumbnailClass: 'image-gallery-thumbnail'
		};
	});
</script>

<div class="container">
	<ImageGallery
		items={styledImages}
		showPlayButton={false}
		autoPlay={true}
		showFullscreenButton={false}
		slideInterval={5000}
	/>
</div>

<style>
	:global(.image-gallery-thumbnail) {
		display: none;
	}
</style>
