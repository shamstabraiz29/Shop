<script lang="ts">
  import w2 from '$lib/assets/images/w-2.jpeg';
  import w3 from '$lib/assets/images/w-3.jpeg';
  import w4 from '$lib/assets/images/w-4.jpeg';
  import m1 from '$lib/assets/images/m-1.jpeg';
  import m2 from '$lib/assets/images/m-2.jpeg';
  import generic1 from '$lib/assets/images/image1.jpg';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import CatalogProductCard from '$lib/components/CatalogProductCard.svelte';
  import ProductQuickView from '$lib/components/ProductQuickView.svelte';
  import NewsletterCta from '$lib/components/NewsletterCta.svelte';
  import { addToCart } from '$lib/hooks/cart';
  import ItemsList from '$lib/components/ItemsList.svelte';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { Input } from '$lib/components/ui/input';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from '$lib/components/ui/select';
  import { onMount } from 'svelte';
  import { Search } from 'lucide-svelte';

  type Item = {
    title: string;
    image: string;
    description: string;
    price: string;
    category: 'women' | 'men';
  };

  // Image mapping for dynamic imports
  const imageMap: Record<string, string> = {
    'w-2.jpeg': w2,
    'w-3.jpeg': w3,
    'w-4.jpeg': w4,
    'm-1.jpeg': m1,
    'm-2.jpeg': m2,
    'image1.jpg': generic1,
  };

  let baseItems: Item[] = [];
  let items: Item[] = [];

  async function fetchProducts() {
    try {
      const response = await fetch('/api/shop-products');
      const result = await response.json();

      if (result.success) {
        baseItems = result.data.map((item: any) => ({
          ...item,
          image: imageMap[item.image] || item.image,
        }));

        items = Array.from({ length: 30 }, (_, i) => {
          const b = baseItems[i % baseItems.length];
          return {
            ...b,
            title: `${b.title} #${i + 1}`,
          };
        });
      }
    } catch (error) {
      console.error('Failed to fetch shop products:', error);
      baseItems = [];
      items = [];
    }
  }

  let showAll = false;
  let sortBy: 'default' | 'price-low' | 'price-high' = 'default';
  let categoryFilter: 'all' | 'women' | 'men' = 'all';
  let searchQuery = '';

  $: sortLabel =
    sortBy === 'default'
      ? 'Default'
      : sortBy === 'price-low'
        ? 'Price: Low to High'
        : 'Price: High to Low';

  $: categoryLabel =
    categoryFilter === 'all'
      ? 'All Categories'
      : categoryFilter === 'women'
        ? "Women's Clothing"
        : "Men's Clothing";

  $: filteredItems = (() => {
    let filtered = items;

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  })();

  $: sortedItems = (() => {
    if (sortBy === 'default') return filteredItems;
    const sorted = [...filteredItems].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
      return sortBy === 'price-low' ? priceA - priceB : priceB - priceA;
    });
    return sorted;
  })();

  $: visibleItems = showAll ? sortedItems : sortedItems.slice(0, 12);

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
  <title>Shop All Products - Ahmad</title>
  <meta
    name="description"
    content="Browse our complete collection of fashion items for men and women at Ahmad."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-secondary py-16 lg:py-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        Shop All Products
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        Discover our complete collection of fashion items for every style and
        occasion
      </p>
    </div>
  </section>

  <!-- Filters and Search -->
  <section class="py-12">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <div
        class="rounded-2xl border border-gray-200/60 bg-white shadow-sm p-4 md:p-5"
      >
        <div
          class="flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div class="flex flex-col sm:flex-row gap-4 w-full">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto"
            >
              <label
                for="category-select"
                class="w-full sm:w-auto text-sm sm:text-base font-medium text-gray-600 mb-1 sm:mb-0"
                >Category:</label
              >
              <Select
                type="single"
                onValueChange={(value: string) =>
                  (categoryFilter = value as typeof categoryFilter)}
              >
                <SelectTrigger
                  id="category-select"
                  class="w-full sm:w-48 h-11 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                >
                  {categoryLabel}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="women">Women's Clothing</SelectItem>
                  <SelectItem value="men">Men's Clothing</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                onValueChange={(value: string) =>
                  (sortBy = value as typeof sortBy)}
              >
                <SelectTrigger
                  id="sort-select"
                  class="w-full sm:w-48 h-11 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                >
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
          <div class="relative w-full md:w-72 lg:w-80">
            <Input
              type="text"
              placeholder="Search products..."
              bind:value={searchQuery}
              class="w-full h-11 pl-10 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
            />
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search size={18} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Products Grid -->
  <section class="pb-16 lg:pb-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      {#if isLoading}
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {#each Array(12) as _}
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
        <ItemsList
          items={visibleItems}
          isLoading={false}
          on:add={(e) => openQuickView(e.detail.item)}
        />
      {/if}

      {#if !showAll && !isLoading && sortedItems.length > 12}
        <div class="flex justify-center mt-10">
          <button
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            on:click={() => (showAll = true)}
          >
            See more
          </button>
        </div>
      {/if}

      {#if !isLoading && sortedItems.length === 0}
        <div class="text-center py-16">
          <h3 class="text-xl font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p class="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      {/if}
    </div>
  </section>

  <NewsletterCta />

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
