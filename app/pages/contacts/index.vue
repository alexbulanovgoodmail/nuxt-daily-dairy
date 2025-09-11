<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import { toHead } from 'vue-datocms'

interface PageData {
	contact: {
		title: string
		_seoMetaTags: SeoMetaTagType[]
	}
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<PageData>('/api/contact/', {
	headers
})

if (error.value) {
	showError({
		statusCode: error.value.statusCode,
		statusMessage: error.value.message || 'Internal Server Error'
	})
}

if (data.value) {
	const { _seoMetaTags } = data.value.contact
	useHead(() => {
		return {
			htmlAttrs: {
				class: 'theme-secondary'
			},
			...toHead(_seoMetaTags || [])
		}
	})
}
</script>

<template>
	<main>
		<AppHero />
		<OurContacts />
	</main>
</template>
