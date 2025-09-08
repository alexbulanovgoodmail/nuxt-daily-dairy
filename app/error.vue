<script setup lang="ts">
const error = useError()

function handleError() {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<div v-if="error" class="error">
		<div class="container">
			<div class="error__wrapper">
				<h1 class="error__status-code">{{ error.statusCode }}</h1>

				<div class="error__back">
					<UIButton label="Go back home" @click="handleError" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.error {
	display: flex;
	align-items: center;

	&__wrapper {
		padding: 50px 0;
	}

	&__status-code {
		margin: 0 0 48px;
		text-align: center;

		@include typo-headline;
	}

	&__back {
		text-align: center;
	}

	&__back > * {
		width: 100%;

		@media screen and (min-width: $md) {
			width: initial;
		}
	}
}
</style>
