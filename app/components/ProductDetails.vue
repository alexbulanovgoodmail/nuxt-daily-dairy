<script setup lang="ts">
import type { Product } from '~~/types/Product'
import { StructuredText as DatocmsStructuredText } from 'vue-datocms'
import { useDialog } from '~/composables/useDialog'
import { useDatoRender } from '~/composables/useDatoRender'
import ContactForm from '~/components/ContactForm.vue'

interface Props {
	product: Product
}

defineProps<Props>()

const { openModal } = useDialog()
const handleInquire = (): void => {
	openModal({
		modalProps: {
			title: 'Send an Inquiry',
			description: 'Fill out the form below, and we’ll get back to you shortly.'
		},
		component: ContactForm,
		componentProps: {
			onSubmitSuccess: handleSubmitSuccess,
			onSubmitFailure: handleSubmitFailure
		}
	})
}

const handleSubmitSuccess = (response: any): void => {
	const { message, receivedData } = response
	const { name, email, message: comment } = receivedData

	openModal({
		modalProps: {
			title: 'Thank you for contacting us',
			description: `
			${message}\n
			Your application has been accepted and is currently being processed.
			name:  ${name},
			e-mail: ${email},
			message: ${comment}
			`
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

const { renderBlock } = useDatoRender()
</script>

<template>
	<div class="product-details">
		<div class="product-details__content">
			<p class="product-details__title">{{ product.title }}</p>
			<p class="product-details__caption">{{ product.caption }}</p>
			<p class="product-details__description">{{ product.description }}</p>

			<DatocmsStructuredText
				:data="product.content"
				:render-block="renderBlock"
			/>
		</div>
		<div class="product-details__action">
			<UIButton label="Inquire" @click="handleInquire" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.product-details {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 36px;

	@media screen and (min-width: $sm) {
		padding: 24px;
	}

	@media screen and (min-width: $lg) {
		padding: 36px;
	}

	&__content,
	&__content :deep(div) {
		text-wrap: pretty;

		@include user-content;
	}

	&__content:not(:last-child) {
		margin-bottom: 50px;
	}

	&__action {
		margin-top: auto;
		display: flex;

		& > * {
			width: 100%;
		}
	}
}
</style>
