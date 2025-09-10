<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { useErrorHandler } from '~/composables/useErrorHandler'
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

useErrorHandler(error)

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
