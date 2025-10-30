<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let title: string = 'Order Summary';
  export let subtotal: number = 0;
  export let shipping: number = 0;
  export let tax: number = 0;
  export let total: number = 0;
  export let continueHref: string = '/shop';
  export let currencyLabel: string = 'PKR';

  const dispatch = createEventDispatcher();

  function onCheckout() {
    dispatch('checkout');
  }

  function fmt(amount: number): string {
    return `${currencyLabel} ${amount.toFixed(2)}`;
  }
</script>

<div class="bg-white rounded-lg shadow-md p-6 sticky top-8">
  <h2 class="text-lg font-semibold text-secondary mb-6">{title}</h2>

  <div class="space-y-4">
    <div class="flex justify-between">
      <span class="text-gray-600">Subtotal</span>
      <span class="font-semibold">{fmt(subtotal)}</span>
    </div>

    <div class="flex justify-between">
      <span class="text-gray-600">Shipping</span>
      <span class="font-semibold">{fmt(shipping)}</span>
    </div>

    <div class="flex justify-between">
      <span class="text-gray-600">Tax</span>
      <span class="font-semibold">{fmt(tax)}</span>
    </div>

    <div class="border-t border-gray-200 pt-4">
      <div class="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span class="text-primary">{fmt(total)}</span>
      </div>
    </div>
  </div>

  <button
    class="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 mt-6"
    on:click={onCheckout}
  >
    Proceed to Checkout
  </button>

  <a
    href={continueHref}
    class="block w-full text-center text-secondary hover:text-primary transition-colors mt-4"
  >
    Continue Shopping
  </a>

  <div class="mt-6 pt-6 border-t border-gray-200">
    <div
      class="flex items-center justify-center space-x-2 text-sm text-gray-600"
    >
      <span>🔒</span>
      <span>Secure Checkout</span>
    </div>
  </div>
</div>
