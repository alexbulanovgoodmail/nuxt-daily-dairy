import type { StructuredTextDocument } from 'vue-datocms'
import type { ID } from './ID'
import type { Media } from './Media'

export type Product = {
	id: ID
	slug: string
	title: string
	rating: number
	caption: string
	description: string
	preview: Media
	content?: StructuredTextDocument
	gallery?: Media[]
}
