<script lang="ts">
  import { Button } from '$lib';
  import image1 from '$lib/assets/images/image1.jpg';
  import image2 from '$lib/assets/images/image2.jpg';
  // Hero section component for home page
</script>

<!-- Hero Section -->
<section
  class="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24"
>
  <div class="text-center max-w-7xl mx-auto px-6 lg:px-0">
    <h1 class="text-4xl lg:text-6xl font-bold text-secondary mb-6">
      Discover Your Style
    </h1>
    <p class="text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
      Explore our curated collection of fashion-forward clothing for men and
      women. Quality meets style in every piece.
    </p>

    <!-- Large Images Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Women's Image -->
      <div class="text-center">
        <div
          class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 mb-6"
        >
          <div class="aspect-[4/5] relative overflow-hidden">
            <img
              src={image1}
              alt="Women's Collection"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <Button
          variant="primary"
          href="/women"
          size="lg"
          className="mt-5"
          fixedWidth
        >
          Shop Women
        </Button>
      </div>
      <!-- Men's Image -->
      <div class="text-center">
        <div
          class="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 mb-6"
        >
          <div class="aspect-[4/5] relative overflow-hidden">
            <img
              src={image2}
              alt="Men's Collection"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <Button
          variant="secondary"
          href="/men"
          size="lg"
          className="mt-5"
          fixedWidth
        >
          Shop Men
        </Button>
      </div>
    </div>
  </div>
</section>
