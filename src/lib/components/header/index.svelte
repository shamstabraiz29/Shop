<script lang="ts">
  import { Menu, X, ShoppingCart } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { cart } from '$lib/hooks/cart';

  let isMenuOpen = $state(false);
  let isLargeScreen = $state(false);
  let isClosing = $state(false);

  interface NavigationLink {
    name: string;
    href: string;
  }

  const navigationLinks: NavigationLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isClosing = true;
    setTimeout(() => {
      isMenuOpen = false;
      isClosing = false;
    }, 300);
  }

  function checkScreenSize() {
    isLargeScreen = window.innerWidth >= 1024;
  }

  function isActive(href: string): boolean {
    return $page.url.pathname === href;
  }

  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Add escape key listener for closing menu
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<header class="w-full">
  <div
    class="bg-white max-w-[90%] mx-auto w-full py-6 flex items-center justify-between"
  >
    <div class="shrink-0">
      <h1 class="text-2xl lg:text-3xl font-bold text-secondary tracking-tight">
        <a href="/" class="no-underline">Ahmad</a>
      </h1>
    </div>

    {#if isLargeScreen}
      <nav class="flex items-center gap-[30px]">
        {#each navigationLinks as link}
          <a
            href={link.href}
            class="text-base font-normal transition-colors no-underline {isActive(
              link.href
            )
              ? 'text-primary'
              : 'text-gray-600  hover:text-primary'}"
          >
            {link.name}
          </a>
        {/each}
        <a
          href="/cart"
          class="relative transition-colors {isActive('/cart')
            ? 'text-primary'
            : 'text-gray-600 hover:text-primary'}"
          aria-label="Shopping Cart"
        >
          <ShoppingCart size={20} />
          {#if $cart.items.length > 0}
            <span
              class="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center"
              aria-label="Cart item count"
            >
              {$cart.items.length}
            </span>
          {/if}
        </a>
      </nav>
    {/if}

    {#if !isLargeScreen}
      <div class="flex items-center gap-4">
        <a
          href="/cart"
          class="relative transition-colors {isActive('/cart')
            ? 'text-primary'
            : 'text-gray-600 hover:text-primary'}"
          aria-label="Shopping Cart"
        >
          <ShoppingCart size={20} />
          {#if $cart.items.length > 0}
            <span
              class="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center"
              aria-label="Cart item count"
            >
              {$cart.items.length}
            </span>
          {/if}
        </a>
        <button
          onclick={toggleMenu}
          class="text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle menu"
        >
          <div class="menu-icon {isMenuOpen ? 'rotated' : ''}">
            {#if isMenuOpen}
              <X size={24} />
            {:else}
              <Menu size={24} />
            {/if}
          </div>
        </button>
      </div>
    {/if}
  </div>

  {#if isMenuOpen && !isLargeScreen}
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-black/60 bg-opacity-20 z-40 transition-opacity duration-300 {isClosing
        ? 'opacity-0'
        : 'opacity-100'}"
      onclick={closeMenu}
      onkeydown={(e) => e.key === 'Escape' && closeMenu()}
      role="button"
      tabindex="0"
      aria-label="Close menu"
    ></div>

    <!-- Side Menu -->
    <div
      class="fixed top-0 right-0 w-80 h-screen bg-[#f5f1ed] border-l border-[#e0dcd8] text-center overflow-hidden z-50 shadow-2xl"
      style="animation: {isClosing
        ? 'slideOutRight 0.3s ease-in-out forwards'
        : 'slideInRight 0.3s ease-out forwards'};"
    >
      <div class="w-full h-full mx-auto flex flex-col gap-5 pt-8 px-6">
        <!-- Close button at top -->
        <button
          onclick={closeMenu}
          class="self-end text-gray-600 hover:text-primary text-lg font-medium transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white hover:bg-opacity-50"
          style="animation: slideInFromRight 0.4s ease-out 0.1s both;"
        >
          <X size={24} />
        </button>

        <!-- Navigation Links -->
        {#each navigationLinks as link, index}
          <a
            href={link.href}
            onclick={closeMenu}
            class="nav-link text-2xl font-normal transition-all duration-500 no-underline transform hover:scale-105 hover:translate-x-2 px-6 py-4 rounded-lg hover:bg-white hover:bg-opacity-50 border-l-4 {isActive(
              link.href
            )
              ? 'text-primary border-primary'
              : 'text-gray-600 hover:text-primary border-transparent hover:border-primary'} relative"
            style="animation: slideInFromRight 0.5s ease-out {0.2 +
              index * 0.1}s both;"
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
