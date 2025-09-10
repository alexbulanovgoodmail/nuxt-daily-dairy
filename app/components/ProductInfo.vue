<script setup lang="ts">
import type { Product } from '~~/types/Product'

interface Props {
	product: Product
}

defineProps<Props>()
</script>

<template>
	<div class="product-info">
		<div class="container">
			<div class="product-info__items">
				<div class="product-info__item">
					<ProductGallery v-if="product.gallery" :gallery="product.gallery" />
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
