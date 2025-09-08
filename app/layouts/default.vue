<script setup lang="ts"></script>

<template>
	<div class="default">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<style scoped lang="scss">
.default {
	display: flex;
	flex-direction: column;
	height: 100%;

	:deep(main) {
		flex: 1 1 auto;
	}
}
</style>
