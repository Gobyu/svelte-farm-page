
<script lang="ts">
	import { page } from '$app/state';

	const currentPath = $derived(page.url.pathname);
	const isActive = (href: string) => currentPath === href;

	let mobileOpen = $state(false);
	let theme = $state<'light' | 'dark'>('light');

	$effect(() => {
		if (typeof window === 'undefined') return;

		const stored = localStorage.getItem('theme');

		if (stored === 'light' || stored === 'dark') {
			theme = stored;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		}
	});

	$effect(() => {
		if (typeof document === 'undefined') return;

		document.documentElement.classList.toggle('dark', theme === 'dark');

		try {
			localStorage.setItem('theme', theme);
		} catch {}
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
	}

	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/products_services', label: 'Products & Services' },
		{ href: '/contact', label: 'Contact Us' }
	];
</script>

<nav
	class="sticky top-0 z-50 border-b border-[#dce6d8] bg-[#faf9f5]/95 shadow-sm backdrop-blur-xl dark:border-[#344d39] dark:bg-[#1c2e22]/95"
>
	<div class="mx-auto max-w-6xl px-5">
		<div class="flex h-20 items-center justify-between gap-4">

			<!-- Farm Logo -->
			<a
				href="/"
				class="group flex min-w-0 items-center gap-3"
				aria-label="Happy Farmhouse Home"
			>
				<div
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#315c3b] text-white shadow-md shadow-green-900/10 transition duration-300 group-hover:-rotate-6 group-hover:scale-105"
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
						<path d="M11 20A7 7 0 0 1 4 13C4 6 12 3 20 3c0 8-3 16-10 16" />
						<path d="M4 21c3-6 7-10 13-14" />
					</svg>
				</div>

				<div class="flex flex-col">
					<span
						class="text-lg font-bold leading-tight tracking-tight text-[#23452f] transition group-hover:text-[#729765] sm:text-xl dark:text-[#e5f0e2]"
					>
						Happy Farmhouse
					</span>
					<span
						class="mt-0.5 text-xs font-semibold tracking-[0.16em] text-[#78966b] dark:text-[#a4c39b]"
					>
						幸福农庄
					</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-2 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
						class:bg-[#e5efe1]={isActive(link.href)}
						class:text-[#315c3b]={isActive(link.href)}
						class:dark:bg-[#344d39]={isActive(link.href)}
						class:dark:text-[#c8e5bf]={isActive(link.href)}
						class:text-[#637364]={!isActive(link.href)}
						class:dark:text-[#c0d0bc]={!isActive(link.href)}
						class:hover:bg-[#eaf0e4]={!isActive(link.href)}
						class:dark:hover:bg-[#344d39]={!isActive(link.href)}
						class:hover:text-[#315c3b]={!isActive(link.href)}
						class:dark:hover:text-white={!isActive(link.href)}
						aria-current={isActive(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Right Controls -->
			<div class="flex items-center gap-2">

				<!-- Theme Toggle -->
				<button
					type="button"
					aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
					title={theme === 'light' ? 'Dark mode' : 'Light mode'}
					class="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6d8] bg-white text-lg shadow-sm transition duration-200 hover:scale-105 hover:bg-[#eaf0e4] dark:border-[#45614a] dark:bg-[#2a4030] dark:hover:bg-[#38543e]"
					onclick={toggleTheme}
				>
					{#if theme === 'light'}
						<span aria-hidden="true">🌙</span>
					{:else}
						<span aria-hidden="true">☀️</span>
					{/if}
				</button>

				<!-- Mobile Menu Toggle -->
				<button
					type="button"
					class="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce6d8] bg-white text-[#315c3b] transition hover:bg-[#eaf0e4] md:hidden dark:border-[#45614a] dark:bg-[#2a4030] dark:text-[#d5e8cf]"
					aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
					aria-expanded={mobileOpen}
					aria-controls="mobile-navigation"
					onclick={() => (mobileOpen = !mobileOpen)}
				>
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						{#if mobileOpen}
							<path d="M6 6l12 12M18 6L6 18" />
						{:else}
							<path d="M4 7h16M4 12h16M4 17h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileOpen}
		<div
			id="mobile-navigation"
			class="border-t border-[#dce6d8] bg-[#faf9f5] md:hidden dark:border-[#344d39] dark:bg-[#1c2e22]"
		>
			<div class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5">

				{#each links as link}
					<a
						href={link.href}
						class="flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-semibold transition"
						class:bg-[#e5efe1]={isActive(link.href)}
						class:text-[#315c3b]={isActive(link.href)}
						class:dark:bg-[#344d39]={isActive(link.href)}
						class:dark:text-[#c8e5bf]={isActive(link.href)}
						class:text-[#637364]={!isActive(link.href)}
						class:dark:text-[#c0d0bc]={!isActive(link.href)}
						class:hover:bg-[#eaf0e4]={!isActive(link.href)}
						class:dark:hover:bg-[#344d39]={!isActive(link.href)}
						aria-current={isActive(link.href) ? 'page' : undefined}
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
						<span class="text-lg opacity-50" aria-hidden="true">→</span>
					</a>
				{/each}

				<div class="mt-3 border-t border-[#dce6d8] pt-4 text-center dark:border-[#344d39]">
					<p class="text-xs font-medium tracking-wide text-[#78966b]">
						Naturally Grown With Care
					</p>
				</div>

			</div>
		</div>
	{/if}
</nav>
