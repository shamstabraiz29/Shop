<script lang="ts">
  import HeroSection from '$lib/sections/home/HeroSection.svelte';
  import CarouselSection from '$lib/sections/home/CarouselSection.svelte';
  import FeaturedCategories from '$lib/sections/home/FeaturedCategories.svelte';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
</script>

<svelte:head>
  <title>Ahmad - Fashion Store</title>
  <meta
    name="description"
    content="Discover the latest fashion trends at Ahmad. Shop for women's and men's clothing with style and quality."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <HeroSection />
  <FeaturedCategories />
  <CarouselSection />
  <CtaSection />
</main>
