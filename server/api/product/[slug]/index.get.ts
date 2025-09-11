import { getProduct } from '~~/services/product/'

export default defineEventHandler(async event => {
	try {
		return await getProduct(event)
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
