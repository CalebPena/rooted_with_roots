<script lang="ts">
	import ImageGallery from '@react2svelte/image-gallery';
	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/'
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/'
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/'
		}
	];

	let styledImages = images.map((img) => {
		return {
			original: img.original,
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
	/>
</div>

<style>
	:global(.image-gallery-thumbnail) {
		display: none;
	}
</style>
