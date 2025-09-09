import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getContact(event?: H3Event) {
	const graphqlQuery = `
    {
      contact {
				title
        _seoMetaTags {
          content
          tag
          attributes
        }
      }
    }
  `

	return graphqlRequest<{ contact: any }>(graphqlQuery, {}, event)
}
