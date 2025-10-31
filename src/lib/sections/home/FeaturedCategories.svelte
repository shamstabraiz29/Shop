<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import m1 from '$lib/assets/images/m-1.jpeg';
  import w2 from '$lib/assets/images/w-2.jpeg';
  import w3 from '$lib/assets/images/w-3.jpeg';
  import w4 from '$lib/assets/images/w-4.jpeg';
  import bg1 from '$lib/assets/images/bg-1.jpg';
  import { Button } from '$lib';
  import SectionBadge from '$lib/components/SectionBadge.svelte';

  const arrivals = [
    {
      title: 'Elegant Lawn Dress',
      image: w2,
      href: '/shop',
      badge: 'NEW',
    },
    {
      title: 'Festive Pink Set',
      image: w4,
      href: '/shop',
      badge: 'HOT',
    },
    {
      title: 'Summer Classic Kurta',
      image: m1,
      href: '/shop',
      badge: 'EXCLUSIVE',
    },
    {
      title: 'Chic Maroon Suit',
      image: w3,
      href: '/shop',
      badge: 'TRENDING',
    },
  ];
</script>

<section class="relative py-16 lg:py-24 overflow-hidden sm:mx-0">
  <div class="relative z-10 max-w-[92%] lg:max-w-[75%] mx-auto">
    <div class="flex justify-center">
      <SectionBadge text="Featured" />
    </div>
    <h2
      class="text-5xl md:text-6xl font-black tracking-tight text-center mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary animate-gradient-move animate-heartbeat"
    >
      New Arrivals
    </h2>
    <div class="mx-auto max-w-xl text-center mb-12">
      <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
        Discover our latest styles crafted for comfort and elegance. Step into
        the season with bold and exclusive arrivals!
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {#each arrivals as item}
        <div class="relative group overflow-visible">
          <div class="absolute -top-3 -left-3 z-20">
            <span
              class="inline-block rounded-xl px-3 py-1 text-xs font-bold bg-primary text-white shadow-lg shadow-primary/20 animate-pulse"
            >
              {item.badge}
            </span>
          </div>
          <div
            class="transition-all duration-300 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-white/20 backdrop-blur-lg shadow-xl group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-white/90 ring-2 ring-transparent group-hover:ring-primary/30 flex flex-col items-center p-5 min-h-[400px]"
          >
            <ProductCard
              title={item.title}
              href={item.href}
              image={item.image}
            />
          </div>
        </div>
      {/each}
    </div>
    <div class="flex justify-center mt-12">
      <Button
        href="/shop"
        size="lg"
        variant="primary"
        className="shadow-xl px-12 py-4 text-lg"
      >
        Shop All New Arrivals
      </Button>
    </div>
  </div>
  <style>
    @keyframes underlineFadeIn {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 120px;
        opacity: 0.7;
      }
    }
    /* Smooth card hover shadow and lift */
    .group:hover .glass-card {
      box-shadow:
        0 32px 48px -12px #a5b4fc50,
        0 0px 16px 0 #e9d5ff50;
      transform: translateY(-6px) scale(1.04);
    }
    /* Make badges pop with bounce */
    .group:hover span[badge] {
      animation: badgeBounce 0.8s;
    }
    @keyframes badgeBounce {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.11) rotate(-5deg);
      }
    }
    /* Responsive min height for cards */
    @media (max-width: 640px) {
      .glass-card {
        min-height: 320px !important;
      }
    }
    @keyframes gradient-move {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
    .animate-gradient-move {
      animation: gradient-move 5s ease-in-out infinite alternate;
    }
    @keyframes heartbeat {
      0%,
      100% {
        transform: scale(1);
      }
      10%,
      30% {
        transform: scale(1.06);
      }
      20% {
        transform: scale(0.92);
      }
      40% {
        transform: scale(1.04);
      }
      50% {
        transform: scale(1);
      }
      60% {
        transform: scale(1.04);
      }
      70% {
        transform: scale(1.07);
      }
      80% {
        transform: scale(1);
      }
      90% {
        transform: scale(0.96);
      }
    }
    .animate-heartbeat {
      animation: heartbeat 1.45s cubic-bezier(0.08, 0.82, 0.17, 1) infinite;
    }
  </style>
</section>
