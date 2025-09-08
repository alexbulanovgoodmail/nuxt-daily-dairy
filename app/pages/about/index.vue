<script setup lang="ts">
import type { SeoMetaTagType, StructuredTextDocument } from 'vue-datocms'
import { useErrorHandler } from '~/composables/useErrorHandler'
import { toHead } from 'vue-datocms'

interface PageData {
	about: {
		_seoMetaTags: SeoMetaTagType[]
		content: StructuredTextDocument
	}
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/about/', {
	headers
})

useErrorHandler(error)

if (data.value) {
	const { _seoMetaTags } = data.value.about
	useHead(() => {
		return {
			...toHead(_seoMetaTags || [])
		}
	})
}
</script>

<template>
	<main v-if="data">
		<AboutUs :content="data?.about.content" />
	</main>
</template>
