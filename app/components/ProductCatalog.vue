<script setup lang="ts">
import type { Product } from '~~/types/Product'
import type { Option } from '~~/types/Option'

interface Props {
	pageTotal: number
	options?: Option[]
	products?: Product[]
}

const { products = [], options = undefined } = defineProps<Props>()
</script>

<template>
	<div class="product-catalog">
		<CatalogSort v-if="options && options.length > 0" :options="options" />
		<ProductFeed :products="products" />

		<UIPagination :page-total="pageTotal" />
	</div>
</template>

<style scoped lang="scss">
.product-catalog {
	margin-top: -1px;

	@media screen and (min-width: $md) {
		margin: 0;
		padding-top: 40px;
	}
}
</style>
