<script setup lang="ts">
import type { SeoMetaTagType } from 'vue-datocms'
import type { Product } from '~~/types/Product'
import { PER_PAGE, SORT_OPTIONS } from '~~/constants'
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
const queryRef = computed(() => ({ ...route.query }))
const limit = route.query.limit ? Number(route.query.limit) : PER_PAGE
const slug = computed<string | null>(() =>
	route.params.slug ? String(route.params.slug) : null
)
const headers = useRequestHeaders()
const { data, error, execute } = useFetch<PageData>(
	() => (slug.value ? `/api/catalog/${route.params.slug}/` : `/api/catalog/`),
	{
		headers,
		query: queryRef,
		server: false, // только клиент
		immediate: false, // вручную
		lazy: true
	}
)

const products = ref<Product[]>([])
const count = computed<number>(() => data.value?._allProductsMeta.count || 0)
const pageTotal = computed<number>(() => Math.ceil(count.value / limit))

watch(data, () => {
	if (data.value) {
		products.value = data.value.allProducts

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})

watch(error, () => {
	if (error.value) {
		showError({
			statusCode: error.value.statusCode,
			statusMessage: error.value.message || 'Internal Server Error'
		})
	}
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
		<template v-if="!data">
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
