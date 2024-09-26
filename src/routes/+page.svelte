<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import * as Tabs from '$lib/components/ui/tabs';
	import { ArrowRightIcon, CheckIcon, ShellIcon } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
</script>

<main class="w-full px-5 flex justify-center">
	<div class="w-full max-w-[1400px]">
		<nav>
			<div class="py-2.5 flex items-center justify-between">
				<div class="flex gap-1">
					<ShellIcon size="28" />
					<Badge variant="secondary">v0.0</Badge>
				</div>
				<Tabs.Root class="hidden lg:block" value="home">
					<Tabs.List class="h-10 p-2">
						<Tabs.Trigger value="home">Home</Tabs.Trigger>
						<Tabs.Trigger>Features</Tabs.Trigger>
						<Tabs.Trigger>Pricing</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
				<Button class="rounded" variant="secondary" on:click={signIn} size="icon">
					<ArrowRightIcon size="14" />
				</Button>
			</div>
		</nav>
		<section class="mt-5">
			<div class="main border rounded p-4 lg:p-5">
				<div class="w-full flex flex-col text-center items-center mt-10">
					<h1 class="text-4xl lg:text-6xl font-black">Autopilot for your fantasy team.</h1>
					<p class="text-sm lg:text-base mt-7 text-muted-foreground max-w-[500px]">
						Effortlessly win the season with lineup and transaction recommendations tailored to your
						fantasy team.
					</p>
					<div class="mt-7 flex gap-5">
						<Button class="text-xs lg:text-sm" variant="secondary">Live Demo</Button>
						<Button class="text-xs lg:text-sm">Get Started <ArrowRightIcon class="ml-1" size={14} /></Button>
					</div>
				</div>
				<div class="mt-5 p-5">
					<div class="h-[200px] md:h-[350px] lg:h-[500px] border bg-muted rounded"></div>
				</div>
				<div class="items-center justify-center flex flex-col lg:flex-row gap-5">
					<div class="flex items-center gap-1 text-xs text-muted-foreground">
						<CheckIcon size="16" />Free Signup
					</div>
					<div class="flex items-center gap-1 text-xs text-muted-foreground">
						<CheckIcon size="16" />Data Privacy
					</div>
					<div class="flex items-center gap-1 text-xs text-muted-foreground">
						<CheckIcon size="16" />Cancel Anytime
					</div>
				</div>
			</div>
		</section>
		<section class="second my-10 mt-20 rounded">
			<Badge variant="secondary">Features</Badge>
			<h1 class="mt-1 text-2xl lg:text-4xl font-bold">Win the season with ease.</h1>
			<div class="grid gap-5 mt-5 lg:grid-cols-2">
				<div class="border p-5 rounded">
					<div class="h-[250px] bg-muted"></div>
					<div class="mt-5">
						<Badge class="text-muted-foreground" variant="secondary">Integration</Badge>
						<h2 class="mt-1 font-medium lg:text-xl">Manage teams</h2>
						<p class="mt-1 text-muted-foreground text-xs lg:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat tenetur illum
							beatae.
						</p>
					</div>
				</div>
				<div class="border p-5 rounded">
					<div class="h-[250px] bg-muted"></div>
					<div class="mt-5">
						<Badge class="text-muted-foreground" variant="secondary">Recommendations</Badge>
						<h2 class="mt-1 font-medium lg:text-xl">Fine-tune lineups</h2>
						<p class="mt-1 text-muted-foreground text-xs lg:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat tenetur illum
							beatae.
						</p>
					</div>
				</div>
				<div class="border p-5 rounded lg:col-span-2">
					<div class="h-[250px] bg-muted"></div>
					<div class="mt-5">
						<Badge class="text-muted-foreground" variant="secondary">Autopilot</Badge>
						<h2 class="mt-1 font-medium lg:text-xl">Hands-free management</h2>
						<p class="mt-1 text-muted-foreground text-xs lg:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat tenetur illum
							beatae.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.main {
		background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
			url('grid.jpg');
		background-size: cover;
	}
</style>
