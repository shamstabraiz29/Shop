<script lang="ts">
  export let icon;
  export let title: string = '';
  export let subtitle: string = '';
  export let features: string[] = [];
  export let animateDelay = '0'; // ms delay, e.g. '150'
  export let borderClass: string = 'border-primary/90 hover:border-primary/70';
  export let iconBgClass: string = 'bg-linear-to-tr from-primary to-secondary';
  export let titleClass: string = 'text-primary';
  export let heightClass: string = 'min-h-[410px]';
  // iconWrapperClass kept for backward compatibility but not used in new design
  export let iconWrapperClass: string = 'shadow-xl border-4 border-white';

  // Extract border color from borderClass for subtle accent (backward compatibility)
  $: borderColorClass = borderClass.includes('primary')
    ? 'from-primary'
    : 'from-secondary';

  // Reference iconWrapperClass to satisfy linter (backward compatibility)
  $: _ = iconWrapperClass; // eslint-disable-line @typescript-eslint/no-unused-vars
</script>

<div
  class={`group w-full ${heightClass} rounded-3xl p-8 lg:p-10 flex flex-col items-center relative overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2`}
  style={`background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(173, 99, 68, 0.1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.5) inset;
          animation-delay: ${animateDelay}ms;`}
>
  <!-- Animated background gradient on hover -->
  <div
    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-3xl"
    style="background: linear-gradient(135deg, rgba(173, 99, 68, 0.03) 0%, rgba(89, 101, 82, 0.03) 100%);"
  ></div>

  <!-- Decorative corner accent -->
  <div
    class={`absolute top-0 right-0 w-24 h-24 ${iconBgClass} opacity-5 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700`}
  ></div>

  <!-- Icon container with modern design -->
  <div class="relative z-10 mb-6">
    <!-- Outer glow ring -->
    <div
      data-glow
      class={`absolute inset-0 ${iconBgClass} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
      style="transform: scale(1.2);"
    ></div>

    <!-- Main icon container -->
    <div
      class={`relative flex items-center justify-center w-24 h-24 rounded-2xl ${iconBgClass} shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3`}
      style="box-shadow: 0 10px 40px rgba(173, 99, 68, 0.3), 0 0 0 1px rgba(255,255,255,0.2) inset;"
    >
      <!-- Inner shine effect -->
      <div
        class="absolute inset-0 rounded-2xl opacity-20"
        style="background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%);"
      ></div>

      {#if icon}
        <svelte:component
          this={icon}
          class="w-10 h-10 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500"
        />
      {/if}
    </div>
  </div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col items-center flex-1 w-full">
    <h3
      class={`text-xl lg:text-2xl font-bold ${titleClass} mb-3 text-center group-hover:scale-105 transition-transform duration-300`}
      style="letter-spacing: -0.02em;"
    >
      {title}
    </h3>
    {#if subtitle}
      <p
        class="text-sm lg:text-base text-gray-600 font-medium mb-4 text-center"
        style="letter-spacing: 0.01em;"
      >
        {subtitle}
      </p>
    {/if}
    {#if features.length > 0}
      <ul class="space-y-2.5 w-full list-none pl-0 text-center">
        {#each features as feature}
          <li
            class="text-sm lg:text-base text-gray-700 font-normal leading-relaxed"
          >
            {feature}
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <!-- Bottom accent line -->
  <div
    class={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${borderColorClass} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center rounded-b-3xl opacity-60`}
  ></div>
</div>

<style>
  /* Subtle glow animation for the icon */
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

  .group:hover [data-glow] {
    animation: pulse-glow 2s ease-in-out infinite;
  }
</style>
