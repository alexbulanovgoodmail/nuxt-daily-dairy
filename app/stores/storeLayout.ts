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
	_socials: Anchor[]
}

export const storeLayout = defineStore('layout', {
	state: (): LayoutState => ({
		_navigations: [],
		_socials: [],
		_site: undefined
	}),

	getters: {
		navigations: state => state._navigations,
		socials: state => state._socials,
		site: state => state._site
	},

	actions: {
		async fetch() {
			try {
				const response = await $fetch<{
					layout: {
						navigations: Anchor[]
						socials: Anchor[]
					}
					_site: any
				}>('/api/layout/')

				this._navigations = response.layout.navigations
				this._socials = response.layout.socials
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
