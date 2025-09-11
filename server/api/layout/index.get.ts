import { getLayout } from '~~/services/layout/'

export default defineEventHandler(async () => {
	try {
		return await getLayout()
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
