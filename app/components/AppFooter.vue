<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { socials } = storeLayout()
const year = computed(() => `${new Date().getFullYear()}`)
</script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__wrapper">
				<div class="footer__made made">
					<p class="made__name">Made by Alex</p>
				</div>
				<div class="footer__social social">
					<ul class="social__items">
						<li v-for="social in socials" :key="social.id" class="social__item">
							<a
								class="social__link"
								:href="social.to"
								target="_blank"
								rel="noopener noreferrer"
								>{{ social.label }}</a
							>
						</li>
					</ul>
				</div>
				<div class="footer__copyright copyright">
					<div class="copyright__wrapper">
						<div class="copyright__name">DAILY DAIRY</div>
						<div class="copyright__date">©{{ year }}</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	&__wrapper {
		margin-top: -1px;
		border-top: 1px solid var(--color-1);

		@media screen and (min-width: $md) {
			padding-top: 50px;
		}
	}
}

.made {
	padding: 50px 0;
	text-align: center;

	@include typo-h3;
}

.social {
	padding: 50px 0;

	&__items {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__link {
		text-decoration: none;
		color: var(--color-1);
		transition: opacity 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

		@include typo-h1;

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				opacity: 0.6;
			}
		}
	}
}

.copyright {
	padding: 50px 0;

	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include typo-h3;
	}
}
</style>
