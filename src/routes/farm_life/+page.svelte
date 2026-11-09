<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';

	// Add your farm image URLs here
	const farmImages = [
		'https://images.happyfarmhouse.ca/assets/Image_20261108224013.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224048.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224107.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224110.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224114.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224120.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224125.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224132.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224146.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224150.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224206.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261108224218.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261109162243.webp',
		'https://images.happyfarmhouse.ca/assets/Image_20261109164159.webp'
	];

	let displayedImages = [...farmImages];
	let selectedImage: string | null = null;

	// Randomize the images using Fisher-Yates
	function shuffleImages(images: string[]): string[] {
		const shuffled = [...images];

		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled;
	}

	onMount(() => {
		displayedImages = shuffleImages(farmImages);
	});

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			selectedImage = null;
		}
	}
</script>

<svelte:head>
	<title>{m.gallery_page_title()}</title>
	<meta name="description" content={m.gallery_meta_description()} />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div
	class="min-h-screen bg-[#faf9f5] text-[#253b2c] transition-colors duration-300 dark:bg-[#14251a] dark:text-[#e5f0e2]"
>
	<!-- Hero -->
	<section class="relative overflow-hidden bg-cover bg-center bg-no-repeat">
		<div
			class="absolute inset-0 bg-no-repeat"
			style="
    background-image: url('https://images.happyfarmhouse.ca/assets/Image_20261109162243.webp');
    background-size: 100% auto;
    background-position: 50% 70%;
  "
		></div>
		<div class="absolute inset-0 bg-black/45"></div>

		<div class="relative mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
			<p class="mb-5 text-xs font-bold tracking-[0.2em] text-[#d4e8c9] uppercase">
				{m.gallery_hero_eyebrow()}
			</p>

			<h1
				class="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
			>
				{m.gallery_hero_title_main()}
				<span class="text-[#c6e4b7]">
					{m.gallery_hero_title_accent()}
				</span>
			</h1>

			<p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
				{m.gallery_hero_description()}
			</p>
		</div>
	</section>

	<main>
		<!-- Gallery -->
		<section class="mx-auto max-w-6xl px-5 py-16 sm:py-24">
			<div class="mb-12 text-center">
				<p
					class="mb-3 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
				>
					{m.gallery_section_eyebrow()}
				</p>

				<h2
					class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
				>
					{m.gallery_section_title()}
				</h2>

				<p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#637364] dark:text-[#b8cbb5]">
					{m.gallery_section_description()}
				</p>
			</div>

			<!-- Responsive Tailwind grid -->
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each displayedImages as image, index (image)}
					<button
						type="button"
						class="group block w-full overflow-hidden rounded-2xl bg-[#eaf0e4] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:bg-[#24382a] dark:hover:shadow-black/20"
						onclick={() => (selectedImage = image)}
						aria-label={m.gallery_view_photo({
							number: String(index + 1)
						})}
					>
						<img
							src={image}
							alt={m.gallery_photo_alt({
								number: String(index + 1)
							})}
							loading="lazy"
							decoding="async"
							class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</button>
				{/each}
			</div>
		</section>

		<!-- Contact CTA -->
		<section class="mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
			<div class="text-center">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 rounded-full bg-[#315c3b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#47704b] dark:bg-[#527d56] dark:hover:bg-[#648e67]"
				>
					{m.gallery_contact_cta()}

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
						<path d="M5 12h14M13 6l6 6-6 6" />
					</svg>
				</a>
			</div>
		</section>
	</main>

	<!-- Footer CTA -->
	<section class="bg-[#315c3b] px-5 py-14 text-center text-white dark:bg-[#1c3424]">
		<div class="mx-auto max-w-2xl">
			<p class="mb-3 text-xs font-bold tracking-[0.2em] text-[#b8d5b2] uppercase">
				{m.gallery_footer_eyebrow()}
			</p>

			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				{m.gallery_footer_title()}
			</h2>

			<p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d4e3d1] sm:text-base">
				{m.gallery_footer_description()}
			</p>
		</div>
	</section>
</div>

<!-- Fullscreen image lightbox -->
{#if selectedImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-5"
		role="dialog"
		aria-modal="true"
		aria-label={m.gallery_lightbox_label()}
	>
		<!-- Dark backdrop -->
		<button
			type="button"
			class="absolute inset-0 bg-black/90"
			aria-label={m.gallery_close_photo()}
			onclick={() => (selectedImage = null)}
		></button>

		<!-- Enlarged image -->
		<img
			src={selectedImage}
			alt={m.gallery_enlarged_photo_alt()}
			class="pointer-events-none relative max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
		/>

		<!-- Close button -->
		<button
			type="button"
			class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/30"
			aria-label={m.gallery_close_photo()}
			onclick={() => (selectedImage = null)}
		>
			×
		</button>
	</div>
{/if}
