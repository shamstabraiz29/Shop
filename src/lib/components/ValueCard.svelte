<script lang="ts">
  export let title: string;
  export let description: string;
  export let Icon: any; // Svelte component from lucide-svelte
  export let borderClass: string = 'border-primary/90 hover:border-primary/70';
  export let iconBgClass: string = 'bg-linear-to-tr from-primary to-secondary';
  export let titleClass: string = 'text-primary';
  export let heightClass: string = 'min-h-[410px]';
  export let iconWrapperClass: string = 'shadow-xl border-4 border-white';
</script>

<div
  class={`group w-full bg-white/80 ${heightClass} rounded-2xl p-10 flex flex-col items-center shadow-xl hover:scale-105 hover:rotate-6 hover:shadow-2xl transition-all duration-500 relative border-t-4 ${borderClass}`}
>
  <div
    class={`mb-6 flex items-center justify-center w-20 h-20 rounded-full ${iconBgClass} ${iconWrapperClass} group-hover:rotate-6 transition-transform duration-300`}
  >
    {#if Icon}
      <svelte:component this={Icon} class="w-8 h-8 text-white" />
    {/if}
  </div>
  <h3 class={`text-2xl font-bold ${titleClass} mb-4 drop-shadow`}>{title}</h3>
  <p class="text-base text-gray-700 font-medium tracking-wide text-center">
    {description}
  </p>
</div>
