<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
	<div>
		<NuxtLoadingIndicator :color="'var(--color-1)'" />
		<NuxtLayout>
			<NuxtPage />
			<ModalsContainer />
		</NuxtLayout>
	</div>
</template>
