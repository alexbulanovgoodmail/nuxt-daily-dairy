<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { useErrorHandler } from '~/composables/useErrorHandler'
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

useErrorHandler(error)

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
