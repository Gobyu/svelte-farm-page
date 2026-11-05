import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server.js';
import { getTextDirection } from '$lib/paraglide/runtime.js';
import { m } from '$lib/paraglide/messages.js';

export const handle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		console.log('Request URL:', event.request.url);
		console.log('Detected locale:', locale);
		console.log('Translated contact:', m.nav_contact());
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
