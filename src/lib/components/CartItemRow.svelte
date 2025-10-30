<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    color: string;
    image: string; // emoji or url
  };

  export let item: CartItem;

  const dispatch = createEventDispatcher();
  function isUrlLike(src: string): boolean {
    return (
      src.startsWith('http') || src.startsWith('/') || src.startsWith('data:')
    );
  }
  function decrement() {
    dispatch('decrement');
  }
  function increment() {
    dispatch('increment');
  }
  function remove() {
    dispatch('remove');
  }
</script>

<div class="p-6">
  <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
    <div
      class="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex items-center justify-center"
    >
      {#if isUrlLike(item.image)}
        <img
          src={item.image}
          alt={item.name}
          class="h-full w-full object-cover rounded-lg"
        />
      {:else}
        <span class="text-2xl">{item.image}</span>
      {/if}
    </div>

    <div class="flex-1 min-w-0">
      <h3 class="text-lg font-semibold text-secondary">{item.name}</h3>
      <p class="text-sm text-gray-600">
        Size: {item.size} | Color: {item.color}
      </p>
      <p class="text-lg font-bold text-primary">PKR {item.price.toFixed(2)}</p>
    </div>

    <div class="flex items-center gap-2 sm:ml-4">
      <button
        on:click={decrement}
        class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        -
      </button>
      <span class="w-8 text-center font-semibold">{item.quantity}</span>
      <button
        on:click={increment}
        class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        +
      </button>
    </div>

    <div class="text-left sm:text-right">
      <p class="text-lg font-bold text-secondary">
        PKR {(item.price * item.quantity).toFixed(2)}
      </p>
    </div>

    <button
      on:click={remove}
      class="self-start sm:self-auto text-gray-400 hover:text-red-600 transition-colors"
      title="Remove item"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</div>
