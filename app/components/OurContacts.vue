<script setup lang="ts">
import { useDialog } from '~/composables/useDialog'

const { openModal } = useDialog()

const handleSubmitSuccess = (): void => {
	openModal({
		modalProps: {
			title: 'Thank you for contacting us',
			description:
				'Your application has been accepted and is currently being processed.'
		}
	})
}

const handleSubmitFailure = (): void => {
	openModal({
		modalProps: {
			title: 'An error has occurred',
			description:
				'We are aware of the problem and are already addressing it. Please refresh the page or try to come back later...'
		}
	})
}
</script>

<template>
	<section class="our-contacts">
		<div class="container">
			<h1 class="our-contacts__title visually-hidden">Our Contacts</h1>
			<div class="our-contacts__wrapper">
				<ContactForm
					@submit-success="handleSubmitSuccess"
					@submit-failure="handleSubmitFailure"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.our-contacts {
	margin-bottom: 50px;

	&__title {
		margin: 48px 0;
		text-align: center;

		@include typo-h1;
	}

	&__wrapper {
		margin: 0 auto;
		max-width: 640px;
	}
}
</style>
