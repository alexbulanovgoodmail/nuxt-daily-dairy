<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { toHead } from 'vue-datocms'

interface PageData {
	home: {
		title: string
		_seoMetaTags: SeoMetaTagType[]
		popular: Product[]
	}
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/home/', {
	headers
})

if (error.value) {
	showError({
		statusCode: error.value.statusCode,
		statusMessage: error.value.message || 'Internal Server Error'
	})
}

if (data.value) {
	const { _seoMetaTags } = data.value.home
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
		<PopularProducts :products="data.home.popular" />
	</main>
</template>
