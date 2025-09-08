<script setup lang="ts">
const gallery = [
	{
		id: 'ZKicdIV7QFGaPoL3f0exbg',
		url: 'https://www.datocms-assets.com/166548/1755334238-product-01.png',
		alt: 'Item: 01'
	}
]

const product = {
	id: 'dRaj1IWwSsmytoMkXKONgw',
	slug: 'item-01',
	title: 'Item: 01',
	rating: 5,
	caption: 'J.F. Murray Raw Milk, Circa 1940s',
	description: 'Good, some fading and minor edge wear',
	gallery: [
		{
			id: 'ZKicdIV7QFGaPoL3f0exbg',
			url: 'https://www.datocms-assets.com/166548/1755334238-product-01.png',
			alt: 'Item: 01'
		}
	],
	preview: {
		url: 'https://www.datocms-assets.com/166548/1755334238-product-01.png',
		alt: 'Item: 01'
	}
}
</script>

<template>
	<div class="product-info">
		<div class="container">
			<div class="product-info__items">
				<div class="product-info__item">
					<ProductGallery :gallery="gallery" />
				</div>
				<div class="product-info__item">
					<ProductDetails :product="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.product-info {
	&__items {
		border-top: 1px solid currentcolor;
		border-left: 1px solid currentcolor;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));

		@media screen and (min-width: $sm) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	&__item {
		border: 1px solid currentcolor;
		border-top: none;
		border-left: none;
		grid-column: span 1 / span 1;
	}
}
</style>
