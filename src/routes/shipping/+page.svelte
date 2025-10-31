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
      iconBgClass: 'bg-linear-to-tr from-primary to-secondary',
      title: '30-Day Returns',
      text: 'Return for free within 30 days, unworn with tags attached.',
      borderColor: 'from-primary',
    },
    {
      icon: Repeat,
      iconBgClass: 'bg-linear-to-tr from-secondary to-primary',
      title: 'Easy Exchanges',
      text: 'Exchange size or color, fast & free—just let us know!',
      borderColor: 'from-secondary',
    },
    {
      icon: Wallet,
      iconBgClass: 'bg-linear-to-tr from-primary to-secondary',
      title: 'Refund Process',
      text: 'Refund issued to your card or as store credit within 5-7 business days.',
      borderColor: 'from-primary',
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
    <div class="relative mx-auto lg:max-w-[75%] max-w-[92%]">
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
      <div class="relative flex justify-center">
        <div class="relative max-w-2xl w-full">
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
                <h3 class="text-lg font-semibold text-gray-600 mb-1">
                  Shipped
                </h3>
                <p class="text-gray-600">
                  Your order is shipped and you'll receive tracking information
                  via email.
                </p>
              </div>
            </li>
            <li class="flex items-end relative">
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

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {#each returnsCards as card, i}
          <div
            in:fade={{ delay: 200 + i * 150, duration: 500 }}
            class="returns-card group"
          >
            <div
              in:slide={{ delay: 300 + i * 150, duration: 500 }}
              class="w-full h-full rounded-3xl p-6 lg:p-8 relative overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
                      backdrop-filter: blur(20px);
                      border: 1px solid rgba(173, 99, 68, 0.1);
                      box-shadow: 0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.5) inset;"
            >
              <!-- Animated background gradient on hover -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-3xl"
                style="background: linear-gradient(135deg, rgba(173, 99, 68, 0.03) 0%, rgba(89, 101, 82, 0.03) 100%);"
              ></div>

              <!-- Decorative corner accent -->
              <div
                class={`absolute top-0 right-0 w-20 h-20 ${card.iconBgClass} opacity-5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700`}
              ></div>

              <!-- Icon container -->
              <div class="relative z-10 mb-4">
                <!-- Outer glow ring -->
                <div
                  data-glow
                  class={`absolute inset-0 ${card.iconBgClass} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  style="transform: scale(1.2);"
                ></div>

                <!-- Main icon container -->
                <div
                  class={`relative flex items-center justify-center w-16 h-16 rounded-2xl ${card.iconBgClass} shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3`}
                  style="box-shadow: 0 10px 40px rgba(173, 99, 68, 0.3), 0 0 0 1px rgba(255,255,255,0.2) inset;"
                >
                  <!-- Inner shine effect -->
                  <div
                    class="absolute inset-0 rounded-2xl opacity-20"
                    style="background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%);"
                  ></div>

                  <svelte:component
                    this={card.icon}
                    class="w-8 h-8 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <!-- Content -->
              <div class="relative z-10 flex flex-col flex-1">
                <h3
                  class="text-lg lg:text-xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300"
                  style="letter-spacing: -0.02em;"
                >
                  {card.title}
                </h3>
                <p
                  class="text-xs lg:text-sm text-gray-700 font-normal leading-relaxed"
                  style="letter-spacing: 0.01em;"
                >
                  {card.text}
                </p>
              </div>

              <!-- Bottom accent line -->
              <div
                class={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${card.borderColor} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center rounded-b-3xl opacity-60`}
              ></div>
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
  /* Subtle glow animation for returns cards icons */
  @keyframes pulse-glow {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1.2);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.25);
    }
  }

  .returns-card.group:hover [data-glow] {
    animation: pulse-glow 2s ease-in-out infinite;
  }
</style>
