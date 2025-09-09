import type { Anchor } from '~~/types/Anchor'
import { defineStore } from 'pinia'

interface LayoutState {
	_site?: {
		faviconMetaTags: Array<{
			tag: string
			content: string
			attributes: Record<string, string>
		}>
	}
	_navigations: Anchor[]
}

export const storeLayout = defineStore('layout', {
	state: (): LayoutState => ({
		_navigations: [],
		_site: undefined
	}),

	getters: {
		navigations: state => state._navigations,
		site: state => state._site
	},

	actions: {
		async fetch() {
			try {
				const response = await $fetch<{
					layout: {
						navigations: Anchor[]
					}
					_site: any
				}>('/api/layout/')

				this._navigations = response.layout.navigations
				this._site = response._site
			} catch (error: any) {
				throw createError({
					statusCode: error.statusCode || 500,
					statusMessage: error.statusMessage || error.message,
					fatal: true
				})
			}
		}
	}
})
