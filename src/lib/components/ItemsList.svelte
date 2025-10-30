<script lang="ts">
  import CatalogProductCard from '$lib/components/CatalogProductCard.svelte';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { createEventDispatcher } from 'svelte';

  type Item = {
    title: string;
    image: string;
    description: string;
    price: string;
  };

  export let items: Item[] = [];
  export let isLoading: boolean = false;
  export let gridClass: string =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8';

  const dispatch = createEventDispatcher();

  function handleAdd(item: Item) {
    dispatch('add', { item });
  }
</script>

{#if isLoading}
  <div class={gridClass}>
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
  <div class={gridClass}>
    {#each items as item}
      <CatalogProductCard
        title={item.title}
        image={item.image}
        description={item.description}
        price={item.price}
        buttonText="Add to Cart"
        on:add={() => handleAdd(item)}
      />
    {/each}
  </div>
{/if}
