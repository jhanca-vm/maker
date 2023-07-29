<script>
  import '@fontsource-variable/manrope'
  import '../app.css'
  import logo from '$lib/assets/logo.svg'
  import Hero from '$lib/Hero.svelte'
  import Features from '$lib/Features.svelte'
  import Pricing from '$lib/Pricing.svelte'
  import CallToAction from '$lib/CallToAction.svelte'

  export let data
</script>

<svelte:head>
  <title>maker</title>
  <meta name="description" content="Get paid for the work you love to do." />
</svelte:head>

<header class="flex justify-center pt-10">
  <img src={logo} alt="maker" width="120" height="35" />
</header>
<main>
  <Hero />
  <Features data={data.features} />
  <Pricing />
  <CallToAction />
</main>
