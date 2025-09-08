<script setup lang="ts">
import { SORT_OPTIONS } from '~~/constants'

const products = [
	{
		id: 'dRaj1IWwSsmytoMkXKONgw',
		slug: 'item-01',
		rating: 5,
		title: 'Item: 01',
		caption: 'J.F. Murray Raw Milk, Circa 1940s',
		description: 'Good, some fading and minor edge wear',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334238-product-01.png',
			alt: 'Item: 01'
		}
	},
	{
		id: 'A3thdSLZTlOtvaDNouhXuQ',
		slug: 'item-02',
		rating: 5,
		title: 'Item: 02',
		caption: "Bush's Pasteurized Milk, Circa 1950s",
		description: 'Very Good, slight discoloration, clean surface',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334283-product-02.png',
			alt: 'Item: 02'
		}
	},
	{
		id: 'aikGq_TXTxWr1f7kPfL56w',
		slug: 'item-03',
		rating: 5,
		title: 'Item: 03',
		caption: 'Belfry Farm Raw Jersey Milk, Circa 1930s',
		description: 'Fair, noticeable wear, some staining',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334324-product-03.png',
			alt: 'Item: 03'
		}
	},
	{
		id: 'NGYCjL_fT-GnJUk8STIMYQ',
		slug: 'item-04',
		rating: 4,
		title: 'Item: 04',
		caption: 'Homogenized Milk - Pasteurized, Circa 1960s ',
		description: 'Excellent, vibrant colors, minimal wear',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334367-product-04.png',
			alt: 'Item: 04'
		}
	},
	{
		id: 'QgpHtIqdSMWfhjXMWhuKqQ',
		slug: 'item-05',
		rating: 4,
		title: 'Item: 05',
		caption: "Bush's Pasteurized Milk, Circa 1950",
		description: 'Good, some fading and minor edge wear',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334413-product-05.png',
			alt: 'Item: 05'
		}
	},
	{
		id: 'U6Evhrb2T7GlpWgCG757xA',
		slug: 'item-06',
		rating: 5,
		title: 'Item: 06',
		caption: 'Drink More Milk - For Health and Prosperity, Circa 1950s',
		description: 'Good, minor scuffs, but colors are still bright',
		preview: {
			url: 'https://www.datocms-assets.com/166548/1755334458-product-06.png',
			alt: 'Item: 06'
		}
	}
]

const pageTotal = 10
</script>

<template>
	<main>
		<ProductCatalog
			:options="SORT_OPTIONS"
			:products="products"
			:page-total="pageTotal"
		/>
	</main>
</template>
