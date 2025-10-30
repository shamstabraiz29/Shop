<script lang="ts">
  export let icon;
  export let title: string = '';
  export let subtitle: string = '';
  export let features: string[] = [];
  export let animateDelay = '0'; // ms delay, e.g. '150'
  export let borderClass: string = 'border-primary/90 hover:border-primary/70';
  export let iconBgClass: string = 'bg-linear-to-tr from-primary to-secondary';
  export let titleClass: string = 'text-primary';
  export let heightClass: string = 'min-h-[300px]';
  export let iconWrapperClass: string = 'shadow-xl border-4 border-white';
</script>

<div
  class={`group w-full bg-gradient-to-br from-gray-50 to-gray-100 ${heightClass} rounded-2xl p-10 flex flex-col items-center shadow-xl hover:scale-105 hover:rotate-6 hover:shadow-2xl transition-all duration-500 relative border-t-4 ${borderClass}`}
  style={`animation-delay: ${animateDelay}ms;`}
>
  <div
    class={`mb-6 flex items-center justify-center w-20 h-20 rounded-full ${iconBgClass} ${iconWrapperClass} group-hover:rotate-6 transition-transform duration-300`}
  >
    {#if icon}
      <svelte:component
        this={icon}
        class="w-8 h-8 text-white transition-all duration-300 group-hover:drop-shadow-[0_2px_6px_rgba(80,80,80,0.2)]"
      />
    {/if}
  </div>
  <h3 class={`text-2xl font-bold ${titleClass} mb-4 drop-shadow`}>{title}</h3>
  {#if subtitle}
    <p
      class="text-base text-gray-700 font-medium tracking-wide text-center mb-4"
    >
      {subtitle}
    </p>
  {/if}
  {#if features.length > 0}
    <ul class="space-y-2 w-full list-disc pl-6">
      {#each features as feature}
        <li class="text-gray-700 text-base font-medium">{feature}</li>
      {/each}
    </ul>
  {/if}
</div>
