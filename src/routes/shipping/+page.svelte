<script lang="ts">
  // Shipping & Returns page
  import {
    Box,
    Zap,
    Globe,
    Check,
    Truck,
    Mail,
    Cog,
    Home,
    RotateCcw,
    Repeat,
    Wallet,
  } from 'lucide-svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import ShippingInfoCard from '$lib/components/ShippingInfoCard.svelte';
  import SectionBadge from '$lib/components/SectionBadge.svelte';
  import { fade, slide } from 'svelte/transition';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';

  const returnsCards = [
    {
      icon: RotateCcw,
      iconClasses:
        'shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10',
      title: '30-Day Returns',
      text: 'Return for free within 30 days, unworn with tags attached.',
      bg: 'background-color:rgba(173,99,68,0.10)',
    },
    {
      icon: Repeat,
      iconClasses:
        'shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10',
      title: 'Easy Exchanges',
      text: 'Exchange size or color, fast & free—just let us know!',
      bg: 'background-color:rgba(89,101,82,0.10)',
    },
    {
      icon: Wallet,
      iconClasses:
        'shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10',
      title: 'Refund Process',
      text: 'Refund issued to your card or as store credit within 5-7 business days.',
      bg: 'background-color:rgba(173,99,68,0.05)',
    },
  ] as const;
</script>

<svelte:head>
  <title>Shipping & Returns - Ahmad</title>
  <meta
    name="description"
    content="Learn about Ahmad's shipping options, delivery times, and return policy. Free shipping on orders over $75."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-secondary py-16 lg:py-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        Shipping & Returns
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        Everything you need to know about shipping and returns at Ahmad
      </p>
    </div>
  </section>

  <!-- Shipping Information -->
  <section class="my-24">
    <div class="relative mx-auto max-w-[75%]">
      <!-- Section Title -->
      <div class="flex justify-center">
        <SectionBadge text="Shipping" />
      </div>
      <h2
        class="text-3xl md:text-4xl font-bold text-secondary text-center mb-12"
      >
        Shipping Options
      </h2>
      <!-- Simple Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ShippingInfoCard
          icon={Box}
          title="Standard Shipping"
          subtitle="5-7 Business Days"
          features={[
            'Free on orders over $75',
            '$7.99 for orders under $75',
            'Shipping to Gilgit city is always free',
            'Available to all Pakistan addresses',
          ]}
        />
        <ShippingInfoCard
          icon={Zap}
          title="Express Shipping"
          subtitle="2-3 Business Days"
          features={[
            '$14.99 for all orders',
            'Priority handling',
            'Real-time tracking',
            'Weekend delivery available',
          ]}
        />
        <ShippingInfoCard
          icon={Globe}
          title="International Shipping"
          subtitle="7-14 Business Days"
          features={[
            'Available to select countries',
            '$24.99 flat rate',
            'Customs duties may apply',
            'Tracking and insurance included',
          ]}
        />
      </div>
    </div>
  </section>

  <!-- Order Processing Modern Timeline -->
  <section class="my-24 py-24 bg-gray-50">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <div class="flex justify-center">
        <SectionBadge text="Processing Timeline" />
      </div>
      <h2 class="text-3xl font-bold text-secondary text-center mb-12">
        Order Processing
      </h2>
      <div class="relative">
        <div
          class="absolute hidden md:block left-6 top-0 h-full w-1 bg-linear-to-b from-primary via-secondary to-primary/20 rounded-full"
        ></div>
        <ol class="space-y-10">
          <li class="flex items-start relative">
            <div
              class="z-10 shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md"
            >
              <Mail class="w-6 h-6 text-white" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-gray-600 mb-1">
                Order Placed
              </h3>
              <p class="text-gray-600">
                You'll receive an order confirmation email immediately after
                placing your order.
              </p>
            </div>
          </li>
          <li class="flex items-start relative">
            <div
              class="z-10 shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-md"
            >
              <Cog class="w-6 h-6 text-white" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-gray-600 mb-1">
                Processing
              </h3>
              <p class="text-gray-600">
                We prepare your order for shipment within 1-2 business days.
              </p>
            </div>
          </li>
          <li class="flex items-start relative">
            <div
              class="z-10 shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md"
            >
              <Truck class="w-6 h-6 text-white" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-gray-600 mb-1">Shipped</h3>
              <p class="text-gray-600">
                Your order is shipped and you'll receive tracking information
                via email.
              </p>
            </div>
          </li>
          <li class="flex items-start relative">
            <div
              class="z-10 shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-md"
            >
              <Home class="w-6 h-6 text-white" />
            </div>
            <div class="ml-6">
              <h3 class="text-lg font-semibold text-gray-600 mb-1">
                Delivered
              </h3>
              <p class="text-gray-600">
                Your order arrives at your doorstep. Enjoy your new Ahmad
                pieces!
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Returns Policy -->
  <section class="my-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <div class="flex justify-center">
        <SectionBadge text="Returns" />
      </div>
      <h2 class="text-3xl font-bold text-secondary text-center mb-12">
        Returns & Exchanges
      </h2>

      <div class="space-y-8 returns-cards-anim">
        {#each returnsCards as step, i}
          <div in:fade={{ delay: 200 + i * 200, duration: 400 }}>
            <div
              in:slide={{ delay: 400 + i * 200, duration: 400 }}
              class="flex items-start gap-4 rounded-xl px-5 py-6"
              style={step.bg}
            >
              <span class={step.iconClasses}>
                <svelte:component
                  this={step.icon}
                  class="w-7 h-7 {step.icon === Repeat
                    ? 'text-secondary'
                    : 'text-primary'}"
                />
              </span>
              <div>
                <h3 class="text-xl font-bold text-gray-700">{step.title}</h3>
                <p class="text-gray-500 text-base">{step.text}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact CTA (reused component) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Need Help with Shipping or Returns?"
    description={`Our customer service team is here to help with any questions about shipping or returns.`}
    primaryButton={{
      label: 'Contact Us',
      href: '/contact',
      variant: 'primary',
      size: 'md',
    }}
    secondaryButton={{
      label: 'Email Support',
      href: 'mailto:support@ahmad.com',
      variant: 'outline',
      size: 'md',
    }}
  />
</main>

<style>
  /* Modern hover animation for Returns & Exchanges cards */
  .returns-cards-anim > div > div {
    transition:
      transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .returns-cards-anim > div > div:hover {
    transform: translateY(-4px) scale(1.035);
    box-shadow:
      0 8px 24px 0 rgba(80, 80, 110, 0.1),
      0 1.5px 4px 0 rgba(80, 80, 100, 0.08);
  }
</style>
