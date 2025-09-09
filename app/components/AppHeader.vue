<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'
import { storeMenu } from '~/stores/storeMenu'

const MENU_NAME = 'header-menu'
const { open, close } = storeMenu()
const { opened } = storeToRefs(storeMenu())
const isActive = computed<boolean>(() => opened.value === MENU_NAME)
const toggleIcon = computed<string>(() => (isActive.value ? 'cross' : 'menu'))
const menuBody = ref<HTMLElement | null>(null)
const menuToggle = ref<HTMLElement | null>(null)

const openMenu = (): void => {
	open(MENU_NAME)
	if (!menuBody.value) return
	menuBody.value.style.maxHeight = `${menuBody.value.scrollHeight}px`

	document.addEventListener('keydown', handleEscPress)
	document.addEventListener('click', handleClickOutside)
}

const closeMenu = (): void => {
	close()
	if (!menuBody.value) return
	menuBody.value.style.maxHeight = `0px`

	document.removeEventListener('keydown', handleEscPress)
	document.removeEventListener('click', handleClickOutside)
}

const handleToggleMenu = (): void => {
	if (isActive.value) {
		closeMenu()
	} else {
		openMenu()
	}
}

const handleEscPress = (event: KeyboardEvent): void => {
	if (event.key === 'Escape' || event.key === 'Esc') {
		closeMenu()
	}
}

const handleClickOutside = (event: Event): void => {
	const target = event.target as HTMLElement

	if (!menuBody.value || !menuToggle.value) return

	if (
		!menuToggle.value.contains(target) &&
		!menuBody.value.contains(target) &&
		isActive.value
	) {
		closeMenu()
	}
}

const handleMenuBody = (event: Event): void => {
	const target = event.target as HTMLElement

	if (target.closest('a') && isActive.value) {
		closeMenu()
	}
}

const { navigations } = storeLayout()
</script>

<template>
	<header class="app-header">
		<div class="app-header__container container">
			<div class="app-header__wrapper">
				<NuxtLink class="app-header__link" to="/"> Home </NuxtLink>

				<button
					ref="menuToggle"
					class="app-header__menu-toggle"
					type="button"
					aria-label="Menu toggle"
					@click="handleToggleMenu"
				>
					<Icon :name="`icons:${toggleIcon}`" />
				</button>

				<div class="app-header__menu">
					<div
						ref="menuBody"
						class="app-header__menu-body"
						@click="handleMenuBody"
					>
						<div class="app-header__menu-content">
							<nav class="app-header__navigation">
								<ul class="app-header__navigation-items">
									<li
										v-for="anchor in navigations"
										:key="anchor.id"
										class="app-header__navigation-item"
									>
										<NuxtLink class="app-header__link" :to="anchor.to">
											{{ anchor.label }}
										</NuxtLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
.app-header {
	padding: 24px 0 0;

	&__wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	&__link {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-1);
		text-decoration: none;
		transition: opacity 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
		cursor: pointer;

		@include typo-link;

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				opacity: 0.6;
			}
		}
	}

	&__menu-toggle {
		appearance: none;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		color: var(--color-1);
		background-color: transparent;
		cursor: pointer;

		@media screen and (min-width: $md) {
			display: none;
		}
	}

	&__menu {
		width: 100%;

		@media screen and (min-width: $md) {
			width: initial;
		}
	}

	&__menu-body {
		margin-top: 24px;
		border-bottom: 1px solid var(--color-1);
		max-height: 0;
		overflow: hidden;
		transition: max-height 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

		@media screen and (min-width: $md) {
			margin-top: 0;
			border-bottom: 0;
			max-height: initial !important;
		}
	}

	&__menu-content {
		border-top: 1px solid var(--color-1);
		padding: 24px 0;

		@media screen and (min-width: $md) {
			border-top: 0;
			padding: 0;
		}
	}

	&__navigation-items {
		@media screen and (min-width: $md) {
			display: flex;
		}
	}

	&__navigation-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px 0;

		@media screen and (min-width: $md) {
			&:not(:last-of-type) {
				margin-right: 24px;
			}
		}
	}
}
</style>
