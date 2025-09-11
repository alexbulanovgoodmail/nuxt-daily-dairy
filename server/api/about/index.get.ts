import { getAbout } from '~~/services/about/'

export default defineEventHandler(async () => {
	try {
		return await getAbout()
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
