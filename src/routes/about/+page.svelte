<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import healthier_svg from '$lib/assets/healthier.svg';
	import tastier_svg from '$lib/assets/tastier.svg';
	import eco_friendly_svg from '$lib/assets/eco friendly.svg';

	const principles = [
		{
			title: m.about_principle_healthier_title,
			description: m.about_principle_healthier_description,
			svg: healthier_svg
		},
		{
			title: m.about_principle_tastier_title,
			description: m.about_principle_tastier_description,
			svg: tastier_svg
		},
		{
			title: m.about_principle_eco_title,
			description: m.about_principle_eco_description,
			svg: eco_friendly_svg
		}
	];

	const growingSteps = [
		{
			title: m.about_step_pesticides_title,
			description: m.about_step_pesticides_description
		},
		{
			title: m.about_step_fertilizers_title,
			description: m.about_step_fertilizers_description
		},
		{
			title: m.about_step_harvest_title,
			description: m.about_step_harvest_description
		}
	];
</script>

<svelte:head>
	<title>{m.about_page_title()}</title>
	<meta name="description" content={m.about_meta_description()} />
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
			<p
				class="mb-5 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
			>
				{m.about_hero_eyebrow()}
			</p>

			<h1
				class="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-[#23452f] sm:text-6xl md:text-7xl dark:text-[#e5f0e2]"
			>
				{m.about_hero_title_main()}
				<span class="text-[#78966b] dark:text-[#a4c39b]"> {m.about_hero_title_accent()} </span>
			</h1>

			<p
				class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#637364] sm:text-lg dark:text-[#b8cbb5]"
			>
				{m.about_hero_description()}
			</p>
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
				{m.products_eyebrow()}
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				{m.products_feature_no_pesticides()}
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				{m.products_feature_non_gmo()}
			</span>

			<span class="flex items-center gap-2">
				<span class="text-lg text-[#71996b]">✦</span>
				{m.products_feature_farm_fresh()}
			</span>
		</div>
	</section>

	<main>
		<section class="mx-auto max-w-6xl px-5 py-16 sm:py-24">
			<div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
				<div
					class="relative overflow-hidden rounded-3xl border border-[#dce6d8] bg-[#e2eddd] dark:border-[#3c5641] dark:bg-[#2e4934]"
				>
					<div class="flex aspect-[5/4] items-center justify-center p-8">
						<svg
							viewBox="0 0 480 360"
							class="h-full w-full max-w-md"
							fill="none"
							role="img"
							aria-label={m.about_illustration_label()}
						>
							<circle cx="365" cy="75" r="42" fill="#f5dca0" />
							<path
								d="M0 230C80 195 140 215 220 190C310 165 385 195 480 160V360H0Z"
								fill="#b7cfa9"
							/>
							<path
								d="M0 270C100 230 190 260 275 225C355 195 410 230 480 205V360H0Z"
								fill="#8fb087"
							/>
							<path
								d="M0 310C105 280 220 300 320 265C385 245 430 265 480 250V360H0Z"
								fill="#648c64"
							/>
							<path
								d="M240 288V132M240 205C185 205 170 160 170 151C213 147 240 173 240 205ZM240 171C297 171 316 128 315 118C271 116 240 143 240 171Z"
								stroke="#315c3b"
								stroke-width="8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path d="M170 151C190 149 221 171 240 205C193 208 171 184 170 151Z" fill="#477f48" />
							<path d="M315 118C289 117 255 143 240 171C285 175 312 149 315 118Z" fill="#5d985b" />
							<path
								d="M115 310V244M115 275C80 276 68 250 68 242C95 240 115 255 115 275ZM115 258C150 257 161 231 161 224C133 222 115 239 115 258Z"
								stroke="#315c3b"
								stroke-width="6"
								stroke-linecap="round"
							/>
							<path d="M68 242C94 240 113 254 115 275C86 277 69 261 68 242Z" fill="#477f48" />
							<path d="M161 224C135 222 116 237 115 258C145 261 161 242 161 224Z" fill="#5d985b" />
							<path
								d="M370 280V215M370 248C335 249 324 222 324 216C351 214 370 227 370 248ZM370 232C405 230 416 206 416 198C389 197 370 213 370 232Z"
								stroke="#315c3b"
								stroke-width="6"
								stroke-linecap="round"
							/>
							<path d="M324 216C349 215 368 228 370 248C342 249 325 234 324 216Z" fill="#477f48" />
							<path d="M416 198C389 196 372 213 370 232C398 234 414 217 416 198Z" fill="#5d985b" />
						</svg>
					</div>
				</div>

				<div>
					<p
						class="mb-3 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
					>
						{m.about_story_eyebrow()}
					</p>

					<h2
						class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
					>
						{m.about_story_title()}
					</h2>

					<p class="mt-6 text-base leading-8 text-[#637364] dark:text-[#b8cbb5]">
						{m.about_story_paragraph_1()}
					</p>

					<p class="mt-4 text-base leading-8 text-[#637364] dark:text-[#b8cbb5]">
						{m.about_story_paragraph_2()}
					</p>

					<p class="mt-4 text-base leading-8 text-[#637364] dark:text-[#b8cbb5]">
						{m.about_story_paragraph_3()}
					</p>
				</div>
			</div>
		</section>

		<section class="bg-[#f0f5ed] py-16 transition-colors duration-300 sm:py-20 dark:bg-[#1c3424]">
			<div class="mx-auto max-w-6xl px-5">
				<div class="mb-10 text-center">
					<p
						class="mb-3 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
					>
						{m.about_philosophy_eyebrow()}
					</p>

					<h2
						class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
					>
						{m.about_philosophy_title()}
					</h2>
				</div>

				<div class="grid gap-6 md:grid-cols-3">
					{#each principles as principle}
						<article
							class="flex flex-col items-center rounded-3xl border border-[#e7e9e1] bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c3b]/10 dark:border-[#3c5641] dark:bg-[#24382a] dark:hover:shadow-black/20"
						>
							<div
								class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#edf5e9] p-4 text-[#315c3b] dark:bg-[#344e38] dark:text-[#b8dbad]"
							>
								<span
									class="h-full w-full bg-current"
									style={`mask: url("${principle.svg}") center / contain no-repeat; -webkit-mask: url("${principle.svg}") center / contain no-repeat;`}
									aria-hidden="true"
								></span>
							</div>

							<h3 class="text-xl font-bold tracking-tight text-[#253e2b] dark:text-[#e5f0e2]">
								{principle.title()}
							</h3>

							<p class="mt-4 text-sm leading-7 text-[#718073] dark:text-[#b8cbb5]">
								{principle.description()}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
			<div class="mb-12 text-center">
				<p
					class="mb-3 text-xs font-bold tracking-[0.2em] text-[#78966b] uppercase dark:text-[#a4c39b]"
				>
					{m.about_steps_eyebrow()}
				</p>

				<h2
					class="text-3xl font-bold tracking-tight text-[#253e2b] sm:text-4xl dark:text-[#e5f0e2]"
				>
					{m.about_steps_title()}
				</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each growingSteps as step}
					<div class="text-center">
						<h3 class="text-xl font-bold text-[#253e2b] dark:text-[#e5f0e2]">
							{step.title()}
						</h3>

						<p
							class="mt-4 text-sm leading-7 whitespace-pre-line text-[#718073] dark:text-[#b8cbb5]"
						>
							{step.description()}
						</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="mx-auto max-w-6xl sm:pb-20">
			<div class="relative overflow-hidden rounded-3xl text-center">
				<a
					href="/contact"
					class=" inline-flex items-center justify-center gap-2 rounded-full bg-[#315c3b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#47704b] dark:bg-[#527d56] dark:hover:bg-[#648e67]"
				>
					{m.about_contact_cta()}
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

	<section class="bg-[#315c3b] px-5 py-14 text-center text-white dark:bg-[#1c3424]">
		<div class="mx-auto max-w-2xl">
			<p class="mb-3 text-xs font-bold tracking-[0.2em] text-[#b8d5b2] uppercase">
				{m.about_footer_eyebrow()}
			</p>

			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{m.about_footer_title()}</h2>

			<p class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d4e3d1] sm:text-base">
				{m.about_footer_description()}
			</p>
		</div>
	</section>
</div>
