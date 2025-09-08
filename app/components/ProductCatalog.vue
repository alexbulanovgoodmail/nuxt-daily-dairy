<script setup lang="ts">
import type { Product } from '~~/types/Product'
import type { Option } from '~~/types/Option'

interface Props {
	options?: Option[]
	products?: Product[]
	pageTotal: number
}

const { products = [], options = undefined } = defineProps<Props>()
</script>

<template>
	<div class="product-catalog">
		<CatalogSort v-if="options && options.length > 0" :options="options" />
		<ProductFeed :products="products" />
		<UIPagination v-if="pageTotal > 1" :page-total="pageTotal" />
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
