<script lang="ts">
  import w2 from '$lib/assets/images/w-2.jpeg';
  import w3 from '$lib/assets/images/w-3.jpeg';
  import w4 from '$lib/assets/images/w-4.jpeg';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import CatalogProductCard from '$lib/components/CatalogProductCard.svelte';
  import ProductQuickView from '$lib/components/ProductQuickView.svelte';
  import { addToCart } from '$lib/hooks/cart';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { onMount } from 'svelte';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from '$lib/components/ui/select';

  type Item = {
    title: string;
    image: string;
    description: string;
    price: string;
  };

  // Image mapping for dynamic imports
  const imageMap: Record<string, string> = {
    'w-2.jpeg': w2,
    'w-3.jpeg': w3,
    'w-4.jpeg': w4,
  };

  let baseItems: Item[] = [];
  let items: Item[] = [];

  // Fetch products from API
  async function fetchProducts() {
    try {
      const response = await fetch('/api/women-products');
      const result = await response.json();

      if (result.success) {
        // Map image filenames to actual imports
        baseItems = result.data.map((item: any) => ({
          ...item,
          image: imageMap[item.image] || item.image,
        }));

        // Generate 20 items by cycling the base items
        items = Array.from({ length: 21 }, (_, i) => {
          const b = baseItems[i % baseItems.length];
          return {
            ...b,
            title: `${b.title} #${i + 1}`,
          };
        });
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Fallback to empty array if API fails
      baseItems = [];
      items = [];
    }
  }

  let showAll = false;
  let sortBy: 'default' | 'price-low' | 'price-high' = 'default';
  $: sortLabel =
    sortBy === 'default'
      ? 'Default'
      : sortBy === 'price-low'
        ? 'Price: Low to High'
        : 'Price: High to Low';

  $: sortedItems = (() => {
    if (sortBy === 'default') return items;
    const sorted = [...items].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
      return sortBy === 'price-low' ? priceA - priceB : priceB - priceA;
    });
    return sorted;
  })();

  $: visibleItems = showAll ? sortedItems : sortedItems.slice(0, 9);

  let isLoading = true;
  onMount(() => {
    fetchProducts();
    const t = setTimeout(() => {
      isLoading = false;
    }, 600);
    return () => clearTimeout(t);
  });

  let quickViewOpen = false;
  let quickViewItem: Item | null = null;
  function openQuickView(item: Item) {
    quickViewItem = item;
    quickViewOpen = true;
  }
  function closeQuickView() {
    quickViewOpen = false;
    quickViewItem = null;
  }
</script>

<svelte:head>
  <title>Pakistani Women's Dresses - Ahmad</title>
  <meta
    name="description"
    content="Shop authentic Pakistani women's dresses at Ahmad — lawn, chiffon, pret (ready-to-wear), unstitched suits, kurtis, bridal & party wear. Nationwide delivery in Pakistan."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-primary/80 py-16 lg:py-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        Pakistani Women's Dresses
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        Lawn, chiffon, pret & unstitched suits — elegant Pakistani styles for
        every occasion
      </p>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <div
        class="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
      >
        <h2 class="text-3xl font-bold text-secondary text-center sm:text-left">
          Featured Pakistani Dresses
        </h2>
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto"
        >
          <label
            for="sort-select"
            class="w-full sm:w-auto text-sm sm:text-base font-medium text-gray-600 mb-1 sm:mb-0"
            >Sort by:</label
          >
          <Select
            type="single"
            onValueChange={(value: string) => (sortBy = value as typeof sortBy)}
          >
            <SelectTrigger id="sort-select" class="w-full sm:w-48">
              {sortLabel}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {#if isLoading}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each Array(9) as _}
            <div
              class="group relative rounded-2xl bg-white border border-gray-200/60 shadow-sm overflow-hidden"
            >
              <Skeleton class="w-full aspect-4/5" />
              <div class="p-5">
                <Skeleton class="h-5 w-3/4 mb-2" />
                <Skeleton class="h-4 w-full mb-2" />
                <div class="mt-4 flex items-center justify-between">
                  <Skeleton class="h-6 w-20" />
                  <Skeleton class="h-9 w-28 rounded-lg" />
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each visibleItems as item}
            <CatalogProductCard
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              buttonText="Add to Cart"
              on:add={() => openQuickView(item)}
            />
          {/each}
        </div>
      {/if}
      {#if !showAll && !isLoading}
        <div class="flex justify-center mt-10">
          <button
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            on:click={() => (showAll = true)}
          >
            See more
          </button>
        </div>
      {/if}
    </div>
  </section>

  <!-- CTA Section (reused component) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Looking for something specific?"
    description="Explore all Pakistani dresses or reach out for size and styling guidance."
    primaryButton={{
      label: 'Shop Pakistani Dresses',
      href: '/shop',
      variant: 'primary',
    }}
    secondaryButton={{
      label: 'Contact Us',
      href: '/about',
      variant: 'outline',
    }}
  />
  {#if quickViewItem}
    <ProductQuickView
      open={quickViewOpen}
      title={quickViewItem.title}
      image={quickViewItem.image}
      priceLabel={quickViewItem.price}
      sizes={['S', 'M', 'L', 'XL']}
      colors={['#111827', '#6B7280', '#9CA3AF', '#EC4899']}
      on:close={closeQuickView}
      on:confirm={(e) => {
        if (!quickViewItem) return;
        const item = quickViewItem;
        const { size, color, quantity } = e.detail;
        const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''));
        addToCart({
          productId: item.title,
          name: item.title,
          price: numericPrice,
          size,
          color,
          quantity,
          image: item.image,
        });
        closeQuickView();
      }}
    />
  {/if}
</main>
