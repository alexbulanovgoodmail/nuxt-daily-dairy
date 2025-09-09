import { watch } from 'vue'

export function useErrorHandler(error: Ref<any>) {
	if (import.meta.server && error.value) {
		throw createError({
			statusCode: error.value.statusCode || 500,
			statusMessage: error.value.statusMessage || 'Internal Server Error',
			fatal: true
		})
	}

	if (import.meta.client) {
		watch(
			error,
			err => {
				if (err) {
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
