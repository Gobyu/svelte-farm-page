<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import waterfordImage from '$lib/assets/waterford.webp';
	import torontoImage from '$lib/assets/toronto.webp';

	type Contact = {
		label: () => string;
		value: string;
		href: string;
		note?: () => string;
	};

	type ContactLocation = {
		name: () => string;
		secondaryName: () => string;
		subtitle: () => string;
		languages: () => string;
		image: string;
		contacts: Contact[];
	};

	const contactLocations: ContactLocation[] = [
		{
			name: m.contact_waterford_name,
			secondaryName: m.contact_waterford_secondary_name,
			subtitle: m.contact_waterford_subtitle,
			languages: m.contact_languages,
			image: waterfordImage,
			contacts: [
				{
					label: m.contact_phone,
					value: '(437) 340-7096',
					href: 'tel:+14373407096'
				}
			]
		},
		{
			name: m.contact_toronto_name,
			secondaryName: m.contact_toronto_secondary_name,
			subtitle: m.contact_toronto_subtitle,
			languages: m.contact_languages,
			image: torontoImage,
			contacts: [
				{
					label: m.contact_english,
					value: '(647) 858-1069',
					href: 'sms:+16478581069',
					note: m.contact_english_note
				},
				{
					label: m.contact_chinese,
					value: '(416) 878-6719',
					href: 'tel:+14168786719',
					note: m.contact_chinese_note
				}
			]
		}
	];
</script>

<svelte:head>
	<title>{m.contact_page_title()}</title>
	<meta name="description" content={m.contact_meta_description()} />
</svelte:head>

<div
	class="min-h-screen bg-[#faf9f5] text-[#253b2c] transition-colors duration-300 dark:bg-[#14251a] dark:text-[#e5f0e2]"
>
	<section
		class="relative overflow-hidden bg-[#eaf0e4] transition-colors duration-300 dark:bg-[#203b29]"
	>
		<div
			class="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#dbe7d2] opacity-70 blur-3xl dark:bg-[#36573b] dark:opacity-30"
		></div>
		<div
			class="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#d4e3cb] opacity-60 blur-3xl dark:bg-[#36573b] dark:opacity-30"
		></div>

		<div class="relative mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
			<h1
				class="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-[#23452f] sm:text-6xl md:text-7xl dark:text-[#e5f0e2]"
			>
				{m.contact_hero_title()}
			</h1>

			<p class="mt-4 text-xl font-semibold tracking-wide text-[#78966b] dark:text-[#a4c39b]">
				{m.contact_hero_subtitle()}
			</p>

			<p
				class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#637364] sm:text-lg dark:text-[#b8cbb5]"
			>
				{m.contact_hero_description()}
			</p>
		</div>
	</section>

	<main class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<div class="mb-10">
			<p
				class="mb-3 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
			>
				{m.contact_section_eyebrow()}
			</p>

			<h2 class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]">
				{m.contact_section_title()}
			</h2>

			<p class="mt-3 text-base leading-7 text-[#798478] dark:text-[#b8cbb5]">
				{m.contact_section_description()}
			</p>
		</div>

		<div class="grid gap-7 md:grid-cols-2">
			{#each contactLocations as location}
				<article
					class="group flex flex-col overflow-hidden rounded-3xl border border-[#e7e9e1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:border-[#3c5641] dark:bg-[#24382a] dark:hover:shadow-black/20"
				>
					<div class="h-52 w-full shrink-0 overflow-hidden sm:h-60">
						<img
							src={location.image}
							alt={location.name()}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div
						class="border-b border-[#e5e9df] bg-[#f0f5ed] p-7 sm:p-8 dark:border-[#3c5641] dark:bg-[#2e4934]"
					>
						<div class="mb-5 flex items-center justify-between gap-2">
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#315c3b] text-white dark:bg-[#527d56]"
							>
								<svg
									class="h-6 w-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
									<circle cx="12" cy="10" r="2.5" />
								</svg>
							</div>

							<span
								class="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#47704b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
							>
								{location.subtitle()}
							</span>
						</div>

						<h3 class="text-3xl font-bold tracking-tight text-[#263e2b] dark:text-[#e5f0e2]">
							{location.name()}
						</h3>
						<p class="mt-1 text-lg font-medium text-[#78966b] dark:text-[#a4c39b]">
							{location.secondaryName()}
						</p>

						<div
							class="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e2eddd] px-4 py-2 text-xs font-semibold text-[#47704b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
						>
							<span class="h-2 w-2 rounded-full bg-[#6a985d]"></span>
							{location.languages()}
						</div>
					</div>

					<div class="flex flex-1 flex-col gap-6 p-7 sm:p-8">
						{#each location.contacts as contact}
							<div>
								<p
									class="mb-2 text-xs font-bold tracking-wider text-[#8a9689] uppercase dark:text-[#a4b8a4]"
								>
									{contact.label()}
								</p>

								<a
									href={contact.href}
									class="inline-flex items-center gap-2 text-xl font-bold text-[#315c3b] transition hover:text-[#729765] sm:text-2xl dark:text-[#b5dfaa] dark:hover:text-[#d5ebce]"
								>
									{contact.value}
									<svg
										class="h-4 w-4 shrink-0"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										aria-hidden="true"
									>
										<path d="M7 17 17 7M8 7h9v9" />
									</svg>
								</a>

								{#if contact.note?.()}
									<p class="mt-2 text-sm leading-6 text-[#718073] dark:text-[#b8cbb5]">
										{contact.note?.()}
									</p>
								{/if}
							</div>
						{/each}

						<div
							class="mt-auto rounded-2xl border border-[#e2e9df] bg-[#f7faf5] p-5 dark:border-[#45614a] dark:bg-[#2e4934]"
						>
							<p class="mb-1 text-sm font-semibold text-[#315c3b] dark:text-[#c8e5bf]">
								{m.contact_wechat_label()}
							</p>
							<p class="text-sm text-[#718073] dark:text-[#b8cbb5]">
								{m.contact_wechat_note()}
							</p>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div
			class="mt-12 rounded-3xl border border-[#dce6d8] bg-[#eaf0e4] p-8 text-center sm:p-10 dark:border-[#3c5641] dark:bg-[#203b29]"
		>
			<div
				class="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#315c3b] text-white dark:bg-[#527d56]"
			>
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path
						d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
					/>
					<circle cx="12" cy="12" r="4" />
				</svg>
			</div>

			<h2 class="text-2xl font-bold tracking-tight text-[#23452f] sm:text-3xl dark:text-[#e5f0e2]">
				{m.contact_cta_title()}
			</h2>

			<p
				class="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#637364] sm:text-base dark:text-[#b8cbb5]"
			>
				{m.contact_cta_description()}
			</p>
		</div>
	</main>

	<section class="bg-[#315c3b] px-5 py-14 text-center text-white dark:bg-[#1c3424]">
		<div class="mx-auto max-w-2xl">
			<p class="mb-3 text-xs font-bold tracking-[0.2em] text-[#b8d5b2] uppercase">
				{m.contact_footer_brand()}
			</p>
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				{m.contact_footer_title()}
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d4e3d1] sm:text-base">
				{m.contact_footer_description()}
			</p>
		</div>
	</section>
</div>
