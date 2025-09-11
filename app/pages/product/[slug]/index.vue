<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { toHead } from 'vue-datocms'

interface PageData {
	product: Product & {
		_seoMetaTags: SeoMetaTagType[]
	}
}

const route = useRoute()
const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>(
	`/api/product/${route.params.slug}/`,
	{
		headers
	}
)

if (error.value) {
	showError({
		statusCode: error.value.statusCode,
		statusMessage: error.value.message || 'Internal Server Error'
	})
}

if (data.value) {
	const { _seoMetaTags } = data.value.product
	useHead(() => {
		return {
			...toHead(_seoMetaTags || [])
		}
	})
}
</script>

<template>
	<main v-if="data">
		<AppHero />
		<ProductInfo :product="data.product" />
	</main>
</template>
