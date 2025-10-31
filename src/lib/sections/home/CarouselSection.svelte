<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Button } from '$lib';
  import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-svelte';

  // Import images
  import image1 from '$lib/assets/images/image1.jpg';
  import image2 from '$lib/assets/images/image2.jpg';
  import m1 from '$lib/assets/images/m-1.jpeg';

  // Carousel data with modern styling
  const slides = [
    {
      id: 1,
      image: image1,
      title: 'New Collection',
      subtitle: 'Spring 2025',
      description:
        "Discover the latest trends in women's fashion with our exclusive spring collection.",
      buttonText: 'Shop Now',
      buttonLink: '/women',
      gradient: 'from-pink-500/20 via-purple-500/20 to-rose-500/20',
      textGradient: 'from-pink-400 to-purple-400',
    },
    {
      id: 2,
      image: image2,
      title: "Men's Essentials",
      subtitle: 'Premium Quality',
      description:
        "Elevate your wardrobe with our carefully curated selection of men's clothing.",
      buttonText: 'Explore',
      buttonLink: '/men',
      gradient: 'from-blue-500/20 via-indigo-500/20 to-cyan-500/20',
      textGradient: 'from-blue-400 to-cyan-400',
    },
    {
      id: 3,
      image: image1,
      title: 'Summer Vibes',
      subtitle: 'Light & Fresh',
      description:
        'Stay cool and stylish with our summer collection designed for comfort and elegance.',
      buttonText: 'Shop Summer',
      buttonLink: '/women',
      gradient: 'from-yellow-500/20 via-orange-500/20 to-amber-500/20',
      textGradient: 'from-yellow-400 to-orange-400',
    },
    {
      id: 4,
      image: m1,
      title: 'Business Casual',
      subtitle: 'Professional Style',
      description:
        'Look sharp and professional with our business casual collection for the modern man.',
      buttonText: 'View Collection',
      buttonLink: '/men',
      gradient: 'from-slate-500/20 via-gray-500/20 to-zinc-500/20',
      textGradient: 'from-slate-400 to-gray-400',
    },
  ];

  let currentSlide = 0;
  let autoplayInterval: number;
  let isTransitioning = false;
  let isPlaying = true;
  let progress = 0;

  // Auto-play functionality
  onMount(() => {
    startAutoplay();
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  });

  onDestroy(() => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  });

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    progress = 0;
    autoplayInterval = setInterval(() => {
      progress += 1;
      if (progress >= 100) {
        nextSlide();
        progress = 0;
      }
    }, 50);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }

  function toggleAutoplay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }

  function goToSlide(index: number) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentSlide = index;
    progress = 0;
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentSlide = (currentSlide + 1) % slides.length;
    progress = 0;
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    progress = 0;
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  }
</script>

<!-- Modern Carousel Section -->
<section
  class="relative bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24 overflow-hidden"
>
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute inset-0"
      style="background-image: radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0); background-size: 20px 20px;"
    ></div>
  </div>

  <div class="mx-auto max-w-[75%] relative">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2
        class="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4"
      >
        Discover Our Collections
      </h2>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">
        Explore our curated selection of premium fashion pieces designed for the
        modern lifestyle
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="relative group">
      <!-- Slides Container -->
      <div
        class="relative h-[500px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-200/50"
      >
        {#each slides as slide, index (slide.id)}
          <div
            class="absolute inset-0 transition-all duration-800 ease-out transform {index ===
            currentSlide
              ? 'translate-x-0 opacity-100 z-10 scale-100'
              : index < currentSlide
                ? '-translate-x-full opacity-0 z-0 scale-95'
                : 'translate-x-full opacity-0 z-0 scale-95'}"
          >
            <!-- Background Image with Modern Overlay -->
            <div class="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <!-- Modern Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-br {slide.gradient}"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              ></div>
            </div>

            <!-- Content with Modern Typography -->
            <div class="relative z-10 h-full flex items-center">
              <div class="max-w-4xl px-8 sm:px-12 lg:px-16 xl:px-20 w-full">
                <div class="text-white space-y-6">
                  <!-- Subtitle with accent -->
                  <div
                    class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <span class="text-sm font-medium tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                  </div>

                  <!-- Main Title with Gradient -->
                  <h3
                    class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                  >
                    <span
                      class="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent"
                    >
                      {slide.title}
                    </span>
                  </h3>

                  <!-- Description -->
                  <p
                    class="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
                  >
                    {slide.description}
                  </p>

                  <!-- CTA Button -->
                  <div class="pt-4">
                    <Button variant="primary" href={slide.buttonLink} size="lg">
                      <span class="relative z-10">{slide.buttonText}</span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></div>
                      <span
                        class="relative z-10 group-hover:text-white transition-colors duration-300"
                      >
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Play/Pause Control -->
      <div class="absolute top-4 right-4 z-20">
        <button
          on:click={toggleAutoplay}
          class="group relative w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 rounded-full shadow-lg border border-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {#if isPlaying}
            <Pause
              size={16}
              class="group-hover:scale-110 transition-transform duration-200"
            />
          {:else}
            <Play
              size={16}
              class="group-hover:scale-110 transition-transform duration-200"
            />
          {/if}
        </button>
      </div>

      <!-- Modern Progress Indicator -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div
          class="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200/50"
        >
          {#each slides as slide, index (slide.id)}
            <button
              on:click={() => goToSlide(index)}
              class="relative w-3 h-3 rounded-full transition-all duration-300 {index ===
              currentSlide
                ? 'bg-slate-900 scale-125'
                : 'bg-slate-300 hover:bg-slate-400'}"
              aria-label="Go to slide {index + 1}"
            >
              {#if index === currentSlide}
                <div
                  class="absolute inset-0 rounded-full bg-primary animate-pulse"
                ></div>
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="absolute -bottom-2 left-0 right-0 h-1 bg-slate-200/50">
        <div
          class="h-full bg-gradient-to-r rounded-full from-primary to-secondary transition-all duration-50 ease-linear"
          style="width: {progress}%"
        ></div>
      </div>
    </div>
  </div>
</section>
