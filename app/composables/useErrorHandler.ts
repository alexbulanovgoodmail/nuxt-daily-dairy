import { watch } from 'vue'

export function useErrorHandler(error: Ref<any>) {
	if (import.meta.server && error.value) {
		console.log('eeee server >>>', error)
		// SSR - сразу выбрасываем ошибку, чтобы Nuxt показал error page
		throw createError({
			statusCode: error.value.statusCode || 500,
			statusMessage: error.value.statusMessage || 'Internal Server Error',
			fatal: true
		})
	}

	if (import.meta.client) {
		console.log('eeee client >>>', error)
		// CSR - реагируем асинхронно
		watch(
			error,
			err => {
				if (err) {
					// Показ уведомления (опционально)
					showError({
						statusCode: err.statusCode || 500,
						statusMessage: err.statusMessage || 'Internal Server Error'
					})
				}
			},
			{ immediate: true }
		)
	}
}
