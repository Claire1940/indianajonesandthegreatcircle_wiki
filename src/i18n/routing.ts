import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	// Supported locales
	locales: ['en', 'de', 'es', 'fr'],

	// Default locale
	defaultLocale: 'en',

	// No prefix for default locale
	localePrefix: 'as-needed',

	// Enable locale detection
	localeDetection: true,
})

export type Locale = (typeof routing.locales)[number]
