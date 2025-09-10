<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { PER_PAGE, SORT_OPTIONS } from '~~/constants'
import { useErrorHandler } from '~/composables/useErrorHandler'
import { toHead } from 'vue-datocms'

interface PageData {
	catalog: {
		_seoMetaTags: SeoMetaTagType[]
	}
	_allProductsMeta: {
		count: number
	}
	allProducts: Product[]
}

const route = useRoute()
const computedQuery = computed(() => ({ ...route.query }))
const limit = route.query.limit ? Number(route.query.limit) : PER_PAGE

const headers = useRequestHeaders()
const { data, error, execute, status } = useFetch<PageData>(
	() => `/api/catalog/${route.params.slug}/`,
	{
		headers,
		query: computedQuery,
		server: false, // только клиент
		immediate: false, // вручную
		lazy: true
	}
)

useErrorHandler(error)

const loading = computed<boolean>(() => status.value === 'pending')
const products = computed<Product[]>(() => data.value?.allProducts || [])
const count = computed<number>(() => data.value?._allProductsMeta.count || 0)
const pageTotal = computed<number>(() => Math.ceil(count.value / limit))

watch(computedQuery, () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(async () => {
	await execute()

	if (data.value) {
		const { _seoMetaTags } = data.value.catalog
		useHead(() => {
			return {
				...toHead(_seoMetaTags || [])
			}
		})
	}
})
</script>

<template>
	<main>
		<template v-if="!data && loading">
			<UILoader :size="96" :style="{ margin: '56px 0' }" />
		</template>
		<template v-else>
			<ProductCatalog
				:options="SORT_OPTIONS"
				:products="products"
				:page-total="pageTotal"
			/>
		</template>
	</main>
</template>
