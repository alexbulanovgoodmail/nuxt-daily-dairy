import { checker } from 'vite-plugin-checker'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/icon', '@nuxt/eslint', '@pinia/nuxt', '@vee-validate/nuxt'],
	css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
	vite: {
		plugins: [
			checker({
				eslint: {
					useFlatConfig: true,
					lintCommand: 'eslint "./**/*.{ts,js,vue}"'
				},
				stylelint: {
					lintCommand: 'stylelint "**/*.{vue,css,scss}"'
				}
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/general/variables.scss" as *; @use "@/assets/scss/abstracts/mixins.scss" as *;`
				}
			}
		}
	},
	icon: {
		size: '24px',
		class: 'icon',
		mode: 'css',
		customCollections: [
			{
				prefix: 'icons',
				dir: './app/assets/icons/',
				normalizeIconName: false
			}
		]
	},
	runtimeConfig: {
		public: {}
	}
})
