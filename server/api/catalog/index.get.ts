import { getCatalog } from '~~/services/catalog/'

export default defineEventHandler(async event => {
	try {
		return await getCatalog(event)
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
