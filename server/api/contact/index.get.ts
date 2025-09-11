import { getContact } from '~~/services/contact/'

export default defineEventHandler(async () => {
	try {
		return await getContact()
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
