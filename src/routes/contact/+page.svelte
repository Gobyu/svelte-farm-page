
<script lang="ts">
	const contactLocations = [
		{
			name: 'Waterford',
			chineseName: '沃特福德',
			subtitle: 'Farm Location',
			languages: 'English & 中文',
			contacts: [
				{
					label: 'Phone | 电话',
					value: '(437) 340-7096',
					href: 'tel:+14373407096'
				}
			]
		},
		{
			name: 'Toronto',
			chineseName: '多伦多',
			subtitle: 'Toronto Contact',
			languages: 'English & 中文',
			contacts: [
				{
					label: 'English | 英文',
					value: '(647) 858-1069',
					href: 'sms:+16478581069',
					note: 'Text messages preferred'
				},
				{
					label: 'Chinese | 中文',
					value: '(416) 878-6719',
					href: 'tel:+16478786719',
					note: '下午 5:30 前请发短信，下午 5:30 后请来电'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Contact Us | Happy Farmhouse</title>
	<meta
		name="description"
		content="Contact Happy Farmhouse in Waterford or Toronto. We are happy to assist you in English or Chinese."
	/>
</svelte:head>

<div
	class="min-h-screen bg-[#faf9f5] text-[#253b2c] transition-colors duration-300 dark:bg-[#14251a] dark:text-[#e5f0e2]"
>
	<section
		class="relative overflow-hidden bg-[#eaf0e4] transition-colors duration-300 dark:bg-[#203b29]"
	>
		<div
			class="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#dbe7d2] opacity-70 blur-3xl dark:bg-[#36573b] dark:opacity-30"
		></div>

		<div
			class="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#d4e3cb] opacity-60 blur-3xl dark:bg-[#36573b] dark:opacity-30"
		></div>

		<div class="relative mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7d9bd] bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#47704b] dark:border-[#45614a] dark:bg-[#2a4030] dark:text-[#b8d5b2]"
			>
				<span class="h-2 w-2 rounded-full bg-[#6a985d]"></span>
				GET IN TOUCH
			</div>

			<h1
				class="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-[#23452f] sm:text-6xl md:text-7xl dark:text-[#e5f0e2]"
			>
				Contact
				<span class="italic text-[#729765] dark:text-[#a4c39b]">Us.</span>
			</h1>

			<p
				class="mt-4 text-xl font-semibold tracking-wide text-[#78966b] dark:text-[#a4c39b]"
			>
				联系我们
			</p>

			<p
				class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#637364] sm:text-lg dark:text-[#b8cbb5]"
			>
				Have a question about our farm or products? We'd love to hear from you.
				Reach out to one of our locations below.
			</p>
		</div>
	</section>

	<main class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<div class="mb-10">
			<p
				class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78966b] dark:text-[#a4c39b]"
			>
				We're Here to Help
			</p>

			<h2
				class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
			>
				Our Contacts
			</h2>

			<p class="mt-3 text-base leading-7 text-[#798478] dark:text-[#b8cbb5]">
				Choose the contact that works best for you.
			</p>
		</div>

		<div class="grid gap-7 md:grid-cols-2">
			{#each contactLocations as location}
				<article
					class="group flex flex-col overflow-hidden rounded-3xl border border-[#e7e9e1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:border-[#3c5641] dark:bg-[#24382a] dark:hover:shadow-black/20"
				>
					<div
						class="border-b border-[#e5e9df] bg-[#f0f5ed] p-7 sm:p-8 dark:border-[#3c5641] dark:bg-[#2e4934]"
					>
						<div class="mb-5 flex items-center justify-between">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#315c3b] text-white dark:bg-[#527d56]"
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
										d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
									/>
									<circle cx="12" cy="10" r="2.5" />
								</svg>
							</div>

							<span
								class="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#47704b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
							>
								{location.subtitle}
							</span>
						</div>

						<h3
							class="text-3xl font-bold tracking-tight text-[#263e2b] dark:text-[#e5f0e2]"
						>
							{location.name}
						</h3>

						<p class="mt-1 text-lg font-medium text-[#78966b] dark:text-[#a4c39b]">
							{location.chineseName}
						</p>

						<div
							class="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e2eddd] px-4 py-2 text-xs font-semibold text-[#47704b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
						>
							<span class="h-2 w-2 rounded-full bg-[#6a985d]"></span>
							{location.languages}
						</div>
					</div>

					<div class="flex flex-1 flex-col gap-6 p-7 sm:p-8">
						{#each location.contacts as contact}
							<div>
								<p
									class="mb-2 text-xs font-bold uppercase tracking-wider text-[#8a9689] dark:text-[#a4b8a4]"
								>
									{contact.label}
								</p>

								<a
									href={contact.href}
									class="inline-flex items-center gap-2 text-xl font-bold text-[#315c3b] transition hover:text-[#729765] sm:text-2xl dark:text-[#b5dfaa] dark:hover:text-[#d5ebce]"
								>
									{contact.value}
									<svg
										class="h-4 w-4"
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

								{#if 'note' in contact && contact.note}
									<p class="mt-2 text-sm leading-6 text-[#718073] dark:text-[#b8cbb5]">
										{contact.note}
									</p>
								{/if}
							</div>
						{/each}

						{#if location.name === 'Waterford'}
							<div
								class="mt-auto rounded-2xl border border-[#e2e9df] bg-[#f7faf5] p-5 dark:border-[#45614a] dark:bg-[#2e4934]"
							>
								<p
									class="mb-1 text-sm font-semibold text-[#315c3b] dark:text-[#c8e5bf]"
								>
									WeChat | 微信
								</p>
								<p class="text-sm text-[#718073] dark:text-[#b8cbb5]">
									Please contact us for WeChat details.
								</p>
							</div>
						{:else}
							<div
								class="mt-auto rounded-2xl border border-[#e2e9df] bg-[#f7faf5] p-5 dark:border-[#45614a] dark:bg-[#2e4934]"
							>
								<p
									class="mb-1 text-sm font-semibold text-[#315c3b] dark:text-[#c8e5bf]"
								>
									WeChat | 微信
								</p>
								<p class="text-sm text-[#718073] dark:text-[#b8cbb5]">
									Please contact us for WeChat details.
								</p>
							</div>
						{/if}
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
					<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
					<circle cx="12" cy="12" r="4" />
				</svg>
			</div>

			<h2
				class="text-2xl font-bold tracking-tight text-[#23452f] sm:text-3xl dark:text-[#e5f0e2]"
			>
				We Look Forward to Hearing From You!
			</h2>

			<p
				class="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#637364] sm:text-base dark:text-[#b8cbb5]"
			>
				Whether you have questions about our produce or want to learn more about
				our farm, we're happy to help.
			</p>
		</div>
	</main>

	<section class="bg-[#315c3b] px-5 py-14 text-center text-white dark:bg-[#1c3424]">
		<div class="mx-auto max-w-2xl">
			<p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b8d5b2]">
				Happy Farmhouse | 幸福农庄
			</p>

			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Grown With Care.
			</h2>

			<p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d4e3d1] sm:text-base">
				Bringing fresh, naturally grown produce to our community.
			</p>
		</div>
	</section>
</div>
