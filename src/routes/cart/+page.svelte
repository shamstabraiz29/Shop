<script lang="ts">
  // Cart page
  import CatalogProductCard from '$lib/components/CatalogProductCard.svelte';
  import img1 from '$lib/assets/images/w-2.jpeg';
  import img2 from '$lib/assets/images/w-3.jpeg';
  import img3 from '$lib/assets/images/w-4.jpeg';
  import img4 from '$lib/assets/images/m-1.jpeg';
  import img5 from '$lib/assets/images/m-2.jpeg';
  import OrderSummaryCard from '$lib/components/OrderSummaryCard.svelte';
  import CartItemRow from '$lib/components/CartItemRow.svelte';
  import ProductQuickView from '$lib/components/ProductQuickView.svelte';
  import {
    cart,
    updateQuantity,
    removeItem,
    clearCart,
    addToCart,
  } from '$lib/hooks/cart';

  let subtotal = 0;
  let shipping = 9.99;
  let tax = 0;
  let total = 0;

  // Calculate totals
  $: {
    const items = $cart.items;
    subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    tax = subtotal * 0.08; // 8% tax
    total = subtotal + shipping + tax;
  }
  $: cartItems = $cart.items;

  type RecommendedProduct = {
    id: number;
    title: string;
    image: string;
    price: number;
    compareAtPrice?: number;
    badge?: string;
    rating?: number;
    reviewCount?: number;
  };

  const recommendedProducts: RecommendedProduct[] = [
    {
      id: 101,
      title: "Women's Summer Dress",
      image: img1,
      price: 89.99,
      compareAtPrice: 119.99,
      badge: 'New',
      rating: 4.7,
      reviewCount: 214,
    },
    {
      id: 102,
      title: "Women's Floral Midi Dress",
      image: img2,
      price: 79.99,
      compareAtPrice: 99.99,
      badge: 'trending',
      rating: 4.5,
      reviewCount: 173,
    },
    {
      id: 103,
      title: "Women's Casual Maxi Dress",
      image: img3,
      price: 69.99,
      rating: 4.3,
      reviewCount: 98,
    },
    {
      id: 104,
      title: "Men's Classic Dress Shirt",
      image: img4,
      price: 59.99,
      compareAtPrice: 79.99,
      rating: 4.4,
      reviewCount: 156,
    },
    {
      id: 105,
      title: "Men's Slim Fit Chinos",
      image: img5,
      price: 64.99,
      compareAtPrice: 89.99,
      rating: 4.6,
      reviewCount: 121,
    },
  ];

  let quickViewOpen = false;
  let quickViewProduct: RecommendedProduct | null = null;

  function openQuickView(product: RecommendedProduct) {
    quickViewProduct = product;
    quickViewOpen = true;
  }

  function confirmQuickView(
    e: CustomEvent<{ size: string; color: string; quantity: number }>
  ) {
    if (!quickViewProduct) return;
    const { size, color, quantity } = e.detail;
    addToCart({
      productId: String(quickViewProduct.id),
      name: quickViewProduct.title,
      price: quickViewProduct.price,
      size,
      color,
      quantity,
      image: quickViewProduct.image,
    });
    quickViewOpen = false;
    quickViewProduct = null;
  }
</script>

<svelte:head>
  <title>Shopping Cart - ETHKL</title>
  <meta
    name="description"
    content="Review your items and proceed to checkout at ETHKL."
  />
</svelte:head>

<main>
  <section class="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="mx-auto max-w-[92%] lg:max-w-[75%]">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-secondary">Shopping Cart</h1>
        <p class="text-gray-600 mt-2">
          {$cart.items.length}
          {$cart.items.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      {#if $cart.items.length === 0}
        <!-- Empty Cart -->
        <div class="text-center py-16">
          <div
            class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <span class="text-4xl">🛒</span>
          </div>
          <h2 class="text-2xl font-semibold text-secondary mb-4">
            Your cart is empty
          </h2>
          <p class="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <a
            href="/shop"
            class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Start Shopping
          </a>
        </div>
      {:else}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <!-- Cart Header -->
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex justify-between items-center">
                  <h2 class="text-lg font-semibold text-secondary">
                    Cart Items
                  </h2>
                  <button
                    on:click={clearCart}
                    class="text-sm text-red-600 hover:text-red-800 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <!-- Items List -->
              <div class="divide-y divide-gray-200">
                {#each $cart.items as item (item.id)}
                  <CartItemRow
                    {item}
                    on:decrement={() =>
                      updateQuantity(item.id, item.quantity - 1)}
                    on:increment={() =>
                      updateQuantity(item.id, item.quantity + 1)}
                    on:remove={() => removeItem(item.id)}
                  />
                {/each}
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <OrderSummaryCard
              title="Order Summary"
              {subtotal}
              {shipping}
              {tax}
              {total}
              continueHref="/shop"
              currencyLabel="PKR"
              on:checkout={() => {
                /* integrate checkout here */
              }}
            />
          </div>
        </div>
      {/if}
      {#if quickViewProduct}
        <ProductQuickView
          open={quickViewOpen}
          title={quickViewProduct.title}
          image={quickViewProduct.image}
          priceLabel={`PKR ${quickViewProduct.price.toFixed(2)}`}
          compareAtLabel={quickViewProduct.compareAtPrice
            ? `PKR ${quickViewProduct.compareAtPrice.toFixed(2)}`
            : undefined}
          sizes={['S', 'M', 'L', 'XL']}
          colors={['#111827', '#6B7280', '#9CA3AF', '#F59E0B']}
          on:close={() => {
            quickViewOpen = false;
            quickViewProduct = null;
          }}
          on:confirm={confirmQuickView}
        />
      {/if}
    </div>
  </section>
  {#if $cart.items.length > 0}
    <!-- Recommended Products -->
    <section class="mx-auto max-w-[75%] py-16 lg:py-24">
      <h2 class="text-3xl font-bold text-secondary mb-8">
        You Might Also Like
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each recommendedProducts as product (product.id)}
          <CatalogProductCard
            title={product.title}
            image={product.image}
            description={''}
            price={`PKR ${product.price.toFixed(2)}`}
            compareAtPrice={product.compareAtPrice
              ? `PKR ${product.compareAtPrice.toFixed(2)}`
              : undefined}
            buttonText="Add to Cart"
            badge={product.badge}
            on:add={() => openQuickView(product)}
          />
        {/each}
      </div>
    </section>
  {/if}
</main>
