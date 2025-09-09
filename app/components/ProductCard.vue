<script setup lang="ts">
import type { Product } from '~~/types/Product'

interface Props {
	product: Product
}

const { product } = defineProps<Props>()
</script>

<template>
	<NuxtLink class="product-card" :to="`/product/${product.slug}`">
		<div class="product-card__img-container">
			<UILoader class="product-card__loader" />
			<img
				class="product-card__img"
				:src="product.preview.url"
				width="372"
				height="384"
				:alt="product.preview.alt"
			/>
		</div>
		<div class="product-card__content">
			<p class="product-card__title">{{ product.title }}</p>
			<p class="product-card__caption">{{ product.caption }}</p>
			<p class="product-card__description">
				{{ product.description }}
			</p>
		</div>
	</NuxtLink>
</template>

<style scoped lang="scss">
.product-card {
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 50px 0 0;
	color: currentcolor;
	overflow: hidden;
	text-decoration: none;

	@media screen and (min-width: $xl) {
		padding: 90px 0;
	}

	&::after {
		content: '';
		position: absolute;
		z-index: 1;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-1);
		opacity: 0;
		transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
		pointer-events: none;
	}

	&__img-container {
		position: relative;
		z-index: 10;
		margin: 0 auto;
		width: 100%;
		padding: 0 var(--padding-image-offset, 30px);

		&::after {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100%);
		}

		@media screen and (min-width: $md) {
			padding: 0 var(--padding-image-offset, 80px);
		}

		@media screen and (min-width: $xl) {
			padding: 0 var(--padding-image-offset, 120px);
		}
	}

	&__img {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transform-origin: 50% 50%;
		transform: translate(-50%, -50%);
		filter: drop-shadow(0 4px 4px rgb(0 0 0 / 25%));
		transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	&__loader {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: currentcolor;
	}

	&__content {
		position: relative;
		z-index: 10;
		padding: 30px;
		text-align: center;
	}

	&__title {
		margin-bottom: 10px;

		@include typo-c1;
	}

	&__caption {
		@include typo-c2;
	}

	&__description {
		@include typo-c1;
	}

	@media (hover: hover) {
		&:hover,
		&:focus-visible {
			&::after {
				opacity: 0.1;
			}
		}

		&:hover &__img,
		&:focus-visible &__img {
			transform: translate(-50%, -50%) rotate(-10deg);
		}
	}
}
</style>
