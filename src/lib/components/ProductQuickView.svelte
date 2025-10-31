<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';

  export let open: boolean = false;
  export let title: string = '';
  export let image: string = '';
  export let priceLabel: string = '';
  export let compareAtLabel: string | undefined = undefined;
  export let sizes: string[] = ['S', 'M', 'L', 'XL'];
  export let colors: string[] = ['#111827', '#374151', '#9CA3AF'];

  let selectedSize: string = sizes[0];
  let selectedColor: string = colors[0];
  let quantity: number = 1;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }

  function confirm() {
    dispatch('confirm', { size: selectedSize, color: selectedColor, quantity });
  }

  let zoomEl: HTMLDivElement | null = null;
  let bgPos = 'center';

  function onMove(e: MouseEvent) {
    if (!zoomEl) return;
    const rect = zoomEl.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    bgPos = `${x}% ${y}%`;
  }

  function onTouchMove(e: TouchEvent) {
    if (!zoomEl || e.touches.length === 0) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = zoomEl.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    bgPos = `${x}% ${y}%`;
  }

  // Disable background scroll when modal is open
  let previousBodyOverflow: string | null = null;
  $: {
    if (open) {
      if (typeof document !== 'undefined') {
        if (previousBodyOverflow === null)
          previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (typeof document !== 'undefined' && previousBodyOverflow !== null) {
        document.body.style.overflow = previousBodyOverflow;
        previousBodyOverflow = null;
      }
    }
  }

  onDestroy(() => {
    if (typeof document !== 'undefined' && previousBodyOverflow !== null) {
      document.body.style.overflow = previousBodyOverflow;
      previousBodyOverflow = null;
    }
  });
</script>

{#if open}
  <div class="fixed inset-0 z-50">
    <div
      class="absolute inset-0 bg-black/50"
      role="button"
      tabindex="0"
      aria-label="Close quick view"
      on:click={close}
      on:keydown={(e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') close();
      }}
    ></div>
    <div
      class="absolute inset-0 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
    >
      <div
        class="w-full max-w-5xl bg-white rounded-2xl shadow-xl max-h-[calc(100vh-2rem)] overflow-auto"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div class="relative">
            <div
              class="h-80 lg:h-128 bg-gray-100 touch-none"
              bind:this={zoomEl}
              role="img"
              aria-label={title}
              on:mousemove={onMove}
              on:touchmove={onTouchMove}
              style={`background-image: url('${image}'); background-size: 180%; background-position: ${bgPos}; background-repeat: no-repeat;`}
            >
              <img
                alt={title}
                src={image}
                class="h-full w-full object-cover opacity-0"
              />
            </div>
          </div>

          <div class="p-6 lg:p-8">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-xl font-semibold text-secondary">{title}</h3>
              <button
                class="text-gray-400 hover:text-gray-600"
                on:click={close}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div class="mt-3 flex items-center gap-3">
              {#if priceLabel}
                <span class="text-2xl font-bold text-primary">{priceLabel}</span
                >
              {/if}
              {#if compareAtLabel}
                <span class="text-sm text-gray-400 line-through"
                  >{compareAtLabel}</span
                >
              {/if}
            </div>

            <div class="mt-6">
              <div class="text-sm font-medium text-secondary">Select Size</div>
              <div class="mt-2 flex flex-wrap gap-2">
                {#each sizes as s}
                  <button
                    type="button"
                    class={`px-3 py-1.5 rounded-md border ${selectedSize === s ? 'bg-primary text-white border-primary' : 'bg-white text-secondary border-gray-300'} hover:bg-primary/10`}
                    on:click={() => (selectedSize = s)}
                  >
                    {s}
                  </button>
                {/each}
              </div>
            </div>

            <div class="mt-6">
              <div class="text-sm font-medium text-secondary">Select Color</div>
              <div class="mt-2 flex items-center gap-2">
                {#each colors as c}
                  <button
                    type="button"
                    class={`h-7 w-7 rounded-full ring-2 ${selectedColor === c ? 'ring-primary' : 'ring-transparent'} border border-gray-200 shadow`}
                    style={`background-color: ${c}`}
                    on:click={() => (selectedColor = c)}
                    aria-label={`Color ${c}`}
                  ></button>
                {/each}
              </div>
            </div>

            <div class="mt-6 flex items-center gap-3">
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  class="px-3 py-1.5"
                  on:click={() => (quantity = Math.max(1, quantity - 1))}
                  >-</button
                >
                <span class="px-4 py-1.5 font-semibold">{quantity}</span>
                <button
                  class="px-3 py-1.5"
                  on:click={() => (quantity = quantity + 1)}>+</button
                >
              </div>

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90"
                on:click={confirm}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
