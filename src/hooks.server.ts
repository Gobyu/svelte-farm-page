import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server.js';
import { getTextDirection } from '$lib/paraglide/runtime.js';
import { m } from '$lib/paraglide/messages.js';

export const handle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		console.log('Detected locale:', locale);
		console.log('Default translation:', m.nav_contact());
		console.log('Explicit Chinese:', m.nav_contact({}, { locale: 'zh-CN' }));
		console.log('Explicit English:', m.nav_contact({}, { locale: 'en' }));
		return resolve(
			{ ...event, request },
			{
				transformPageChunk: ({ html }) =>
					html
						.replace('%lang%', locale)
						.replace('%dir%', getTextDirection(locale))
			}
		);
	});
