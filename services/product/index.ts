import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getProduct(event: H3Event) {
	const slug = getRouterParam(event, 'slug')

	const graphqlQuery = `
    {
			product(filter: {slug: {eq: "${slug}"}}) {
				_seoMetaTags {
					tag
					content
					attributes
				}
				id
				slug
				title
				rating
				caption
				content {
					value
				}
        preview {
          url
          alt
        }
				description
				gallery {
					id
					url
					alt
				}
			}
    }
  `

	return graphqlRequest<{ product: any }>(graphqlQuery, {}, event)
}
