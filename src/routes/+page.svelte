
<script lang="ts">
	const products = [
		{
			name: 'Butternut Squash',
			image: 'https://raw.githubusercontent.com/Gobyu/svelte-farm-page/refs/heads/main/src/lib/assets/Butternut%20Squash.jpg',
			alt: 'Fresh butternut squash',
			price: '$10',
			quantity: '8 lbs',
			perPound: '$1.25/lb',
			description:
				'Naturally sweet with a smooth, creamy texture and a slightly nutty flavour. Perfect for hearty soups, oven roasting, and homemade baking.',
			tags: ['Sweet & Nutty', 'Great for Roasting']
		},
		{
			name: 'Kabocha Squash',
			image: 'https://raw.githubusercontent.com/Gobyu/svelte-farm-page/refs/heads/main/src/lib/assets/Kabocha%20Squash.jpg',
			alt: 'Fresh kabocha squash',
			price: '$10',
			quantity: '8 lbs',
			perPound: '$1.25/lb',
			description:
				'A Japanese winter squash with rich orange flesh, a naturally sweet flavour, and a soft, fluffy texture. Delicious roasted, steamed, or added to soups.',
			tags: ['Naturally Sweet', 'Japanese Squash']
		}
	];

	const upcomingProducts = [
		{
			name: 'Green Bean Pods',
			image: 'https://raw.githubusercontent.com/Gobyu/svelte-farm-page/refs/heads/main/src/lib/assets/Green%20Beans.jpg',
			alt: 'Fresh green bean pods',
			availability: 'September',
			description:
				'Fresh, crisp green beans with a mild, slightly sweet flavour. Enjoy them steamed, sautéed, or added to your favourite dishes.',
			tags: ['Fresh & Crunchy', 'Seasonal']
		}
	];
</script>

<svelte:head>
	<title>Farm Fresh Produce | Happy Farmhouse</title>
	<meta
		name="description"
		content="Discover our naturally grown farm produce, including butternut squash, kabocha squash, and seasonal vegetables."
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
				Naturally Grown
			</div>

			<h1
				class="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-[#23452f] sm:text-6xl md:text-7xl dark:text-[#e5f0e2]"
			>
				Fresh From
				<span class="italic text-[#729765] dark:text-[#a4c39b]">Our Farm.</span>
			</h1>

			<p
				class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#637364] sm:text-lg dark:text-[#b8cbb5]"
			>
				Good food starts with good growing practices. Explore our selection of fresh,
				naturally grown vegetables, straight from our farm to your table.
			</p>

			<a
				href="#available"
				class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#315c3b] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-1 hover:bg-[#24492e] dark:bg-[#527d56] dark:hover:bg-[#65976a]"
			>
				Explore Our Produce
				<span aria-hidden="true">↓</span>
			</a>
		</div>
	</section>

	<section
		class="border-b border-[#e5e9df] bg-white transition-colors duration-300 dark:border-[#344d39] dark:bg-[#1c2e22]"
	>
		<div
			class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 text-sm font-medium text-[#4c6752] dark:text-[#c0d0bc]"
		>
			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				Naturally Grown
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				No Synthetic Pesticides
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				Non-GMO
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				Farm Fresh
			</span>
		</div>
	</section>

	<main class="mx-auto max-w-6xl px-5">
		<section id="available" class="scroll-mt-24 py-16 sm:py-20">
			<div class="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<p
						class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78966b] dark:text-[#a4c39b]"
					>
						Fresh Picks
					</p>

					<h2
						class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
					>
						Available Products
					</h2>

					<p
						class="mt-3 max-w-xl text-base leading-7 text-[#798478] dark:text-[#b8cbb5]"
					>
						Discover our carefully grown selection of fresh produce.
					</p>
				</div>

				<div
					class="flex w-fit items-center gap-2 rounded-full bg-[#e8f1e5] px-4 py-2 text-xs font-semibold text-[#47704b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
				>
					<span class="h-2 w-2 rounded-full bg-[#5b9c57]"></span>
					Currently Available
				</div>
			</div>

			<div class="grid gap-7 md:grid-cols-2">
				{#each products as product}
					<article
						class="group overflow-hidden rounded-3xl border border-[#e7e9e1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:border-[#3c5641] dark:bg-[#24382a] dark:hover:shadow-black/20"
					>
						<div
							class="relative h-64 overflow-hidden bg-[#e9eee5] sm:h-72 dark:bg-[#2e4934]"
						>
							<img
								src={product.image}
								alt={product.alt}
								class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
							/>

							<span
								class="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#35643e] shadow-sm dark:bg-[#24382a]/95 dark:text-[#c8e5bf]"
							>
								Farm Fresh
							</span>
						</div>

						<div class="p-6 sm:p-8">
							<div class="flex flex-wrap items-start justify-between gap-3">
								<h3
									class="text-2xl font-bold tracking-tight text-[#263e2b] dark:text-[#e5f0e2]"
								>
									{product.name}
								</h3>

								<span
									class="rounded-lg bg-[#eaf3e7] px-3 py-1.5 text-xs font-semibold text-[#47764b] dark:bg-[#34543a] dark:text-[#c8e5bf]"
								>
									Available
								</span>
							</div>

							<p
								class="mt-4 min-h-24 text-sm leading-7 text-[#718073] sm:text-base dark:text-[#b8cbb5]"
							>
								{product.description}
							</p>

							<div class="mt-5 flex flex-wrap gap-2">
								{#each product.tags as tag}
									<span
										class="rounded-full border border-[#e2e9df] bg-[#f7faf5] px-3 py-1.5 text-xs font-medium text-[#68806a] dark:border-[#45614a] dark:bg-[#2e4934] dark:text-[#b8cbb5]"
									>
										{tag}
									</span>
								{/each}
							</div>

							<div
								class="mt-7 flex items-end justify-between border-t border-[#edf0e9] pt-6 dark:border-[#3c5641]"
							>
								<div>
									<p
										class="mb-1 text-xs font-medium uppercase tracking-wider text-[#8a9689] dark:text-[#a4b8a4]"
									>
										Price per {product.quantity}
									</p>

									<div class="flex items-baseline gap-2">
										<span
											class="text-4xl font-bold tracking-tight text-[#315c3b] dark:text-[#b5dfaa]"
										>
											{product.price}
										</span>

										<span
											class="text-sm font-medium text-[#8a9689] dark:text-[#a4b8a4]"
										>
											/ {product.quantity}
										</span>
									</div>
								</div>

								<span
									class="rounded-xl bg-[#f0f5ed] px-4 py-3 text-sm font-semibold text-[#4c7650] dark:bg-[#34543a] dark:text-[#c8e5bf]"
								>
									{product.perPound}
								</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="pb-20 pt-5">
			<div class="mb-10">
				<p
					class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78966b] dark:text-[#a4c39b]"
				>
					Coming Soon
				</p>

				<h2
					class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
				>
					Growing Next Year
				</h2>

				<p
					class="mt-3 max-w-xl text-base leading-7 text-[#798478] dark:text-[#b8cbb5]"
				>
					Here's a little preview of what's coming to our farm next season.
				</p>
			</div>

			<div class="grid gap-7 md:grid-cols-2">
				{#each upcomingProducts as product}
					<article
						class="group overflow-hidden rounded-3xl border border-[#e7e9e1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:border-[#3c5641] dark:bg-[#24382a] dark:hover:shadow-black/20"
					>
						<div
							class="relative h-64 overflow-hidden bg-[#e9eee5] sm:h-72 dark:bg-[#2e4934]"
						>
							<img
								src={product.image}
								alt={product.alt}
								class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
							/>

							<span
								class="absolute left-5 top-5 rounded-full bg-[#fff7e5] px-4 py-2 text-xs font-bold text-[#a17b32] shadow-sm dark:bg-[#57482c] dark:text-[#f0d69b]"
							>
								Coming Next Year
							</span>
						</div>

						<div class="p-6 sm:p-8">
							<h3
								class="text-2xl font-bold tracking-tight text-[#263e2b] dark:text-[#e5f0e2]"
							>
								{product.name}
							</h3>

							<p
								class="mt-4 min-h-24 text-sm leading-7 text-[#718073] sm:text-base dark:text-[#b8cbb5]"
							>
								{product.description}
							</p>

							<div class="mt-5 flex flex-wrap gap-2">
								{#each product.tags as tag}
									<span
										class="rounded-full border border-[#e2e9df] bg-[#f7faf5] px-3 py-1.5 text-xs font-medium text-[#68806a] dark:border-[#45614a] dark:bg-[#2e4934] dark:text-[#b8cbb5]"
									>
										{tag}
									</span>
								{/each}
							</div>

							<div
								class="mt-7 flex items-center justify-between border-t border-[#edf0e9] pt-6 dark:border-[#3c5641]"
							>
								<div>
									<p
										class="mb-1 text-xs font-medium uppercase tracking-wider text-[#8a9689] dark:text-[#a4b8a4]"
									>
										Expected Availability
									</p>

									<p class="text-xl font-bold text-[#315c3b] dark:text-[#b5dfaa]">
										{product.availability}
									</p>
								</div>

								<div class="text-right">
									<p class="mb-1 text-xs font-medium text-[#8a9689] dark:text-[#a4b8a4]">
										Price
									</p>

									<p class="text-lg font-bold text-[#728575] dark:text-[#c0d0bc]">
										To Be Announced
									</p>
								</div>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>
	</main>

	<section class="bg-[#315c3b] px-5 py-14 text-center text-white dark:bg-[#1c3424]">
		<div class="mx-auto max-w-2xl">
			<p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b8d5b2]">
				Grown With Care
			</p>

			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Naturally Better Produce.
			</h2>

			<p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d4e3d1] sm:text-base">
				Our produce is grown without synthetic pesticides, herbicides, or fertilizers,
				with a focus on natural growing practices and quality.
			</p>
		</div>
	</section>
</div>
