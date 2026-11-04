<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	const scrollToId = (id: string) => {
		if (typeof document === 'undefined') return;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<section class="mx-auto max-w-6xl px-4 py-10">
	<h1 class="mt-3 mb-3 text-5xl font-bold tracking-tight md:text-5xl">Contact Us | 联系我们</h1>
		<div class="p-5">
			<h2 class="mb-3 text-4xl font-bold">Waterford | 沃特福德</h2>
			<h3 class="mb-2 text-2xl font-semibold">English & 中文</h3>
			<p class="mb-2 text-2xl text-gray-500 font-bold">
			Phone | 电话: (437)-340-7096
			<br/>
			WeChat | 微信:
			</p>
		</div>
		<div class="p-5">
			<h2 class="mb-3 text-4xl font-bold">Toronto | 多伦多</h2>
			<h3 class="mb-2 text-2xl font-semibold">English | 英文</h3>
			<p class="mb-2 text-2xl text-gray-500 font-bold">
			Please Text: (647)-858-1069
			<br/>
			</p>
			<h3 class="mb-3 text-2xl font-semibold">Chinese | 中文</h3>
			<p class="mb-2 text-2xl text-gray-500 font-bold">
			电话：(647)-878-6719
			<br/>
			下午 5:30 前发: 送短信
			<br/>
			下午 5:30 之后: 来电
			<br/>
			微信: 
			</p>
		</div>
</section>
