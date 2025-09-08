<script setup lang="ts">
import type { Product } from '~~/types/Product'

interface Props {
	products: Product[]
}

const { products } = defineProps<Props>()
</script>

<template>
	<section class="popular-products">
		<div class="container">
			<h2 class="popular-products__title visually-hidden">Most popular</h2>
		</div>

		<ProductFeed :products="products" />

		<div class="container">
			<div class="popular-products__more">
				<UIButton label="See more" to="/catalog/" />
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.popular-products {
	&__title {
		margin: 48px 0;
		text-align: center;

		@include typo-h1;
	}

	&__more {
		margin: 50px 0;
		text-align: center;
	}

	&__more > * {
		width: 100%;

		@media screen and (min-width: $md) {
			width: initial;
		}
	}
}
</style>
