<script lang="ts">
  export let sectionClass: string =
    'py-20 lg:py-32 bg-linear-to-br from-gray-50 via-white to-secondary/10 relative overflow-hidden';
  export let containerClass: string =
    'relative z-10 max-w-7xl mx-auto px-6 lg:px-12';
  export let leftBlobClass: string =
    'h-48 w-48 bg-primary opacity-10 rounded-full blur-3xl absolute top-0 -left-20 animate-pulse';
  export let rightBlobClass: string =
    'h-96 w-96 bg-secondary opacity-10 rounded-full blur-3xl absolute bottom-0 -right-36 animate-pulse';
</script>

<section class={sectionClass}>
  <div class="absolute inset-0 pointer-events-none z-0">
    <div class={leftBlobClass}></div>
    <div class={rightBlobClass}></div>
  </div>
  <div class={containerClass}>
    <slot />
  </div>
</section>
