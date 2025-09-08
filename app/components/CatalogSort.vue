<script setup lang="ts">
import type { Option } from '~~/types/Option'

interface Props {
	options: Option[]
}

const { options } = defineProps<Props>()

const route = useRoute()
const router = useRouter()

const selected = computed<Option>({
	get() {
		const defaultOption = options[0]!

		if (route.query.sort) {
			const option = options.find((o: Option) => o.value === route.query.sort)

			return option ? option : defaultOption
		} else {
			return defaultOption
		}
	},
	set(newValue: Option) {
		const query = { ...route.query }
		delete query.page

		query.sort = newValue.value

		router.push({ query })
	}
})
</script>

<template>
	<div class="catalog-sort">
		<div class="container">
			<div class="catalog-sort__wrapper">
				<UISelect v-model="selected" :options="options" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.catalog-sort {
	margin: 24px 0;

	&__wrapper {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
