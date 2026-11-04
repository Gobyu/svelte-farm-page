<!-- src/routes/home/+page.svelte -->
<script lang="ts">
	const go = (path: string) => {
		if (typeof window !== 'undefined') window.location.href = path;
	};

	const scrollToId = (id: string) => {
		if (typeof document === 'undefined') return;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<section class="mx-auto max-w-6xl px-4 py-10">
	<h1 class="mt-3 mb-3 text-4xl font-bold tracking-tight md:text-5xl">Available Products</h1>
	<h3 class="mt-2 mb-2 text-2xl font-semibold tracking-tight md:text-2xl">All of our products are ORGANIC (no pesticides, herbicides, fertilizers, antibiotics, growth hormones, GMOs)</h3>
	<div class="flex 100wh overflow-hidden rounded-lg border border-gray-300 shadow-md mb-2 mr-2">
		<img 
		src="/src/lib/assets/Butternut Squash.jpg" 
		alt="Butternut Squash"
		class="w-100 object-cover"
		/>

		<div class="p-5">
			<h2 class="mb-2 text-3xl font-bold">Organic Butternut Squash</h2>
			<p class="mb-3 text-2xl text-gray-500 font-bold">
			Price: $10 for 8lbs ($1.25/lb)
			</p>
			<p class="mb-3 text-2xl text-gray-400">
			Butternut squash has a smooth, tan skin and bright orange flesh. It has a sweet, slightly nutty flavour and a soft, creamy texture when cooked. It is great for soups, roasting, and baking.
			</p>
		</div>
	</div>
	<div class="flex 100wh overflow-hidden rounded-lg border border-gray-300 shadow-md mb-2 mr-2">
		<img 
		src="/src/lib/assets/Kabocha Squash.jpg" 
		alt="Kabocha Squash"
		class="w-100 object-cover"
		/>

		<div class="p-5">
			<h2 class="mb-2 text-3xl font-bold">Organic Butternut Squash</h2>
			<p class="mb-3 text-2xl text-gray-500 font-bold">
			Price: $10 for 8lbs ($1.25/lb)
			</p>
			<p class="mb-3 text-2xl text-gray-400">
			Kabocha squash is a Japanese winter squash with dark green skin and orange flesh. It has a sweet flavour similar to pumpkin and a soft, fluffy texture like a sweet potato when cooked. It is great for roasting, steaming, and soups.
			</p>
		</div>
	</div>
</section>
<section class="mx-auto max-w-6xl px-4 py-10">
		<h1 class="mt-3 mb-3 text-4xl font-bold tracking-tight md:text-5xl">Upcoming Products (next year!)</h1>
</section>
