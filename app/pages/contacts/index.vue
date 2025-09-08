<script setup lang="ts">
useHead(() => {
	return {
		htmlAttrs: {
			class: 'theme-secondary'
		}
	}
})
</script>

<template>
	<main>
		<AppHero />
		<OurContacts />
	</main>
</template>
