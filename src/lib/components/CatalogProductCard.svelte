<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Heart, Star, ShoppingCart } from 'lucide-svelte';

  const dispatch = createEventDispatcher();

  export let title: string;
  export let image: string;
  export let description: string = '';
  export let price: string = '';
  export let compareAtPrice: string | undefined = undefined;
  export let buttonText: string = 'Add to Cart';
  export let className: string = '';
  export let badge: string | undefined = undefined;
  export let href: string | undefined = undefined;
  export let rating: number | undefined = undefined; // 0-5
  export let reviewCount: number | undefined = undefined;
  export let swatches: string[] = [];
  export let outOfStock: boolean = false;
  export let cardHeight: string = 'h-full';

  function onAddToCart() {
    dispatch('add', { title });
  }
  function onToggleWishlist() {
    dispatch('wishlist', { title });
  }

  let cardEl: HTMLDivElement | null = null;
  let tiltX = 0;
  let tiltY = 0;
  const maxTilt = 6;
  function handleMove(event: MouseEvent) {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    tiltX = (0.5 - y) * maxTilt * 2;
    tiltY = (x - 0.5) * maxTilt * 2;
  }
  function handleLeave() {
    tiltX = 0;
    tiltY = 0;
  }
</script>

<div
  class={`group relative rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 p-px transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardHeight} ${className}`}
  bind:this={cardEl}
  on:mousemove={handleMove}
  on:mouseleave={handleLeave}
  role="group"
>
  <div
    class="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"
    style="background-image: conic-gradient(rgba(59,130,246,0.25), rgba(236,72,153,0.25), rgba(59,130,246,0.25));"
  ></div>
  <div
    class="rounded-2xl border border-gray-200/60 bg-white shadow-sm ring-1 ring-transparent group-hover:ring-primary/20 overflow-hidden relative will-change-transform h-full"
    style={`transform: perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg); transition: transform 200ms ease;`}
  >
    {#if badge}
      <div class="absolute left-3 top-3 z-20">
        <span
          class="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md"
        >
          {badge}
        </span>
      </div>
    {/if}

    <button
      type="button"
      class="absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-primary shadow backdrop-blur transition hover:bg-white"
      aria-label="Add to wishlist"
      on:click|stopPropagation={onToggleWishlist}
    >
      <Heart size={18} />
    </button>

    <div class="relative overflow-hidden rounded-t-2xl">
      <div class="aspect-4/5 w-full bg-gray-100">
        {#if image}
          <img
            src={image}
            alt={title}
            class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        {:else}
          <div
            class="flex h-full w-full items-center justify-center text-gray-400"
          >
            No Image
          </div>
        {/if}
      </div>
      <div
        class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>

      <div
        class="absolute inset-x-0 bottom-3 z-10 flex justify-center opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur"
        >
          <ShoppingCart size={16} />
          <button type="button" on:click|stopPropagation={onAddToCart}
            >{buttonText}</button
          >
        </div>
      </div>
    </div>

    <div class="p-5">
      {#if href}
        <a {href} class="block">
          <h3
            class="text-lg font-semibold text-secondary tracking-tight hover:text-primary transition-colors"
          >
            {title}
          </h3>
        </a>
      {:else}
        <h3 class="text-lg font-semibold text-secondary tracking-tight">
          {title}
        </h3>
      {/if}

      {#if description}
        <p class="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>
      {/if}

      {#if rating !== undefined}
        <div class="mt-2 flex items-center gap-1">
          {#each Array(5) as _, i}
            <Star
              size={16}
              class={i < Math.round(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'}
            />
          {/each}
          {#if reviewCount !== undefined}
            <span class="ml-1 text-xs text-gray-500">({reviewCount})</span>
          {/if}
        </div>
      {/if}

      {#if swatches.length}
        <div class="mt-3 flex items-center gap-2">
          {#each swatches.slice(0, 4) as color}
            <span
              class="h-5 w-5 rounded-full ring-2 ring-white shadow border border-gray-200"
              style={`background-color: ${color}`}
              aria-label={`Color ${color}`}
            ></span>
          {/each}
          {#if swatches.length > 4}
            <span class="text-xs text-gray-500">+{swatches.length - 4}</span>
          {/if}
        </div>
      {/if}

      <div class="mt-4 flex items-center justify-between">
        {#if price}
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold text-primary">{price}</span>
            {#if compareAtPrice}
              <span class="text-sm text-gray-400 line-through"
                >{compareAtPrice}</span
              >
            {/if}
          </div>
        {:else}
          <span></span>
        {/if}
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 disabled:opacity-50"
          disabled={outOfStock}
          on:click|stopPropagation={onAddToCart}
        >
          <ShoppingCart size={16} />
          {outOfStock ? 'Out of Stock' : buttonText}
        </button>
      </div>
    </div>
  </div>
</div>
